
const button = document.getElementById('button');
const stopbutton = document.getElementById('stopButton');
const citation = document.getElementById('citation');

// Fonction pour afficher une citation aléatoire
function randomcitation() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
        .then(response => response.json())
        .then(data => {
            // Sélectionne un pokemon aléatoire
            const randomIndex = Math.floor(Math.random() * data.results.length);
            const randomPokemon = data.results[randomIndex];
            const pokemonId = randomPokemon.url.split('/')[randomPokemon.url.split('/').length - 2];
        
            // Affiche le nom du pokemon dans le conteneur
            citation.innerText = randomPokemon.name;
        
            //Ajout l'image de pokemon dans l'élément img
            const pokemonImg = document.querySelector("#pokemonImg");
            pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
            pokemonImg.alt = randomPokemon.name;
        });
}

function showbloc(){
    citation.style.display = "flex";
}

// Affiche une citation au clic sur le bouton
button.addEventListener('click', function(){ 
    randomcitation();
    showbloc();
    clearInterval(intervalId);
    intervalId = setInterval(randomcitation, 100);
 });

// Affiche une citation toutes les 5 secondes
let intervalId = setInterval(randomcitation, 100);


stopbutton.addEventListener("click", function(){
    clearInterval(intervalId);
});
