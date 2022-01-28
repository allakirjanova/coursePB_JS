// ####Задача 6

// Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число

// ```javascript
// const arr = [1,2,3];
// const acc = 0;
// reduceRight(arr, function(acc, item, i, arr) {}, acc);
// ```

function reduce(arr, callback, acc) {
    if (Array.isArray(arr) && typeof callback === 'function' && typeof acc === 'string' || typeof acc === 'number') {
      for (let i = arr.length-1; i > 0 ; i--) {
        acc = callback(acc,arr[i], i, arr) 
      } 
      return acc;  
    } else {
      throw new Error('This is not array or function or string!!!');
    }  
  }
  
  let arr = [11,2,3,4];
  let acc=arr[0];
  
  let res1= reduce(arr, function(acc, item, i, arr) { 
    return acc*item
  }, acc)
  console.log(res1);