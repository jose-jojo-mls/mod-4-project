import { getRandomCards, singleCardFetch } from "./fetch-helpers";
import { renderRandomCards, renderSingleCard } from "./dom-helpers";

const listSection = document.querySelector("#list-section");

getRandomCards().then((dataObj) => {
  if (dataObj.data === null) {
    alert("Could not find card data. Please try again.");
  }
  renderRandomCards(dataObj.data);
});

listSection.addEventListener("click", (event) => {
  event.preventDefault();
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
