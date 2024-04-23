const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputConfirmPass = document.querySelector("#passwordconfirm");

const inputs = document.querySelectorAll("input");

const setError = (item, msg) => {
  const inputGroup = document.querySelector(".input-group");
  console.log("aq " + inputGroup);
};

document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((item) => {
    if (item.value === "") {
      item.parentElement.classList.remove("success");
      item.parentElement.classList.add("error");
      item.parentElement.querySelector(
        "small"
      ).innerHTML = `O campo ${item.name} é obrigatório`;
    } else {
      item.parentElement.classList.remove("error");
      item.parentElement.classList.add("success");
    }
  });
});
