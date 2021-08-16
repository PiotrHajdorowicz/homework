import React from "react";
import styled, { keyframes } from "styled-components";

const slidingLetters = keyframes`
60% {
  transform: translate(20px, 0) scale(1);
  color: #25274d;
}

80% {
  transform: translate(20px, 0) scale(1);
  color: white;
}

99% {
  transform: translate(0) scale(1.2);
  color: white;
}

100% {
  transform: translate(0) scale(1);
  opacity: 1;
  color: white;
}

`;
const HeaderLetters = styled.span`
  color: #00154f;
  opacity: 0;
  transform: translate(-300px, 0) scale(0);
  animation: ${slidingLetters} 0.5s forwards;
`;

const Motto = styled.h1`
  font-size: 50px;
  margin: 2% 5% 0 5%;
  padding-left: 10%;
  font-family: Oswald;
  display: flex;
  position: absolute;
  top: 9%;

  ${HeaderLetters}:nth-of-type(1) {
    animation-delay: 0.05s;
  }
  ${HeaderLetters}:nth-of-type(2) {
    animation-delay: 0.1s;
  }
  ${HeaderLetters}:nth-of-type(3) {
    animation-delay: 0.15s;
  }
  ${HeaderLetters}:nth-of-type(4) {
    animation-delay: 0.2s;
  }
  ${HeaderLetters}:nth-of-type(5) {
    animation-delay: 0.25s;
  }
  ${HeaderLetters}:nth-of-type(6) {
    animation-delay: 0.3s;
  }
  ${HeaderLetters}:nth-of-type(7) {
    animation-delay: 0.35s;
  }
  ${HeaderLetters}:nth-of-type(8) {
    animation-delay: 0.4s;
  }
  ${HeaderLetters}:nth-of-type(9) {
    animation-delay: 0.45s;
  }
  ${HeaderLetters}:nth-of-type(10) {
    animation-delay: 0.5s;
  }
  ${HeaderLetters}:nth-of-type(11) {
    animation-delay: 0.55s;
  }
  ${HeaderLetters}:nth-of-type(12) {
    animation-delay: 0.6s;
  }
  ${HeaderLetters}:nth-of-type(13) {
    animation-delay: 0.65s;
  }
  ${HeaderLetters}:nth-of-type(14) {
    animation-delay: 0.7s;
  }
  ${HeaderLetters}:nth-of-type(15) {
    animation-delay: 0.75s;
  }
  ${HeaderLetters}:nth-of-type(16) {
    animation-delay: 0.8s;
  }
  ${HeaderLetters}:nth-of-type(17) {
    animation-delay: 0.85s;
  }
`;

function Heading() {
  return (
    <Motto>
      <HeaderLetters>L</HeaderLetters>
      <HeaderLetters>e</HeaderLetters>
      <HeaderLetters>t`</HeaderLetters>
      <HeaderLetters>s</HeaderLetters> &nbsp;
      <HeaderLetters>m</HeaderLetters>
      <HeaderLetters>a</HeaderLetters>
      <HeaderLetters>k</HeaderLetters>
      <HeaderLetters>e</HeaderLetters>&nbsp;<HeaderLetters>i</HeaderLetters>
      <HeaderLetters>t</HeaderLetters>&nbsp;<HeaderLetters>h</HeaderLetters>
      <HeaderLetters>a</HeaderLetters>
      <HeaderLetters>p</HeaderLetters>
      <HeaderLetters>p</HeaderLetters>
      <HeaderLetters>e</HeaderLetters>
      <HeaderLetters>n</HeaderLetters>
      <HeaderLetters>!</HeaderLetters>
    </Motto>
  );
}
export default Heading;
