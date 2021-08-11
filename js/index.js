import { colors } from './app.js';
console.log(colors);


const refs = {
  bodyTheme: document.querySelector('body'),
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};

//Для генерации случайного числа (индекс элемента массива цветов)
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min); 
};

// Вешаю слушателя на кнопки
refs.start.addEventListener('click', startClick);
refs.stop.addEventListener('click', stopClick);

// цвет фона для body
function changeColor() {
    const randomColor = colors[randomIntegerFromInterval(0, colors.length-1)];
  refs.bodyTheme.style.backgroundColor = randomColor;
}

let timerId = null;

function startClick() {
    timerId = timerId ? timerId : setInterval(() => changeColor()
, 500)

 refs.stop.removeAttribute('disabled');
 refs.start.setAttribute('disabled', true);

 console.log('start');
 };
 
function stopClick() {
  clearInterval(timerId);
  refs.start.removeAttribute('disabled');
  refs.stop.setAttribute('disabled', true);
  console.log('stop');
}

