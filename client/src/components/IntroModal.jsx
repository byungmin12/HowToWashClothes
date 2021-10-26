import React from 'react';
import styled from 'styled-components';

const Intro = styled.div`
  width: 110%;
  height: 110%;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50px;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 5;
  border: 5px solid white;
`;

const Title = styled.div`
  font-size: 8rem;
  text-align: center;
  color: white;
  font-weight: 800;
  opacity: 1;
  font-family: 'font-css';
  margin: 30px;
`;

const ClothesArrow = styled.img`
  position: absolute;
  transform: translate(-50%, -50%) rotate(180deg);
  width: 250px;
  top: 50%;
  left: 50%;
  z-index: 999;
`;

function IntroModal() {
  return (
    <Intro>
      <Title>How to use this App ?</Title>
      <ClothesArrow src="../../ClothesArrow.png" />
    </Intro>
  );
}

export default IntroModal;
