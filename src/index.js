import './style.css';

const testArray = [7, 9, 4];

const swap = function (array, firstIndex, secondIndex) {
  const temp = array[firstIndex];

  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

swap(testArray, 0, 1);

console.log(testArray);
