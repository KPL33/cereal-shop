const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,50}$/;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default {
  emailRegex,
  passwordRegex,
};