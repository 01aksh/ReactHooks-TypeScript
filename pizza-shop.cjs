// const EventEmitter = require("node:events");

// class MessageEvent extends EventEmitter {
//   // constructor() {
//   //   super();
//   // }
//   sendMessage(name, role, country) {
//     if (role == "President" && country == "India") {
//       this.emit("Greetings", name, role, country);
//     } else {
//       this.emit("Welcome", name, role, country);
//     }
//   }
// }

// module.exports = new MessageEvent();


// const MessageEvent = require("./pizza-shop.cjs");

// // const msgEvent = new MessageEvent();

// MessageEvent.on("Greetings", (name, role, country) => {
//   console.log(`Greetings Mr.${role} - ${name} of ${country}`);
// });
// MessageEvent.on("Welcome", (name, role, country) => {
//   console.log(`Welcome Mr.${role} - ${name} of ${country}`);
// });

// MessageEvent.sendMessage("Akshay", "President", "India");
// MessageEvent.sendMessage("Akash", "President", "China");


// class PizzaShop extends EventEmitter {
//   constructor() {
//     super();
//     this.orderNumber = 0;
//   }

//   takeOrder(size = "lg", topping = "Cheese") {
//     this.orderNumber += 1;
//     this.emit("order", size, topping, this.orderNumber);
//   }

//   displayOrder() {
//     console.log(`Current Order number: ${this.orderNumber}`);
//   }
// }

// module.exports = PizzaShop;

//index.cjs

// const EventEmitter = require("node:events");
// const PizzaShop = require("./pizza-shop.cjs");

// const eventEmitter = new EventEmitter();

// const pizzaShop = new PizzaShop();

// pizzaShop.on("order", (size, topping, orderNumber) => {
//   console.log(
//     `Order received: ${size} pizza with ${topping}. Your order number is ${orderNumber}.`
//   );
// });

// pizzaShop.takeOrder();
// pizzaShop.takeOrder();
// pizzaShop.takeOrder("Extra Large", "Pepperoni");
// pizzaShop.displayOrder();
