import React, { useEffect, useState } from "react";
import styled from "styled-components";
import programming from "./img/programming.jpg";
import design from "./img/design.jpg";
import office6 from "./img/office6.jpg";
import office4 from "./img/office4.jpg";
import office5 from "./img/office5.jpg";
import stonks from "./img/stonks.jpg";

const MainComponent = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: absolute;
  top: 46%;
  width: 100%;
  align-items: center;
  flex-wrap: nowrap;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 28px;
  font-family: Oswald;
  margin-bottom: 5%;
`;

const Section = styled.section`
  width: 80%;
  flex-wrap: wrap;
  display: flex;
  text-align: center;
  justify-content: space-evenly;
`;
const Division = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: rgba(184, 229, 250, 0.5);
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  margin-top: 2%;
`;
const Paragraph = styled.p`
  font-family: "Oswald", sans-serif;
  font-size: 18px;
`;

function Main() {
  return (
    <MainComponent>
      <Heading>Jak możemy Ci dzisiaj pomóc ?</Heading>
      <Section>
        <Division>
          <img src={programming} alt="programming" />
          <h3>Programowanie</h3>
          <Paragraph>
            Wykonujemy aplikacje internetowe dla firm. Jest to nasza główna
            działalność, zorientowana na biznesowych klientów.
          </Paragraph>
        </Division>
        <Division>
          <img src={design} alt="design" />
          <h3>Design</h3>
          <Paragraph>
            Nasi pracownicy może nie są w tym najlepsi, ale szybko się uczą.
            Przy odrobinie chęci i współpracy jesteśmy w stanie stworzyć
            niesamowite rzeczy!
          </Paragraph>
        </Division>
        <Division>
          <img src={office6} alt="office with talking people" />
          <h3>Współpraca</h3>
          <Paragraph>
            Chętnie podejmiemy współpracę jako podwykonawcy lub zlecimy część
            naszych projektów do wykonania!
          </Paragraph>
        </Division>
        <Division>
          <img
            src={office4}
            alt="three people by their desks in office with computers"
          />
          <h3>Społeczność</h3>
          <Paragraph>
            Naszą misją jest także budowanie stałych relacji i budowanie
            przyszłych kontaktów.
          </Paragraph>
        </Division>
        <Division>
          <img
            src={office5}
            alt="people in office cheerishing and talking during break by their desks"
          />
          <h3>Pogawędki</h3>
          <Paragraph>
            Ile można pracować ? Jesteśmy otwarci na rozmowy!
          </Paragraph>
        </Division>
        <Division>
          <img src={stonks} alt="diagrams" />
          <h3>Ilustracje</h3>
          <Paragraph>
            Zawodowowo zajmujemy się wyszukiwaniem grafiki z pixabay do
            projektów! Bez grafików jest ciężko.
          </Paragraph>
        </Division>
      </Section>
    </MainComponent>
  );
}

export default Main;
