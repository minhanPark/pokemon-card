import React from "react";
import styled, { css } from "styled-components";

const CardScene = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  left: 1rem;
  top: 1rem;
  width: 12.9rem;
  height: 18.4rem;
  &:nth-child(1) {
    transform: rotateY(0deg) translateZ(35rem);
  }
  &:nth-child(2) {
    transform: rotateY(24deg) translateZ(35rem);
  }
  &:nth-child(3) {
    transform: rotateY(48deg) translateZ(35rem);
  }
  &:nth-child(4) {
    transform: rotateY(72deg) translateZ(35rem);
  }
  &:nth-child(5) {
    transform: rotateY(96deg) translateZ(35rem);
  }
  &:nth-child(6) {
    transform: rotateY(120deg) translateZ(35rem);
  }
  &:nth-child(7) {
    transform: rotateY(144deg) translateZ(35rem);
  }
  &:nth-child(8) {
    transform: rotateY(168deg) translateZ(35rem);
  }
  &:nth-child(9) {
    transform: rotateY(192deg) translateZ(35rem);
  }
  &:nth-child(10) {
    transform: rotateY(216deg) translateZ(35rem);
  }
  &:nth-child(11) {
    transform: rotateY(240deg) translateZ(35rem);
  }
  &:nth-child(12) {
    transform: rotateY(264deg) translateZ(35rem);
  }
  &:nth-child(13) {
    transform: rotateY(288deg) translateZ(35rem);
  }
  &:nth-child(14) {
    transform: rotateY(312deg) translateZ(35rem);
  }
  &:nth-child(15) {
    transform: rotateY(336deg) translateZ(35rem);
  }
`;

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
`;

const CardFace = styled.img<{ isBack?: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  ${({ isBack }) =>
    isBack &&
    css`
      transform: rotateY(180deg);
    `}
`;

interface CardProps {
  name: string;
  image: string;
}

const Card = ({ name, image }: CardProps) => {
  return (
    <CardScene>
      <StyledCard>
        <CardFace src={image} alt={`${name}-front`} isBack />
        <CardFace
          src="https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg"
          alt={`${name}-back`}
        />
      </StyledCard>
    </CardScene>
  );
};

export default Card;
