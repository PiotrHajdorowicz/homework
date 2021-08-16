import React from "react";
import styled from "styled-components";

const DescriptionStyle = styled.p`
  font-size: 16px;
  font-family: lato;
  text-align: justify;
  margin-top: 4%;
  margin-left: 0.5%;
  line-height: 1, 5;
`;

function Description({ description }) {
  return (
    <>
      <DescriptionStyle>{description}</DescriptionStyle>
    </>
  );
}

export default Description;
