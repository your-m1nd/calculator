//проверка поля Имя
let spanName1 = document.getElementById('spanName1');

function checkName(name) {
    if (name.length < 2) {
        inputName.classList.add('error');
        let spanName1 = document.getElementById('spanName1');
        spanName1.outerHTML = 'Имя введено неверно';}
  }

  //проверка поля email

function checkMail(email) {
    let inputEmail = document.getElementById('inputEmail');
    let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
if (inputEmail.value.match(mailFormat)) {
    return true;
}
else {
    inputEmail.classList.add('error');
    let spanName2 = document.getElementById('spanName2');
        spanName2.outerHTML = 'Неверный адрес эл. почты';
}
}

//проверка поля возраст

function checkAge(number) {
    let inputAge = document.getElementById('inputAge');
    let validity = inputAge.validity;
    if (validity.valueMissing) {
        let spanName3 = document.getElementById('spanName3');
        inputAge.classList.add('error');
        spanName3.outerHTML = 'Поле не заполнено';
    }
}

//проверка поля Пол 
   function checkGender() {
    let inputGender = document.getElementsByName('gender');
      if ((inputGender[0].checked == false) &&
      (inputGender[1].checked == false))  {
        valid = false;
        let spanName4 = document.getElementById('spanName4');
        spanName4.outerHTML = 'Пол не выбран';
      }
      }
    
//проверка Профессии

function checkProfession() {
let select = document.querySelector('profession');
let selectedValue = select.value;

//var selectedValue = select.options[select.selectedIndex].value;
//if (select.value = 'option-1') {
   // select.classList.add('error');
   // let spanName5 = document.getElementById('spanName5');
   // spanName5.outerHTML = 'Профессия не выбрана';
//}
}



//проверка пароля

function checkPassword(password) {
    let inputPassword = document.getElementById('inputPassword');
    let passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;
if (inputPassword.value.match(passwordFormat)) {
    return true;
}
else {
    inputPassword.classList.add('error');
    let spanName6 = document.getElementById('spanName6');
        spanName6.outerHTML = 'Неверный формат пароля';
    let spanName7 = document.getElementById('spanName7');
    spanName7.outerHTML = 'Неверный формат пароля';
}
}


//пока не стоит галочка, нельзя нажать на кнопку отправки формы
let submit = document.getElementById('submit');

function check() {
    if (document.getElementById('politics').checked)
    submit.disabled = '';
    else
    submit.disabled = 'disabled';
    }

submit.addEventListener('submit', function (evt) {
    evt.preventDefault();

    form.reset();
  });


