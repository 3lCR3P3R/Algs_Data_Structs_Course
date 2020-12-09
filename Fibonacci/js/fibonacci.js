var allFib = (n) =>{
    for (let i = 0; i < n; i++) {
        console.log(`${i}: ${fib(i)}`);
    }
}

var fib = (n) => {
    if (n <= 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

console.log(allFib(5));