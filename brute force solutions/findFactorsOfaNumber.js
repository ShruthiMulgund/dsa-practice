let n = 19, arr = []

for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
        arr.push(i)
        if (n / i != i) {
            arr.push(n / i)
        }

    }
}
arr.sort((a, b) => a - b)

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
