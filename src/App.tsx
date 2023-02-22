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
