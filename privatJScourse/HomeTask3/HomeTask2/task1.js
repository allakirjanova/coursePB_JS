// ####Задача 1

// Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

// ```js
// f(2); // 8
// f('Content'); // Error: parameter type is not a Number
// ```

function f(a) {
    let res = 0;
    if (typeof a === 'number') {
      res = a * a * a;
    } else {
      res = 'Error: parameter type is not a Number';
    }
    console.log(res)
    return res;
  }
  f('trrr');
  f(2);