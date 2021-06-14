// Wqrwiony jestem, bo chciałem napisać kod po swojemu,zamiast inspirować się Bartkiem, tworząc listę a nie jakieś spany
//, ale nie wyszło. zmarnowałem czas który mógł pójść na stylowanie, zarywajac nockę.
// tworzy się za dużo list ul (bo pętla z metody foreach) ale jak wyniosę ul poza funkcję to dostaje nulla przy appendchildzie przy łącznie z elementem LI i guano.
// Daruj, ale tym razem moje ambicje mnie pokonały. Jak wróce z roboty to przerobie pewnie kompletnie na kod bartka i ostyluje.

//EDIT: Poprzypominałem sobie flexa ze stylowaniem obrazków plus czarne tło do czytania z toggle class i teraz to lepiej wygląda. Howgh!
let page = 1;
let info = null;

const listToRender = document.getElementById("renderList");
const buttonPrev = document.getElementById(`prev`);
const buttonNext = document.getElementById(`next`);
const currentPageNumber = document.getElementById("currentPage");
const allPagesNumber = document.getElementById("allPages");

const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", switchButton);
function switchButton() {
  if (document.body.className === "light-theme") {
    document.body.className = "dark-theme";
  } else {
    document.body.className = "light-theme";
  }
}
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
    //Tutaj task podstawowy z 10 postaciami w konsoli.
    const onlyArrayWithCharacters = element.results;
    currentPageNumber.innerText = page;
    const newArray = onlyArrayWithCharacters.filter((char) => char.id < 11);
    console.log("nowa tablica", newArray);
  });

  async function createList() {
    const characters = await downloadData();
    info = characters.info;
    listToRender.innerHTML = "";
    allPagesNumber.innerHTML = characters.info.pages;
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
    let card = document.createElement("div");
    card.setAttribute("class", "character");

    listToRender.appendChild(card);

    let imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "image");
    let img = document.createElement("img");
    img.src = characters.image;
    img.alt = characters.alt;
    imageContainer.appendChild(img);
    card.appendChild(imageContainer);
    let container = document.createElement("div");
    let name = document.createElement("h2");
    name.innerHTML = characters.name;
    let description = document.createElement("p");
    container.appendChild(name);
    container.setAttribute("class", "status");
    description.innerHTML = characters.status;
    container.appendChild(description);
    card.appendChild(container);
  }

  createList();
}

main();
