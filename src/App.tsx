import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPokemonCard } from "./api/pokemon-card.api";
import Loading from "./components/Loading";
import "./App.css";

// "https://images.pokemontcg.io/det1/1_hires.png"
// "https://images.pokemontcg.io/bw5/1_hires.png"
//  "https://images.pokemontcg.io/bw5/2_hires.png"
// "https://images.pokemontcg.io/ru1/1_hires.png"
// "https://images.pokemontcg.io/swsh35/1_hires.png"

function App() {
  const { data } = useQuery({
    queryKey: ["pokemonCard"],
    queryFn: () => getPokemonCard(),
    select: (apiData) => {
      return {
        ...apiData,
        data: apiData.data.sort(
          (a: any, b: any) =>
            a.nationalPokedexNumbers - b.nationalPokedexNumbers
        ),
      };
    },
  });
  console.log(data);
  return (
    <div className="container">
      <div className="card-container">
        <div className="card first">
          <img src="https://images.pokemontcg.io/bw5/1_hires.png" alt="1" />
        </div>
        <div className="card second">
          <img src="https://images.pokemontcg.io/bw5/2_hires.png" alt="1" />
        </div>
        <div className="card third">
          <img src="https://images.pokemontcg.io/ru1/1_hires.png" alt="1" />
        </div>
      </div>
    </div>
  );
}

export default App;
