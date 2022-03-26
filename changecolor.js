const button = document.querySelector('a');
const body = document.querySelector('body');
const colors = ['red', 'green', 'blue', 'pink', 'purple', 'teal', 'orange', 'brown'];
button.addEventListener('click', change);
function change() {
    const colorIndex= parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
    console.log('working');
}