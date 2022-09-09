export const minLength = (length, visible = true) => {
  return {
    isValid: (val) => val.length >= length,
    message: `At least ${length} characters`,
    visible,
  };
};
export const hasLetters = (visible = true) => {
  return {
    isValid: (val) => /[a-zA-Z]/.test(val),
    message: "At least one letter",
    visible,
  };
};
export const hasDigits = (visible = true) => {
  return {
    isValid: (val) => /\d/.test(val),
    message: "At least one digit",
    visible,
  };
};
export const isEmailValid = (visible = true) => {
  return {
    isValid: (val) => /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]+/.test(val),
    message: "Invalid email",
    visible,
  };
};
function checkUserAge(minimalAge, value) {
  const selectedDate = new Date(value);
  let dateToCompare = new Date();
  dateToCompare.setFullYear(dateToCompare.getFullYear() - minimalAge);
  return (
    !!value && selectedDate.getFullYear() > 1900 && selectedDate < dateToCompare
  );
}
export const isOldEnough = (minimalAgeInYears, visible = true) => {
  return {
    isValid: (val) => checkUserAge(minimalAgeInYears, val),
    message: `You should be minimum ${minimalAgeInYears} years old`,
    visible,
  };
};
