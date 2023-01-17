import './style.css';

const array = [22, 11, 99, 88, 9, 7, 42];

const swap = function (array, firstIndex, secondIndex) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

const indexOfMinimum = function (array, startIndex) {
  let minValue = array[startIndex];
  let minIndex = startIndex;

  for (let i = startIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
      minIndex = i;
    }
  }

  return minIndex;
};

const selectionSort = function (array) {
  let temp;

  for (let i = 0; i < array.length; i++) {
    temp = indexOfMinimum(array, i);
    swap(array, temp, i);
  }
};

selectionSort(array);

console.log(`Array after sorting:  ${array}`);
