const arr = [1, 3, 6, 2, 4];
//map
//create an array with double the number of the arr

//by normal method
let doubleArr = [];
for (let i = 0; i < arr.length; i++) {
  doubleArr.push(arr[i] * 2);
}
console.log(doubleArr);

//by using map
function double(x) {
  return x * 2;
}
const dubleNumArr = arr.map(double);

console.log(dubleNumArr);
//or
const doubleNumArr = arr.map((x) => x * 2);
console.log(doubleNumArr);
