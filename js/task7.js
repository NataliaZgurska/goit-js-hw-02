// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (element, index) {
//   totalPrice += element;
// });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function filterArray(numbers, value) {
//   const newNumber = [];
//     numbers.forEach(function (element) {
//         if (element >= value) {
//             newNumber.push(element);
//         }
//     });
//     return newNumber;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));

// const totalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// });

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

function changeEven(numbers, value) {
  const newNumbers = [...numbers];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newNumbers[i] = numbers[i] + value;
    } 
    }
    return newNumbers;
};
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //[12, 18, 3, 7, 14, 16]`
