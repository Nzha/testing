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
  return n*(n+1)/2;
}

console.log(sumTo1(100));
console.log(sumTo2(100));
console.log(sumTo3(100));
