import { getRandomCards } from "./fetch-helpers";
import { renderRandomCards } from "./dom-helpers";

getRandomCards().then((dataObj) => {
  if (dataObj.data === null) {
    alert("Could not find card data. Please try again.");
  }
  renderRandomCards(dataObj.data);
});
