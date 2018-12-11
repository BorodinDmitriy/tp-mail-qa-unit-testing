const assert = require('assert');
const calc = require('./calculator.js');

 describe("Addition operation:", function () {
  it('Successful addition of two positive integer numbers: 2 + 2 = 4', () => {
    assert.equal(calc.addition(2, 2), 4);
  });
  it('Successful addition of two positive integer numbers: -1 + 1 = 0', () => {
    assert.equal(calc.addition(-1, 1), 0);
  });
  it('Successful addition of two positive float numbers: 0.5 + 0.51 = 1.01', () => {
    assert.equal(calc.addition(0.5, 0.51), 1.01);
  });
  it('Successful addition of two negative float numbers: -0.5 + -0.51 = -1.01', () => {
    assert.equal(calc.addition(-0.5, -0.51), -1.01);
  });
 });

 describe("Substraction operation:", function () {
   it('Successful substraction of two positive integer numbers: 1 - 1 = 0', () => {
    assert.equal(calc.subtraction(1, 1), 0);
  });
   it('Successful substraction of positive integer and negative integer numbers: -1 - 1 = -2', () => {
    assert.equal(calc.subtraction(-1, 1), -2);
  });
   it('Successful substraction of positive float and negative integer numbers: 10.1 - -1 = 11.1', () => {
    assert.equal(calc.subtraction(10.1, -1), 11.1);
  });
   it('Successful substraction of two negative float numbers: -0.1 - -0.2 = 0.1', () => {
    assert.equal(calc.subtraction(-0.1, -0.2), 0.1);
  });
   it('Successful substraction from zero: 0 - -1 = 1', () => {
    assert.equal(calc.subtraction(0, -1), 1);
  });
   it('Successful substraction of nil from positive float numbers: 0.1 - 0 = 0.1', () => {
    assert.equal(calc.subtraction(0.1, 0), 0.1);
  });
 });

 describe("Multiplication operation:", function () {
   it('Successful multiplication of two positive integer numbers: 2 * 2 = 4', () => {
    assert.equal(calc.multiplication(2, 2), 4);
  });
   it('Successful multiplication of positive and negative integer: -2 * 2 = -4', () => {
    assert.equal(calc.multiplication(-2, 2), -4);
  });
   it('Successful multiplication of positive float and negative integer: 0.5 * -4 = -2', () => {
    assert.equal(calc.multiplication(0.5, -4), -2);
  });
   it('Successful multiplication of two negative floats: -0.5 * -0.5 = 0.25', () => {
    assert.equal(calc.multiplication(-0.5, -0.5), 0.25);
  });
   it('Successful multiplication on zero: -1 * 0 = 0', () => {
    assert.equal(calc.multiplication(-1, 0), 0);
  });
 });

 describe("Division operation:", function () {
   it('Successful division of two positive integers  => 4 / 2 = 2', () => {
    assert.equal(calc.division(4, 2), 2);
  });
   it('Successful division to 1: -2 / 1 = -2', () => {
    assert.equal(calc.division(-2, 1), -2);
  });
   it('Successful division to the number itself:  0.5 / 0.5 = 1', () => {
    assert.equal(calc.division(0.5, 0.5), 1);
  });
   it('Successful division of zero to the integer: 0 / -2 = 0', () => {
    assert.equal(calc.division(0, -2), 0);
  });
   it('Error when dividing to zero: 1 / 0 throws "Must not divide to zero." ', () => {
    assert.throws(() => calc.division(1, 0), Error, "Must not divide to zero.");
  });
 });

describe("Power operation:", function () {
   it('Successful power into positive power: 2 ^ 1 = 2', () => {
    assert.equal(calc.power(2, 1), 2);
  });
   it('Successful power into zero: 2 ^ 0 = 1', () => {
    assert.equal(calc.power(2, 0), 1);
  });
   it('Successful power into negative: powering into negative power returns "Cannot power into negative value"', () => {
    assert.throws(() => calc.power(2, -1), Error, 'Cannot power into negative value');
  });
 });

describe("Sqrt operation:", function () {
   it('Successful sqrt of integer: sqrt(4) = 2', () => {
    assert.equal(calc.sqrt(4), 2);
  });
   it('Successful sqrt of float: sqrt(0.25) = 0.5', () => {
    assert.equal(calc.sqrt(0.25), 0.5);
  });
   it('Successful sqrt of negative:getting a square root of negative throws error "Cannot take square root out of negative number"', () => {
    assert.throws(() => calc.sqrt(-1), Error, "Cannot take square root out of negative number");
  });

 });

 describe("Check input data function:", function () {
   it('Successful validation of two integers', () => {
    assert.equal(calc.isNum(2, 1), true);
  });
   it('Successful validation of positive and negative floats', () => {
    assert.equal(calc.isNum(-0.5, 0.5), true);
  });
   it('Successful validating of number and string: checking string returns false', () => {
    assert.equal(calc.isNum(1, 'some string'), false);
  });
   it('Successful validating strings: checking string returns false', () => {
    assert.equal(calc.isNum('1', 'some string'), false);
  });

 });