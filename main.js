const URL = 'https://pokeapi.co/api/v2/pokemon/1/';

fetch(URL)
    .then(res => res.json())
    .then(data => {
        pokemon = data;
        //Guarda el elemento id
        const pok_id = document.querySelector('.pok_id')
        const ID = document.createElement('ID')
        ID.textContent = pokemon.id;
        pok_id.appendChild(ID)

        const pok_nom = document.querySelector('.pok_nom')
        const nom = document.createElement('nom')
        nom.textContent = pokemon.name;
        pok_nom.appendChild(nom)

        const pok_alt = document.querySelector('.pok_alt')
        const alt = document.createElement('alt')
        alt.textContent = pokemon.height;
        pok_alt.appendChild(alt)


        const pok_pes = document.querySelector('.pok_pes')
        const pes = document.createElement('pes')
        pes.textContent = pokemon.weight;
        pok_pes.appendChild(pes)

        const pok_typ = document.querySelector('.pok_typ')
        pokemontype = pokemon.types;
        pokemontype.forEach((element, index) => {
            element = pokemontype[index].type.name;
            const tip = document.createElement('tip')
            tip.textContent = element;
            pok_typ.appendChild(tip)
            pok_typ.appendChild(document.createElement('br'))
        });

        const pok_img = document.querySelector('.pok_img')
        const img = document.createElement('img')
        img.src = pokemon.sprites.front_default;
        pok_img.appendChild(img)

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
    /*console.log(data.name)*/
    })
    .catch(err => console.log(err))