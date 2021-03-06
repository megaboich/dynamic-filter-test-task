import { FilterNode, FilterNodeType, FieldMetaInfo, EnumListMetaInfo, UserInputType } from './filter-config.model'
import { isNotEmptyArray, isNullOrEmptyString } from '../shared/utils'
import { EnumConverter } from '../shared/enum.converter'

export abstract class FilterInteraction {
    selectedValue: any
    fieldMetaInfo: FieldMetaInfo
}

export class FilterEnumListInteraction extends FilterInteraction {
    fieldMetaInfo: EnumListMetaInfo
}

export class FilterBox {
    name: string
    filterNode: FilterNode
    interactions: FilterInteraction[] = []
    meta: FieldMetaInfo[]
    filterApplied: boolean = false
    userInputActivated: boolean = false;
    filterFunction: (x: any) => boolean;
    hasEmptyInteractions: boolean = false;

    constructor(name: string, filterNode: FilterNode, meta: FieldMetaInfo[]) {
        this.name = name;
        this.filterNode = filterNode;
        this.meta = meta;
        this.buildInteractions(this.filterNode);
    }

    private buildInteractions(node: FilterNode): void {
        if (node.type == FilterNodeType.equals
            && node.parameters
            && node.parameters.length == 2
            && node.parameters[0].type == FilterNodeType.value
            && node.parameters[1].type == FilterNodeType.ask
        ) {
            let fieldName = node.parameters[0].value;
            // find corresponding meta
            let filterInfo = this.meta.find(m => m.configFieldName == fieldName);
            if (!filterInfo) {
                throw `Wrong configuration: cant find meta info for ${fieldName}`;
            }

            // create interaction object
            switch (filterInfo.userInputType) {
                case UserInputType.enumlist:
                    let interaction = new FilterEnumListInteraction();
                    interaction.selectedValue = null;
                    interaction.fieldMetaInfo = filterInfo as EnumListMetaInfo;
                    this.interactions.push(interaction);
                    break;
                default:
                    throw `Filter input type ${filterInfo.userInputType} is not supported`;
            }
        } else {
            if (isNotEmptyArray(node.parameters)) {
                node.parameters.forEach(x => this.buildInteractions(x));
            }
        }
    }

    resetFilterFuntion(): void {
        this.filterFunction = null;
        this.interactions.forEach(i => {
            i.selectedValue = null;
        })
    }

    initFilterFunction(): void {
        this.hasEmptyInteractions = false;
        if (this.interactions.find(i => i.selectedValue === null)) {
            this.hasEmptyInteractions = true;
            return;
        }

        let functionBody = this.getFunctionBody(this.filterNode);
        functionBody = `return (${functionBody})`;
        console.log('func', functionBody);
        let func = new Function('x', functionBody) as (obj: any) => boolean;
        this.filterFunction = func;
    }

    private getFunctionBody(node: FilterNode): string {
        switch (node.type) {
            case FilterNodeType.equals:
                let configFieldName = node.parameters[0].value;
                let meta = this.meta.find(m => m.configFieldName == configFieldName);
                let fieldName = meta.modelFieldName;
                let value = node.parameters[1].value;
                let contractvalue: any = null;
                if (node.parameters[1].type == FilterNodeType.ask) {
                    //update value using the interaction contracts
                    let contract = this.interactions.find(i => i.fieldMetaInfo.modelFieldName == meta.modelFieldName);
                    if (!contract) {
                        throw `Error: can't resolve interaction: ${meta.modelFieldName}`;
                    }
                    contractvalue = contract.selectedValue;
                }
                if (meta.userInputType == UserInputType.enumlist) {
                    let enummeta = meta as EnumListMetaInfo;
                    let valnumeric = contractvalue == null
                        ? enummeta.enumConverter.convertStringToEnum(value)
                        : contractvalue;
                    return `x.${fieldName} === ${valnumeric}`;
                }
                throw 'Not supported user input type';
            case FilterNodeType.and:
                {
                    if (node.parameters.length != 2) {
                        throw 'Config error: expect 2 parameters for AND node';
                    }
                    let left = this.getFunctionBody(node.parameters[0]);
                    let right = this.getFunctionBody(node.parameters[1]);
                    return `(${left}) && (${right})`;
                }
            case FilterNodeType.or:
                {
                    if (node.parameters.length != 2) {
                        throw 'Config error: expect 2 parameters for OR node';
                    }
                    let left = this.getFunctionBody(node.parameters[0]);
                    let right = this.getFunctionBody(node.parameters[1]);
                    return `(${left}) || (${right})`;
                }
        }
    }
}