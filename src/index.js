import './style.css';

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

function fibsRec(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
}

// console.log(fibs(8));
console.log(fibsRec(8));

// F3 = [0, 1, 1]
// F4 = [0, 1, 1, 2]
// F5 = [0, 1, 1, 2, 3]
// F6 = [0, 1, 1, 2, 3, 5]

// F3 = [F2, 1]
// F4 = [F3, 2]
// F5 = [F4, 3]
// F6 = [F5, 5]

// arr N = [arr(n - 1), Fib(n - 1)]
