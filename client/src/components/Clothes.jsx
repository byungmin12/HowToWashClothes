import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useDrag } from 'react-dnd';

const Img = styled.div`
  background-color: transparent;
  width: 200px;
  height: 200px;
  ${({ data }) => {
    return data ? `background-image: url(${data.url}); background-size: 100% 100%; ` : null;
  }};
  ${({ isDragging }) => {
    return isDragging ? `opacity: 0.4;` : `opacity: 1;`;
  }};
`;

function Clothes({ data }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id: data.id },
    collect: (monito) => ({
      isDragging: !!monito.isDragging(),
    }),
    end: () => {
      //   console.log('끝');
      // 잘못된 곳에 넣어도 콘솔이 찍힘
    },
  }));

  return <Img ref={drag} isDragging={isDragging} data={data}></Img>;
}

export default Clothes;
