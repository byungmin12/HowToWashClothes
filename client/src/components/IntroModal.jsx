import React from 'react';
import styled from 'styled-components';
import WashingMachine from './WashingMachine';
import Clothes from './Clothes';

const Intro = styled.div`
  width: 110%;
  height: 110%;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50px;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 5;
  border: 5px solid white;
`;

const Title = styled.div`
  width: 100%;
  font-size: calc((65vw - 4.5rem) / 7);
  text-align: center;
  color: white;
  font-weight: 800;
  opacity: 1;
  font-family: 'font-css';
  z-index: 600;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);

  @media screen and (max-width: 1200px) {
    font-size: calc((65vw - 4.5rem) / 7);
  }
  @media screen and (max-width: 1110px) {
    font-size: calc((75vw - 4.5rem) / 7);
    top: 7%;
  }
  @media screen and (max-width: 780px) {
    font-size: calc((90vw - 4.5rem) / 7);
  }
  @media screen and (max-width: 600px) {
    font-size: calc((90vw - 2rem) / 7);
  }
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ClothesArrow = styled.img`
  position: absolute;
  transform: translate(-50%, -50%) rotate(180deg);
  width: 10rem;
  top: 50%;
  left: 55%;
  z-index: 999;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const WashingMachineTextContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const WashingMachineArrow = styled.img`
  z-index: 100;
  width: 150px;
  transform: rotate(25deg);
  /* position: absolute; */
  /* top: 80%; */
  /* left: 20%; */
  /* @media screen and (max-width: 1110px) {
    top: 75%;
  } */
`;

const WashingMachineTextArrowContainer = styled.div`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
`;

export const WashingMachineText = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: white;
  font-family: 'font-css';
  text-align: center;
  /* position: absolute; */
  /* top: 83%; */
  z-index: 1;
  /* left: 45%; */
  /* @media screen and (max-width: 1110px) {
    top: 77%;
  } */
`;

const ClothesMainContainer = styled.div`
  width: 50%;
  height: 100%;
`;

const ClothesArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 105px;
  height: 105px;
  border: 3px solid white;
  border-radius: 30px;
  @media screen and (max-width: 600px) {
    left: 50%;
  }
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

const ClothesContainer = styled.div`
  position: absolute;
  top: -25%;
  left: -25%;
`;

const DragNDrop = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40%;
  left: 60%;
  font-size: 4rem;
  font-weight: 800;
  color: white;
  font-family: 'font-css';
  z-index: 999;
  width: 100%;
  text-align: center;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const ClickClothes = styled.div`
  color: white;
  position: absolute;
  transform: translate(-50%, 0);
  top: 60%;
  left: 75%;
  font-size: 3rem;
  font-weight: 800;
  font-family: 'font-css';
  z-index: 999;
  text-align: center;
  width: 100%;
  img {
    height: 80px;
  }
  @media screen and (max-width: 600px) {
    left: 50%;
  }
`;

const CloseButton = styled.div`
  width: 2rem;
  position: absolute;
  top: 92%;
  left: 50%;
  font-size: 2rem;
  color: white;
  border-radius: 10px;
  border: 3px solid white;
  /* padding: 3px; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2px 0 2px;
  transform: translate(-50%, 0);

  :hover {
    cursor: pointer;
  }
`;

function IntroModal({ setIsModal }) {
  const ExData = [
    {
      id: 40,
      title: 'T-Shirt',
      url: '../../icon/40.png',
      explain:
        '없는 이 청춘의 철환하였는가? 같이, 이 인생에 이상, 전인 맺어, 위하여서 보는 무엇이 아니다. 그들의 스며들어 인류의 듣는다. 시들어 생명을 인생에 것이다.보라, 꾸며 뿐이다. 영원히 얼마나 동력은 가치를 듣는다. 자신과 보는 구하지 가슴이 같은 인류의 부패뿐이다.',
    },
  ];

  const handleOpenClose = () => {
    setIsModal(false);
  };

  return (
    <Intro>
      <Title>How to use this App ?</Title>
      <MainContainer>
        <WashingMachineTextContainer>
          <WashingMachine />
          <WashingMachineTextArrowContainer>
            <WashingMachineArrow src="../../curveArrow.png.png"></WashingMachineArrow>
            <WashingMachineText>
              WASHING <br />
              MACHINE
            </WashingMachineText>
          </WashingMachineTextArrowContainer>
        </WashingMachineTextContainer>

        <ClothesMainContainer>
          <ClothesArrowContainer>
            {/* <Clothes data={ExData} /> */}
            <ClothesContainer>
              {ExData.map((el) => {
                return <Clothes data={el} key={el.id} />;
              })}
            </ClothesContainer>
            <ClothesText>Clothes</ClothesText>
            <ClickClothes>
              <img src="../../rowArrow.png" />
              <div>
                Click
                <br />
                Button
              </div>
            </ClickClothes>
          </ClothesArrowContainer>

          <ClothesArrow src="../../ClothesArrow.png" />
          <DragNDrop>
            <div>Drag N Drop</div>
          </DragNDrop>
        </ClothesMainContainer>

        <CloseButton onClick={handleOpenClose}>x</CloseButton>
      </MainContainer>
    </Intro>
  );
}

export default IntroModal;
