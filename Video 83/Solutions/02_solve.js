let arr = [1, 2, 2, 3, 44, 54, 33, 44, 12, 2, 45];
let copy = [...arr];
arr[0] *= 2;
for (let index = 1; index < arr.length; index++) {
  if (arr[index] !== copy[index - 1]) {
    arr[index] *= 2;
  }
}
console.log(arr);
