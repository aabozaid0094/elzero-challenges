// Plus And Minus Puzzle
console.log("== Plus And Minus Puzzle ==");
let aa = 10;
let bb = "20";
let cc = 80;
console.log(++aa + +bb++ + +cc++ - +aa++);
console.log(++aa + -bb + +cc++ - -aa++ + +aa);
console.log(--cc + +bb + --aa * +bb++ - +bb * aa + --aa - +true);
/*
  First console: ++a + +b++ + +c++ - +a++ : 11 + 20 + 80 - 11 : 100
  [++a]
  - Value: 11
  - Explain: preincrement operator add 1 to variable a before returning the whole value
  - Value after: 11
  [+]
  - Explain: Addition Operator
  [+b++]
  - Value: 20
  - Explain: unary oberator return number value of variable b, and post increment operator that add 1 to variable b after returning the whole value
  - Value after: 21
  [+c++]
  - Value: 80
  - Explain: unary oberator return number value of variable c, and post increment operator that add 1 to variable c after returning the whole value
  - Value after: 81
  [-]
  - Explain: Subtraction Operator
  [+a++]
  - Value: 11
  - Explain: unary oberator return number value of variable b, and post increment operator that add 1 to variable a after returning the whole value
  - Value after: 12
  
  Second console: ++a + -b + +c++ - -a++ + +a : 13 + -21 + 81 - -13 + 14 : 100
  [++a]
  - Value: 13
  - Explain: preincrement operator add 1 to variable a before returning the whole value
  - Value after: 13
  [+]
  - Explain: Addition Operator
  [-b]
  - Value: -21
  - Explain: unary oberator return negation of number value of variable b
  - Value after: 21
  [+]
  - Explain: Addition Operator
  [+c++]
  - Value: 81
  - Explain: unary oberator return number value of variable c, and post increment operator that add 1 to variable c after returning the whole value
  - Value after: 82
  [-]
  - Explain: Subtraction Operator
  [-a++]
  - Value: -13
  - Explain: unary oberator return negation of number value of variable a, and post increment operator that add 1 to variable a after returning the whole value
  - Value after: 14
  [+]
  - Explain: Addition Operator
  [+a]
  - Value: 14
  - Explain: unary oberator return negation of number value of variable a, and post increment operator that add 1 to variable a after returning the whole value
  - Value after: 14
  
  Third console: --c + +b + --a * +b++ - +b * a + --a - +true : 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 : 102 + 273 - 286 + 11 : 100
  [--c]
  - Value: 81
  - Value after: 81
  [+]
  - Explain: Addition Operator
  [+b]
  - Value: 21
  - Value after: 21
  [+]
  - Explain: Addition Operator
  [--a]
  - Value: 13
  - Value after: 13
  [*]
  - Explain: Multiplicatiom Operator
  [+b++]
  - Value: 21
  - Value after: 22
  [-]
  - Explain: Subtraction Operator
  [+b]
  - Value: 22
  - Value after: 22
  [*]
  - Explain: Multiplicatiom Operator
  [a]
  - Value: 13
  - Value after: 13
  [+]
  - Explain: Addition Operator
  [--a]
  - Value: 12
  - Value after: 12
  [-]
  - Explain: Subtraction Operator
  [+true]
  - Value: 1
  - Value after: 1
*/
console.log("===============================");