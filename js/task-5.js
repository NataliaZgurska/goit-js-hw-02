// 1. Знаходження суми парних чисел: Запитайте користувача, до якого числа він хоче
//    знайти суму парних чисел. Потім використайте цикл для знаходження суми парних
//    чисел у заданому діапазоні.
// const num = +prompt('задай число');
// let newSum = 0;
// for (let i = 0; i < num; i+=2) {
//    newSum+=i;
//   console.log(newSum, i);
// }

// 2. Таблиця множення: Виведіть таблицю множення для конкретного числа, наприклад,
//    для числа 7. Від 1 до 10 перемножте 7 на кожне з цих чисел.
// const num = +prompt('задай число');
// for (let i = 1; i <= 10; i++) {
//   console.log (`${i} \* ${num} \= ${i*num}`);
// }
// 3. Пошук найбільшого числа: Створіть масив чисел і використайте цикл для
//    знаходження найбільшого числа в цьому масиві.


const array = [];
const arrayLength = prompt('задай length = число від 3 до 10');
for (let i = 0; i < arrayLength; i++) {
    let arrayNum = prompt(`задай значення для елементу масива`);
    array.push(arrayNum);
}
let biggerNum;
for (let i = 0; i < arrayLength-1; i++) {
    biggerNum = (array[i] > array[i+1]) ? array[i] : array[i+1];
}
console.log(array, biggerNum);
alert(`Масив: ${array}, найбільший елемент: ${biggerNum}`);

