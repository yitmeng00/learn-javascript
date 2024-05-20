function pthFactor(n, p) {
    const factor = [];

    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            factor.push(i);
        }
    }

    if (p > factor.length) {
        return 0;
    }

    return factor[p - 1];
}

console.log(pthFactor(5, 3));
