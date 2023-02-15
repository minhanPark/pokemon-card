import Axios from "axios";

export const getPokemonCard = async () => {
  const { data } = await Axios.get(
    "https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[1 TO 151]",
    {
      headers: {
        "X-Api-Key": process.env.REACT_APP_API,
      },
    }
  );
  return data;
};
