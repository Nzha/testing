import './style.css';

const array = [18, 6, 66, 44, 9, 22, 14];

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

const index = indexOfMinimum(array, 2);

console.log(
  `The index of the minimum value of the subarray starting at index 2 is ${index}.`
);

