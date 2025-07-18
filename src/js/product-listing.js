import ProductData from "./ProductData.js";
import { getParam } from "./utils.mjs";

function renderProductCard(product) {
  const card = document.createElement("li");
  card.classList.add("product-card");

  card.innerHTML = `
    <a href="../product_pages/product.html?product=${product.Id}">
      <img src="${product.Image}" alt="${product.Name}" />
      <h2 class="card__brand">${product.Name}</h2>
      <p class="product-card__price">$${Number(product.FinalPrice).toFixed(2)}</p>
    </a>
  `;

  return card;
}

async function displayProductList(category) {
  const dataSource = new ProductData(category);
  const products = await dataSource.getData();
  const listElement = document.querySelector(".product-list");

  listElement.innerHTML = ""; // Clear any existing content
  products.forEach((product) => {
    const card = renderProductCard(product);
    listElement.appendChild(card);
  });
}

// 1. Get category from the URL (e.g. ?category=tents)
const category = getParam("category");

// 2. Show product list if category is valid
if (category) {
  displayProductList(category);
}
