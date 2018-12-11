module.exports = class Calculator {
  static addition(a, b) {
    return (+a) + (+b);
  }
  static subtraction(a, b) {
    return (+a) - (+b);
  }
  
  static multiplication(a, b) {
    return (+a) * (+b);
  }
  
  static division(a, b) {
    if (b == 0) {
      throw Error('Must not divide to zero.');
    }
    return (+a) / (+b);
  }

  static power(a, b) {
    if (b < 0) 
      throw Error("Cannot power into negative value");
    var result = 1;
    for (var i = 1; i <= b; i++) {
        result = result * a;
    }
    return result;
  }

  static sqrt(a) {
    if (a < 0) 
      throw Error("Cannot take square root out of negative number");
    var square_root = a / 2.0;     
    do {
        var temp = square_root;
        square_root = (temp + (a / temp)) / 2.0;
    } while ((temp - square_root) != 0);     
    return square_root;
  }
  
  static isNum(a, b) {
    if ((!isNaN(parseFloat(a)) && isFinite(a)) && 
       (!isNaN(parseFloat(b)) && isFinite(b))) {
      return true;
    }
    return false;
  }
 };