import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import {getLocalStorage} from "./utils.mjs";

const category = "tents";
const dataSource = new ProductData(category);

const listElement = document.querySelector(".product-list");

const productList = new ProductList(category, dataSource, listElement);
productList.init();

function updateCartCount() {
  const cartItems = getLocalStorage("so-cart") || [];
  const cartCount = document.getElementById("cart-count");

  const count = cartItems.length;

  if (count > 0) {
    cartCount.textContent = count;
    cartCount.classList.remove("hide");
  }
  else {
    cartCount.classList.add("hide");
  }
}

updateCartCount();