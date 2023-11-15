var btn = document.querySelector('.btn');
var hide = document.querySelector('.hide');
var bottom = document.querySelector('.bottom')
btn.addEventListener('click', function(){
    bottom.style.display = 'block';
})
hide.addEventListener('click', function(){
    bottom.style.display = 'none';
});
