// ####Задача 1

// Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
// forEach(arr, function(item, i, arr) {});
// ```

function forEach(arr, callback){
    if(Array.isArray(arr) && typeof callback === 'function'){
        for (let i = 0; i < arr.length; i++) {
            callback(arr[i], i, arr);        
        }
    }else{
        throw new Error('This is not array or function!!!');
    }
  }
  
  const arr = [1,2,3,4];
  forEach(arr, function(arr, i,d) {
    console.log(arr, i,d)
  })
