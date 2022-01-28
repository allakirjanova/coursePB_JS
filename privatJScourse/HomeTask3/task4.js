// ####Задача 4

// Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
// some(arr, function(item, i, arr) {});
// ```

function some(arr, callback) {
    res = false;
    if (Array.isArray(arr) && typeof callback === 'function') {
      for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
           res = true;
        }
      }
      return res;
    } else {
      throw new Error('This is not array or function!!!');
    }
  }
  let res4 = some(arr, function (item, idx, arr) {
    return item == 1;
  });
  console.log(res4);
