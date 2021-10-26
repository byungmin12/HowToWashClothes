import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { handleOpenClothesModal } from '../actions/ClotheModalActionIndex';

const HoverTitle = styled.div`
  width: 100%;
  height: 30%;
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  display: none;
  justify-content: center;
  align-items: center;
`;

const Img = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 30px;
  /* ${({ data }) => {
    return data ? `background-image: url(${data.url}); background-size: 100% 100%; ` : null;
  }}; */

  /* background-color: transparent; */
  position: relative;
  transition-duration: 1s;
  :hover {
    transform: scale(1.01);
    cursor: pointer;
  }

  :active {
    box-shadow: inset 5px 5px 12px #493c36, inset -5px -5px 12px #a38678;
  }

  border-radius: 30px;

  background: linear-gradient(145deg, #9d8175, #846d62);
  box-shadow: 5px 5px 12px #493c36, -5px -5px 12px #a38678;
  position: relative;
  display: flex;
  align-self: center;
  justify-self: center;

  ${({ isDragging }) => {
    return isDragging ? `opacity: 0.4;` : `opacity: 1;`;
  }};

  ${({ id }) => {
    return id === 2 ? `z-index: 500;` : `z-index: 1;`;
  }};

  &:hover {
    ${HoverTitle} {
      display: flex;
    }
  }
`;

const IMG = styled.img`
  width: 90%;
  height: 90%;
  margin: 0 auto;
`;

const ClothesArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 105px;
  height: 105px;
  border: 3px solid white;
  border-radius: 30px;
`;

const ClothesText = styled.div`
  position: absolute;
  color: white;
  font-family: 'font-css';
  font-size: 3rem;
  font-weight: 800;
  transform: translate(-50%, -50%);
  top: calc(100% + 1rem);
  left: 50%;
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
  console.log(data.id);
  return (
    <Img onClick={handleModal} ref={drag} isDragging={isDragging} data={data} id={data.id}>
      <IMG src={data.url} />
      <HoverTitle>
        <span>{data.title}</span>
      </HoverTitle>
      {data.id === 2 ? (
        <ClothesArrowContainer>
          <ClothesText>Clothes</ClothesText>
        </ClothesArrowContainer>
      ) : null}
    </Img>
  );
}

export default Clothes;
