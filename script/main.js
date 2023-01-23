



// // Obtenir une référence au bouton et au conteneur de citation
// const button = document.querySelector("#button");
// const divcitation = document.querySelector("#citation");

// // Obtenir une citation lorsque le bouton est cliqué
// button.addEventListener("click", newcitation);

// // Obtenir une citation toutes les 5 secondes
// setInterval(newcitation, 5000);

// // Mes citation
// let citations = [
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget rutrum quam, non tincidunt augue. Proin hendrerit, ligula eget auctor bibendum, neque neque ornare mi, eu luctus nibh felis eu neque. Nam id orci eu magna tristique imperdiet sit amet nec purus. Maecenas pharetra faucibus sollicitudin. Vestibulum commodo nisi vitae augue mollis viverra.1", 
// "Ut vehicula sit amet leo vitae rutrum. Fusce tincidunt nulla erat, vitae tincidunt enim pretium vitae. Fusce non nulla a purus mattis ullamcorper.", 
// "Donec congue nunc turpis, non tempor metus tempus sit amet. Morbi ullamcorper interdum elit, in elementum nisl cursus ut. Vivamus convallis non nunc id hendrerit."
// ];

// function newcitation() {
//   // Sélectionner une citation aléatoire à partir des données
//   const random = Math.floor(Math.random() * citations.length);
//   const citation = citations[random];

//   // Afficher la citation dans le conteneur de citation
//   divcitation.innerHTML = citation;
// }


const button = document.getElementById('button');
const citation = document.getElementById('citation');

// Fonction pour afficher une citation aléatoire
function randomcitation() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
        .then(response => response.json())
        .then(data => {
            // Sélectionne une citation aléatoire
            const randomIndex = Math.floor(Math.random() * data.results.length);
            const randomQuote = data.results[randomIndex].name;

            // Affiche la citation dans le conteneur
            citation.innerText = randomQuote;
        });
}

// Affiche une citation au clic sur le bouton
button.addEventListener('click', randomcitation);

// Affiche une citation toutes les 5 secondes
setInterval(randomcitation, 5000);


