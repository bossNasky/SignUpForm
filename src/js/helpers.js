const isEmpty = function (value) {
  return value.trim().length === 0;
};

const isInvalidEmail = function (email) {
  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return !email.match(validEmail);
};

const isInvalidPassword = function (password) {
  const min = 3;
  const max = 10;

  return password.length >= min && password.length <= max;
};

export { isEmpty, isInvalidEmail, isInvalidPassword };
