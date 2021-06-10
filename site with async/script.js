// Wqrwiony jestem, bo chciałem napisać kod po swojemu,zamiast inspirować się bartkiem, tworząc listę a nie jakieś spany
//, ale nie wyszło. zmarnowałem czas który mógł pójść na stylowanie, zarywajac nockę.
// tworzy się za dużo list ul (bo pętla z metody foreach) ale jak wyniosę ul poza funkcję to dostaje nulla przy appendchildzie przy łącznie z elementem LI i guano.
// Daruj, ale tym razem moje ambicje mnie pokonały. Jak wróce z roboty to przerobie pewnie kompletnie na kod bartka i ostyluje.

let page = 1;
let info = null;

const listToRender = document.getElementById("renderList");
const ul = document.getElementById("renderedList");
const buttonPrev = document.getElementById(`prev`);
const buttonNext = document.getElementById(`next`);

async function main() {
  async function downloadData() {
    //Taką budowę w necie widziałem :D
    try {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const response = await data.json();
      return response;
    } catch (err) {
      alert(new Error(err));
    }
  }

  downloadData().then((element) => {
    const charInfo = document.getElementById("description");
    charInfo.innerHTML = element.info.count;
  });

  async function createList() {
    const characters = await downloadData();
    info = characters.info;
    listToRender.innerHTML = "";

    characters.results.forEach((person) => renderCharacters(person));
  }

  buttonPrev.addEventListener(`click`, async (el) => {
    //alertów już się ponoć nie używa ;)
    if (info.prev === null) {
      buttonPrev.textContent = "You are on the first page!";
      return;
    }
    if (info.next !== info.pages) {
      buttonNext.innerHTML = "Next page";
    }

    page--;
    createList();
  });

  buttonNext.addEventListener(`click`, async (el) => {
    if (info.next === null) {
      buttonNext.textContent = "You are on the last page!";
      return;
    }

    if (page > 0) {
      buttonPrev.innerHTML = "Previous page";
    }

    page++;
    createList();
  });

  async function renderCharacters(characters) {
    const ul = document.createElement("ul");
    ul.setAttribute("class", "renderedList");
    document.getElementById("renderList").appendChild(ul);

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
  }

  createList();
}

main();
