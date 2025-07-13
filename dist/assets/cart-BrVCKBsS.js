import "./style-HlQJNEhF.js";
import { g as getLocalStorage } from "./utils-B4K_OIKz.js";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const productList = document.querySelector(".product-list");
  const cartFooter = document.querySelector(".cart-footer");
  const cartTotalSpan = document.getElementById("cartTotal");

  if (!cartItems || cartItems.length === 0) {
    productList.innerHTML = "<li>Your cart is empty.</li>";
    return;
  }

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  productList.innerHTML = htmlItems.join("");

  // ✅ Calculate total
  const total = cartItems.reduce((sum, item) => {
    return sum + Number(item.FinalPrice);
  }, 0);

  // ✅ Update total in DOM
  if (cartTotalSpan) {
    cartTotalSpan.textContent = total.toFixed(2);
  }

  // ✅ Show cart-footer
  if (cartFooter) {
    cartFooter.classList.remove("hide");
  }
}

function cartItemTemplate(item) {
  return `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img src="${item.Image}" alt="${item.Name}" />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
  </li>`;
}

renderCartContents();
