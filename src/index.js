import './style.css';

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return (arr[arr.length - 1]) * productOfArray(arr.slice(0, -1))
}

const sixty = productOfArray([1, 2, 3, 10]);
console.log(sixty);
