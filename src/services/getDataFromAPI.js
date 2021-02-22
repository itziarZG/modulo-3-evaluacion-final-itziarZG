const ENDPOINT =
  "https://rickandmortyapi.com/api/character";

const getDataFromAPI = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          name: character.name,
          id: character.id,
          image: character.image,
          episodes: character.episode.length,
          status: character.status,
          species: character.species,
          origin: character.origin.name,
        };
      });
    });
};

export default getDataFromAPI;
