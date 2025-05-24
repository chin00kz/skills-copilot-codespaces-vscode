function calculateNumber(var1, var2) {
    if (var1 === undefined || var2 === undefined) {
        throw new Error("Both var1 and var2 must be defined");
    }
    return var1 + var2;
}