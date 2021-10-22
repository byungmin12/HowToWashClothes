import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch } from 'react-redux';
import { handleCloseClothesModal } from '../actions/ClotheModalActionIndex';

const openKeyframes = keyframes`
  to{
    width: 70%;
  height: 90%;
  }
`;

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
`;

const Modal = styled.div`
  width: 0%;
  height: 0%;
  background-color: rgba(0, 0, 0, 0.7);
  border: 7px solid white;
  border-radius: 20px;
  color: white;
  animation: ${openKeyframes} 0.3s forwards;
`;

function WashInfoModal({ data }) {
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(handleCloseClothesModal());
  };

  return (
    <ModalContainer>
      <Modal>
        <h1>{data.title}</h1>
        <div>{data.explain}</div>
        <div onClick={handleModalClose}>x</div>
      </Modal>
    </ModalContainer>
  );
}

export default WashInfoModal;
