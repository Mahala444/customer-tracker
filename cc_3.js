const customers = [
  {
    name: "Alice Jane",
    email: "alice@hotmail.com",
    purchases: ["Phone", "Charger"]
  },
  {
    name: "Bobby Thomas",
    email: "bobby@hotmail.com",
    purchases: ["Laptop"]
  },
  {
    name: "Carl Jones",
    email: "carl@hotmail.com",
    purchases: ["Tablet", "Case"]
  }
];

customers.push({
  name: "David",
  email: "david@example.com",
  purchases: ["Camera"]
});

customers.shift();

customers[0].email = "bobby.new@hotmail.com";
customers[1].purchases.push("Keyboard");

customers.forEach(customer => {
  console.log(`Name: ${customer.name}`);
  console.log(`Email: ${customer.email}`);
  console.log(`Total Purchases: ${customer.purchases.length}`);
  console.log("------------------------");
});