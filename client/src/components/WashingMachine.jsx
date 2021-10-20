import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const WaterContainer = styled.div`
  width: 46%;
  height: 90%;
  background-color: red;
`;

const Machine = styled.div`
  width: 260px;
  height: 400px;
  background: white;
`;
const Above = styled.div`
  width: 230px;
  height: 30px;
  margin: 0 auto -5px auto;
  border-radius: 20px;
  perspective: 100px;
  background-color: white;
  ::before {
    content: '';
    display: block;
    width: 220px;
    height: 30px;
    border: solid 12px #0e1988;
    border-radius: 20px;
    border-bottom: none;
    transform: rotateX(40deg);
    background: #deedfe;
  }
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
const Seperator = styled.div`
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

const Body = styled.div`
  width: 140px;
  height: 140px;
  margin: 30px auto 0 auto;
  position: relative;
  box-shadow: 0 0 0 8px #0e1988, 0 0 0 24px #6aa2f2, 0 0 0 32px #0e1988;
  border-radius: 100%;
  background: #97fff2;
  overflow: hidden;
  z-index: 3;

  :hover {
    transform: translateZ(0);
    animation: ${open} 0.5s ease-in 0s 1 forwards;
  }
  /* ::before {
    content: '';
    display: block;
    width: 140px;
    height: 140px;
    margin: 30px auto 0 auto;
    background-color: red;
    z-index: 5;
  } */
`;

const InnerBody = styled.div`
  width: 140px;
  height: 140px;
  margin: 30px auto 0 auto;
  border-radius: 100%;
  background: black;
  overflow: hidden;
  position: absolute;
  top: 80px;
  left: 60px;
  z-index: 2;
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
    left: 29%;
  }
  &:after {
    left: 60%;
  }
`;

function WashingMachine() {
  return (
    <WaterContainer>
      <Machine>
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
            <Seperator>
              <span></span>
              <span></span>
              <span></span>
            </Seperator>
          </Header>
          <Flare>
            <span>
              <p></p>
            </span>
            <span>
              <p></p>
            </span>
          </Flare>
          <Body></Body>
          <InnerBody></InnerBody>
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
