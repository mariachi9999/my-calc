const symbols = [
  { symbol: "%", operation: "percentage" },
  { symbol: "CE", operation: "delete_result1" },
  { symbol: "C", operation: "delete_result2" },
  { symbol: "Del", operation: "delete_result3" },
  { symbol: ".1/x", operation: "divide_itself" },
  { symbol: "x²", operation: "power_squared" },
  { symbol: "√2", operation: "square_root" },
  { symbol: "/", operation: "divide" },
  { symbol: 7, operation: "seven" },
  { symbol: 8, operation: "eight" },
  { symbol: 9, operation: "nine" },
  { symbol: "X", operation: "multiply" },
  { symbol: 4, operation: "four" },
  { symbol: 5, operation: "five" },
  { symbol: 6, operation: "six" },
  { symbol: "-", operation: "rest" },
  { symbol: 1, operation: "one" },
  { symbol: 2, operation: "two" },
  { symbol: 3, operation: "three" },
  { symbol: "+", operation: "add" },
  { symbol: "±", operation: "plus_minus" },
  { symbol: 0, operation: "zero" },
  { symbol: ".", operation: "to_float" },
  { symbol: "=", operation: "equal" },
];

export default function data() {
  return symbols;
}
