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

// function changeEven(numbers, value) {
//   const newNumbers = [...numbers];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newNumbers[i] = numbers[i] + value;
//     }
//     }
//     return newNumbers;
// };
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //[12, 18, 3, 7, 14, 16]`

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// // const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(totalPlayTime);


// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// // const acc = 0;
// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//  return acc + player.playtime / player.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame);

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]; 

// const calculateTotalBalance = users.reduce((total, user) => {
//     return total + user.balance;
//   },
//     0);

// const isAnyUserActive = (users) => {
//   return  users.some(user => user.isActive == true);
// };



// const calculateTotalBalance = users.reduce((total, user) => {
//  return total + user.balance;
// }, 0);
// console.log(calculateTotalBalance);


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const authorWithRating = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((a, b) => a.localeCompare(b));
// console.log(authorWithRating);

const numbers = [5, 10, 15, 25, 20, 100];
console.log(numbers);
numbers.forEach(number => number*2)
console.log(numbers);

