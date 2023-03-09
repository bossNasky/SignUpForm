import "./../css/style.css";

const emailValidator = function () {
  const form = document.querySelector(".newsletter");
  const emailInput = document.querySelector(".newsletter__input");
  const formError = document.querySelector(".newsletter__error");

  const emailValidation = function (email) {
    const validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.match(validEmail);
  };

  const successSendEmail = function () {
    form?.classList.remove("form-error");
    emailInput.value = "";
  };

  const showError = function (message) {
    formError.textContent = message;
    form?.classList.add("form-error");
  };

  form?.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const email = emailInput.value;

    if (!email) {
      return showError("Input can't be empty.");
    }

    if (!emailValidation(email)) {
      return showError("Input is invalid.");
    }

    successSendEmail();
  });
};

emailValidator();
