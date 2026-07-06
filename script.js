const form = document.querySelector("#signup-form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const successMsg = document.querySelector("#successMsg");

function checkPasswordsMatch() {
  const mismatch =
    confirmPassword.value.length > 0 &&
    confirmPassword.value !== password.value;

  confirmPassword.classList.toggle("js-mismatch", mismatch);

  if (mismatch) {
    confirmPassword.setCustomValidity("Passwords do not match");
  } else {
    confirmPassword.setCustomValidity("");
  }
}

password.addEventListener("input", checkPasswordsMatch);
confirmPassword.addEventListener("input", checkPasswordsMatch);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkPasswordsMatch();

  if (form.checkValidity()) {
    successMsg.classList.add("is-visible");
    successMsg.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } else {
    form.reportValidity();
    successMsg.classList.remove("is-visible");
  }
});
