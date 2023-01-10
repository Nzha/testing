import './style.css';

function sumTo1(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

function sumTo2(n) {
  if (n === 1) {
    return n;
  }
  return n + sumTo2(n - 1);
}

function sumTo3(n) {
  return (n * (n + 1)) / 2;
}

function factorial(n) {
  return n !== 1 ? n * factorial(n - 1) : n;
}

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

// console.log(sumTo1(100));
// console.log(sumTo2(100));
// console.log(sumTo3(100));
// console.log(factorial(5));
console.log(fib(7));
