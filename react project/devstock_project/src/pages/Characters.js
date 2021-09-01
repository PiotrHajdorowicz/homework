import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Characters() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(2);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (url) => {
    const res = await axios(
      `https://rickandmortyapi.com/api/character/?page=` + url
    );
    setData(res.data.results);
  };
  const changePageNext = async (page) => {
    page.preventDefault();
    setCount(count + 1);
    await fetchData(count);
  };
  const changePagePrev = async (page) => {
    page.preventDefault();
    setCount(count - 1);
    await fetchData(count);
  };

  const WrapperPages = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    height: 20vh;
    width: 30vw;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%);
    font-family: "Architects Daughter", cursive;
    font-size: 12px;
  `;

  const List = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    border: 1px solid black;
    margin: auto;
    width: 90%;
    padding: 2%;
    position: absolute;
    top: 38%;
    left: 50%;
    transform: translate(-50%);
  `;
  const Character = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
    width: 21%;
    transition: 1s;
    padding: 2%;
    margin: 2%;
    transition: transform 0.4s ease-in-out;
    background-color: rgba(184, 229, 250, 0.5);
    border: 0.5px solid black;

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      transform: scale(1.2);
    }
  `;

  const LinkCharacters = styled(Link)`
    text-decoration: none;
    color: black;
  `;

  return (
    <div>
      <WrapperPages>
        <h1>Rick and Morty</h1>
        <div id="pagesInfo" class="navigation">
          <h4>
            Current page is: <span id="currentPage"></span> out of:
            <span id="allPages"></span>
          </h4>
          <button onClick={changePagePrev}>Previous</button>
          <button onClick={changePageNext}>Next</button>
        </div>
      </WrapperPages>

      <List>
        {data.map((person) => {
          return (
            <Character key={person.id}>
              <LinkCharacters to={`/details/${person.id}`}>
                <div>
                  <img src={person.image} alt={person.name}></img>
                </div>
                <div>
                  <article>
                    <h4>Name: {person.name}</h4>
                  </article>
                  <article>
                    <h4>Gender: {person.gender}</h4>
                  </article>
                  <article>
                    <h4>Location: {person.location.name}</h4>
                  </article>
                  <article>
                    <h4>Status: {person.status}</h4>
                  </article>
                </div>
              </LinkCharacters>
            </Character>
          );
        })}
      </List>
    </div>
  );
}

export default Characters;
