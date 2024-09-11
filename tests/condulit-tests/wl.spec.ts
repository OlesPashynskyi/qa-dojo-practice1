import test, { expect } from "@playwright/test";

test('WL-1 validation message is displayed when signing in with invalid credentials', async ({ page }) => {
    const errorMessage = `email or password is invalid`;
    await page.goto('https://demo.learnwebdriverio.com/login');
    await page.locator(`//input[@placeholder="Email"]`).fill(`Oles@g.c`);
    await page.locator(`//input[@placeholder="Password"]`).fill(`12345`);
    await page.locator(`//button[contains(text(), 'Sign in')]`).click();
    await expect(page.locator(`//li[text() = '${errorMessage}']`)).toBeVisible();
})