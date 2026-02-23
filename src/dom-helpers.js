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
    const monsterStats = document.querySelector('#monster-stats');

    cardSection.classList.remove("hidden");
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
    if (card.atk !== undefined) {
        monsterStats.classList.remove('hidden');
        cardAtk.textContent = `ATK: ${card.atk}`;
        cardDef.textContent = card.def !== null ? `DEF: ${card.def}`: `Link-${card.linkval}`;
        cardStars.textContent = `STARS: ${card.level}`;
        }

    else {
        monsterStats.classList.add('hidden');
    }

  cardImg.onclick = () => openPriceModal(card);
};

const openPriceModal = (card) => {
  const modal = document.querySelector("#deck-modal");
  const modalTitle = document.querySelector("#deck-modal-title");
  const modalList = document.querySelector("#deck-modal-list");
  const closeBtn = document.querySelector("#deck-modal-close");

  modal.classList.remove("hidden");
  modalTitle.textContent = `${card.name} — Market Prices`;

  modalList.innerHTML = "";

  card.card_prices.forEach((priceObj, index) => {
    if (card.card_prices.length > 1) {
      const printingLabel = document.createElement("li");
      printingLabel.textContent = `Printing ${index + 1}`;
      printingLabel.classList.add("printing-label");
      modalList.append(printingLabel);
    }

    const platforms = [
      {
        name: "TCGPlayer",
        price: priceObj.tcgplayer_price,
        url: `https://www.tcgplayer.com/search/yugioh/product?q=${encodeURIComponent(
          card.name
        )}`,
      },
      {
        name: "TCGPlayer (Foil)",
        price: priceObj.tcgplayer_price_foil,
        url: `https://www.tcgplayer.com/search/yugioh/product?q=${encodeURIComponent(
          card.name
        )}`,
      },
      {
        name: "CardMarket",
        price: priceObj.cardmarket_price,
        url: `https://www.cardmarket.com/en/YuGiOh/Products/Search?searchString=${encodeURIComponent(
          card.name
        )}`,
      },
      {
        name: "CardMarket (Foil)",
        price: priceObj.cardmarket_price_foil,
        url: `https://www.cardmarket.com/en/YuGiOh/Products/Search?searchString=${encodeURIComponent(
          card.name
        )}`,
      },
      {
        name: "eBay",
        price: priceObj.ebay_price,
        url: `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(
          card.name
        )}+yugioh`,
      },
      {
        name: "Amazon",
        price: priceObj.amazon_price,
        url: `https://www.amazon.com/s?k=${encodeURIComponent(
          card.name
        )}+yugioh`,
      },
      {
        name: "Cool Stuff Inc",
        price: priceObj.coolstuffinc_price,
        url: `https://www.coolstuffinc.com/main_search.php?q=${encodeURIComponent(
          card.name
        )}`,
      },
      {
        name: "Cool Stuff (Foil)",
        price: priceObj.coolstuffinc_price_foil,
        url: `https://www.coolstuffinc.com/main_search.php?q=${encodeURIComponent(
          card.name
        )}`,
      },
    ];

    platforms.forEach(({ name, price, url }) => {
      if (price === undefined) return;

      const li = document.createElement("li");
      const formattedPrice = price && price !== "0.00" ? `$${price}` : "N/A";
      li.innerHTML = `<a href="${url}" target="_blank">${name}: <strong>${formattedPrice}</strong></a>`;
      modalList.append(li);
    });
  });

  closeBtn.onclick = () => modal.classList.add("hidden");
  modal.onclick = (event) => {
    if (event.target === modal) modal.classList.add("hidden");
  };
};
