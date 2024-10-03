import { test, expect } from "@playwright/test";

test.beforeEach("", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
});

test(
  "HW31. User can successfully remove an item from the cart",
  {
    tag: ["@cart", "@smoke"],
  },
  async ({ page }) => {
    await page.locator('[data-test="Espresso"]').click();
    await page.locator('[data-test="checkout"]').hover();
    await page.getByLabel("Remove one Espresso").click();
    await expect(page.locator('[data-test="checkout"]')).toContainText(
      "Total: $0.00"
    );
  }
);

test("HW32. Promo box is displayed when user adds third item to the cart", async ({
  page,
}) => {
  await page.locator('[data-test="Espresso"]').click({
    clickCount: 3,
  });
  await expect(
    page.getByText(
      "It's your lucky day! Get an extra cup of Mocha for $4.espressochocolate"
    )
  ).toBeVisible();
});

test("HW33. Total price is updated correctly after promo confirmation", async ({
  page,
}) => {
  await page.locator('[data-test="Espresso"]').click({
    clickCount: 3,
  });
  let priceBefore = await getTotalPrice({ page });
  await page.getByRole("button", { name: "Yes" }).click();
  let priceAfter = await getTotalPrice({ page });
  expect(priceAfter - priceBefore).toEqual(4);
});

async function getTotalText({ page }) {
  const totalText = page.locator('[data-test="checkout"]').textContent();
  return totalText;
}

async function getTotalPrice({ page }) {
  let totalText = await getTotalText({ page });
  let price = parseInt(totalText!.slice(8, -3));
  return price;
}
