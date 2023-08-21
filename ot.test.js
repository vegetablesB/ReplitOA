const isValid = require("./OT");

test("Test Case 1", () => {
  expect(
    isValid(
      "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
      "Repl.it uses operational transformations.",
      '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
    )
  ).toBe(true);
});

test("Test Case 2", () => {
  expect(
    isValid(
      "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
      "Repl.it uses operational transformations.",
      '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
    )
  ).toBe(false);
});

test("Test Case 3", () => {
  expect(
    isValid(
      "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
      "Repl.it uses operational transformations.",
      '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
    )
  ).toBe(false);
});

test("Test Case 4", () => {
  expect(
    isValid(
      "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
      "We use operational transformations to keep everyone in a multiplayer repl in sync.",
      '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
    )
  ).toBe(true);
});

test("Test Case 5", () => {
  expect(
    isValid(
      "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
      "We can use operational transformations to keep everyone in a multiplayer repl in sync.",
      '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
    )
  ).toBe(false);
});

test("Test Case 6", () => {
  expect(
    isValid(
      "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
      "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
      "[]"
    )
  ).toBe(true);
});
