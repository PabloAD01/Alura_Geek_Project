import productCard from "../components/productCard.js";
import { productsArray } from "./object.js";
import { APIConnection } from "./APIConnection.js";

const myProductsContainer = document.querySelector(".my__products__container");
const productsContainer = document.querySelector(".products__container");
const main = document.getElementsByTagName("main")[0];

async function listProducts() {
  const loading = document.createElement("p");
  loading.classList.add("loading");
  loading.textContent = "Cargando productos...";
  productsContainer.appendChild(loading);

  try {
    const products = await APIConnection.fetchProducts();

    products.reverse().forEach((product) => {
      const card = productCard(
        product.id,
        product.name,
        product.price,
        product.image
      );
      productsContainer.appendChild(card);
    });

    loading.remove();

    if (products.length === 0) {
      productsContainer.style.overflow = "visible";
      productsContainer.style.display = "flex";
      productsContainer.style.justifyContent = "center";
      myProductsContainer.style.alignItems = "center";
      myProductsContainer.style.boxShadow = "0px 0px 0px 0px";
      main.style.height = "100%";
      main.style.justifyContent = "space-evenly";

      const message = document.createElement("p");
      message.classList.add("message");
      message.textContent = "No se han agregado productos";
      document.querySelector(".products__container").appendChild(message);
    }

    const deleteButtons = document.querySelectorAll(".btn__delete");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", async (event) => {
        const card = event.target.closest(".card");
        const productId = card.getAttribute("product-id");

        try {
          await APIConnection.deleteProduct(productId);
          card.remove();
        } catch (error) {
          console.error("Failed to delete product", error);
        }
      });
    });
  } catch (error) {
    console.log(error);
    loading.remove();
    const message = document.createElement("p");
    message.classList.add("message");
    message.textContent = "Error al obtener los productos";
    message.style.color = "red";
    myProductsContainer.style.boxShadow = "0px 0px 0px 0px";
    productsContainer.style.display = "flex";
    main.style.height = "100%";
    main.style.justifyContent = "space-evenly";

    productsContainer.appendChild(message);
  }
}

listProducts();
