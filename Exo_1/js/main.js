//document.querySelector(".carre").addEventListener("click", function(){
//    alert("Class : carre \n-Background color : aqua \n-Color : blueViolet \n-Height : 200 \n-Width : 200 \n-Display : flex \n -Display : 'Times New Roman' (40px)")
//})

// Sélectionne l'élément avec la classe "carre" dans le document HTML
const box = document.querySelector(".carre");

// Récupère les styles CSS appliqués à l'élément sélectionné
const boxCSS = window.getComputedStyle(box);

// Ajoute un écouteur d'événements qui se déclenche lorsque l'utilisateur clique sur l'élément "box"
box.addEventListener('click', function() {
    // Affiche une boîte de dialogue avec les informations sur les styles de l'élément "box"
    alert(
        "Class : " +
        box.className + // Affiche la classe de l'élément "box"
        "\n - Background color : " +
        boxCSS.getPropertyValue("background-color") + // Affiche la couleur de fond de l'élément "box"
        "\n - Color : " +
        boxCSS.getPropertyValue("color") + // Affiche la couleur du texte de l'élément "box"
        "\n - Height : " +
        boxCSS.getPropertyValue("height") + // Affiche la hauteur de l'élément "box"
        "\n - Width : " +
        boxCSS.getPropertyValue("width") + // Affiche la largeur de l'élément "box"
        "\n - Display : " +
        boxCSS.getPropertyValue("display") + // Affiche le style d'affichage de l'élément "box"
        "\n - Font Family : " +
        boxCSS.getPropertyValue("font-family") + // Affiche la police de caractères de l'élément "box"
        "\n - Font Size : " +
        boxCSS.getPropertyValue("font-size") // Affiche la taille de la police de caractères de l'élément "box"
    );
});