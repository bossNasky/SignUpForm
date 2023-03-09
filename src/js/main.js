import "./../css/style.css";
import { isEmpty, isInvalidEmail, isInvalidPassword } from "./helpers";

const initForm = function () {
  const formElement = document.querySelector(".form");
  const formInputs = document.querySelectorAll(".form__input");

  const formState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const showError = function (element, message) {
    const domElement = document.querySelector(`[name="${element}"]`);
    const parentElement = domElement.closest(".form__item");
    const errorContent = parentElement.querySelector("small");

    parentElement.classList.add("error");
    errorContent.textContent = message;
  };

  const showSuccess = function () {
    const formElements = document.querySelectorAll(".form__item");
    const errorElements = document.querySelectorAll("small");
    formElements.forEach((formElement) =>
      formElement.classList.remove("error")
    );
    errorElements.forEach((errorElement) => (errorElement.textContent = ""));
  };

  const clearInputs = function () {
    formInputs.forEach((formInput) => (formInput.value = ""));
  };

  const setInitialState = function () {
    for (const key of Object.keys(formState)) {
      formState[key] = "";
    }
  };

  const validateInputs = function () {
    const { email, password } = formState;
    const stateKeys = Object.keys(formState);
    let valid = true;

    stateKeys.forEach((key) => {
      if (formState.hasOwnProperty(key) && isEmpty(formState[key])) {
        valid = false;
        showError(key, "Input can't be empty!");
      }
    });

    if (email && isInvalidEmail(email)) {
      valid = false;
      return showError("email", "Email is invalid!");
    }

    if (password && !isInvalidPassword(password)) {
      valid = false;
      return showError(
        "password",
        "Password must have minimum 3 length and maximum 10"
      );
    }

    return valid;
  };

  formInputs.forEach((formInput) => {
    formInput.addEventListener("input", (ev) => {
      const target = ev.currentTarget;
      formState[target.name] = target.value;
    });
  });

  formElement?.addEventListener("submit", (ev) => {
    ev.preventDefault();
    if (!validateInputs()) return;

    showSuccess();
    clearInputs();
    setInitialState();
  });
};

initForm();
