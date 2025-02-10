export async function getPokemons(limit = 20, offset = 0) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    return data.results;
  }
  
  export async function getPokemonDetails(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }