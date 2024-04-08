// Sélectionne tous les éléments avec l'ID "box" dans le document HTML
const boxes = document.querySelectorAll("#box");

// Sélectionne l'élément <body> dans le document HTML
const body = document.body;

// Pour chaque élément avec l'ID "box"
boxes.forEach(box => {
    // Ajoute un écouteur d'événements qui se déclenche lorsque l'utilisateur clique sur l'élément "box"
    box.addEventListener('click', function() {
        // Vérifie si la classe 'active' est présente sur l'élément "box"
        const isActive = box.classList.contains('active');

        // Récupère les styles CSS appliqués à l'élément "box" cliqué
        const boxesCSS = window.getComputedStyle(box);
        // Récupère la valeur de la couleur de fond de l'élément "box"
        const cssValue = boxesCSS.getPropertyValue("background-color");
        // Sélectionne l'élément <span> enfant de l'élément "box"
        const spanElement = box.querySelector("span");
        // Sélectionne l'élément avec la classe "logo" enfant de l'élément "box"
        const logoElement = box.querySelector(".logo");

        // Si l'élément "box" est actif
        if (isActive) {
            // Supprime les styles appliqués lorsqu'il est actif
            box.style.boxShadow = "";
            box.style.transform = "";
            box.style.borderRadius = "";
            box.style.border = "";
            body.style.backgroundColor = "";
            spanElement.style.opacity = "0";
            logoElement.style.transform = "";
            logoElement.style.paddingTop = "50px";
        } else {
            // Applique les styles lorsque l'élément "box" n'est pas actif
            box.style.boxShadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px";
            box.style.transform = "scale(1.1, 1.1)";
            box.style.borderRadius = "10px";
            box.style.border = "1px solid white";
            body.style.setProperty("background-color", cssValue);
            spanElement.style.opacity = "100";
            logoElement.style.transform = "rotate(360deg)";
            logoElement.style.paddingTop = "0px";
        }

        // Ajoute ou supprime la classe 'active' à l'élément "box" pour changer son état
        box.classList.toggle('active');
    });
});