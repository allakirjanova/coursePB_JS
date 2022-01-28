// ####Задача 2

// Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
// filter(arr, function(item, i, arr) {});
// ```

function filter (arr, callback){
    let res = [];
    if(Array.isArray(arr) && typeof callback === 'function'){
        for (let i = 0; i < arr.length; i++) {
            if(callback(arr[i], i, arr)){
                res.push(arr[i]);
            };        
        }
    }else{
        throw new Error('This is not array or function!!!');
    }
    return res;
  }
  
  const arr = [1,2,3];
  let res = filter(arr, function(item, idx, arr) {
    return idx == 1;  
  });
  
  console.log(res);
