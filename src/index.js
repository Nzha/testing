import './style.css';

function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
}

// console.log(countDown(5));

function countDownRecursive(n) {
  console.log(n);
  return n !== 0 ? countDownRecursive(n - 1) : n;
}

countDownRecursive(8);
