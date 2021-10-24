import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import WashingMachine from './components/WashingMachine';
import ClothesContainer from './components/ClothesContainer';
import WashInfoModal from './components/WashInfoModal';

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
`;

const Background = styled.div`
  width: 70%;
  height: 80%;
  /* border-radius: 30px; */

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: #c4b2a8;
  box-shadow: 28px 28px 55px #a7978f, -28px -28px 55px #e1cdc1;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    width: 90%;
  }
`;

function App() {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <DndProvider backend={HTML5Backend}>
      <AppCss>
        <Background>
          <WashingMachine />
          <ClothesContainer />
        </Background>
        {state.ClothesModalReducer.isModalOpenClose ? (
          <WashInfoModal data={state.ClothesModalReducer.ClothesData[0]} />
        ) : null}
      </AppCss>
    </DndProvider>
  );
}

export default App;
