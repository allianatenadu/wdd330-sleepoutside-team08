import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");

  if (!cartItems || cartItems.length === 0) {
    document.querySelector(".product-list").innerHTML = `
      <li style="text-align: center; padding: 2rem;"> Your cart is empty.</li>`;
    return;
  }

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
  renderCartTotal(cartItems);
}


function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: ${item.Quantity || 1}</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <button class="remove-item" data-id="${item.Id}">Remove</button>
</li>`;

  return newItem;
}

function calculateCartTotal(cartItems) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.FinalPrice * (item.Quantity || 1),
    0
  );
  return total.toFixed(2);
}

function renderCartTotal(cartItems) {
  const total = calculateCartTotal(cartItems);
  const summaryHTML = `
    <section class="cart-summary" style="text-align:right; margin: 2rem;">
      <p><strong>Subtotal:</strong> $${total}</p>
    </section>
  `;
  document
    .querySelector(".products")
    .insertAdjacentHTML("beforeend", summaryHTML);
}


renderCartContents();
