import styled, { keyframes } from 'styled-components';
import Trashbin from './components/Trashbin';

const AppCss = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('../background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index: 0;
  background-color: white;
  filter: brightness(2);
  background-blend-mode: multiply;
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

function App() {
  return (
    <AppCss>
      <Background></Background>
      <Foreground></Foreground>
      <Trashbin />
    </AppCss>
  );
}

export default App;
