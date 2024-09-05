import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click({
    clickCount: 3
  });
  await page.getByRole('button', { name: 'Yes' }).click();
});