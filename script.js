const button = document.querySelector("#searchButton")
const pokeInput = document.querySelector("#inputBar")
const imagePoke = document.querySelector("#pokemonImage")
const namePoke = document.querySelector("#pokemonName")
const statsContainer = document.querySelector("#stats")
const movesContainer = document.querySelector("#moves")
const abilitiesContainer = document.querySelector("#abilities")
const baseXpContainer = document.querySelector("#XP")
const heldItemsContainer = document.querySelector("#held")
const weightContainer = document.querySelector("#weight")
const fireFilter = document.querySelector("#filter")

button.addEventListener('click', async () => {
    let poke = pokeInput.value
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${poke}`
    );
    let pokePic = response.data.sprites.front_default
    let pokeStats = response.data.stats
    let pokeAbilities = response.data.abilities
    let pokeMoves = response.data.moves
    let pokeWeight = response.data.weight
    let baseXp = response.data.base_experience
    let heldItems = response.data.held_items
    //clear existing stats before adding new ones
    //statsContainer.innerHTML = ''

   

    imagePoke.setAttribute('src', pokePic)

    //display pokemon name
    namePoke.innerText = response.data.name

    

    //display stats
    pokeStats.forEach(stat => {
        const statElement = document.createElement('p')
        statElement.innerText = `${stat.stat.name}: ${stat.base_stat}`
        statsContainer.appendChild(statElement)
    })

    pokeMoves.forEach(move => {
        const moveElement = document.createElement('p');
        moveElement.innerText = `${move.move.name}`;
        movesContainer.appendChild(moveElement);
    })

    pokeAbilities.forEach(abil => {
        const abilityElement = document.createElement('p')
        abilityElement.innerText = `${abil.ability.name}`
        abilitiesContainer.appendChild(abilityElement)
    })

    heldItems.forEach(item => {
        itemElement = document.createElement('p')
        itemElement.innerText = `${item.item.name}`
        heldItemsContainer.appendChild(itemElement)
    })

const weightElement = document.createElement('p')
weightElement.innerText = `Pokemon Weight: ${pokeWeight}lbs`
statsContainer.appendChild(weightElement)

const xpElement = document.createElement('p')
xpElement.innerText = `Base XP: ${baseXp}pts`
baseXpContainer.appendChild(xpElement)

})
    
