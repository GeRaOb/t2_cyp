const pokemonContainer = document.querySelector(".pok-container");


function pok_work(pok_url){
const URL = pok_url;

fetch(URL)
    .then(res => res.json())
    .then(data => {
        pokemon = data;
        //Guarda el elemento id
        const card = document.createElement('div')
        card.classList.add('pokemon-block')

        const ID = document.createElement('p')
        ID.textContent = `#${pokemon.id.toString().padStart(3, 0)}`

  
        const nom = document.createElement('p')
        nom.textContent = pokemon.name;


  
        const alt = document.createElement('p')
        alt.textContent = pokemon.height;



        const pes = document.createElement('p')
        pes.textContent = pokemon.weight;


        /*
        pokemontype = pokemon.types;
        pokemontype.forEach((element, index) => {
            element = pokemontype[index].type.name;
            const tip = document.createElement('tip')
            tip.textContent = element;

            pok_typ.appendChild(document.createElement('br'))
        });
        */
        const spriteContainer = document.createElement('div')
        spriteContainer.classList.add('img-container')

        const sprite = document.createElement('img')
        sprite.src = pokemon.sprites.front_default

        spriteContainer.appendChild(sprite)
        /*
        const URL2 = pokemon.location_area_encounters;
        fetch (URL2)
        .then(res2 => res2.json())
        .then(data2 => {
            pokemonlocation = data2;
            const pok_area = document.querySelector('.pok_area')
            pokemonlocation.forEach((element, index) => {
                element = pokemonlocation[index].location_area.name;
                const area = document.createElement('h7')
                area.innerHTML = element;
                pok_area.appendChild(area)
                pok_area.appendChild(document.createElement('br'))
            });

        })

        const pok_abl = document.querySelector('.pok_abl')
        pokemonabl=pokemon.abilities;
        pokemonabl.forEach((element, index) => {
            element = pokemonabl[index].ability.name
            const abl = document.createElement('h7')
            abl.textContent = element;
            pok_abl.appendChild(abl)
            pok_abl.appendChild(document.createElement('br'))
        });
        */


        card.appendChild(spriteContainer)
        card.appendChild(ID)
        card.appendChild(nom);

        pokemonContainer.appendChild(card);


    /*console.log(data.name)*/
    })
    .catch(err => console.log(err))
}

function rec_pok(Newurl , i)
{
    
    URL = Newurl;
fetch(URL)
    .then(res => res.json())
    .then(data =>{
        pokemon = data;
        pok_array = pokemon.results;
        pok_array.forEach((element, index)=>{
            pok_work(pok_array[index].url)
        });
        if(i != 0)
        {
            i++;
            rec_pok(pokemon.next,i);
        }
        
    })
    .catch(err => console.log(err))
}
URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
i = 0;
rec_pok(URL,0);


//https://pokeapi.co/api/v2/pokemon?offset=0&limit=20