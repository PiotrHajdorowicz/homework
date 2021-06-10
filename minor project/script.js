const page = 1;
let info = null;

async function main() {
  const buttonPrev = document.getElementById(`prev`);
  const buttonNext = document.getElementById(`next`);
  console.log("info before", info);

  buttonPrev.addEventListener(`click`, async (el) => {
    console.log("info click", info);

    const characters = await downloadData();
    info = characters.info;
    const onlyArrayWithCharacters = characters.results;
    const newArray = onlyArrayWithCharacters.filter((char) => char.id < 11);
    console.log("nowa tablica", newArray);
    const fetchCharactersToHtml = document.getElementById(`description`);
    fetchCharactersToHtml.innerHTML = `Baza danych zawiera łącznie ${characters.info.count} postaci.`;

    createList();
  });

  buttonNext.addEventListener(`click`, async (el) => {
    page++;

    const characters = await downloadData();
    info = characters.info;
    const onlyArrayWithCharacters = characters.results;
    const newArray = onlyArrayWithCharacters.filter((char) => char.id < 11);
    console.log("nowa tablica", newArray);
    const fetchCharactersToHtml = document.getElementById(`description`);
    fetchCharactersToHtml.innerHTML = `Baza danych zawiera łącznie ${characters.info.count} postaci.`;
    createList();
  });
  async function downloadData() {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const response = await data.json();
    return response;
  }
  const characters = await downloadData();
  const onlyArrayWithCharacters = characters.results;
  const newArray = onlyArrayWithCharacters.filter((char) => char.id < 11);
  console.log("nowa tablica", newArray);
  const fetchCharactersToHtml = document.getElementById(`description`);
  fetchCharactersToHtml.innerHTML = `Baza danych zawiera łącznie ${characters.info.count} postaci.`;

  //AD 1: BASIC PROJECT - RENDERING FIRST 10 NAMES IN DOM WITH USAGE OF SIMPLE LIST

  async function createList() {
    const ul = document.createElement("ul");
    ul.setAttribute("class", "renderedList");

    document.getElementById("renderList").appendChild(ul);
    await newArray.forEach(renderCharactersList);

    async function renderCharactersList(characters) {
      let li = document.createElement("li");
      li.setAttribute("class", "character");

      ul.appendChild(li);

      li.innerHTML = characters.name;

      let container = document.createElement("div");
      let description = document.createElement("p");
      description.setAttribute("class", "status");
      description.innerHTML = characters.status;
      container.appendChild(description);
      li.appendChild(container);

      let imageContainer = document.createElement("div");
      let img = document.createElement("img");
      img.src = characters.image;
      img.alt = characters.alt;
      imageContainer.appendChild(img);
      li.appendChild(imageContainer);
      info = characters.info;
    }
  }
  await createList();
  // AD 2: MORE ADVANCED PROJECT
}

main();
