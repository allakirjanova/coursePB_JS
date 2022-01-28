// ####Задача 9

// Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только число, строку, объект, массив
// - Второй параметр обязателен и может принимать только число

// ```javascript
// arrayFill('x',5); // [x,x,x,x,x]
// ```
function arrayFill(value,num){
    let res = [];
    if(typeof value !== 'number' || typeof value !== 'string' || typeof value !== 'object' && typeof num !== 'number'){
      for( let i = 0 ; i < num; i++){
        res.push(value);
      }
    }else{
      throw new Error('Type of the data is not valid!')
    }
    return res;
  }
  
  let res =arrayFill('x',5)
  console.log(res)