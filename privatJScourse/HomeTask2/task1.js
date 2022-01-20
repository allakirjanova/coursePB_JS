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