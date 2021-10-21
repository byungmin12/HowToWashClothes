import React from 'react';
import styled, { keyframes } from 'styled-components';
import Clothes from './Clothes';

const ClothesContainerCss = styled.div`
  width: 46%;
  height: 90%;
  background-color: transparent;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;
  gap: 10px 20px;
  overflow-x: scroll;
  grid-auto-flow: row;
`;

const ClothesData = [
  {
    id: 1,
    url: '../../clothes.png',
  },
  {
    id: 2,
    url: '../../clothes.png',
  },
  {
    id: 3,
    url: '../../clothes.png',
  },
  {
    id: 4,
    url: '../../clothes.png',
  },
  {
    id: 5,
    url: '../../clothes.png',
  },
  {
    id: 6,
    url: '../../clothes.png',
  },
  {
    id: 7,
    url: '../../clothes.png',
  },
  {
    id: 8,
    url: '../../clothes.png',
  },
];

function ClothesContainer() {
  return (
    <ClothesContainerCss>
      {ClothesData.map((el) => {
        return <Clothes data={el} />;
      })}
    </ClothesContainerCss>
  );
}

export default ClothesContainer;
