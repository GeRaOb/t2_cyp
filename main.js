const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("#spinner");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const limite = 12;
let pagina_actual = 1;

function pok_work(pok_url) {
    const URL = pok_url;



    fetch(URL)
        .then(res => res.json())
        .then(data => {
            pokemon = data;

            const flipCard = document.createElement("div");
            flipCard.classList.add("flip-card");

            const cardContainer = document.createElement("div");
            cardContainer.classList.add("card-container");

            flipCard.appendChild(cardContainer);


            const card = document.createElement('div')
            card.classList.add('pokemon-block')

            //RECOLECCION DEL ID
            const ID = document.createElement('p')
            ID.textContent = `#${pokemon.id.toString().padStart(3, 0)}`

            //RECOLECCION DEL NOMBRE 
            const nom = document.createElement('p')
            nom.classList.add('name')
            nom.textContent = pokemon.name;



            const alt = document.createElement('p')
            alt.classList.add('titles')
            alt.textContent = `la altura del pokemon es: ${pokemon.height}ft`;



            const pes = document.createElement('p')
            pes.classList.add('titles')
            pes.textContent = `el peso del pokemon es: ${pokemon.weight}lb`;

            const spriteContainer = document.createElement('div')
            spriteContainer.classList.add('img-container')

            const sprite = document.createElement('img')
            sprite.src = pokemon.sprites.front_default

            spriteContainer.appendChild(sprite)


            //************PARTE DE ADELANTE**************************

            card.appendChild(spriteContainer)
            card.appendChild(ID)
            card.appendChild(nom)
            card.appendChild(alt)
            card.appendChild(pes)
            const tit = document.createElement('p')
            tit.classList.add('titles')
            tit.textContent = 'EL/los tipos del pokemon es/son:'
            card.appendChild(tit);
            pokemontype = pokemon.types;
            pokemontype.forEach((element, index) => {
                element = pokemontype[index].type.name;
                const tip = document.createElement('p')
                tip.textContent = element;
                card.appendChild(tip)
            });
            const tit4 = document.createElement('p')
            tit4.classList.add('titles')
            tit4.textContent = 'EL/las habilidades del pokemon es/son:'
            card.appendChild(tit4);

            pokemonabl = pokemon.abilities;
            pokemonabl.forEach((element, index) => {
                element = pokemonabl[index].ability.name
                const abl = document.createElement('p')
                abl.textContent = element;
                card.appendChild(abl)
                //pok_abl.appendChild(document.createElement('br'))
            });


            //********************PARTE DE ATRAS*************************
            const cardBack = document.createElement("div");
            cardBack.classList.add("pokemon-block-back");
            const tit2 = document.createElement('p')
            tit2.textContent = 'Las locaciones probables es/son: '
            cardBack.appendChild(tit2)
            const URL2 = pokemon.location_area_encounters;
            const tit3 = document.createElement('p')
            tit3.textContent = '|'
            fetch(URL2)
                .then(res2 => res2.json())
                .then(data2 => {
                    pokemonlocation = data2;
                    pokemonlocation.forEach((element, index) => {
                        element = pokemonlocation[index].location_area.name;
                        const loc = document.createElement('h7')
                        loc.textContent = element;
                        cardBack.appendChild(loc)
                    });

                })




            cardContainer.appendChild(card)
            cardContainer.appendChild(cardBack)
            pokemonContainer.appendChild(flipCard)
            spinner.style.display = "none";


            /*console.log(data.name)*/
        })
        .catch(err => console.log(err))
}

function rec_pok(pagina = 1) {
    spinner.style.display = "block";
    fetch(`https://pokeapi.co/api/v2/pokemon?` + new URLSearchParams({
        offset: (pagina-1)*limite,
        limit: limite,
    }))
        .then(res => res.json())
        .then(data => {
            pokemon = data;
            pok_array = pokemon.results;
            pok_array.forEach((element, index) => {
                pok_work(pok_array[index].url)
            });



        })
        .catch(err => console.log(err))
}
URL = `https://pokeapi.co/api/v2/pokemon?offset=0&limir=12`

rec_pok(URL);

previous.addEventListener('click', () => {
    if(pagina_actual<=1){
        pagina_actual=1 ;
        return;
    }
    vacias_poke();
    pagina_actual--;
    rec_pok(pagina_actual);

})
next.addEventListener('click', () => {
    if(pagina_actual>75){
        pagina_actual= 75;
        return;
    }
    vacias_poke();
    pagina_actual++;
    rec_pok(pagina_actual);

})

function vacias_poke(){
    document.querySelector('.pokemon-container').innerHTML = '';
}





//https://pokeapi.co/api/v2/pokemon?offset=0&limit=20