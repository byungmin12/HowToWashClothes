import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInterval } from 'react-use';
import { handleOpenCloseWashingMachine } from '../actions/OpenClose';
import { handleOpenClothesModal } from '../actions/ClotheModalActionIndex';
import { useDrop } from 'react-dnd';
import moment from 'moment';
import 'moment/locale/ko';

import {
  WaterContainer,
  Machine,
  Above,
  Canvas,
  Header,
  Programmer,
  LED,
  Button,
  Separator,
  Flare,
  Body,
  InnerBody,
  WaveOne,
  WaveFour,
  WaveThree,
  WaveTwo,
  Footer,
  Fix,
  Edge,
  Base,
} from './WashingMachineCss';

function WashingMachine() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isRunning, toggleIsRunning] = useState(true);
  const nowTime = moment().format('HH:mm:ss');
  const [machineShake, setMachineShake] = useState(false);
  const state = useSelector((state) => state.WashingMachineReducer);
  const stateOpenClose = useSelector((state) => state.OpenCloseReducer);

  const dispatch = useDispatch();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => openModal(item.id),
    collect: (monito) => ({
      isOver: !!monito.isOver(),
    }),
    hover(item, { id: draggedId }) {
      //여기서 문 열리고
      dispatch(handleOpenCloseWashingMachine(true));
    },
  }));

  useInterval(
    () => {
      setCount(count + 1);
    },
    isRunning ? delay : null,
  );

  const openModal = (item) => {
    //문 닫히고

    dispatch(handleOpenCloseWashingMachine(false));
    setMachineShake(true);
    setTimeout(() => {
      setMachineShake(false);
    }, 1000);
    setTimeout(() => {
      dispatch(handleOpenClothesModal(item));
    }, 1100);
    return;
  };

  return (
    <WaterContainer machineShake={machineShake}>
      <Machine ref={drop}>
        <Above></Above>
        <Canvas>
          <Header>
            <Programmer></Programmer>
            <LED nowTime={nowTime}></LED>
            <Button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Button>
            <Separator>
              <span></span>
              <span></span>
              <span></span>
            </Separator>
          </Header>
          <Flare>
            <span>
              <p></p>
            </span>
            <span>
              <p></p>
            </span>
          </Flare>
          <Body className="open" isOpenClose={stateOpenClose.isOpenClose}></Body>
          <InnerBody>
            <WaveOne></WaveOne>
            <WaveTwo></WaveTwo>
            <WaveThree></WaveThree>
            <WaveFour></WaveFour>
          </InnerBody>
          <Footer>
            <Edge></Edge>
            <Fix></Fix>
          </Footer>
        </Canvas>
        <Base></Base>
      </Machine>
    </WaterContainer>
  );
}

export default WashingMachine;
