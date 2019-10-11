module.exports = function multiply(first, second) {
  // BigInt - string to number
  return (BigInt(first) * BigInt(second)).toString(10);
}
