const products = [
  {
    id: 1,
    name: "Product 1",
    price: 9.99,
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
  },
  {
    id: 3,
    name: "Product 3",
    price: 29.99,
  },
];

function displayProducts() {
  const productsContainer = document.getElementById("productsContainer");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productName = document.createElement("h2");
    productName.classList.add("product-name");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.textContent = `$${product.price.toFixed(2)}`;

    productCard.appendChild(productName);
    productCard.appendChild(productPrice);

    productsContainer.appendChild(productCard);
  });
}

displayProducts();