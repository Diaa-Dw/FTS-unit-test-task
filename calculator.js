function calculator(...tokens) {
  const operands = [];
  const operators = [];
  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  // handler function to check if token is a number
  const isNumber = (token) => {
    return typeof token === "number" && !isNaN(token);
  };

  // handler function to check if token is a valid operator
  const isOperator = (token) => {
    return Object.keys(precedence).includes(token);
  };

  const applyOperation = (num1, operator, num2) => {
    if (operator === "/" && num2 === 0) throw new Error("Division by zero");
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
    }
  };

  const processOperators = (operands, operators) => {
    const num2 = operands.pop();
    const num1 = operands.pop();
    operands.push(applyOperation(num1, operators.pop(), num2));
  };

  for (let idx = 0; idx < tokens.length; idx++) {
    const token = tokens[idx];
    //if index is even, it means that the token must be a number
    if (idx % 2 === 0) {
      if (!isNumber(token)) throw new Error("Invalid input type");
      if (token > 1000) {
        if (operators.length === 0) throw new Error("Invalid expression");
        operators.pop();
        continue;
      } else {
        operands.push(token);
      }
    } else {
      //if token index is odd it checks if is operator and if it is not throw error
      if (!isOperator(token)) throw new Error(`Invalid operator`);
      while (
        operators.length > 0 &&
        precedence[operators[operators.length - 1]] >= precedence[token]
      ) {
        processOperators(operands, operators);
      }
      operators.push(token);
    }
  }

  //ensures all pending operations are executed in the correct order
  while (operators.length > 0) {
    if (operands.length < 2) throw new Error("Invalid expression");

    processOperators(operands, operators);
  }

  return operands[0];
}

module.exports = calculator;
