// how to choose a button to change
const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
const colors = ['yellow', 'red', 'green', '#3b5098']

colorBtn.addEventListener('click', changeColor);

function changeColor() {
    let random = Math.floor(Math.random() * colors.length);
    bodyBcg.style.backgroundColor = colors[random];
}