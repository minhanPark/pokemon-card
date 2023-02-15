import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPokemonCard } from "./api/pokemon-card.api";
import Loading from "./components/Loading";

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
    <div>
      <h1>sdsdsdsd</h1>
    </div>
  );
}

export default App;
