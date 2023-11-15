let flags = document.getElementById("flag");
let img;
let flagcou = document.getElementById("flag-cou")

flags.onchange = function () {

    flagcou.innerHTML = "";

    let selectedValue = flags.value;
    if (selectedValue == "palestine") {
        img = document.createElement('img');
        img.src = 'Flag_of_Palestine.svg.png';
        flagcou.appendChild(img);
        img.style.width = "300px"
    } else if (selectedValue === "Hamas") {
        img = document.createElement('img');
        img.src = 'Hamas_logo.png';
        flagcou.appendChild(img);
        img.style.width = "300px"
    } 
}
