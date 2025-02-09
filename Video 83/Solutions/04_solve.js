let password = "Aditya@2005";

const passwordValidator = (password) => {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  //   Regex Breakdown
  // ^ → Start of the string
  // (?=.*[A-Z]) → At least one uppercase letter
  // (?=.*[a-z]) → At least one lowercase letter
  // (?=.*\d) → At least one digit
  // (?=.*[\W_]) → At least one special character (\W matches any non-word character, _ is included explicitly)
  // [A-Za-z\d\W_]{8,} → Matches atleast 8 characters (letters, numbers, and special characters)
  // $ → End of the string
  return regex.test(password);
};

//Alternate
function isValidString(str) {
  if (str.length < 8) return false;

  let hasUpper = false,
    hasLower = false,
    hasDigit = false,
    hasSpecial = false;

  for (let char of str) {
    if (/[A-Z]/.test(char)) hasUpper = true;
    if (/[a-z]/.test(char)) hasLower = true;
    if (/\d/.test(char)) hasDigit = true;
    if (/[\W_]/.test(char)) hasSpecial = true;
  }

  return hasUpper && hasLower && hasDigit && hasSpecial;
}

console.log(passwordValidator(password));
console.log(isValidString(password));
