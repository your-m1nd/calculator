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

//проверка поля Пол (не работает)
   function checkGender() {
    let inputGender = document.querySelector('input[name="gender"]');
    if (inputGender.checked) {

    }
    else {
        let spanName4 = document.getElementById('spanName4');
        spanName4.outerHTML = 'Пол не выбран';
    }
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
    let spanName5 = document.getElementById('spanName5');
        spanName5.outerHTML = 'Неверный формат пароля';
    let spanName6 = document.getElementById('spanName6');
    spanName6.outerHTML = 'Неверный формат пароля';
}
}


//let errors = [];

//function checkValidity(input) {
   // let validity = input.validity;
    
    //if (validity.valueMissing) {
      //  errors.push('Поле ' + input.placeholder + ' не заполнено'); }
        
    //if (validity.patternMismatch) {
      //  errors.push('Неверный формат заполнения');}
    //if (validity.rangeOverflow) {
    //    let max = getAttributeValue(input, 'max');
     //   errors.push('Максимальное значение не может быть больше, чем ' + max);
    //}
    //if (validity.rangeUnderflow) {
    //    let min = getAttributeValue(input, 'min');
     //   errors.push('Минимальное значение не может быть больше, чем ' + min);
   // }
   //     }

//function checkAll() {
   // errors = [];
   // let inputs = document.querySelectorAll('input');

    //for (let input of inputs) {
    //    checkValidity(input);
    //}

   //document.getElementById('errorsInfo').innerHTML = errors.join('. <br>');
//}


//пока не стоит галочка, нельзя нажать на кнопку отправки формы

function check() {
    var submit = document.getElementsByName('submit')[0];
    if (document.getElementById('politics').checked)
    submit.disabled = '';
    else
    submit.disabled = 'disabled';
    }

let form = document.forms.form;
let button = document.getElementsByTagName('button');

form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    form.reset();
  });


