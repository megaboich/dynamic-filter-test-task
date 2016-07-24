import { EnumDisplayMapping } from '../shared/enum.converter'

export enum FilterNodeType {
    and,
    or,
    equals,
    ask,
    value
}

export class FilterNode {
    type: FilterNodeType
    value: string
    parameters: FilterNode[]
}

export enum FilterUserInputType {
    enumlist,
    datetime,
}

export class FilterMetaInfo {
    configFieldName: string
    modelFieldName: string
    userInputType: FilterUserInputType

    constructor(configFieldName: string, modelFieldName: string, userInputType: FilterUserInputType) {
        this.configFieldName = configFieldName;
        this.modelFieldName = modelFieldName;
        this.userInputType = userInputType;
    }
}

export class EnumListFilterMetaInfo extends FilterMetaInfo {
    enumFilterMapping: EnumDisplayMapping[];
    enumConversionMapping: any;

    constructor(configFieldName: string, modelFieldName: string, enumFilterMapping: EnumDisplayMapping[], enumConversionMapping: any) {
        super(configFieldName, modelFieldName, FilterUserInputType.enumlist)

        this.enumFilterMapping = enumFilterMapping;
        this.enumConversionMapping = enumConversionMapping;
    }
}

export class FilterConfigModel {
    name: string
    filter: FilterNode
}
