export const checkValidData = (email, password) => {
  // Check if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!email || !emailRegex.test(email)) {
    return "Please enter a valid email address.";
  }

  // Check if password is provided
  if (!password || !passwordRegex.test(password)) {
    return "Please enter a valid password.";
  }

  // If both checks pass, return null indicating no errors
  return null;
};

// Usage example:
// give me an example of accepted password here
