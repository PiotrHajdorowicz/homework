import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 40vh;
  width: 30vh;
  background-color: grey;
  color: white;
  border 3px solid black;
  text-align:center;
  align-items:center;
`;

const Monitor = styled.div`
display:flex;
background-color: blue;
height:20%;
width: 75%;
padding: 0;
margin: 0;

align-items: center;
justify-content: center;
border 2px solid black;
line-height: 1.5;
font-size: 15px;
`;

function Counter() {
  const [number, SetCount] = useState(0);

  return (
    <Container>
      <Monitor>
        <p>Licznik: {number}</p>
      </Monitor>
      <button onClick={() => SetCount(number + 1)}>Zwiększ o 1</button>
      <button onClick={() => SetCount(number - 1)}>Zmniejsz o 1</button>
      <button onClick={() => SetCount(0)}>Zresetuj licznik</button>
    </Container>
  );
}
export default Counter;
