import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleOpenCloseWashingMachine } from '../actions/WashingMachineActionIndex';
import { handleOpenClothesModal } from '../actions/ClotheModalActionIndex';
import styled, { keyframes, css } from 'styled-components';
import { useDrop } from 'react-dnd';

const open = keyframes`
from {
        transform: perspective(1000px) rotateY(0deg);
        transform-origin: 0% 0%;
    }
    to {
        transform: perspective(1000px) rotateY(-105deg);
        transform-origin: 0% 0%;
    }
`;

const close = keyframes`
from {
  transform: perspective(1000px) rotateY(-105deg);
        transform-origin: 0% 0%;
    }
    to {
        
        transform: perspective(1000px) rotateY(0deg);
        transform-origin: 0% 0%;
    }
`;

const appear = keyframes`

    to {
       opacity:1
    }
`;

const waving = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const wavingMachine = keyframes`
10%{
  transform : translate(-0.6% , 0.6%)
}
20%{
  transform : translate(0.6% , 0.4%)

}
60%{
  transform : translate(-0.6% , 0.6%)

}
40%{
  transform : translate(0.6% , 0.2%)

}
50%{
  transform : translate(-0.6% , 0.6%)

}
60%{
  transform : translate(0.6% , 0.8%)

}
70%{
  transform : translate(-0.6% , 0.6%)
  
}
80%{
  transform : translate(0.6% , 0.3%)
  
}
90%{
  transform : translate(-0.6% , 0.6%)
  
}
  100% {
    transform : translate(0% , 0%)

  }
`;

const WaterContainer = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${wavingMachine} 1s infinite;
  ${({ machineShake }) => {
    return machineShake
      ? css`
          animation: ${wavingMachine} 0.5s infinite;
        `
      : css`
          animation-play-state: paused;
        `;
  }}
`;

const Machine = styled.div`
  width: 260px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-filter: drop-shadow(black -3px -4px 10px);
  filter: drop-shadow(black 3px 4px 10px);
`;
const Above = styled.div`
  width: 240px;
  height: 30px;
  /* margin: 0 auto -5px auto; */
  border-radius: 20px;
  perspective: 100px;
  ::before {
    content: '';
    display: block;
    width: 215px;
    height: 30px;
    border: solid 12px #0e1988;
    border-radius: 20px;
    border-bottom: none;
    transform: rotateX(40deg);
    background: #deedfe;
  }
`;

const Body = styled.div`
  width: 140px;
  height: 140px;
  margin: 30px auto 0 auto;
  position: relative;
  box-shadow: 0 0 0 8px #0e1988, 0 0 0 24px #6aa2f2, 0 0 0 32px #0e1988;
  border-radius: 100%;
  background: rgba(151, 253, 242, 0.5);
  overflow: hidden;
  z-index: 3;
  ${({ isOpenClose }) => {
    return isOpenClose
      ? css` transform: translateZ(0);
      animation: ${open} 0.5s ease-in 0s 1 forwards;
    }`
      : css` transform: translateZ(0);
      animation: ${close} 0.5s ease-in 0s 1 forwards;
    }`;
  }}
`;

const Canvas = styled.div`
  width: 260px;
  height: 355px;
  border: solid 8px #0e1988;
  border-radius: 20px;
  overflow: hidden;
  background: #d4e4fd;
  box-shadow: inset 0 -12px #c2defd;
  position: relative;
  z-index: 100;
  /* &:hover {
    ${Body} {
      transform: translateZ(0);
      animation: ${open} 0.5s ease-in 0s 1 forwards;
    }
  } */
  /* ${({ isDragging }) => {
    return isDragging ? `opacity: 0.4;` : `opacity: 1;`;
  }}; */
`;

const Header = styled.div`
  width: 100%;
  height: 80px;
  background: #b7d3fd;
`;

const Programmer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border: solid 8px #0e1988;
  border-radius: 100%;
  background: #6aa2f2;
  margin: 10px 0 0 20px;
  float: left;
  box-shadow: 0 5px #a3c5f9;
  ::before {
    content: '';
    width: 15px;
    height: 15px;
    border: solid 4px #0e1988;
    border-radius: 100%;
    background: #96c1fd;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const LED = styled.div`
  position: relative;
  width: 70px;
  height: 23px;
  border: solid 8px #0e1988;
  border-radius: 5px;
  background: #6aa2f2;
  margin: 10px 0 0 20px;
  float: left;
  box-shadow: 0 5px #a3c5f9;
  ::before {
    content: '';
    width: 30px;
    height: 115%;
    background: #99d3ba;
    border-left: solid 8px #0e1988;
    border-right: solid 8px #0e1988;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Button = styled.div`
  width: 60px;
  float: right;
  margin: 10px 15px 0 0;
  span {
    float: right;
    display: inline-block;
    width: 13px;
    height: 3px;
    margin: 3px;
    border-radius: 30%;
    background: #96c1fd;
    border: solid 4px #0e1988;
    box-shadow: 0 3px #a3c5f9;
    &:nth-child(1) {
      background: #fd8185;
    }
  }
`;
const Separator = styled.div`
  width: 100%;
  height: 22px;
  float: left;
  margin-top: 5px;
  span {
    height: 100%;
    display: block;
    float: left;
    position: relative;
    overflow: hidden;
    &:nth-child(1) {
      width: 27%;
      ::before {
        content: '';
        width: 400px;
        height: 200px;
        border: solid 8px #0e1988;
        border-radius: 100%;
        position: absolute;
        bottom: 0;
        left: -130px;
      }
    }
    &:nth-child(2) {
      width: 46%;
      margin-top: -4px;
      height: 26px;
      ::before {
        content: '';
        width: 200px;
        height: 200px;
        border: solid 8px #0e1988;
        border-radius: 100%;
        background: #d4e4fd;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
    &:nth-child(3) {
      width: 27%;
      ::before {
        content: '';
        width: 400px;
        height: 200px;
        border: solid 8px #0e1988;
        border-radius: 100%;
        position: absolute;
        bottom: 0;
        right: -130px;
      }
    }
  }
`;

const Flare = styled.div`
  position: absolute;
  top: 110px;
  left: 0px;
  right: 0;
  width: 250px;
  height: 200px;
  margin: 0 auto;
  span:nth-child(1) {
    float: right;
    position: relative;
    top: -10px;
    left: -25px;
    right: 30px;
    width: 20px;
    height: 20px;
    overflow: hidden;
    p {
      display: block;
      width: 120px;
      height: 120px;
      border: solid 8px #fff;
      border-radius: 100%;
      position: absolute;
      top: -10px;
      right: -10px;
    }
  }
  span:nth-child(2) {
    float: right;
    clear: both;
    position: relative;
    top: 0px;
    right: 10px;
    width: 25px;
    height: 65px;
    transform: rotate(-10deg);
    overflow: hidden;
    p {
      display: block;
      width: 160px;
      height: 160px;
      border: solid 8px #fff;
      border-radius: 100%;
      position: absolute;
      top: -55px;
      right: 0;
    }
  }
`;

const InnerBody = styled.div`
  width: 140px;
  height: 140px;
  margin: 30px auto 0 auto;
  border-radius: 100%;
  background: #453e57;
  overflow: hidden;
  position: absolute;
  top: 80px;
  left: 60px;
  z-index: 2;
  box-shadow: 0 0 0 8px #d6f8ff;
`;

const WaveOne = styled.div`
  width: 250px;
  height: 250px;
  position: absolute;
  top: -65%;
  left: -30%;
  border-radius: 45%;
  background: rgba(3, 169, 244, 0.8);
  opacity: 0;
  /* animation: ${waving} 1s infinite linear; */
  animation-name: ${appear}, ${waving};
  animation-delay: 0s, 0.7s;
  animation-duration: 0.6s, 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1, infinite;
`;

const WaveTwo = styled.div`
  width: 240px;
  height: 240px;
  position: absolute;
  top: -100%;
  left: -30%;
  border-radius: 45%;
  background: rgba(34, 79, 242, 0.8);
  opacity: 0;

  /* animation: ${waving} 3s infinite linear; */
  animation-name: ${appear}, ${waving};
  animation-delay: 0s, 0.7s;
  animation-duration: 0.6s, 3s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1, infinite;
`;
const WaveThree = styled.div`
  width: 210px;
  height: 210px;
  position: absolute;
  top: -100%;
  left: -30%;
  border-radius: 45%;
  background: #453e57;
  border: 3px solid rgba(131, 119, 152, 0.7);
  opacity: 0;
  /* animation: ${waving} 5s infinite linear; */
  animation-name: ${appear}, ${waving};
  animation-delay: 0s, 0.7s;
  animation-duration: 0.6s, 5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1, infinite;
`;
const WaveFour = styled.div`
  width: 250px;
  height: 250px;
  position: absolute;
  top: -95%;
  left: -30%;
  border-radius: 46%;
  background: linear-gradient(rgba(252, 251, 232, 0.1) 10%, transparent);
  opacity: 0;
  /* animation: ${waving} 5s infinite linear; */
  animation-name: ${appear}, ${waving};
  animation-delay: 0s, 0.7s;
  animation-duration: 0.6s, 5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1, infinite;
`;

const Footer = styled.div`
  width: 100%;
  height: 105px;
  position: relative;
  ::before {
    content: '';
    width: 0px;
    height: 12px;
    display: block;
    margin-left: 10px;
    border: solid 4px #0e1988;
    margin-bottom: 10px;
    border-radius: 10px;
    position: absolute;
    top: 35px;
    left: 0;
  }
  ::after {
    content: '';
    width: 62px;
    height: 0px;
    display: block;
    margin-left: 20px;
    border: solid 4px #0e1988;
    margin-bottom: 10px;
    border-radius: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
const Edge = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 10px;
  margin-bottom: 10px;
  position: relative;
  top: 79px;
  overflow: hidden;
  &:before {
    content: '';
    border-radius: 100%;
    width: 100%;
    height: 100%;
    display: block;
    border: solid 8px #0e1988;
    position: absolute;
    top: -100%;
    left: 0;
  }
`;

const Fix = styled.div`
  width: 0px;
  height: 12px;
  display: block;
  margin-left: 10px;
  border: solid 4px #0e1988;
  margin-bottom: 10px;
  border-radius: 10px;
  position: absolute;
  top: 62px;
  left: 0;
`;

const Base = styled.div`
  width: 200%;
  height: 8px;
  transform: translate(-23%, 0);
  /* border-bottom: solid 8px #0e1988; */
  &:before,
  &:after {
    content: '';
    display: block;
    width: 35px;
    height: 8px;
    background: #6aa1f0;
    border: solid 8px #0e1988;
    border-top: solid 5px #0e1988;
    border-radius: 20px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    position: absolute;
    top: -5px;
  }
  &:before {
    left: 49%;
  }
  &:after {
    left: 87%;
  }
`;

function WashingMachine() {
  const [machineShake, setMachineShake] = useState(false);
  const state = useSelector((state) => state.WashingMachineReducer);
  const dispatch = useDispatch();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => openModal(item.id),
    collect: (monito) => ({
      isOver: !!monito.isOver(),
    }),
    hover(item, { id: draggedId }) {
      console.log(draggedId !== item.id);
      //여기서 문 열리고
      dispatch(handleOpenCloseWashingMachine(true));
    },
  }));

  const openModal = (item) => {
    console.log(item, 'open');
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
            <LED></LED>
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
          <Body className="open" isOpenClose={state.isOpenClose}></Body>
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
