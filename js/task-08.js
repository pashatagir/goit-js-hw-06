const refs = {
  form: document.querySelector(".login-form"),
  inputEmail: document.querySelector("[type=email]"),
  inputPassword: document.querySelector("[type=password]"),
  btn: document.querySelector("[type=submit]"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const dataForm = {
    [refs.inputEmail.name]: refs.inputEmail.value,
    [refs.inputPassword.name]: refs.inputPassword.value,
  };
  if (refs.inputEmail.value && refs.inputPassword.value !== "") {
    console.log(dataForm);
    refs.form.reset();
  } else {
    alert("Всі поля повинні бути заповнені!");
  }
}
