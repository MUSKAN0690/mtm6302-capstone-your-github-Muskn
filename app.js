document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-bar');
    const pokemonName = document.querySelector('.pokemon-name');
    const pokemonInfo = document.querySelector('.pokemon-info');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const pokemonNames = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charizard", "squirtle", "wartortle", "blastoise"];
        const pokemonImages = ["Bulbasaur.png", "Ivysaur.png", "Venusaur.png", "Charmender.png", "Charizard.png", "Squirtle.png", "Wartortle.png", "Blastoise.png"];

        const index = pokemonNames.indexOf(searchTerm);
        if (index !== -1) {
            const pokemonImage = pokemonImages[index];
            pokemonName.textContent = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
            pokemonInfo.innerHTML = `
                <div class="col-50"><img src="images/${pokemonImage}"></div>
                <div class="col-50"><h1>${searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)}</h1><p>${searchTerm === 'squirtle' || searchTerm === 'wartortle' || searchTerm === 'blastoise' ? 'Water Type' : 'Grass Type'} Pokemon</p></div>
            `;
        } else {
            alert("Pokemon not found!");
        }
    });
});
