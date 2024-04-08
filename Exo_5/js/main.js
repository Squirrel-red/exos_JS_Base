// Sélectionne l'élément avec la classe "quotes" dans le document HTML
const quoteParent = document.querySelector(".quotes");

// Pour chaque citation dans la liste "quotes"
quotes.forEach((quote) => {
  // Crée un conteneur pour chaque citation
  const quoteContainer = document.createElement("div");
  quoteContainer.classList.add("quoteContainer");

  // Crée des éléments pour le titre, le contenu et l'auteur de la citation
  const titleElement = document.createElement("h2");
  const contentElement = document.createElement("p");
  const authorElement = document.createElement("p");
  const heartIcon = document.createElement("i");

  // Assignation des valeurs aux éléments
  titleElement.textContent = quote.title;
  contentElement.textContent = '" ' + quote.content + ' "'; // Encadre le contenu de la citation avec des guillemets
  authorElement.textContent = "- " + quote.author;

  // Ajout de classes aux éléments pour les styles CSS
  titleElement.classList.add("quoteTitle");
  contentElement.classList.add("quoteContent");
  authorElement.classList.add("quoteAuthor");
  heartIcon.classList.add("fa-solid", "fa-heart");

  // Ajout des éléments dans le conteneur de citation
  quoteContainer.appendChild(heartIcon);
  quoteContainer.appendChild(titleElement);
  quoteContainer.appendChild(contentElement);
  quoteContainer.appendChild(authorElement);

  // Ajoute un écouteur d'événements pour réagir au clic sur l'icône de cœur
  heartIcon.addEventListener("click", function() {
    heartIcon.style.color = "red";
    heartIcon.style.animation = "tilt-shaking 0.15s";
    heartIcon.style.transform = "scale(1.3, 1.3)";
  });

  // Ajoute le conteneur de citation à l'élément parent
  quoteParent.appendChild(quoteContainer);
});