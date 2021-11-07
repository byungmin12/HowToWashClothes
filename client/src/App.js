import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import WashingMachine from './components/WashingMachine';
import ClothesContainer from './components/ClothesContainer';
import WashInfoModal from './components/WashInfoModal';
import IntroModal from './components/IntroModal';
import './font/font.css';

const pourKeyframes = keyframes`
  to{
    height: 110vh ;
  }
`;

const stopKeyframes = keyframes`
  to{
  top: 100%;
  }
`;

const waveFrontKeyframes = keyframes`
  100% {
    transform: translate(-50%, 0);
  }
`;
const waveBackKeyframes = keyframes`
  100% {
    transform: translate(50%, 0);
  }
`;

const fillContainer = keyframes`
  100%{
    transform: translate(0%, 20%);
    
  }
`;

const Box = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Water = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  transform: translate(0, 100%);
  background: #4d6de3;

  animation-name: ${fillContainer};
  animation-delay: 0.8s;
  animation-duration: 3s;
  animation-fill-mode: forwards;
`;

const WaveBack = styled.svg`
  width: 200%;
  position: absolute;
  bottom: 100%;
  right: 0;
  fill: #c7eeff;
  animation: ${waveBackKeyframes} 2.8s infinite linear;
`;
const WaveFront = styled.svg`
  width: 200%;
  position: absolute;
  bottom: 100%;
  left: 0;
  fill: #4d6de3;
  margin-bottom: -1px;
  animation: ${waveFrontKeyframes} 1.4s infinite linear;
`;

const Pouring = styled.div`
  position: absolute;
  left: 50%;
  width: 150px;
  height: 0px;
  background-color: #4d6de3;
  border-radius: 10px;
  animation-name: ${pourKeyframes}, ${stopKeyframes};
  animation-delay: 0.2s, 3s;
  animation-duration: 1s, 1s;
  animation-fill-mode: forwards;
  top: -2%;
  z-index: 800;
`;

function App() {
  const [isModal, setIsModal] = useState(true);
  const state = useSelector((state) => state);
  return (
    <DndProvider backend={HTML5Backend}>
      <Box>
        <Water id="water" className="water">
          <WaveBack viewBox="0 0 560 20" className="water_wave water_wave_back">
            <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
            <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
            <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
            <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
          </WaveBack>
          <WaveFront viewBox="0 0 560 20" className="water_wave water_wave_front">
            <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
            <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
            <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
            <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
          </WaveFront>
        </Water>
        <Pouring></Pouring>
      </Box>
    </DndProvider>
  );
}

export default App;
