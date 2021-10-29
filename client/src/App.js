import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import WashingMachine from './components/WashingMachine';
import ClothesContainer from './components/ClothesContainer';
import WashInfoModal from './components/WashInfoModal';
import IntroModal from './components/IntroModal';
import './font/font.css';

const AppCss = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  /* background-image: url('https://www.wallpapertip.com/wmimgs/79-793433_pastel-aesthetic-wallpaper-blue.jpg'); */
  /* background-size: 100vw 100vh; */
  background-color: #c4b2a8;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  background-image: radial-gradient(
    circle farthest-corner at center,
    rgba(172, 182, 197, 1) 35%,
    rgba(196, 178, 168, 1) 65%,
    rgba(161, 186, 188, 1) 100%
  );
`;

const Background = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #c4b2a8;
  box-shadow: 28px 28px 55px #a7978f, -28px -28px 55px #e1cdc1;
  position: relative;
  @media screen and (max-width: 780px) {
    /* flex-direction: column; */
    /* justify-content: center; */
    width: 100%;
  }
`;

function App() {
  const [isModal, setIsModal] = useState(true);
  const state = useSelector((state) => state);
  return (
    <DndProvider backend={HTML5Backend}>
      <AppCss>
        <Background>
          <WashingMachine />
          <ClothesContainer />
          {isModal ? <IntroModal setIsModal={setIsModal} /> : null}
        </Background>
        {state.ClothesModalReducer.isModalOpenClose ? (
          <WashInfoModal data={state.ClothesModalReducer.ClothesData[0]} />
        ) : null}
      </AppCss>
    </DndProvider>
  );
}

export default App;
