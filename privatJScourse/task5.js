// ####Задача 5

// Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число

// ```javascript
// const arr = [1,2,3];
// const acc = 0;
// reduce(arr, function(acc, item, i, arr) {}, acc);
// ```

function reduce(arr, callback, acc) {
  if (Array.isArray(arr) && typeof callback === 'function' && typeof acc === 'string' || typeof acc === 'number') {
    for (let i = 1; i < arr.length; i++) {
      acc = callback(acc,arr[i], i, arr) 
    } 
    return acc;  
  } else {
    throw new Error('This is not array or function or string!!!');
  }  
}

let arr = [11,2,3,4];
let acc=arr[0];
// потому что если будет умножение - то все результаты работы функции будут равны 0, и вот что пишут на мозилле - Если аргумент initialValue не задан, то значение accumulator будет равным первому значению в массиве, а значение currentValue будет равным второму значению в массиве. https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

let res1= reduce(arr, function(acc, item, i, arr) { 
  return acc*item
}, acc)
console.log(res1);