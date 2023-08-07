export const RCSValidate = (rcs: string): boolean => {
    const expression: RegExp = /^(RCS\s)?([A-Z]{3,4})?\s?(\d{3}\s?\d{3}\s?\d{3})$/
    return expression.test(rcs);
}
