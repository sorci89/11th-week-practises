// console.log("Hello World!");

function preschoolAdd(number1, number2) {
  const summ = number1 + number2;

  if (summ < 0) return 0;
  if (summ > 10) return "sok";

  return Math.floor(summ);
}

module.exports = preschoolAdd; // export default ... helyett
