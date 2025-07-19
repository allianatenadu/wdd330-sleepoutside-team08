import { updateCartCount } from "./CartCount.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import renderProductList from "./product-listing.mjs";

loadHeaderFooter().then(() => {
  updateCartCount();
  renderProductList();
});
