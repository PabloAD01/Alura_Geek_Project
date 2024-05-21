export default function createProductCard(id, name, price, image) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("product-id", id);
  card.innerHTML = `
    <img src="${image}" alt="${name}" />
    <div class="card__container__info">
        <h3>${name}</h3>
        <div class="card__container__value">
                <p>$ ${price}</p>
                <button class="btn btn__delete">
                <i class=" fa-regular fa-trash-can"></i>
                </button>
                
        </div>
    </div>
    `;

  return card;
}
