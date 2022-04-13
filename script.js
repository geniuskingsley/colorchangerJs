const box = document.getElementById('box');
box.addEventListener('click', () => {

    var colors = ['gold', 'black', 'yellow'];

    var randColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randColor;
});