let callback  = document.querySelector(".callback");
let popupContainer = document.querySelector(".popup-container");
let popupForm = document.querySelector(".popup-form");
let popupFormInput = popupForm.querySelectorAll("input");
let popupClose = popupForm.querySelector(".popup-close");

//Закрытие формы если кликнуть за ее пределы
popupContainer.addEventListener("click", event => {
  if(event.target.classList.value === "popup-container"){
    popupForm.style.display = "none";
    popupContainer.style.display = "none";
  }
});

//Открытие формы
callback.addEventListener("click", event => {
  event.preventDefault();
  
  popupContainer.style.display = "block";
  popupForm.style.display = "block";
});

//Закрытие формы при клике на кнопку закрытия
popupClose.addEventListener("click", function(event){
  popupContainer.style.display = "none";
  popupForm.style.display = "none";
});


//Проверка формы
let requiredInputs = popupForm.querySelectorAll("input#name, input#phone, input#personal");
let submit = popupForm.querySelector(".popup-form-submit");

function popupFormChecker(event){
  let inputValue = [];
    for (item of requiredInputs) {
      
      if(item.checked === true){
        inputValue.push(item.checked);
      }else{
        inputValue.push(item.value);
      }
      
      if (inputValue.includes("") || inputValue.includes(" ") || inputValue.includes("on")) {
        submit.disabled = true;
        submit.classList.add("disabled");
        break;
      } else {
        submit.disabled = false;
        submit.classList.remove("disabled");
      }
    }
}

for(item of requiredInputs){
  item.addEventListener("input", popupFormChecker);
}

//Проверка поля ввода телефона
let inputPhone = popupForm.querySelector("#phone");
let backupValue = "";
function popupFormPhoneCheck(event){
  let reg = [];
  reg = event.currentTarget.value.match(/[a-z,а-я]/i); //буквы попадают в reg[]
  if (reg) {
    event.currentTarget.value = backupValue;
  } else {
    backupValue = event.currentTarget.value;
  }
}

inputPhone.addEventListener("input", popupFormPhoneCheck);
