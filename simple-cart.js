//simple cart in javascript

export default class Cart {
  constructor(customer) {
    this.customer = customer;
  }

  //variable to hold cart items
  cart = []; //initially an empty object

  //class methods

  //get items in the cart
  getCartItems() {
    //build list item names in the cart

    if (!this.cart) {
      return;
    }

    return this.cart;
  }

  //add items to the cart
  addItem(item) {
    if (!item) {
      return;
    }

    //list of items in cart already
    let itemsInCart = [];
    this.cart.forEach((item) => itemsInCart.push(item.name));

    //check if item in cart already and update only the quantity property

    if (itemsInCart.includes(item.name)) {
      let indexOfItem = this.cart.findIndex((el) => el.name === item.name);
      console.log(this.cart[indexOfItem]);
      let currentQuantity = this.cart[indexOfItem].quantity;
      Number.isNaN(currentQuantity)
        ? (this.cart[indexOfItem].quantity = 2)
        : (this.cart[indexOfItem].quantity += 1);
    } else {
      this.cart.push(item);
      let indexOfItem = this.cart.findIndex((el) => el.name === item.name);
      this.cart[indexOfItem].quantity = 1;
    }

    return `${item.name} added to cart`;
  }

  //remove items from the cart
  removeItem(item) {
    if (!item) {
      return;
    }
  }
}
