import styled, { keyframes } from 'styled-components';

import WashingMachine from './components/WashingMachine';

const AppCss = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url('https://www.wallpapertip.com/wmimgs/79-793433_pastel-aesthetic-wallpaper-blue.jpg');
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  width: 70%;
  height: 80%;
  border-radius: 30px;
  background-color: #c8d3ff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: #ffffff -3px -4px 10px 0px, #757ea0 3px 4px 10px 0px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    width: 90%;
  }
`;

const Foreground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../test.png');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index: 2;
  /* filter: opacity(0.5) drop-shadow(0 0 0 green); */
`;

const ClothesContainer = styled.div`
  width: 46%;
  height: 90%;
  background-color: blue;
`;

function App() {
  return (
    <AppCss>
      <Background>
        <WashingMachine />
        <ClothesContainer>옷container</ClothesContainer>
      </Background>
    </AppCss>
  );
}

export default App;
