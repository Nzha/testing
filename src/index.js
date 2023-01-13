import './style.css';

// function fibs(n) {
//   const result = n <= 1 ? n : fibs(n - 1) + fibs(n - 2);
//   console.log(result);
//   return result;
// }

// const arr = [];

function fibs(n) {
  const arr = [];
  let a = 1;
  let b = 1;

  arr.push(0, a, b);

  for (let i = 3; i < n; i++) {
    const c = a + b;
    a = b;
    b = c;
    arr.push(b);
  }

  return arr;
}

console.log(fibs(9));
