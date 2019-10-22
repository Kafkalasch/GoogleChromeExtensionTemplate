export const isUndefined = (obj: any) => {
    return typeof obj === "undefined";
};

export const isNull = (obj: any) => {
    return obj === null;
};

export const isDefined = (obj: any) => !isUndefined(obj);

export const isDefinedAndNotNull = (obj: any) => !isUndefinedOrNull(obj);

export const isNullOrUndefined = (obj: any) => isUndefinedOrNull(obj);

export const isUndefinedOrNull = (obj: any) => {
    return isUndefined(obj) || isNull(obj);
};

export const isFunction = (obj: any) => {
    // from https://stackoverflow.com/a/6000016/10251591
    return !!(obj && obj.constructor && obj.call && obj.apply);
};
