const add = require("../index");

test("adds 2 +1 to equal 3", () => {
  expect(add(5)).toEqual(6);
});
