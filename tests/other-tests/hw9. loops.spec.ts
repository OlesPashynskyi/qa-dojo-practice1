import { test, expect } from "@playwright/test";

test(``, () => {
  // - Виведіть в консоль числа від 1 до 345 (while)
  for (let i = 1; i <= 345; ++i) {
    console.log(i);
  }

  // - Знайти суму чисел від 1 до 100 (тобто  1 + 2 + 3 + 4 + 5 + 6....)
  let sum = 0;
  for (let i = 1; i <= 100; ++i) {
    sum = sum + i;
  }
  console.log(sum);

  // - Виведіть в консоль числа від 241  до 1 (do while)
  let i = 241;
  do {
    console.log(i);
    i--;
  } while (i >= 1);
});
