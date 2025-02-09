const reverse = (string) => {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
};

let result = reverse("Aditya");
console.log(result);
