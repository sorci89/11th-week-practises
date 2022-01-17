const preschoolAdd = require("./preschoolAdd"); // import ... from ... helyett
const check = require("./myTestLib");
const { expect } = require("@jest/globals");

// console.log(preschoolAdd(1.5, 2));
// console.log(preschoolAdd(10, 4));
// console.log(preschoolAdd(-1, -3));

// check(preschoolAdd(5, 2), 7, "10-nél kisebb eredménynél megkapjuk a számot");
// check(preschoolAdd(5.3, 2), 7, "10-nél kisebb tört számnál lefelé kerekiti");
// check(preschoolAdd(5, 7), "sok", "10-nél nagyobb számnál az eredmény: sok");
// check(preschoolAdd(5, -7), 0, "negativ számnál kiirja, hogy 0");
// check(preschoolAdd(5, 5), 10, "10-nél visszaadja, hogy 10");

test("10-nél kisebb eredménynél megkapjuk a számot", () => {
  expect(preschoolAdd(5, 2)).toBe(7);
});
