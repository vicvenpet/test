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
  
      const productDescription = document.createElement("p");
      productDescription.classList.add("product-description");
      productDescription.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed felis ac lacus semper rhoncus vitae non enim.";
  
      productCard.appendChild(productName);
      productCard.appendChild(productPrice);
      productCard.appendChild(productDescription);
  
      productsContainer.appendChild(productCard);
    });
  }
  
  displayProducts();  