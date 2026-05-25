let cart = [];

function addToCart(product) {
  cart.push(product);
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cartItems");
  cartList.innerHTML = "";

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
}
