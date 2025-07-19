import { getParam, loadHeaderFooter } from './utils.mjs';
import ProductData from './ProductData.mjs';

class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData(this.category);
    this.renderList(list);
  }

  renderList(list) {
    this.listElement.innerHTML = '';
    const template = list.map(this.renderOneProduct).join('');
    this.listElement.innerHTML = template;
  }

  renderOneProduct(product) {
    return `
      <li class="product-card">
        <a href="../product_pages/product.html?product=${product.Id}">
          <img src="${product.Image}" alt="${product.Name}" />
          <h2 class="card__brand">${product.Name}</h2>
          <p class="product-card__price">$${Number(product.FinalPrice).toFixed(2)}</p>
        </a>
      </li>
    `;
  }
}

// Load the list
const category = getParam('category');
const dataSource = new ProductData();
const listElement = document.querySelector('.product-list');
const productList = new ProductList(category, dataSource, listElement);

productList.init();
loadHeaderFooter();
