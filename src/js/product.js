import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const productId = getParam("product");
  const dataSource = new ProductData("tents");
  const product = new ProductDetails(productId, dataSource);

  // Display loading text only, don't replace the entire <main>
  const loadingEl = document.createElement("p");
  loadingEl.textContent = "⏳ Loading product...";
  loadingEl.style.textAlign = "center";
  document.querySelector("main").appendChild(loadingEl);

  if (productId) {
    product.init().then(() => {
      loadingEl.remove(); // Remove loading once product is rendered
    });
  }
});
