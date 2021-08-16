import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Name from "../Name";
import Description from "../Description";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 40vh;
  background-color: rgba(184, 229, 250, 0.5);
  border: 2px solid black;
`;
const PhotoDivision = styled.div`
  display: flex;
  background-image: url("/lama2.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 100%;
  height: 30vh;
  width: 30vh;
  margin-top: 4%;
  margin-right: 3%;
  margin-left: 2%;
`;
const DivPhotoName = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;
const Me = "Piotr Hajdorowicz";
function About() {
  return (
    <Wrapper>
      <DivPhotoName>
        <PhotoDivision></PhotoDivision>
        <Name name={Me} />
      </DivPhotoName>
      <Description description="Tak, to ja. Piękny i młody, teraz już jedynie przystojny.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tortor consectetur, gravida mi vitae, pharetra eros. Vivamus tristique, nunc a tempor elementum, leo massa cursus nulla, mattis sollicitudin tortor mi sed eros. Mauris massa arcu, sodales quis erat ut, ultricies bibendum sem. Nam lectus purus, pellentesque egestas tortor sit amet, sodales feugiat eros. In imperdiet mollis elit nec imperdiet. Suspendisse vel ipsum magna. Suspendisse vel consequat purus. Ale głupi Ci Rzymianie." />
    </Wrapper>
  );
}
export default About;
