let cartGrid = document.getElementById("cart-items");
import Cart from "./simple-cart.js";

//
//setup a test customer
let customer = {
  name: "jane anderson",
  id: 1,
};

//setup test products
let yam = {
  name: "yam",
  price: 24,
  currency: "NGN",
};
let beans = {
  name: "beans",
  price: 40,
  currency: "NGN",
};
let garri = {
  name: "garri",
  price: 50,
  currency: "NGN",
};

const jane = new Cart({ customer });

jane.addItem(yam);
jane.addItem(yam);
jane.addItem(beans);
jane.addItem(garri);

jane.addItem({
  name: "onions",
  price: 45,
});
jane.addItem({
  name: "onions",
  price: 45,
});
jane.addItem({
  name: "onions",
  price: 45,
});

jane.getCartItems().forEach((item) => {
  const el = document.createElement("p");
  el.innerText = `item: ${item.name} qty: ${item.quantity}`;
  cartGrid.append(el);
});
