export const renderRandomCards = async (data) => {
  const list = document.querySelector(`#cards-list`);
  list.innerHTML = "";

  data.forEach((card) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    li.dataset.id = card.id;
    img.src = card.card_images[0].image_url_small;
    img.alt = card.name;
    h3.textContent = card.name;
    p.textContent = card.type;
    img.classList.add("img");
    li.classList.add("card");

    li.append(img, h3, p);
    list.append(li);
  });
};

export const renderSingleCard = (card) => {
  const cardSection = document.querySelector("#card-details");
  const cardTitle = document.querySelector("#card-title");
  const cardDescription = document.querySelector("#card-description");
  const cardImg = document.querySelector("#card-img");
  const cardAtk = document.querySelector("#card-atk");
  const cardDef = document.querySelector("#card-def");
  const cardStars = document.querySelector("#card-stars");
  const parentEl = document.querySelector("#tester");

  cardSection.classList.remove("hidden");
  parentEl.classList.remove("hidden");
  parentEl.classList.remove("hidden");

  //code to make the animations continue playing after the first card is rendered
  parentEl.style.animation = "none";
  parentEl.offsetHeight;
  parentEl.style.animation = "slideIn 0.6s ease-out forwards";

  cardTitle.textContent = card.name;
  cardDescription.textContent = card.desc;
  cardImg.src = card.card_images[0].image_url_small;
  cardImg.alt = card.name;
  cardImg.classList.add("img");
  cardAtk.textContent = `ATK: ${card.atk}`;
  cardDef.textContent = `DEF: ${card.def}`;
  cardStars.textContent = `STARS: ${card.level}`;
};
