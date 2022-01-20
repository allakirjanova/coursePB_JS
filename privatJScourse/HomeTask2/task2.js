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