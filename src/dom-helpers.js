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

    li.append(img, h3, p);
    list.append(li);
  });
};
