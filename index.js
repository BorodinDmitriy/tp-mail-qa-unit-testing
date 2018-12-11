const calculator = require('./calculator.js');
const readline = require('readline');

const interf = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 console.log("Welcome\n");
 interf.question('Input first number: ', (a) => {
    interf.question('Input second number: ', (b) => {
        interf.question('Input one of the operations (+,-,*,/,^,sqrt):', (choice) => {
            if (!calculator.isNum(a, b)) {
                console.error('Error. You have to input numbers into calculator.');
            } else {
                switch (choice) {
                case '+':
                    console.log(`${a} + ${b} = ${calculator.addition(a, b)}.`);
                    break;
                case '-':
                    console.log(`${a} - ${b} = ${calculator.subtraction(a, b)}.`);
                    break;
                case '*':
                    console.log(`${a} * ${b} = ${calculator.multiplication(a, b)}.`);
                    break;
                case '/':
                    try { 
                        console.log(`${a} / ${b} = ${calculator.division(a, b)}.`);
                    } catch (err) {
                        console.error('Error. Division to zero is obliged.');
                    }
                    break;
                case '^':
                    console.log(`${a} ^ ${b} = ${calculator.power(a, b)}.`);
                    break;
                case 'sqrt':
                    console.log(`sqrt(${a}) = ${calculator.sqrt(a)}.`);
                    break;
                default:
                    console.error('Error. Have to input one of allowed operations (+,-,*,/,sqrt)!');
                    break;
                }
            }
            interf.close();
        });
    });
});