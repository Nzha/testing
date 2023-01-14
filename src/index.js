import './style.css';

function fibs(n) {
  const arr = [];

  let a = 1;
  let b = 1;

  arr.push(0, 1, 1);

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
// console.log(fibsRec(8));

// A3 = [0, 1, 1]
// A4 = [0, 1, 1, 2]
// A5 = [0, 1, 1, 2, 3]
// A6 = [0, 1, 1, 2, 3, 5]

// A3 = [A2, 1]
// A4 = [A3, 2]
// A5 = [A4, 3]
// A6 = [A5, 5]

// arr N = [arr(n - 1), F(n - 1)]
// F(n - 1) = F(n - 2) + F(n - 3)
