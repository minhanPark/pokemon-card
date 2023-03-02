import Axios from "axios";

export interface Image {
  small: string;
  large: string;
}

export interface PokemonCard {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesTo: string[];
  retreatCost: string[];
  convertedRetreatCost: number;
  images: Image;
}

export interface ApiType {
  data: PokemonCard[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

export const getPokemonCard = async () => {
  const { data } = await Axios.get<ApiType>(
    "https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[1 TO 151]",
    {
      headers: {
        "X-Api-Key": process.env.REACT_APP_API,
      },
    }
  );
  return data;
};
