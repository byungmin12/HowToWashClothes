import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { handleOpenClothesModal } from '../actions/ClotheModalActionIndex';

const Img = styled.div`
  display: inline-block;
  width: 155px;
  height: 155px;
  margin: 30px;
  /* ${({ data }) => {
    return data ? `background-image: url(${data.url}); background-size: 100% 100%; ` : null;
  }}; */
  ${({ isDragging }) => {
    return isDragging ? `opacity: 0.4;` : `opacity: 1;`;
  }};
  /* background-color: transparent; */
  position: relative;
  z-index: 1;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  /* -webkit-filter: drop-shadow(#ffffff -3px -4px 10px);
  filter: drop-shadow(#757ea0 3px 4px 10px); */

  border-radius: 30px;

  background: linear-gradient(145deg, #9d8175, #846d62);
  box-shadow: 5px 5px 12px #766157, -5px -5px 27px #b09183;

  display: flex;
  align-self: center;
  justify-self: center;
`;

const IMG = styled.img`
  width: 90%;
  height: 90%;
  margin: 0 auto;
`;

function Clothes({ data }) {
  const dispatch = useDispatch();
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

  const handleModal = () => {
    dispatch(handleOpenClothesModal(data.id));
  };

  return (
    <Img onClick={handleModal} ref={drag} isDragging={isDragging} data={data}>
      <IMG src={data.url} />
    </Img>
  );
}

export default Clothes;
