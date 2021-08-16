import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  text-align: right;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: rgba(184, 229, 250, 0.5);
  z-index: 4;
`;
const LogoFragment = styled.span`
  color: #25274d;
`;
const Logo = styled.p`
  width: 20%;
  display: flex;
  text-align: left;
  margin-left: 4%;
  padding: 0;
  font-family: "Oswald", sans-serif;
  font-size: 24px;
  color: white;
  margin-block-end: 0;
  margin-block-start: 0;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  width: 71%;
  justify-content: flex-end;
  text-align: right;
  margin-right: 5%;
  flex-wrap: wrap;
`;
const ListElement = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-top: 5%;

  span {
    height: 2px;
    width: 25px;
    margin-bottom: 4px;
    border-radius: 5px;
    background: black;
  }
`;

const NavigationButton = styled(Link)`
  position: relative;
  font-size: 18px;
  font-family: "Oswald", sans-serif;
  color: #25274d;
  padding: 0 10px 0 10px;
  margin: 0 7px;
  text-decoration: none;
  border-radius: 5%;

  &::after {
    content: "";
    position: absolute;
    bottom: -20%;
    left: -30%;
    width: 100%;
    height: 2px;
    background-color: #25274d;
    transition: 0.2s linear;
    opacity: 0;
  }

  &:hover::after {
    left: 0;
    opacity: 1;
    outline: none;
  }
  &:active {
    color: blue;
    outline: none;
  }
`;

function Nav() {
  return (
    <Navigation>
      <Logo>
        DevStock<LogoFragment>Labs</LogoFragment>
      </Logo>
      <List>
        <ListElement>
          <NavigationButton to="/" title="Powrót do strony głównej">
            Strona główna
          </NavigationButton>
          <NavigationButton to="/pages/About" title="Autor strony">
            O mnie
          </NavigationButton>
        </ListElement>
        <ListElement>
          <NavigationButton
            to="/pages/Stoper"
            title="Skonfiguruj i uruchom stoper"
          >
            Stoper
          </NavigationButton>
        </ListElement>
        <ListElement>
          <NavigationButton
            to="/pages/Counter"
            title="Skonfiguruj i uruchom licznik"
          >
            Licznik
          </NavigationButton>
        </ListElement>
        <ListElement>
          <NavigationButton
            href="#characters"
            title="Wyświetl dostępne postacie"
          >
            Lista postaci
          </NavigationButton>
        </ListElement>
        <ListElement>
          <NavigationButton href="#registration" title="Zarejestruj się">
            Rejestracja
          </NavigationButton>
        </ListElement>
        <ListElement>
          <NavigationButton href="login" title="Zaloguj się">
            Logowanie
          </NavigationButton>
          <Hamburger>
            <span />
            <span />
            <span />
          </Hamburger>
        </ListElement>
      </List>
    </Navigation>
  );
}

export default Nav;
