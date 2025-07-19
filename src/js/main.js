import { updateCartCount } from "./CartCount.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter().then(() => {
  updateCartCount(); // Now safe to access #cart-count
});
