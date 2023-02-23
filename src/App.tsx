import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getPokemonCard } from "./api/pokemon-card.api";
import Loading from "./components/Loading";
import "./App.css";

// "https://images.pokemontcg.io/det1/1_hires.png"
// "https://images.pokemontcg.io/bw5/1_hires.png"
//  "https://images.pokemontcg.io/bw5/2_hires.png"
// "https://images.pokemontcg.io/ru1/1_hires.png"
// "https://images.pokemontcg.io/swsh35/1_hires.png"

// artist:
// "MPC Film"
// attacks: [{…}]
// cardmarket: {url: 'https://prices.pokemontcg.io/cardmarket/det1-1', updatedAt: '2023/02/22', prices: {…}}
// convertedRetreatCost: 1
// evolvesTo: ['Ivysaur']
// flavorText: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon."
// hp: "60"
// id: "det1-1"
// images: {small: 'https://images.pokemontcg.io/det1/1.png', large: 'https://images.pokemontcg.io/det1/1_hires.png'}

function App() {
  const [current, setCurrent] = useState(0);
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
  const calcNum = (index: number) => {
    if (index === -1) return data.count;
    return index % data.count;
  };
  console.log(data);
  return (
    <div className="container">
      <div className="card-container">
        <div className="card second">
          <img src="https://images.pokemontcg.io/bw5/1_hires.png" alt="1" />
        </div>
        <div className="card center">
          <img src="https://images.pokemontcg.io/bw5/2_hires.png" alt="1" />
        </div>
        <div className="card fourth">
          <img src="https://images.pokemontcg.io/ru1/1_hires.png" alt="1" />
        </div>
        <div className="icon-container left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icons"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="icon-container right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icons"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
