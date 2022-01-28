// ####Задача 10

// Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Генерировать ошибку если был передан пустой массив

// ```javascript
// const arr = [3,2,1];
// reverse(arr); // [1,2,3]
// ```
function reverse(arr){
    let res = [];
    if(Array.isArray(arr)){
        if(arr.length == 0){
            throw new Error('Array can not be empty');
        }else{
            for( let i = arr.length - 1; i >= 0; i--){
                res.push(arr[i])
            }
        }
    }else{
        throw new Error('The data is not valid, please insert an array!');
    }
    return res;
  }
  
  const arr = [3,2,1];
  reverse(arr); // [1,2,3]
  console.log(reverse(arr))