import { FilterNode, FilterNodeType, FilterMetaInfo, EnumListFilterMetaInfo, FilterUserInputType } from './filter-config.model'
import { isNotEmptyArray } from '../shared/utils'
import { EnumConverter } from '../shared/enum.converter'

export class FilterBox {
    name: string
    filterNode: FilterNode
    interactions: FilterInteraction[] = []
    meta: FilterMetaInfo[]
    activated: boolean = false

    constructor(name: string, filterNode: FilterNode, meta: FilterMetaInfo[]) {
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
                case FilterUserInputType.enumlist:
                    let interaction = new FilterEnumListInteraction();
                    interaction.modelFieldName = filterInfo.modelFieldName;
                    interaction.selectedValue = null;
                    interaction.filterInfo = filterInfo as EnumListFilterMetaInfo;
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

    getFilterFunction(): (obj: any) => boolean {
        if (isNotEmptyArray(this.interactions)) {
            throw 'Not implemented yet';
        }

        let functionBody = this.getFunctionBody(this.filterNode);
        functionBody = `return (${functionBody})`;
        console.log('func', functionBody);
        let func = new Function('x', functionBody) as (obj: any) => boolean;
        return func;
    }

    private getFunctionBody(node: FilterNode): string {
        switch (node.type) {
            case FilterNodeType.equals:
                let configFieldName = node.parameters[0].value;
                let meta = this.meta.find(m => m.configFieldName == configFieldName);
                let fieldName = meta.modelFieldName;
                let value = node.parameters[1].value;
                if (meta.userInputType == FilterUserInputType.enumlist) {
                    let enummeta = meta as EnumListFilterMetaInfo;
                    let valnumeric = EnumConverter.convertStringToEnum(value, enummeta.enumConversionMapping);
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

export abstract class FilterInteraction {
    modelFieldName: string
    selectedValue: string
    filterInfo: FilterMetaInfo
}

export class FilterEnumListInteraction extends FilterInteraction {
    filterInfo: EnumListFilterMetaInfo
}