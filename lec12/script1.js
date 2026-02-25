const prompt = require("prompt-sync")();

let cart = ["Apple","Banana","Orange"];

while (true) {
  console.log("\nMy Cart:", cart);
  console.log("1: Add item");
  console.log("2: Remove item");
  console.log("3: Exit");

  let choice = Number(prompt("Enter action: "));

  switch (choice) {
    case 1:
      let newItem = prompt("Enter item to add: ");
      cart.push(newItem);
      console.log("Item added!");
      break;

    case 2:
      let removeItem = prompt("Enter item to remove: ");
      let index = cart.indexOf(removeItem);

      if (index !== -1) {
        cart.splice(index, 1);
        console.log("Item removed!");
      } else {
        console.log("Item not found!");
      }
      break;

    case 3:
      console.log("Goodbye 👋");
      process.exit();

    default:
      console.log("Invalid choice!");
  }
}