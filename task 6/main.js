div = document.querySelector('div');

div.style.width = '250px';
div.style.height = '250px';

colors = [
    'red',
    'black',
    'blue',
]

setInterval(function(){
    div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}, 500);