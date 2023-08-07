export const sirenValidate = (email: string): boolean => {
    const expression: RegExp = /(\d{9}|\d{3}[ ]\d{3}[ ]\d{3})/g;
    return expression.test(email);
}
