import { updateCartCount } from "./CartCount.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import renderProductList from "./ProductList.mjs";

loadHeaderFooter().then(() => {
  updateCartCount();
  renderProductList();
});
