// ####Задача 6

// Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет. 
//Если чётное — функция возвращает `true`, если нечётное — `false`. Данная функция должна обязательно содержать проверку
// входного параметра, потому что принимать она может только число.

// *Чётные числа могут делится на 2 без остатка.*

// ```js
// isEven(3); // false
// isEven(4); // true
// isEven('Content'); // Error: parameter type is not a Number
// ```

function isEven(a){
    if( typeof a !== 'number'){
        console.log('Error: parameter type is not a Number');
    }else if(a%2 === 0){
        console.log(true);
    }else{
        console.log(false);
    }
  }
  isEven(3);
  isEven(4);
  isEven('fdg');