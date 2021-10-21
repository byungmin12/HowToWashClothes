import styled, { keyframes } from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import WashingMachine from './components/WashingMachine';
import ClothesContainer from './components/ClothesContainer';
const AppCss = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url('https://www.wallpapertip.com/wmimgs/79-793433_pastel-aesthetic-wallpaper-blue.jpg');
  background-size: 100vw 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
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

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <AppCss>
        <Background>
          <WashingMachine />
          <ClothesContainer />
        </Background>
      </AppCss>
    </DndProvider>
  );
}

export default App;
