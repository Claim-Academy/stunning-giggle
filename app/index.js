const products = [
  {
    name: "Socks",
    price: 5.99,
    description: "A pair of warm, fuzzy socks",
    imgUrl:
      "https://images.unsplash.com/photo-1556740732-3f8f0a6c7b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    name: "Pants",
    price: 10.99,
    description: "A nice pair of pants",
    imgUrl:
      "https://images.unsplash.com/photo-1556740732-3f8f0a6c7b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    name: "Shoes",
    price: 25.99,
    description: "A nice pair of shoes",
    imgUrl:
      "https://images.unsplash.com/photo-1556740732-3f8f0a6c7b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
];

function createProductTile(prod) {
  return `
  <figure>
      <img src="${prod.imgUrl}" alt="${prod.name}">
      <figcaption>
        <h2>${prod.name}</h2>
        <small>${prod.price}</small>
        <p>${prod.description}</p>
      </figcaption>
    </figure>
  `;
}

const catalogMarkup = `
  <main>
    ${createProductTile(products[0])}
    ${createProductTile(products[1])}
    ${createProductTile(products[2])}
  </main>
`;

console.log(catalogMarkup);
