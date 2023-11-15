let changeColor = document.querySelector(".test");
changeColor.onmouseover = function () {
    changeColor.style.backgroundColor = 'red';
}
changeColor.onmouseout = function () {
    changeColor.style.backgroundColor = 'yellow';
}