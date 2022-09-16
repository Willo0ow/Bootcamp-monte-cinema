export interface ValidationRule {
  isValid: (val: string) => boolean;
  message: string;
  visible?: boolean;
}

export const minLength = (length: number, visible = true): ValidationRule => {
  return {
    isValid: (val: string) => val.length >= length,
    message: `At least ${length} characters`,
    visible,
  };
};
export const hasLetters = (visible = true): ValidationRule => {
  return {
    isValid: (val: string) => /[a-zA-Z]/.test(val),
    message: "At least one letter",
    visible,
  };
};
export const hasDigits = (visible = true): ValidationRule => {
  return {
    isValid: (val: string) => /\d/.test(val),
    message: "At least one digit",
    visible,
  };
};
export const isEmailValid = (visible = true): ValidationRule => {
  return {
    isValid: (val: string) =>
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]+/.test(val),
    message: "Invalid email",
    visible,
  };
};
function checkUserAge(minimalAge: number, value: string) {
  const selectedDate = new Date(value);
  const dateToCompare = new Date();
  dateToCompare.setFullYear(dateToCompare.getFullYear() - minimalAge);
  return (
    !!value && selectedDate.getFullYear() > 1900 && selectedDate < dateToCompare
  );
}
export const isOldEnough = (
  minimalAgeInYears: number,
  visible = true
): ValidationRule => {
  return {
    isValid: (val: string) => checkUserAge(minimalAgeInYears, val),
    message: `You should be minimum ${minimalAgeInYears} years old`,
    visible,
  };
};
