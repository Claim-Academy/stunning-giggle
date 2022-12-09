const product = {
  name: "Socks",
  price: 5.99,
  description: "A pair of warm, fuzzy socks",
  imgUrl:
    "https://images.unsplash.com/photo-1556740732-3f8f0a6c7b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
};

function createProductTile(prod) {
  return `
  <figure>
    <img src="${product.imgUrl}" alt="${product.name}">
    <figcaption>
      <h2>${product.name}</h2>
      <small>${product.price}</small>
      <p>${product.description}</p>
    </figcaption>
  `;
}

const productTile = createProductTile(product);
console.log(productTile);
