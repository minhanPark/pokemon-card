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
  width: 100%;
`;

const CarouselScene = styled.div`
  border: 1px solid #ccc;
  position: relative;
  width: 14.9rem;
  height: 20.4rem;
  perspective: 1000px;
`;

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translate3d(0, 0, -35rem);
  transform-style: preserve-3d;
  transition: 1s;
`;

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cellCount = 15;
  const theta = 360 / cellCount;
  const cellSize = 14.9;
  const radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
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
      <CarouselScene>
        <Carousel>
          {data?.data.map((card) => (
            <Card
              key={`${card.id}-${card.name}`}
              name={card.name}
              image={card.images.large}
            />
          ))}
        </Carousel>
      </CarouselScene>
    </Container>
  );
}

export default App;
