import { test, expect } from '@playwright/test';

test.beforeEach('', async ({ page }) => {  
  await page.goto('https://playwright.dev/');
})

test('HW21. The first header of Getting Started section is called Installation', async ({ page }) => {
  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page.locator('h1')).toContainText('Installation');
});

test('HW22. Search modal window is displayed when user clicks on Search box of the header', async ({ page }) => {
  await page.getByLabel('Search').click();
  await expect(page.getByPlaceholder('Search docs')).toBeVisible();
})

test('HW23. By clicking Get Started user is redirected to the corresponding page of Docs', async ({ page }) => {
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByLabel('Breadcrumbs').getByRole('list')).toContainText('Getting Started');
});

test('HW24. User can navigate through the pages in a header', async ({ page }) => {
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'API', exact: true }).click();
  await page.getByRole('button', { name: 'Node.js' }).click();
  await page.getByRole('link', { name: 'Community' }).click();
  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
});

test('HW25. User can navigate through the tabs of Installing Playwright section', async ({ page }) => {
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Installing Playwright', exact: true }).click();
  await page.locator('.tabs > li:nth-child(3)').first().click();
});