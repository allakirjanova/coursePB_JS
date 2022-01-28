// ####Задача 2

// Напишите функцию `f` которая возвращает сумму всех параметров. Количество параметров может быть любым. Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

// ```js
// f(1,2,3); // 6
// f(1,1,1,1,1,1,1,1); // 8
// f(1,2,'s',4); // Error: all parameters type should be a Number
// ```

function f() {
    let res = 0;
    for (let arg of arguments) {
      if (typeof arg !== 'number') {
        console.log(' Error: all parameters type should be a Number');
        return
      } else {
        res += arg;
      }
    }
    console.log(res)
    return res;
  }  
  f(1, 2, 3);
  f(1, 1, 1, 1, 1, 1, 1, 1);
  f(1, 2, 's', 4);