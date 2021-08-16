import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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
  font-size: 16px;
`;
function Stoper() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;

    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  return (
    <Wrapper>
      <h1>Stoper</h1>
      <Monitor>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 1000)).slice(-2)}</span>
      </Monitor>
      <div>
        <button onClick={() => setStart(true)}>Start</button>
        <button onClick={() => setStart(false)}>Stop</button>
        <button
          onClick={() => {
            setTime(0);
            setStart(false);
          }}
        >
          Zresetuj
        </button>
      </div>
    </Wrapper>
  );
}

export default Stoper;
