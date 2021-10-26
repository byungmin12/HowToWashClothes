import styled, { keyframes, css } from 'styled-components';

export const open = keyframes`
from {
        transform: perspective(1000px) rotateY(0deg);
        transform-origin: 0% 0%;
    }
    to {
        transform: perspective(1000px) rotateY(-105deg);
        transform-origin: 0% 0%;
    }
`;

export const close = keyframes`
from {
  transform: perspective(1000px) rotateY(-105deg);
        transform-origin: 0% 0%;
    }
    to {
        
        transform: perspective(1000px) rotateY(0deg);
        transform-origin: 0% 0%;
    }
`;

export const appear = keyframes`

    to {
       opacity:1
    }
`;

export const waving = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const wavingMachine = keyframes`
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

export const WaterContainer = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${wavingMachine} 1s infinite;
  z-index: 6;
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

export const Machine = styled.div`
  width: 260px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* -webkit-filter: drop-shadow(black -3px -4px 10px);
  filter: drop-shadow(black 3px 4px 10px); */
  transform: scale(1.5);
  position: relative;
  @media screen and (max-width: 600px) {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    transform: scale(1.3);
  }
  @media screen and (max-width: 1110px) {
    transform: scale(1.2);
  }
  @media screen and (max-width: 920px) {
    transform: scale(1.1);
  }
  @media screen and (max-width: 840px) {
    transform: scale(1);
  }
`;
export const Above = styled.div`
  width: 280px;
  height: 30px;
  /* margin: 0 auto -5px auto; */
  border-radius: 20px;
  perspective: 100px;
  position: relative;
  ::before {
    content: '';
    display: block;
    width: 243px;
    height: 30px;
    border: solid 2px black;
    border-radius: 20px;
    border-bottom: none;
    transform: rotateX(40deg);
    background: #8c9395;
    position: absolute;
    top: 15px;
    left: 17px;
  }
`;

export const Body = styled.div`
  width: 140px;
  height: 140px;
  margin: 30px auto 0 auto;
  position: relative;
  box-shadow: 0 0 0 4px black, 0 0 0 24px #8c9395, 0 0 0 28px black;
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

export const Canvas = styled.div`
  width: 260px;
  height: 355px;
  border: solid 2px black;
  border-radius: 20px;
  overflow: hidden;
  background: #b4b4b4;
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

export const Header = styled.div`
  width: 100%;
  height: 80px;
  background: #a2a2a2;
`;

export const Programmer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border: solid 8px black;
  border-radius: 100%;
  background: #6aa2f2;
  margin: 10px 0 0 20px;
  float: left;
  ::before {
    content: '';
    width: 15px;
    height: 15px;
    border: solid 4px black;
    border-radius: 100%;
    background: #96c1fd;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const LED = styled.div`
  position: relative;
  width: 80px;
  height: 23px;
  border: solid 8px black;
  border-radius: 5px;
  margin: 10px 0 0 20px;
  float: left;
  transform: translate(-50%, -50%);
  top: 25px;
  left: 45px;
  ::before {
    ${({ nowTime }) => {
      return `content: "${nowTime}";`;
    }};
    width: 80px;
    height: 115%;
    background: #99d3ba;
    border-left: solid 8px black;
    border-right: solid 8px black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.div`
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
    border: solid 4px black;
    &:nth-child(1) {
      background: #fd8185;
    }
  }
`;
export const Separator = styled.div`
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
        border: solid 2px black;
        border-radius: 100%;
        position: absolute;
        bottom: 0;
        left: -130px;
        background-color: #a2a2a2;
      }
    }
    &:nth-child(2) {
      width: 46%;
      margin-top: -4px;
      height: 26px;
      background-color: #a2a2a2;
      ::before {
        content: '';
        width: 200px;
        height: 200px;
        border: solid 2px black;
        border-radius: 100%;
        background: #b4b4b4;
        position: absolute;
        top: 5px;
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
        border: solid 2px black;
        border-radius: 100%;
        position: absolute;
        bottom: 0;
        right: -130px;
        background-color: #a2a2a2;
      }
    }
  }
`;

export const Flare = styled.div`
  position: absolute;
  top: 110px;
  left: 0px;
  right: 0;
  width: 250px;
  height: 200px;
  margin: 0 auto;
  background-color: #b4b4b4;
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

export const InnerBody = styled.div`
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

export const WaveOne = styled.div`
  width: 250px;
  height: 250px;
  position: absolute;
  top: -65%;
  left: -30%;
  border-radius: 45%;
  background: rgba(3, 169, 244, 0.8);
  opacity: 0;
  animation-name: ${appear}, ${waving};
  animation-delay: 0.5s, 0.7s;
  animation-duration: 0.3s, 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1, infinite;
`;

export const WaveTwo = styled.div`
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
  animation-delay: 0.5s 0.7s;
  animation-duration: 0.6s, 3s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1, infinite;
`;
export const WaveThree = styled.div`
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
  animation-delay: 0.5s 0.7s;
  animation-duration: 0.6s, 5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1, infinite;
`;
export const WaveFour = styled.div`
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
  animation-delay: 0.5s 0.7s;
  animation-duration: 0.6s, 5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1, infinite;
`;

export const Footer = styled.div`
  width: 100%;
  height: 105px;
  position: relative;
  background-color: #b4b4b4;
  ::before {
    content: '';
    width: 0px;
    height: 12px;
    display: block;
    margin-left: 10px;
    border: solid 4px #fff;
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
    border: solid 4px #fff;
    margin-bottom: 10px;
    border-radius: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
export const Edge = styled.div`
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
    border: solid 8px #fff;
    position: absolute;
    top: -100%;
    left: 0;
  }
`;

export const Fix = styled.div`
  width: 0px;
  height: 12px;
  display: block;
  margin-left: 10px;
  border: solid 4px #fff;
  margin-bottom: 10px;
  border-radius: 10px;
  position: absolute;
  top: 62px;
  left: 0;
`;

export const Base = styled.div`
  width: 200%;
  height: 8px;
  transform: translate(-23%, 0);
  /* border-bottom: solid 8px black; */
  &:before,
  &:after {
    content: '';
    display: block;
    width: 35px;
    height: 8px;
    background: black;
    border: solid 2px black;
    border-top: solid 1px black;
    border-radius: 20px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    position: absolute;
    top: -5px;
  }
  &:before {
    left: 51%;
  }
  &:after {
    left: 88%;
  }
`;

export const WashingMachineTextContainer = styled.div`
  position: absolute;
  top: 90%;
  left: 20%;
  z-index: 100;
  @media screen and (max-width: 1200px) {
    top: 80%;
  }
`;

export const WashingMachineArrow = styled.img`
  z-index: 100;
  width: 150px;
  transform: rotate(25deg);
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const WashingMachineText = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: white;
  font-family: 'font-css';
  text-align: center;
  position: absolute;
  top: 20%;
  z-index: 1;
  left: 100%;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
