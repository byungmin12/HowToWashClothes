import React from "react";
import styled, { keyframes } from "styled-components";

const Svg = styled.svg`
  position: fixed;
  top: 30%;
  overflow: visible;
`;

const BodyImage = styled.image`
  :hover + .cap {
    transform: translate(0%, -20%);
  }
`;

const CapImage = styled.image`
  transition-duration: 1s;
  :hover {
    transform: translate(0%, -20%);
  }
`;

function Trashbin() {
  return (
    <Svg x="0px" y="0px" width="500px" height="700px" viewBox="0 0 1786 2971">
      <BodyImage
        width="100%"
        height="100%"
        x="0"
        y="0"
        href="../body1.svg"
      ></BodyImage>
      <CapImage
        width="100%"
        height="40%"
        x="0px"
        y="0px"
        href="../cap.svg"
        className="cap"
      ></CapImage>
    </Svg>
  );
}

export default Trashbin;
