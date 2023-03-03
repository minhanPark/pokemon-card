import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getPokemonCard, PokemonCard } from "./api/pokemon-card.api";
import Loading from "./components/Loading";
import Card from "./components/Card";
import styled from "styled-components";
import "./App.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  const [current, setCurrent] = useState(0);
  const getRandomCardIndexes = (pokemonData: PokemonCard[]) => {
    let indexes: number[] = [];
    let randomPokemonData: PokemonCard[] = [];
    while (indexes.length < 15) {
      const randomIndex = Math.floor(Math.random() * 250);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
        randomPokemonData.push(pokemonData[randomIndex]);
      }
    }
    return randomPokemonData;
  };
  const { data } = useQuery({
    queryKey: ["pokemonCard"],
    queryFn: () => getPokemonCard(),
    select: (apiData) => {
      return {
        ...apiData,
        data: getRandomCardIndexes(apiData.data),
      };
    },
  });
  console.log(data);
  return (
    <Container>
      <Card />
    </Container>
  );
}

export default App;
