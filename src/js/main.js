import { updateCartCount } from "./CartCount.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();


import { getLocalStorage } from "./utils.mjs";

function updateCartCount() {
  const cart = getLocalStorage("so-cart") || [];
  const count = cart.reduce((sum, item) => sum + (item.Quantity || 1), 0);
  document.querySelector(".cart-count").textContent = count;
}

// Call this on load
updateCartCount();
