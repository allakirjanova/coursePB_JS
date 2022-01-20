// ####Задача 1

// Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

// ```js
// f(2); // 8
// f('Content'); // Error: parameter type is not a Number
// ```

function f(a) {
    if (typeof a === 'number') {
      let res = a * a * a;
      return console.log(res);
    } else {
      console.log('Error: parameter type is not a Number');
    }
  }
  f(2);
  f('trrr');
