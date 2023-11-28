// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const i of keys) {
//   value.push(apartment[i]);
// }

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const values = [];
 
//   for (let product of products) {
//         if (Object.keys(product).includes(propName)) {
//           values.push(product[propName]);
//         }
    
//      }
//     return values;
// }
// console.log (getAllPropValues("name")) // `["Radar", "Scanner", "Droid", "Grip"]`
// console.log (getAllPropValues("quantity")) // `[4, 3, 7, 9]`
// console.log (getAllPropValues("price")) //` повертає `[1300, 2700, 400, 1200]`
// console.log (getAllPropValues("category"))

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  let totalPrice = 0;
  for (let product of products) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
    }
  }
  if (totalPrice === 0) {
    totalPrice = "Product Blaster not found!";
  }
    return totalPrice;
}
console.log(calculateTotalPrice("Scanner")) //` повертає `8100`
console.log(calculateTotalPrice("Grip")) //` повертає `10800`
console.log(calculateTotalPrice("Blaster")) //` повертає `"Product Blaster not found!"`
console.log(calculateTotalPrice("Radar")) //` повертає `5200`
console.log(calculateTotalPrice("Droid")) //` повертає `2800