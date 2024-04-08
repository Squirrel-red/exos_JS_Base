const box = document.querySelector(".block_1");
const boxes = document.querySelectorAll(".block_1");
const carre_5 = document.querySelector(".block_2");

boxes.forEach((box) =>{
    box.addEventListener("click", function(){
        box.classList.toggle("active");
        const boxCSS = window.getComputedStyle(box);
        const cssValue = boxCSS.getPropertyValue("background-color", " ajouter le code ici " );
        carre_5.style.setProperty('background-color', cssValue);
        carre_5.innerHTML = cssValue;
    })
})

console.log()