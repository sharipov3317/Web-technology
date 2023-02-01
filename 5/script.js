var phoneFieldCount = 1;
var boolV = 0;

function addInput(){
  if (phoneFieldCount < 3) {
    var newdiv = document.createElement('div');
    newdiv.innerHTML = "<br><input type='text' name='phone[]'> <input class='operator' type='button' value='-' onclick='removeInput(this);'>";
    document.getElementById('phone_fields').appendChild(newdiv);
    phoneFieldCount++;
  }
}

function removeInput(btn){
  btn.parentNode.remove();
  phoneFieldCount--;
}

function CheckIsCustomOption() {
  var customOpt = document.getElementById("customOpt");
  var opt = document.getElementById("opt");

  if (opt[opt.selectedIndex].value == 'customOption') {
    customOpt.style.visibility = 'visible';
  }
  else {
    customOpt.style.visibility = 'hidden';
  }
}

function CloseMsg() {
  msgBg.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == msgBg) {
    msgBg.style.display = "none";
  }
}

function ValidateCharString(str)  {
     var format = /^[^\\\/&]*$/;
     if (str.match(format)) {
       return true;
     }
     else {
       return false;
     }
}


function ValidatePhoneNum(phone) {
	if (phone.charAt(0) != '+'
        || phone.charAt(1) != 7
        || String(phone).length != 12)
		return false;
	return true;
}

function TestResults() {
   var name = document.getElementById("name").value;
   var surname = document.getElementById("surname").value;
  // var patr = document.getElementById("patr").value;   //Временно убираем чтобы работает pattern.
   var email = document.getElementById("email").value;//Проста надо убрать "email" и надо писать "age" потом работает без pattern.

   var boolFieldValid = ValidateCharString(name)
                      && ValidateCharString(surname)
                     // && ValidateCharString(patr) //Временно убираем чтобы работает pattern.
                      && !isNaN(email);            //Здесь тоже надо убрать "email" и надо писать "age".

   var phones = document.querySelectorAll('[name="phone[]"]');
   var phone = "";

   var opt = document.getElementById("opt");
   var sport = "";

   if (opt[opt.selectedIndex].value == 'customOption') {
     var customOpt = document.getElementById("customOpt");
     sport = customOpt.value;
         if (sport == "")
                 boolV = 1;
   }
   else {
       sport = opt[opt.selectedIndex].value;
   }

   for (let p of phones)
           if (!ValidatePhoneNum(p.value))
                 boolFieldValid = false;
if (boolV == 0)
{
   if (boolFieldValid == true) {
     var res = "<strong>Фамилия: </strong>" + surname + ", <br/>"
             + "<strong>Имя: </strong>" + name + ", <br/>"
            // + "<strong>Отчество: </strong>" + patr + ", <br/>" //Временно убираем чтобы работает pattern.
             + "<strong>Емаил: </strong>" + email + ", <br/>";  // Здесь надо убрать "Емаил" и надо писать "Возрасть" и надо убрать "email" и надо писать "age".
 

     res += "<strong>Вы выбрали эту комнату: </strong>" + sport;

     var i = 1;
     for (let p of phones) {
           phone = p.value;
       res += ", <br/> <strong>Ваш номер телефона:" + String(i) + ": </strong>" + phone;
       i++;
         }
     res += "<br/> <strong> Мы свяжемся с вами </strong>"
     results.innerHTML = "<p>" + res + "</p>";
     msgBg.style.display = 'block';
   }
   /*else { 
     results.innerHTML = "<p>" + "<strong>Произошла ошибка:</strong><br/>Проверьте свое имя и фамилию!<br/>Возраст должен быть числом!<br/>Проверьте свой номер телефона !\
  <br/></p>";
     msgBg.style.display = 'block';
    }*/
}
    else {
    results.innerHTML = "<p>" + "<strong><br/><br/></p>";
    msgBg.style.display = 'block'; 
    boolV = 0;
    }
}