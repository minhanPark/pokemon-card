import React from "react";
import styled from "styled-components";

const CardScene = styled.div`
  width: 12.9rem;
  height: 18.4rem;
`;

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const CardFace = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const Card = () => {
  return (
    <CardScene>
      <StyledCard>
        <CardFace
          src="https://images.pokemontcg.io/swsh35/1_hires.png"
          alt={"포켓몬이름-front"}
        />
        <CardFace
          src="https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg"
          alt={"포켓몬이름-back"}
        />
      </StyledCard>
    </CardScene>
  );
};

export default Card;
