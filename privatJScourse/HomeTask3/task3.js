// Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
// every(arr, function(item, i, arr) {});
// ```

function every(arr, callback) {
    let res = true;
    if (Array.isArray(arr) && typeof callback === 'function') {
      for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {        
          return false;
        } 
      }
      return res;
    } else {
      throw new Error('This is not array or function!!!');
    }
  }
  
  const arr = [1,2,3];
  let res1 = every(arr, function(item, idx, arr) {
     return item < 0;  
  });
  console.log(res1)
