function check(result, expectedResult, testCaseDescription) {
  //   console.log(testCaseDescription);

  //   if (result === expectedResult) console.log("Ok");
  //  else console.log("Error");

  console.log(
    `Result: ${result}, Expected: ${expectedResult}---${testCaseDescription}: ${
      result === expectedResult ? "Success" : "Error"
    }`
  );
}

module.exports = check;
