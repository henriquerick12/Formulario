const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputConfirmPass = document.querySelector("#passwordconfirm");

const inputs = document.querySelectorAll("input");

const setError = (item, msg) => {
  item.parentElement.classList.remove("success");
  item.parentElement.classList.add("error");
  item.parentElement.querySelector("small").innerHTML = msg;
};

document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((item) => {
    if (item.value === "") {
      setError(item, `O campo é obrigatorio`);
    } else {
      item.parentElement.classList.remove("error");
      item.parentElement.classList.add("success");
    }
  });
});
