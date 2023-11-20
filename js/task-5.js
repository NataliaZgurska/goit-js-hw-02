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

//******************************************************************************/
// 3. Пошук найбільшого числа: Створіть масив чисел і використайте цикл для
//    знаходження найбільшого числа в цьому масиві.


// const array = [];
// const arrayLength = prompt('задай length = число від 3 до 10');
// for (let i = 0; i < arrayLength; i++) {
//     let arrayNum = prompt(`задай значення для елементу масива`);
//     array.push(arrayNum);
// }
// let biggerNum;
// for (let i = 0; i < arrayLength-1; i++) {
//     biggerNum = (array[i] > array[i+1]) ? array[i] : array[i+1];
// }
// console.log(array, biggerNum);
// alert(`Масив: ${array}, найбільший елемент: ${biggerNum}`);

//********************************************************************/

// *? Напишіть код, який запитуватиме
// *? логін за допомогою prompt та логувати результат
// *? у консоль браузера

 // *? Якщо відвідувач вводить "Адмін", 
 // *? то prompt запитує пароль. 
 
 // *? Якщо нічого не ввели або натиснуто клавішу Esc 
 // *? вивести рядок "Скасовано" 
 
 // *? В іншому випадку вивести рядок "Я вас не знаю"   
   
  // *? Пароль перевіряти так:
// *? Якщо введено пароль "Я головний", 
// *? то вивести рядок "Здрастуйте!" 
// *? інакше виводити рядок "Невірний пароль!"

// const userLogin = prompt("Введіть логін");
// console.log(userLogin);

// if (!userLogin) {
//     alert("Скасовано");
// } else if (userLogin === 'Адмін') {
//     const password = prompt("Введіть пароль");
//     if (password==="Я головний") {
//         alert("Здрастуйте!");
//     } else {
//         alert("Невірний пароль!");
//     }
// } else {
//     alert("Я вас не знаю");
// }

//*************************************/
//  *? При завантаженні сторінки користувачеві пропонується 
//   *? в prompt ввести число. 
//Введення додається до значення змінної total. 

//   *? Операція введення числа триває до того часу, 
//   *? поки користувач не натисне кнопку Cancel у prompt. 

//   *? Після того як користувач припинив введення, натиснувши на 
//   *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."  
//   *! Робити перевірку, що користувач ввів саме число, 
//   *! а не довільний набір символів не потрібно.

// let check = 1;
// let total = 0;
// while (check>0) {
//     let userNumber = prompt('Введіть число');
//    if (userNumber) {
//        check = 1;
//        total += Number.parseFloat(userNumber);
//     console.log(total);
//    } else {
//        check = 0;
//    }
// };
// alert(`Загальна сума введених чисел дорівнює ${total}`)

// Функція getSlice(array, value) приймає два параметра:
// array - масив довільних елементів
// value - значення елемента масиву для пошуку

// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// array1 = array1.slice(0, 5);
// console.log(array1);

// let arrayNew = [];
// function getSlice(array, value) {
//   if (array.includes(value)) {
//      let indexV = array.indexOf(value);
//      arrayNew = array.slice(0, indexV+1);
//  } 
        
// }

// getSlice(["Mango", "Poly", "Ajax"], "Jacob");
// console.log(arrayNew);

// getSlice(["Mango", "Poly", "Ajax"], "Ajax");
// getSlice(["Mango", "Poly", "Ajax"], "None");



//   let arrayMutual = [];
// function getCommonElements(array1, array2) {

//   for (let i = 0; i < array1.length; i++) {
//    if (array2.includes(array1[i])){
//      arrayMutual.push(array1[i]);
//    }
//   }
//   return arrayMutual;
// };


// // getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// // console.log(arrayMutual);

// getCommonElements([1, 2, 3, 7, 12], [2, 1, 17, 19, 7]);
// console.log(arrayMutual);   array = toReversed(array);


function createReversedArray() {
  array=Array.from(arguments);
    array = array.toReversed();
  return array;
}
createReversedArray(12, 85, 10, 37, 4, 1, 5);
console.log(array);