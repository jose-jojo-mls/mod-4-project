export const renderRandomCards = (data) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const list = document.getElementById(cards - list);
  list.innerHTML = "";
  data.forEach((card) => {
    li.dataset.id = card.id;
    img.src = card.card_images[2];
    img.alt = card.name;
    h3.textContent = card.name;
    p.textContent = card.typeLine;
    li.append(img, h3, p);
  });
};

export const renderSingleCard = (card) => {
    const cardTitle = document.querySelector('#card-title');
    const cardDescription = document.querySelector('#card-description');
    const cardImg = document.querySelector('#card-img');
    const cardAtk = document.querySelector('#card-atk');
    const cardDef = document.querySelector('#card-def');
    const cardStars = document.querySelector('#card-stars');

    cardTitle.textContent = card.name;
    cardDescription.textContent = card.desc;
    cardImg.src = card.card_images[0].image_url_small;
    cardImg.alt = card.name;
    cardAtk.textContent = `${card.atk}`;
    cardDef.textContent = `${card.def}`;
    cardStars.textContent = `${card.level}`;
}