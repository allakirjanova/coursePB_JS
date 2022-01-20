// ####Задача 3

// Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

// ```js
// f(9,3,2); // 3
// f('s',9,3) // Error: all parameters type should be a Number
// ```

function f(a, b, c){
    let res = 0;
    if( typeof a === 'number' && typeof b === 'number' && typeof c === 'number' ){
        res = ( a- b) / c;
    }else{
        res = 'Error: all parameters type should be a Number';
    }
    console.log(res);
    return res;
}
f(9,3,2);
f('s',9,3);
