const add = require("../index");

test("adds 2 +1 to equal 3", () => {
  expect(add(7)).toEqual(8);
});
