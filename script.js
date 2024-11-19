//////////////////////Task Two /////////////////////////
let numbers = [2, 4, 6, 8, 10];
const total_sum = numbers.reduce(
  (prevValue, currentValue) => prevValue + currentValue,
  0
);
const avg = total_sum / numbers.length;
console.log("Total Sum: " + total_sum);
console.log("The Average is " + avg);

///////////////////// Task Three ////////////////////////

console.log(
  "............................................................................"
);
const arr = [
  "1",
  "2",
  "3",
  "4",
  "4",
  "3",
  "5",
  "6",
  "2",
  "20",
  "yazan",
  "Ahmad",
  "yazan",
  "10",
  "2",
  "15",
  "12",
  "15",
  "13",
  "14",
  "13",
];

function duplicate(array) {
  const uniqueValue = new Set(array);
  return [...uniqueValue];
}
const uniqueString = duplicate(arr);
console.log("Array after remove the elements: ");
console.log(uniqueString);
