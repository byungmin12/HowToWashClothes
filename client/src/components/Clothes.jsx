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
  ${({ data }) => {
    return data ? `background-image: url(${data.url}); background-size: 100% 100%; ` : null;
  }};
  ${({ isDragging }) => {
    return isDragging ? `opacity: 0.4;` : `opacity: 1;`;
  }};
  background-color: transparent;
  position: relative;
  z-index: 1;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  align-self: center;
  justify-self: center;

  /* -webkit-filter: drop-shadow(#ffffff -3px -4px 10px);
  filter: drop-shadow(#757ea0 3px 4px 10px); */
  box-shadow: #ffffff -3px -4px 10px 0px, #757ea0 3px 4px 10px 0px;
  border-radius: 30px;
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

  return <Img onClick={handleModal} ref={drag} isDragging={isDragging} data={data}></Img>;
}

export default Clothes;
