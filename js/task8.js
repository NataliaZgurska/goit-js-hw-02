const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
    color: 'red',
    isSportcar: false,
    year: 2023,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
    color: 'green',
    isSportcar: true,
    year: 2022,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
    color: 'red',
    isSportcar: false,
    year: 1995,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
    color: 'green',
    isSportcar: true,
    year: 2002,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
    color: 'red',
    isSportcar: false,
    year: 2001,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
    color: 'black',
    isSportcar: true,
    year: 2002,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
    color: 'white',
    isSportcar: false,
    year: 2021,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
    color: 'white',
    isSportcar: true,
    year: 2022,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
    color: 'black',
    isSportcar: false,
    year: 2010,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
    color: 'blue',
    isSportcar: true,
    year: 2020,
  },
];

const users = [
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 28,
    email: 'alice@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 42,
    email: 'bob@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Eva',
    lastName: 'Williams',
    age: 35,
    email: 'eva@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'David',
    lastName: 'Brown',
    age: 22,
    email: 'david@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Sophia',
    lastName: 'Davis',
    age: 29,
    email: 'sophia@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Michael',
    lastName: 'Miller',
    age: 50,
    email: 'michael@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Olivia',
    lastName: 'Wilson',
    age: 19,
    email: 'olivia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Daniel',
    lastName: 'Thompson',
    age: 31,
    email: 'daniel@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Ava',
    lastName: 'Harris',
    age: 27,
    email: 'ava@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'James',
    lastName: 'Jackson',
    age: 38,
    email: 'james@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Emma',
    lastName: 'Taylor',
    age: 23,
    email: 'emma@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'William',
    lastName: 'Anderson',
    age: 45,
    email: 'william@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Mia',
    lastName: 'Martin',
    age: 29,
    email: 'mia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Joseph',
    lastName: 'Clark',
    age: 33,
    email: 'joseph@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Charlotte',
    lastName: 'Rodriguez',
    age: 26,
    email: 'charlotte@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'John',
    lastName: 'Lopez',
    age: 31,
    email: 'john@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Amelia',
    lastName: 'Lee',
    age: 20,
    email: 'amelia@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Benjamin',
    lastName: 'Gonzalez',
    age: 40,
    email: 'benjamin@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Chloe',
    lastName: 'Hernandez',
    age: 24,
    email: 'chloe@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Daniel',
    lastName: 'Young',
    age: 37,
    email: 'daniel@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Olivia',
    lastName: 'Miller',
    age: 38,
    email: 'olivia@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'James',
    lastName: 'Jones',
    age: 29,
    email: 'james@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Sophia',
    lastName: 'Davis',
    age: 31,
    email: 'sophia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'William',
    lastName: 'Wilson',
    age: 52,
    email: 'william@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Ava',
    lastName: 'Taylor',
    age: 19,
    email: 'ava@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Michael',
    lastName: 'Clark',
    age: 40,
    email: 'michael@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Emma',
    lastName: 'Lee',
    age: 27,
    email: 'emma@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Daniel',
    lastName: 'Martinez',
    age: 35,
    email: 'daniel@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Isabella',
    lastName: 'Hernandez',
    age: 42,
    email: 'isabella@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Liam',
    lastName: 'Garcia',
    age: 26,
    email: 'liam@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Mia',
    lastName: 'Rodriguez',
    age: 30,
    email: 'mia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Noah',
    lastName: 'Lopez',
    age: 24,
    email: 'noah@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Charlotte',
    lastName: 'Perez',
    age: 29,
    email: 'charlotte@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Ethan',
    lastName: 'Turner',
    age: 37,
    email: 'ethan@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Amelia',
    lastName: 'White',
    age: 23,
    email: 'amelia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Alexander',
    lastName: 'Jackson',
    age: 41,
    email: 'alexander@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Sofia',
    lastName: 'Brown',
    age: 33,
    email: 'sofia@example.com',
    isActive: true,
    gender: 'Female',
  },
];

// Знайти автомобілі дешевші якоїсь суми
// const carsLessExpensive = (allcars, askingPrice) => {
//     return allcars.filter(car => car.price <= askingPrice);
// }
// console.log(carsLessExpensive(cars, 25000));

// Знайти авто зеленого кольору color: 'green',
// const colorCar = (allcars, askingColor) => allcars.filter(car => car.color === askingColor);
// console.log(colorCar(cars, 'red'));


// Знайти усі спорткари не старші певного року
// const carSportcar = (allcars, age) => {
//     return allcars.filter(car => car.isSportcar && car.year >= age)
// };
// console.log(carSportcar(cars, 2020));

// Порахувати кількість авто старших певного року
// const carAge = (allcars, age) => allcars.filter(car => car.year < age).length
// console.log(carAge(cars, 2022));


// Сортувати за ціною
// const carPrices = allcars => allcars.toSorted((a, b) => b.price - a.price)
// console.log(carPrices(cars));


// Відсортувати машини за роком випуску (від найстарішого до найновішого).

// const carSortedYear = cars.toSorted((a, b) => a.year - b.year)
// console.log(carSortedYear);

// вивести: рік випуску - кількість машин, відсортувати за роком
// const carAmountYear = cars.map(car => console.log(`Машин ${car.year}: ${car.amount} кількість`));
// ---------------------------------------------------------
// просумувати кількість машин за роком
// масив років машин за зрозтанням:
// const carYear = cars
//     .map(car => car.year)
//     .filter((year, index, Array) => Array.indexOf(year) === index)
//     .toSorted((a,b) => a-b)
// console.log(carYear);


// // масив кількісті машин певного року
// const carAmount = []
// for (const year of carYear) {
//     let yearAmount = 0
//     for (const car of cars) {
//    if (car.year === year) {
//      yearAmount += car.amount
//    }
//     }
//    carAmount.push(yearAmount)
// }
// console.log(carAmount);

// const carYearAmount = []
// for (let i = 0; i < carYear.length; i++) {
//     let pair = {
//         'year': carYear[i],
//         'amount': carAmount[i]
//     }
//   carYearAmount.push(pair)
// }
// console.table(carYearAmount);

// const students = [
//     { name: 'Mango', score: 80, },
//      {name: 'Poly', score: 90,},
// ]
// const totalScore = students.reduce((total, student) => {
//     return total + student.score;
// }, 0);
// console.log(totalScore);

// -------------------------------------------

// Знайти найдорожчу машину.
// const mostExpensiveCar = allCars => allCars
//   .map(car => car.price)
//   .toSorted((a, b) => b-a)
// console.log(mostExpensiveCar(cars)[0]);

// -------------------------------------------
// Знайти всі машини заданої марки (наприклад, Toyota).
// const carMake = (allCars, make) => allCars.filter(car => car.make === make)
// console.log(carMake(cars, 'Honda'));

// -------------------------------------------
// Порахувати загальну кількість машин усіх типів.
// const carAmount = allCars => allCars.reduce((totalAmount, car) => totalAmount + car.amount, 0)
// console.log(carAmount(cars));
// -------------------------------------------
// Відсортувати машини за ціною (від найдешевшої до найдорожчої).
// const carPriceRating = allCars => allCars.toSorted((a,b) => a.price - b.price)
// console.log(carPriceRating(cars));

// -------------------------------------------
// Знайти всі машини певного типу (наприклад, SUV).  type: 'suv',
// const carAsking = (allCars, type) => allCars
//   .filter(car => car.type === type)
//   .toSorted((a,b) => b.year - a.year)
// console.log(carAsking(cars, 'sedan'));

// -------------------------------------------
// Знайти всі машини певного кольору та року випуску. color: 'black',   year: 2010,
// const carAsking = (allCars, color, year) => allCars
//   .filter(car => car.color === color & car.year >= year)
//   .toSorted((a,b) => b.price - a.price)
// console.log(carAsking(cars, 'black', 2000))

// -------------------------------------------
// Порахувати середню ціну всіх машин.
// const totalPrice = cars.reduce((total, car) => total + car.price * car.amount, 0)
// const carAmount = cars.reduce((totalAmount, car) => totalAmount + car.amount, 0)
// const averagePrice = totalPrice/carAmount
// console.log(`Загальна варстість машин: ${totalPrice}, \nзагальна кількість машин: ${carAmount}, \nсередня ціна: ${averagePrice}`)
 
// -------------------------------------------
// Знайти всі машини, у яких кількість на складі більша за 0.
// const carAsking = (allCars, amount) => allCars.filter(car => car.amount >= amount)
// console.log(carAsking(cars,10));

// -------------------------------------------
// Знайти всі машини з ціною менше 30000 та роком випуску після 2020 року.
// const carAsking = (allCars, price, year) => allCars.filter(car => car.price<=price & car.year>=year)
// console.log(carAsking(cars, 30000, 2020));

// -------------------------------------------
// Порахувати сумарну кількість всіх машин заданої марки.
// const carAsking = (allCars, type) => allCars
//   .filter(car => car.type === type)
//   .reduce((total, car) => total + car.amount,0)
// console.log(carAsking(cars, 'sedan'));

// -------------------------------------------
// Відсортувати машини за кількістю на складі (від найбільшої до найменшої).
// const carAsking = allCars => allCars.toSorted((a,b) => a.amount - b.amount)
// console.log(carAsking(cars));


// -------------------------------------------
// Знайти всі машини, які не є спортивними та доступні для продажу. onSale: true, isSportcar: true,
// const carAsking = allCars => allCars.filter(car => car.onSale&!car.isSportcar)
// console.log(carAsking(cars));

// -------------------------------------------
// Порахувати загальну вартість всіх машин складі.
// -------------------------------------------
// Знайти всі машини певного типу та кольору.
// -------------------------------------------
// Відсортувати машини за брендом та моделлю в алфавітному порядку. make: 'Ford',    model: 'Explorer',
// const carAsking = allCars => allCars
//   .toSorted((a, b) => a.make.localeCompare(b.make))
// console.log(carAsking(cars));

// -------------------------------------------
// Перевірити, чи є хоч одна машина зеленого кольору.
// const carAsking = (allCars, color) => allCars
//   .some(car => car.color === color)
// console.log(carAsking(cars, 'pink'));
// -------------------------------------------
// Створити новий масив, що містить лише назви моделей усіх машин.
// Створити масив, що містить розмітку кожної машини.
// Знайти індекс першої машини з роком випуску 2022 року.

// const carAsking = (allCars, year) => allCars.findLastIndex(car => car.year === year)
// console.log(carAsking(cars, 2022));

// -------------------------------------------
// Знайти всі машини з ціною вище 50000 і відсортувати їх за роком випуску від нових до старих.
// const carAsking = (allCars, price) => allCars
//   .filter(car => car.price >= price)
//   .toSorted((a,b) => b.year - a.year)

// console.log(carAsking(cars, 30000));

// -------------------------------------------
// Перевірити, чи всі машини на складі доступні для продажу та створити новий масив, що містить лише моделі доступних машин.
//  model: 'CR-V', onSale: true,
// const carAsking = allCars => allCars
//   .filter(car => car.onSale)
//   .map(car => car.model)
// console.log(carAsking(cars));

// -------------------------------------------
// Знайти першу машину, яка не є спортивною та має кількість на на складі більше 0, потім повернути її колір.
// const carAsking = (allCars, amount) => allCars
//   .find(car => !car.isSportcar & car.amount > amount).color
// console.log(carAsking(cars, 10));

// -------------------------------------------
// Порахувати загальну вартість всіх машин із кількістю на складі більше 2 і ціною менше 40 000.
// const carAsking = (allCars, amount, price) => allCars
//   .filter(car => car.amount >= amount & car.price <= price)
//   .reduce((totalPrice, car) => totalPrice + car.amount * car.price,0)
// console.log(carAsking(cars, 2, 25000));

// Знайти всі машини певного типу (наприклад, SUV), відсортувати їх за роком випуску від старих до нових
// і повернути масив тільки зі своїми моделями.
// const carAsking = (allCars, type) => allCars
//   .filter(car => car.type === type)
//   .toSorted((a,b) => a.year - b.year)
//   .map(car => car.model)
// console.log(carAsking(cars, 'suv'));

// Знайти всі спортивні машини з ціною вище 60000, відсортувати їх за спаданням ціни і повернути масив, що містить лише бренди цих машин.
// Знайти всі машини заданого кольору (наприклад, "Blue") та року випуску після 2020, відсортувати їх за зростанням ціни і повернути масив, що містить лише моделі цих машин.
// Перевірити, чи всі машини заданої марки доступні для продажу та повернути масив, що містить лише кольори доступних машин.
// Знайти індекс першої машини з ціною менше 20000 та повернути масив, що містить тільки бренди та моделі машин після знайденої.
// Порахувати сумарну кількість машин заданого кольору та повернути новий масив, містить об'єкти з квітами та відповідними кількостями машин.
// Знайти всі машини з ціною між 40000 та 60000, відсортувати їх за роком випуску від нових до старих і повернути масив, що містить тільки моделі цих машин.
// Перевірити, чи є хоч одна машина з кількістю на складі більше 5 і ціною вище 70 000.
// Знайти всі машини, у яких кількість на складі більша за 0, відсортувати їх по спаданню кількості та повернути масив, що містить тільки бренди та моделі цих машин.


// USERS
// firstName: 'Alice',
//     lastName: 'Johnson',
//     age: 28,
//     email: 'alice@example.com',
//     isActive: true,
//     gender: 'Female',
// Знайти користувачів віком від 25 до 40 років.

// Знайти всіх користувачів із активним статусом.
// Порахувати кількість користувачів молодше 30 років.
// Відсортувати користувачів віком від старшого до молодшого.
// Знайти користувачів з електронною поштою на домені gmail.com.
// Знайти всіх жінок серед користувачів.
// Порахувати кількість неактивних користувачів.
// Відсортувати користувачів на прізвище в алфавітному порядку.
// Знайти користувача з найбільшим віком.
// Перевірити, чи є хоча б один користувач із прізвищем "Johnson".
// Створити новий масив, який містить лише імена користувачів.
// Створити масив з інформацією про користувачів у форматі JSON.
// Знайти індекс першого користувача під назвою "Jane".
// Знайти всіх користувачів чоловічої статі віком від 30 до 50 років.
// Порахувати загальну кількість користувачів.
// Знайти всіх користувачів з активним статусом та віком старше 25 років.
// Знайти користувачів із прізвищем, що починається на букву "S".
// Відсортувати користувачів за віком (від молодшого до старшого).
// Знайти всіх користувачів електронної пошти на домені yahoo.com.
// Знайти користувача з найменшим віком.
// Перевірити, чи є хоча б один користувач під назвою "John".
// Створити новий масив, що містить лише прізвища користувачів.
// Створити масив з інформацією про користувачів як рядкових описів.
// Знайти індекс користувача з активним статусом і віком більшим або рівним 40 років.


