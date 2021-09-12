export const validation = (email, password, setError) => {
  let valid = true;
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.trim()) {
    if (re.test(email)) {
      setError((prev) => ({ ...prev, emailError: "" }));
    } else {
      setError((prev) => ({ ...prev, emailError: "Enter in Correct format" }));
      valid = false;
    }
  } else {
    setError((prev) => ({ ...prev, emailError: "Enter your Email" }));
    valid = false;
  }
  if (password.trim()) {
    setError((prev) => ({ ...prev, passwordError: "" }));
  } else {
    setError((prev) => ({ ...prev, passwordError: "Enter your password" }));
    valid = false;
  }

  return valid;
};
export const signUpValidation = (credentials, setError) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let valid = true;
    if (credentials.firstName.trim()) {
      setError((prev) => ({ ...prev, firstNameError: "" }));
    } else {
      setError((prev) => ({ ...prev, firstNameError: "Enter your first name" }));
      valid = false;
    }
    if (credentials.lastName.trim()) {
      setError((prev) => ({ ...prev, lastNameError: "" }));
    } else {
      setError((prev) => ({ ...prev, lastNameError: "Enter your last name" }));
      valid = false;
    }
    if (credentials.email.trim()) {
      if (re.test(credentials.email)) {
        setError((prev) => ({ ...prev, emailError: "" }));
      } else {
        setError((prev) => ({ ...prev, emailError: "Enter in Correct format" }));
        valid = false;
      }
    } else {
      setError((prev) => ({ ...prev, emailError: "Enter your email" }));
      valid = false;
    }
    if (credentials.password.trim()) {
      setError((prev) => ({ ...prev, passwordError: "" }));
    } else {
      setError((prev) => ({
        ...prev,
        passwordError: "Enter your password name",
      }));
      valid = false;
    }
    if (credentials.confirmPassword.trim()) {
      if (credentials.confirmPassword === credentials.password) {
        setError((prev) => ({ ...prev, confirmPasswordError: "" }));
      } else {
        setError((prev) => ({
          ...prev,
          confirmPasswordError: "password does not match",
        }));
        valid = false;
      }
    } else {
      setError((prev) => ({
        ...prev,
        confirmPasswordError: "Re enter password",
      }));
      valid = false;
    }
  
    return valid;
  };