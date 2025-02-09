const vowels = "aeiouAEIOU";
let string = "Aditya Kumar Singh";
let count = 0;
for (const element of string) {
  if (vowels.includes(element)) count++;
}

console.log(count);
