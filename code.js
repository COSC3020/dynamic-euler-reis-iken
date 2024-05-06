function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function e(n) {
    let eValues = new Array(n + 1);
    eValues[0] = 1;
    for (let i = 1; i <= n; i++) {
        eValues[i] = eValues[i - 1] + 1.0 / factorial(i);
    }
    return eValues[n];
}
