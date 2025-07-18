const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }

  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then(data => data);
  }

  async findProductById(id) {
    const products = await this.getData();
    const product = products.find(item => item.Id === id); // FIXED: Use correct key

    if (!product) {
      console.warn(`Product with ID "${id}" not found in ${this.category}.json`);
    }

    return product;
  }
}
