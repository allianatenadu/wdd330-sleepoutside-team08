import { getParam, loadHeaderFooter } from "./utils.mjs";
import ProductList from "./ProductList.mjs";
import ProductData from "./ProductData.mjs";

// Get the category from the URL
const category = getParam("category") || "tents"; // Default to "tents" if none

// Select the list element
const listElement = document.querySelector(".product-list");

// Instantiate and initialize product list
const dataSource = new ProductData(category);
const productList = new ProductList(category, dataSource, listElement);
productList.init();

loadHeaderFooter();
