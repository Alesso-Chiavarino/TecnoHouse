fetch('https://pokeapi.co/api/v2/pokemon/5')
    .then(res => res.json())
    .then(data => console.log(data))
