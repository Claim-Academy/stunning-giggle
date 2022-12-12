const products = [
  {
    name: "Socks",
    price: 5.99,
    description: "A pair of warm, fuzzy socks",
    imgUrl:
      "https://images.unsplash.com/photo-1556740732-3f8f0a6c7b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

    // Nested object
    discount: {
      code: "50OFF",
      amount: 0.5,
    },
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

// TODO: Log out the discount code for the first product
console.log(products[0].discount.code);

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

// PARAMETERS are the names listed in the function definition.
// ARGUMENTS are the real values passed to (and received by) the function.
// PARAMETERS are like variables that are only available inside the function.
function isDiscounted(prod) {
  // Explicit coercion to boolean
  return Boolean(prod.discount);
}

console.log(isDiscounted(products[1]));

const catalogMarkup = `
  <main>
    ${products.map(createProductTile).join("")}
  </main>
`;
