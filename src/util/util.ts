import { LocationQueryValue } from "vue-router";

export const queryToString = (
    value: LocationQueryValue | LocationQueryValue[]
): string | undefined => {
    if (Array.isArray(value)) {
        return value[0] ?? undefined;
    }
    return value ?? undefined;
};

export const queryToNumber = (
    value: LocationQueryValue | LocationQueryValue[]
): number | undefined => {
    const stringValue = queryToString(value);
    if (stringValue && !isNaN(Number(stringValue))) {
        return Number(stringValue);
    }
    return undefined;
};

export const toDateStringFromString = (date: string | undefined): string => {
    if (date == undefined) return ""
    return date.split('T')[0];
}

export const toDateStringFromDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
}