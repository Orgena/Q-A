var button = document.querySelector(".submit"); /*تحديد اي عنصر كلاس او ايدي*/
var ul = document.getElementById('list'); /*تحديد اي عنصر ايدي فقط*/

ul.addEventListener('click', function () {
    'use strict';
    button.disabled = false;
    button.setAttribute('id', 'submit-enabled'); /*id تغيير الـ */
});

var options = document.querySelectorAll("input[type=radio]"); /*استهدف كل العناصر اللي ليها نفس الـخاصية*/
var li = document.getElementsByTagName("li"); /*نقوم باستهدام العناصر حسب اسمها  */
var modal = document.getElementById("overlay");
var correctAnswer = 0;
var modaElements = document.getElementById("modal-elements");

button.addEventListener('click', function () {
    'use strict';
    if (options[correctAnswer].checked === true) {
        li[correctAnswer].classList.add("correct");
            // قم باضافة كلاس بهذا الاسم بفتح النافذة المنبثقة الخاصة بالجواب الصحيح
        modal.style.display = "block";
        modaElements.style.background = "url(https://classroom.udacity.com/images/correct-illustration-ceea2.svg) no-repeat center top";
        modaElements.style.color = "#02ccba";
    } else {
        modal.style.display = "block";
        modaElements.style.background = "url(https://classroom.udacity.com/images/wrong-illustration-0df77.svg) no-repeat center top";
        modaElements.style.color = "#f65d44";
        modaElements.textContent = "Try Again!";
        li[correctAnswer].classList.remove("correct");
    }
});

window.addEventListener('click', function () {
    'use strict';
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
