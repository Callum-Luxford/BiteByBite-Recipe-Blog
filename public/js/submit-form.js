let addIngredientsBtn = document.getElementById("addIngredientsBtn");
let ingredientList = document.querySelector(".ingredientList");
let ingredientDiv = document.querySelectorAll(".ingredientDiv")[0];

addIngredientsBtn.addEventListener("click", () => {
  let newIngredient = ingredientDiv.cloneNode(true);
  let input = newIngredient.getElementsByTagName("input")[0];
  input.value = "";
  ingredientList.appendChild(newIngredient);
});

let alertMessageSuccess = document.querySelector(".alert__message-success");
let alertMessageError = document.querySelector(".alert__message-success");

let formSubmit = document.getElementById("submit-form");
let formSubmitBtn = document.getElementById("form-submit-btn");
formSubmit.addEventListener("submit", (e) => {
  alertMessageError.style.display = "none";
  alertMessageSuccess.style.display = "none";
});
