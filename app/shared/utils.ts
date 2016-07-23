
export function isNullOrEmptyString(value: string): boolean {
    return !!(!value || value === '');
}

export function isNotEmptyString(value: string): boolean {
    return !!(value && value !== '');
}

export function isNotEmptyArray(value: any[]): boolean {
    return (value && value.length > 0);
}

export function assertNoUndefined(value: any[]): void {
    if (!value) return;
    value.forEach(x => {
        if (x === undefined) {
            throw "Value is undefined"
        }
    });
}

export function isNullOrEmptyObject(map) {
    if (!map) {
        return true;
    }
    for (let key in map) {
        if (map.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}