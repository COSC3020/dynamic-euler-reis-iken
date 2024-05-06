function e(n) {
    let eVal = 1;
    let factorialVal = 1;
    for (let i = 1; i <= n; i++) {
        factorialVal *= i;
        eVal += 1.0 / factorialVal;
    }
    return eVal;
}
