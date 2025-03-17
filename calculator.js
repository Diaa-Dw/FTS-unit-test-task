function calculator(num1, operator, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Invalid input type, please be sure to input number");
  }

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) throw new Error("Division by zero");
      return a / b;
    default:
      throw new Error("Invalid operator");
  }
}

module.exports = calculator;
