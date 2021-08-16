import React from "react";
import styled from "styled-components";

const NameHeading = styled.h3`
  margin-top: 5%;
  font-size: 16px;
  font-family: lato;
`;

function Name({ name }) {
  return <NameHeading>{name}</NameHeading>;
}

export default Name;
