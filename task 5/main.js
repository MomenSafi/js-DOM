var fontType = document.getElementById('font-type');
var fontSize = document.getElementById('font-size');
var italic = document.getElementById('italic');
var bold = document.getElementById('bold');
var underline = document.getElementById('underline');

var box = document.querySelector('.box');
fontType.addEventListener('change', function(){
    box.style.fontFamily = fontType.value;
});
fontSize.addEventListener('change', function(){
    box.style.fontSize = fontSize.value + 'px';
});
italic.addEventListener('change', function(){
    if(italic.checked){
        box.style.fontStyle = 'italic';
    }else{
        box.style.fontStyle = 'normal';
    }
});
bold.addEventListener('change', function(){
    if(bold.checked){
        box.style.fontWeight = 'bold';
    }else{
        box.style.fontWeight = 'normal';
    }
});
underline.addEventListener('change', function(){
    if(underline.checked){
        box.style.textDecoration = 'underline';
    }else{
        box.style.textDecoration = 'none';
    }

})