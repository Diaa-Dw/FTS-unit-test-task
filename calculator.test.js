// calculator.test.js
const calc = require("./calculator");

describe("Calculator", () => {
  // Test case: Addition
  it("should return the correct sum of two numbers", () => {
    expect(calc(2, "+", 3)).toBe(5);
  });

  // Test case: Subtraction
  it("should return the correct difference of two numbers", () => {
    expect(calc(5, "-", 2)).toBe(3);
  });

  // Test case: Multiplication
  it("should return the correct product of two numbers", () => {
    expect(calc(4, "*", 6)).toBe(24);
  });

  // Test case: Division
  it("should return the correct quotient of two numbers", () => {
    expect(calc(10, "/", 2)).toBe(5);
  });

  // Test case: Division by zero
  it("should throw an error when dividing by zero", () => {
    expect(() => calc(6, "/", 0)).toThrow("Division by zero");
  });

  // Test case: Negative numbers
  it("should handle negative numbers correctly", () => {
    expect(calc(-8, "+", 5)).toBe(-3);
  });

  // Test case: Decimal numbers
  it("should handle decimal numbers correctly", () => {
    expect(calc(3.5, "*", 2)).toBe(7);
  });

  // Test case: Order of operations
  it("should follow the correct order of operations", () => {
    expect(calc(2, "+", 3, "*", 4)).toBe(14);
  });

  // Test case: Invalid operator
  it("should throw an error for an invalid operator", () => {
    expect(() => calc(5, "$", 3)).toThrow("Invalid operator");
  });

  // Test case: Invalid input type
  it("should throw an error for invalid input types", () => {
    expect(() => calc("2", "+", 3)).toThrow("Invalid input type");
  });

  //Test case: Invalid expression
  it("Should throw an error for an expression with  extra operators", () => {
    expect(() => calc(2, "+", 3, "*")).toThrow("Invalid expression");
  });

// Test case: Ignoring a single number greater than 1000
it("should ignore numbers greater than 1000 in the calculation", () => {
  expect(calc(8, "+", 1001)).toBe(8); // Only 8 should be considered in the calculation
});

// Test case: Ignoring multiple numbers greater than 1000 in a series of operations
it("should ignore all numbers greater than 1000 in multiple operations", () => {
  expect(calc(2, "+", 1001, "+", 2, "*", 1001)).toBe(4); // Only the valid numbers (2 + 2) should be calculated
});

// Test case: Handling an invalid expression with all numbers greater than 1000
it("should throw an error if all numbers are greater than 1000", () => {
  expect(() => calc(1001, "+", 1001, "*", 1001)).toThrow("Invalid expression"); 
});
});
