export class EnumDisplayMapping {
    enumValue: number
    displayName: string
}

export class EnumConverter {
    static convertStringToEnum(value: string, mapping: any): number {
        let converted = mapping[value];
        if (!converted) {
            converted = mapping.default;
        }
        return converted;
    }

    static convertToDisplayValue(value: number, mapping: EnumDisplayMapping[]): string {
        let match = mapping.find(x => x.enumValue === value);
        if (match) {
            return match.displayName;
        }
        return "UNDEFINED";
    }
}