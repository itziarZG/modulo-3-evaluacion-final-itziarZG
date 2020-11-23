const ENDPOINT =
  "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json";

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
