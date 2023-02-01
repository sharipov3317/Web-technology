document.addEventListener('DOMContentLoaded', function () {

    if (ExistencePicture_1 == "Yes")
        vopros_1 = vopros_1 + "<img src='./car.jpg' class='rounded mx-auto d-block' width='250px' height='250px'><br>";

    if (ExistencePicture_2 == "Yes")       
        vopros_2 = vopros_2 + "<img src='./car.jpg' class='rounded mx-auto d-block' width='250px' height='250px'><br>";

    if (ExistencePicture_3 == "Yes")
        vopros_3 = vopros_3 + "<img src='./car.jpg' class='rounded mx-auto d-block' width='250px' height='250px'><br>";

    if (ExistencePicture_4 == "Yes")
        vopros_4 = vopros_4 + "<img src='./car.jpg' class='rounded mx-auto d-block' width='250px' height='250px'><br>";

    if (ExistencePicture_5 == "Yes")
        vopros_5 = vopros_5 + "<img src='./big.c.jpg' class='rounded mx-auto d-block' width='250px' height='250px'><br>";

    if (ExistencePicture_6 == "Yes")
        vopros_6 = vopros_6 + "<img src='./big.c.jpg' class='rounded mx-auto d-block' width='250px' height='250px'><br>";


    Questions = [[vopros_1, CorrectAnswer_1], [vopros_2, CorrectAnswer_2], [vopros_3, CorrectAnswer_3], [vopros_4, CorrectAnswer_4], [vopros_5, CorrectAnswer_5], [vopros_6, CorrectAnswer_6]];

    document.getElementById('Question1').innerHTML = Questions[0][0];
    document.getElementById('Question2').innerHTML = Questions[1][0];
    document.getElementById('Question3').innerHTML = Questions[2][0];
    document.getElementById('Question4').innerHTML = Questions[3][0];
    document.getElementById('Question5').innerHTML = Questions[4][0];
    document.getElementById('Question6').innerHTML = Questions[5][0];
    document.getElementById('Tema').innerHTML = test;

    var select = document.getElementById("z_3");
    var options = Array;
    for (var i = 0; i < options.length; i++) {
        var item = options[i];
        var addItem = document.createElement("option");
        addItem.textContent = item;
        addItem.value = item;
        select.appendChild(addItem);
    }

    document.getElementById('radio1').innerHTML = OptionAnswer1;
    document.getElementById('radio2').innerHTML = OptionAnswer2;
    document.getElementById('radio3').innerHTML = OptionAnswer3;
    document.getElementById('radio4').innerHTML = OptionAnswer4;

    document.getElementById('checkbox1').innerHTML = CheckboxOptionAnswer1;
    document.getElementById('checkbox2').innerHTML = CheckboxOptionAnswer2;
    document.getElementById('checkbox3').innerHTML = CheckboxOptionAnswer3;
    document.getElementById('checkbox4').innerHTML = CheckboxOptionAnswer4;

    document.getElementById('tr1_td1').innerHTML = tr1_1;
    document.getElementById('tr1_td2').innerHTML = tr1_2;
    document.getElementById('tr2_td1').innerHTML = tr2_1;
    document.getElementById('tr2_td2').innerHTML = tr2_2;
    document.getElementById('tr3_td1').innerHTML = tr3_1;
    document.getElementById('tr3_td2').innerHTML = tr3_2;

});

function Next() {
    if (document.getElementById('QuestionWindow5').style.display == "block") {
        document.getElementById('QuestionWindow5').style.display = "none";
        document.getElementById('QuestionWindow6').style.display = "block";
        document.getElementById('next').style.display = "none";
        document.getElementById('check').style.display = "block";
    }

    if (document.getElementById('QuestionWindow4').style.display == "block") {
        document.getElementById('QuestionWindow4').style.display = "none";
        document.getElementById('QuestionWindow5').style.display = "block";
    }

    if (document.getElementById('QuestionWindow3').style.display == "block") {
        document.getElementById('QuestionWindow3').style.display = "none";
        document.getElementById('QuestionWindow4').style.display = "block";
    }

    if (document.getElementById('QuestionWindow2').style.display == "block") {
        document.getElementById('QuestionWindow2').style.display = "none";
        document.getElementById('QuestionWindow3').style.display = "block";
    }

    if (document.getElementById('QuestionWindow1').style.display == "block") {
        document.getElementById('QuestionWindow1').style.display = "none";
        document.getElementById('QuestionWindow2').style.display = "block";
    }
}

function Check() {
    otv_uch_1 = document.getElementById('z_1').value;
    otv_ucgenika_1 = otv_uch_1; 

    otv_uch_2 = document.getElementById('z_2').value;
    otv_ucgenika_2 = otv_uch_2;

    otv_uch_3 = document.getElementById('z_3').value;
    otv_ucgenika_3 = otv_uch_3;
    

    const selected = document.querySelector('input[name="radio"]:checked').value;
    otv_uch_4 = selected
    if (document.querySelector('input[name="radio"]:checked').value == 1)
        otv_ucgenika_4 = OptionAnswer1;
    if (document.querySelector('input[name="radio"]:checked').value == 2)
        otv_ucgenika_4 = OptionAnswer2;
    if (document.querySelector('input[name="radio"]:checked').value == 3)
        otv_ucgenika_4 = OptionAnswer3;
    if (document.querySelector('input[name="radio"]:checked').value == 4)
        otv_ucgenika_4 = OptionAnswer4;


    var checkboxTest = document.getElementsByName('b');
    var paramTest = true;
    for (var i = 0; i < 2; i++) {
        if (checkboxTest[i].checked) {
            paramTest = false;
            break;
        }
    }
    var selected2 = document.getElementsByName('b');

    if (selected2[0].checked) {
        otv_uch_5 = "1";
        otv_ucgenika_5 = CheckboxOptionAnswer1;
    }
    else if (selected2[1].checked) {
        otv_uch_5 = "2";
        otv_ucgenika_5 = CheckboxOptionAnswer2;
    }
    else if (selected2[2].checked) {
        otv_uch_5 = "3";
        otv_ucgenika_5 = CheckboxOptionAnswer3;
    }
    else if (selected2[3].checked) {
        otv_uch_5 = "4";
        otv_ucgenika_5 = CheckboxOptionAnswer4;
    }
    else {
        otv_uch_5 = ""; 
        otv_ucgenika_5 = otv_uch_5;
    }

    if (selected2[0].checked && selected2[3].checked){
        otv_uch_5 = "12";
        otv_ucgenika_5 = CheckboxOptionAnswer1+' '+CheckboxOptionAnswer4;
    }

    if (selected2[2].checked && selected2[3].checked){
        otv_uch_5 = "34";
        otv_ucgenika_5 = CheckboxOptionAnswer3+' '+CheckboxOptionAnswer4;
    }

    if (selected2[1].checked && selected2[2].checked){
        otv_uch_5 = "23";
        otv_ucgenika_5 = CheckboxOptionAnswer2+' '+CheckboxOptionAnswer3;
    }

    if (selected2[0].checked && selected2[2].checked){
        otv_uch_5 = "13";
        otv_ucgenika_5 = CheckboxOptionAnswer1+' '+CheckboxOptionAnswer3;
    }

    if (selected2[0].checked && selected2[1].checked){
        otv_uch_5 = "12";
        otv_ucgenika_5 = CheckboxOptionAnswer1+' '+CheckboxOptionAnswer2;
    }

    if (selected2[0].checked && selected2[1].checked && selected2[3].checked){
        otv_uch_5 = "124";
        otv_ucgenika_5 = CheckboxOptionAnswer1+' '+CheckboxOptionAnswer2+' '+CheckboxOptionAnswer4;
    }

    if (selected2[0].checked && selected2[2].checked && selected2[3].checked){
        otv_uch_5 = "134";
        otv_ucgenika_5 = CheckboxOptionAnswer1+' '+CheckboxOptionAnswer3+' '+CheckboxOptionAnswer4;
    }

    if (selected2[0].checked && selected2[1].checked && selected2[2].checked){
        otv_uch_5 = "123";
        otv_ucgenika_5 = CheckboxOptionAnswer1+' '+CheckboxOptionAnswer2+' '+CheckboxOptionAnswer3;
    }

    if (selected2[0].checked && selected2[1].checked && selected2[2].checked && selected2[3].checked){
        otv_uch_5 = "1234";
        otv_ucgenika_5 = CheckboxOptionAnswer1+' '+CheckboxOptionAnswer2+' '+CheckboxOptionAnswer3+' '+CheckboxOptionAnswer4;
    }

    otv_uch_6 = document.getElementById('z_6').value;
    otv_ucgenika_6 = otv_uch_6;

    ball = 0;
    document.getElementById('QuestionWindow6').style.display = "none";
    document.getElementById('check').style.display = "none";
    document.getElementById('name_test').style.display = "none";
    otveti = "<table class='table'><tr class='table-active'><td>№</td><td>Вопрос</td><td>Ответ</td></tr>";
   
    if (otv_uch_1 == Questions[0][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>1</td><td>" + Questions[0][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_1 + "</td></tr>";
    } else
        otveti += "<tr class='table-danger'><td>1</td><td>" + Questions[0][0] + "</td><td>Вы ответили неверно. Ваш ответ: " + otv_ucgenika_1 + "</td></tr>";

    if (otv_uch_2 == Questions[1][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>2</td><td>" + Questions[1][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_2 + "</td></tr>";
    } else
        otveti += "<tr class='table-danger'><td>2</td><td>" + Questions[1][0] + "</td><td>Вы ответили неверно. Ваш ответ: " + otv_ucgenika_2 + "</td></tr>";

    if (otv_uch_3 == Questions[2][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>3</td><td>" + Questions[2][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_3 + "</td></tr>";
    } else
        otveti += "<tr class='table-danger'><td>3</td><td>" + Questions[2][0] + "</td><td>Вы ответили неверно. Ваш ответ: " + otv_ucgenika_3 + "</td></tr>";

    if (otv_uch_4 == Questions[3][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>4</td><td>" + Questions[3][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_4 + "</td></tr>";
    } else
        otveti += "<tr class='table-danger'><td>4</td><td>" + Questions[3][0] + "</td><td>Вы ответили неверно. Ваш ответ: " + otv_ucgenika_4 + "</td></tr>";

    if (otv_uch_5 == Questions[4][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>5</td><td>" + Questions[4][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_5 + "</td></tr>";
    } else
        otveti += "<tr class='table-danger'><td>5</td><td>" + Questions[4][0] + "</td><td>Вы ответили неверно. Выбранные вами варианты ответа: " + otv_ucgenika_5 + "</td></tr>";

    if (otv_uch_6 == Questions[5][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>6</td><td>" + Questions[5][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_6 + "</td></tr></table>";
    } else
        otveti += "<tr class='table-danger'><td>6</td><td>" + Questions[5][0] + "</td><td>Вы ответили неверно. Ваш ответ: " + otv_ucgenika_6 + "</td></tr></table>";

    Count = 6;
    Percent = ball / Count * 100;
    Percent = Percent.toFixed();
    document.getElementById('Rezult').innerHTML = "<p style='font-weight:bold;'>'<span id='Tema2'></span>'.</p><span id='ot'>Задания выполнены верно на " + Percent + "%.</span><br><div class='progress'><div class='progress-bar' role='progressbar' style='width: " + Percent + "%' aria-valuenow='" + Percent + "' aria-valuemin='0' aria-valuemax='100'></div></div><br>" + otveti;
    document.getElementById('Tema2').innerHTML = test;                        
}