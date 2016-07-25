export class EnumDisplayMapping {
    enumValue: number
    displayName: string
}

export class EnumConverter {
    constructor(public mappingValueToEnum: any, public mappingEnumToDisplay: EnumDisplayMapping[]) {

    }

    convertStringToEnum(value: string): number {
        let converted = this.mappingValueToEnum[value];
        if (converted == undefined) {
            throw `Wrong configuration: can't map value ${value}`;
        }
        return converted;
    }

    convertToDisplayValue(value: number): string {
        let match = this.mappingEnumToDisplay.find(x => x.enumValue === value);
        if (match) {
            return match.displayName;
        }
        return "UNDEFINED";
    }
}