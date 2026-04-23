const menuItems = [
  { name: "Burger", price: 150, category: "Fast Food", image: "assets/burger.png" },
  { name: "Pizza", price: 180, category: "Fast Food", image: "assets/pizza.png" },
  { name: "Biryani", price: 300, category: "Indian", image: "assets/biryani.png" },
  { name: "Parotta", price: 120, category: "Indian", image: "assets/parotta.png" },
  { name: "Noodles", price: 120, category: "Chinese", image: "assets/noodles.png" },
  { name: "Fried Rice", price: 140, category: "Chinese", image: "assets/friedrice.png" },
  { name: "Veg Momo", price: 150, category: "Chinese", image: "assets/vegmomo.png" },
   { name: "Paneer", price: 200, category: "Indian", image: "assets/panner.png" },
  { name: "Chicken Roll", price: 150, category: "Fast Food", image: "assets/chickenroll.png" },
  {name: "Veg Gobi", price: 160, category: "Chinese", image: "assets/veggobi.png"},
{name: "Tandoori Chicken", price: 300, category: "Non-Veg", image: "assets/tandoori.png"},
{name: "Chicken 65", price: 220, category: "Non-Veg", image: "assets/chicken65.png"}
];

let cart = [];
let filteredMenu = [...menuItems];

function displayMenu() {
  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  filteredMenu.forEach(item => {
    menu.innerHTML += `
      <div class="card">
        <img src="${item.image}">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <small>${item.category}</small>
        <button onclick="addToCart('${item.name}')">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(name) {
  let item = menuItems.find(i => i.name === name);
  cart.push(item);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cartItems");
  cartList.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartList.innerHTML += `
      <li>
        ${item.name} - ₹${item.price}
        <button class="remove-btn" onclick="removeFromCart(${index})">❌</button>
      </li>
    `;
  });

  document.getElementById("total").innerText = total;
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  alert("Order placed successfully! 🎉");
  cart = [];
  updateCart();
}

function searchFood() {
  let value = document.getElementById("search").value.toLowerCase();

  filteredMenu = menuItems.filter(item =>
    item.name.toLowerCase().includes(value)
  );

  displayMenu();
}

displayMenu();