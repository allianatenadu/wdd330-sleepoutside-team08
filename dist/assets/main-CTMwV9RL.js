import { g as e } from "./utils-C1QgyJlO.js";
function n() {
  const t = (e("so-cart") || []).reduce((o, c) => o + (c.Quantity || 1), 0);
  document.querySelector(".cart-count").textContent = t;
}
n();
