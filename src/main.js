import { fetchByName, getRandomCards, singleCardFetch } from "./fetch-helpers";
import { renderRandomCards, renderSingleCard } from "./dom-helpers";

const listSection = document.querySelector("#list-section");
const form = document.querySelector("#search-form");

//Page load//
getRandomCards().then((dataObj) => {
  if (dataObj.data === null) {
    alert("Could not find card data. Please try again.");
  }
  renderRandomCards(dataObj.data);
});

//User clicks a random card//
listSection.addEventListener("click", (event) => {
  //scrolls to top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });
  const closestLi = event.target.closest("li");
  const cardId = closestLi.dataset.id;

  singleCardFetch(cardId)
    .then((card) => {
      if (card.error) {
        throw Error(card.error.message);
      }

      renderSingleCard(card.data);
    })
    .catch((error) => {
      console.log(error);
      // Do something with the error using an HTML element
    });
});

//User searches a card by name//
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const querySearch = form.elements.query.value;

  fetchByName(querySearch)
    .then((card) => {
      if (card.error) {
        throw new Error(card.error.message);
      }

      renderSingleCard(card.data);
    })
    .catch((error) => {
      console.log(error);
    });
  form.reset();
});
