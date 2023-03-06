import { useQuery } from "@tanstack/react-query";
import React, { useState, useRef, useEffect } from "react";
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

const ArrowContainer = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 3.5rem;
  background-color: #58585a;
`;

const ArrowWrapper = styled.div`
  cursor: pointer;
  width: 50%;
  height: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
`;

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState<PokemonCard[] | null>(null);
  const cellCount = 15;
  const theta = 360 / cellCount;
  const cellSize = 14.9;
  const radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
  const carouselRef = useRef<HTMLDivElement>(null);
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

  const { data: pokemonData, isLoading } = useQuery(
    ["pokemonCard"],
    () => getPokemonCard(),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );
  useEffect(() => {
    if (pokemonData) {
      setData(getRandomCardIndexes(pokemonData?.data));
    }
  }, [pokemonData]);
  const rotateCarousel = (selectedIndex: number) => {
    const angle = theta * selectedIndex * -1;
    if (carouselRef?.current) {
      carouselRef.current.style.transform = `translateZ(${-radius}rem) rotateY(${angle}deg)`;
    }
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      rotateCarousel(prevIndex - 1);
      return prevIndex - 1;
    });
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      rotateCarousel(prevIndex + 1);
      return prevIndex + 1;
    });
  };
  return (
    <>
      <Loading isLoading={isLoading} />
      {!isLoading && (
        <>
          <Container>
            <CarouselScene>
              <Carousel ref={carouselRef}>
                {data?.map((card) => (
                  <Card
                    key={`${card.id}-${card.name}`}
                    name={card.name}
                    image={card.images.large}
                  />
                ))}
              </Carousel>
            </CarouselScene>
          </Container>
          <ArrowContainer>
            <ArrowWrapper onClick={handlePrev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{
                  width: "48px",
                  height: "48px",
                  color: "white",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>
            </ArrowWrapper>
            <ArrowWrapper onClick={handleNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{
                  width: "48px",
                  height: "48px",
                  color: "white",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </ArrowWrapper>
          </ArrowContainer>
        </>
      )}
    </>
  );
}

export default App;
