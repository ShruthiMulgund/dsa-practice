function findFactors(n) {

    let arr = []
    for (let i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            arr.push(i)
            if (n / i != i) {
                arr.push(n / i)
            }

        }
    }

    return arr;
}

let n = 19, a = [], prime
for (let i = 2; i <= n; i++) {
    a = findFactors(i)
    prime = a.length == 2 && a.every(ele => ele == 1 || ele == i)
    if (prime) {
        console.log(i);

    }
}
