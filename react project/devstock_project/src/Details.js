import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Characters from "./pages/Characters";

const WrapperPages = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  width: 20vw;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%);
  font-family: "Architects Daughter", cursive;
  font-size: 16px;
  background-color: rgba(184, 229, 250, 0.5);
  border 2px solid black;
`;

function Details() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getCharacter = async () => {
    console.log("searching...");
    console.log("route:");

    const result = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    console.log("result:", result);
    setData(result.data);
    setLoading(false);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <WrapperPages>
      <img alt={data.image} src={data.image} />
      <h1>{data.name}</h1>
      <div>
        {data.species} <span>({data.status})</span>
      </div>
      <div>{data.location.name}</div>
    </WrapperPages>
  );
}

export default Details;
