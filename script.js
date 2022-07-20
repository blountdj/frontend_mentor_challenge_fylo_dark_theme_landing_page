const btn = document.querySelector(".sign_up__container__form--btn");
const error = document.querySelector(".sign_up__container__form__error");
const emailInput = document.querySelector(".sign_up__container__form--email");
const checker = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function btnClick(e) {
  e.preventDefault();

  const email = document.querySelector(
    ".sign_up__container__form--email"
  ).value;

  if (email.match(checker) === null) {
    error.classList.add("active");
  } else {
    alert("Thank you, you will receive a confirmation email shortly!");
    emailInput.value = "";
  }
}

btn.addEventListener("click", btnClick);
emailInput.addEventListener("keydown", function (e) {
  error.classList.remove("active");
});
