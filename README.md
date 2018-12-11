# tp-mail-qa-unit-testing

## Task

- Write a simple calculator using JavaScript;
- Write unit tests for calculator

## Instruments

- [Mocha](https://mochajs.org)
- [Istanbul](https://istanbul.js.org)

## Usage

- ```git clone https://github.com/BorodinDmitriy/tp-mail-qa-unit-testing.git ```
- ```npm install```
- ```npm test```
- ```npm start```
- have fun

## Test scenario (+ coverage analysis)
'''
  Addition operation:
    √ Successful addition of two positive integer numbers: 2 + 2 = 4
    √ Successful addition of two positive integer numbers: -1 + 1 = 0
    √ Successful addition of two positive float numbers: 0.5 + 0.51 = 1.01
    √ Successful addition of two negative float numbers: -0.5 + -0.51 = -1.01

  Substraction operation:
    √ Successful substraction of two positive integer numbers: 1 - 1 = 0
    √ Successful substraction of positive integer and negative integer numbers: -1 - 1 = -2
    √ Successful substraction of positive float and negative integer numbers: 10.1 - -1 = 11.1
    √ Successful substraction of two negative float numbers: -0.1 - -0.2 = 0.1
    √ Successful substraction from zero: 0 - -1 = 1
    √ Successful substraction of nil from positive float numbers: 0.1 - 0 = 0.1

  Multiplication operation:
    √ Successful multiplication of two positive integer numbers: 2 * 2 = 4
    √ Successful multiplication of positive and negative integer: -2 * 2 = -4
    √ Successful multiplication of positive float and negative integer: 0.5 * -4 = -2
    √ Successful multiplication of two negative floats: -0.5 * -0.5 = 0.25
    √ Successful multiplication on zero: -1 * 0 = 0

  Division operation:
    √ Successful division of two positive integers  => 4 / 2 = 2
    √ Successful division to 1: -2 / 1 = -2
    √ Successful division to the number itself:  0.5 / 0.5 = 1
    √ Successful division of zero to the integer: 0 / -2 = 0
    √ Error when dividing to zero: 1 / 0 throws "Must not divide to zero."

  Power operation:
    √ Successful power into positive power: 2 ^ 1 = 2
    √ Successful power into zero: 2 ^ 0 = 1
    √ Successful power into negative: powering into negative power returns "Cannot power into negative value"

  Sqrt operation:
    √ Successful sqrt of integer: sqrt(4) = 2
    √ Successful sqrt of float: sqrt(0.25) = 0.5
    √ Successful sqrt of negative:getting a square root of negative throws error "Cannot take square root out of negative number"

  Check input data function:
    √ Successful validation of two integers
    √ Successful validation of positive and negative floats
    √ Successful validating of number and string: checking string returns false
    √ Successful validating strings: checking string returns false


  30 passing (42ms)

--------------------|----------|----------|----------|----------|-------------------|
File                |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Lines |
--------------------|----------|----------|----------|----------|-------------------|
All files           |      100 |      100 |      100 |      100 |    |
calculator.js       |      100 |      100 |      100 |      100 |  |
calculator.spec.js  |      100 |      100 |      100 |      100 |    |
--------------------|----------|----------|----------|----------|-------------------|
'''
