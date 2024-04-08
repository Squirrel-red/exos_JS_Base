const yellow = document.querySelector(".yellow");
const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");

const identifier = document.querySelector('.identifier');


const mainContainer = document.getElementById('main-container');
const modelSquares = mainContainer.querySelectorAll('.square');

modelSquares.forEach(element => {

  element.addEventListener(('click'), () => {

    changeIdentifierColor(element);
  })
});

function changeIdentifierColor(element) {
  identifier.style.backgroundColor = getComputedStyle(element).backgroundColor;
  identifier.innerText = getComputedStyle(element).backgroundColor;
};