const aplicacion = document.querySelector('.container')
const URL = 'https://pokeapi.co/api/v2/pokemon/1/';

fetch(URL)
    .then(res => res.json())
    .then(data => {

        pokemon = data;
        const ID = document.createElement('ID')
        ID.innerHTML = pokemon.id;
        aplicacion.appendChild(ID)
        const nom = document.createElement('nom')
        nom.innerHTML = pokemon.name;
        aplicacion.appendChild(nom)
        const alt = document.createElement('alt')
        alt.innerHTML = pokemon.height;
        aplicacion.appendChild(alt)

        
    /*console.log(data.name)*/}
        )
    .catch(err => console.log(err))