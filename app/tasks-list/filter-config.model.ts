import { EnumConverter, EnumDisplayMapping } from '../shared/enum.converter'

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

export class FilterConfigModel {
    name: string
    filter: FilterNode
}

export enum UserInputType {
    enumlist,
    datetime,
}

export class FieldMetaInfo {
    configFieldName: string
    modelFieldName: string
    userInputType: UserInputType

    constructor(configFieldName: string, modelFieldName: string, userInputType: UserInputType) {
        this.configFieldName = configFieldName;
        this.modelFieldName = modelFieldName;
        this.userInputType = userInputType;
    }
}

export class EnumListMetaInfo extends FieldMetaInfo {
    enumConverter: EnumConverter;

    constructor(configFieldName: string, modelFieldName: string, enumConverter: EnumConverter) {
        super(configFieldName, modelFieldName, UserInputType.enumlist)

        this.enumConverter = enumConverter;
    }
}

