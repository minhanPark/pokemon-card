import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import "./Loading.css";

const Container = styled.div<{ isLoading: boolean }>`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: opacity 1.5s;
  opacity: ${({ isLoading }) => (isLoading ? 100 : 0)};
`;

const HalfBox = styled.div`
  height: 50%;
`;

const RedBox = styled(HalfBox)`
  background-color: rgb(239, 64, 53);
`;

const WhiteBox = styled(HalfBox)`
  background-color: "white";
`;

const PaleBlackBond = styled.div`
  height: 8rem;
  position: absolute;
  top: 50%;
  width: 100vw;
  transform: translateY(-50%);
  border-top: 1rem solid black;
  border-bottom: 1rem solid black;
  z-index: 11;
  background-color: #58585a;
`;

const BallCenter = styled.div`
  width: 17rem;
  height: 17rem;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  background-color: #58585a;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1rem solid black;
`;

const CenterPaleBlack = styled.div`
  width: 15.5rem;
  height: 15.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 11;
  background-color: #58585a;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;

const BigWhiteBall = styled.div`
  width: 11rem;
  height: 11rem;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 12;
  background-color: white;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 0.8rem solid black;
`;

const SmallWhiteBall = styled.div`
  width: 7rem;
  height: 7rem;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 13;
  background-color: white;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 0.3rem solid black;
`;

interface Props {
  isLoading: boolean;
}

/**
 * TODO: 로딩 부분은 바꾸기
 */
const Loading = ({ isLoading }: Props) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    const hide = () => {
      setIsShow(false);
    };
    if (backgroundRef && backgroundRef.current) {
      backgroundRef.current.addEventListener("transitionend", hide);

      return () => {
        backgroundRef.current?.removeEventListener("transitionend", hide);
      };
    }
  }, [backgroundRef]);
  if (!isShow) return null;
  return (
    <Container isLoading={isLoading} ref={backgroundRef}>
      <RedBox />
      <WhiteBox />
      <PaleBlackBond />
      <BallCenter />
      <CenterPaleBlack />
      <BigWhiteBall />
      <SmallWhiteBall />
    </Container>
  );
};

export default Loading;
