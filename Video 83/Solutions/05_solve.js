let arr = [1, 23, 12, 44, -23, 67];
let sum = 0;
for (const element of arr) {
  if (element >= 0) sum += element;
  else break;
}

console.log(sum);
