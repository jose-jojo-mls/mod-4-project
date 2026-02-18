export const renderRandomCards = async (data) => {
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
