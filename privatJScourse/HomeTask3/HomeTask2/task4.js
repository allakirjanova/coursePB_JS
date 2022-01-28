// ####Задача 4

// Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке.
// Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.

// ```js
// f(1); // Воскресенье
// f(2); // Понедельник
// f(8); // Error: parameter should be in the range of 1 to 7
// f('1'); // Error: parameter type is not a Number
// ```
function f(a){
    let res;
    if ( typeof a !== 'number'){
        res = 'Error: parameter type is not a Number';
    }else if ( a < 0 || a > 7){
        res = 'Error: parameter should be in the range of 1 to 7';
    } else if( a === 1){
        res = 'Понедельник';
    }else if( a === 2){
        res = 'Вторник';
    }else if( a === 3){
        res = 'Среда';
    }else if( a === 4){
        res = 'Четверг';
    }else if( a === 5){
        res = 'Пятница';
    }else if( a === 6){
        res = 'Суббота';
    }else if( a === 7){
        res = 'Воскресенье';
    }
    console.log(res);
    return res;
}
f(1); 
f(2); 
f(8); 
f('1');