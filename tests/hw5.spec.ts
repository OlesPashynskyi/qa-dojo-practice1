import { test, expect, Locator } from "@playwright/test";

test.beforeEach(`Go to Home page`, async ({ page }) => {
  await page.goto(`https://demo.learnwebdriverio.com/`);
});

test.afterEach(`Cleaning up...`, async ({ page }) => {
  await page
    .locator(`//div[@class='banner']//button[@data-qa-id='article-delete']`)
    .click();
});

test("TC-1. User can successfully create an article", async ({ page }) => {
  const signInAnchor: Locator = page.locator(`//a[@href='/login']`);
  const email: Locator = page.locator(`//input[@placeholder='Email']`);
  const password: Locator = page.locator(`//input[@placeholder='Password']`);
  const sigInButton: Locator = page.locator(
    `//button[contains(text(), 'Sign in')]`
  );
  const newArticleAnchor: Locator = page.locator(`//a[@href='/editor']`);
  const articleTitle: Locator = page.locator(
    `//input[@data-qa-id='editor-title']`
  );
  const articleDescription: Locator = page.locator(
    `//input[@data-qa-id='editor-description']`
  );
  const articleText: Locator = page.locator(
    `//textarea[@placeholder='Write your article (in markdown)']`
  );
  const articleTags: Locator = page.locator(
    `//input[@placeholder='Enter tags']`
  );
  const publishArticle: Locator = page.locator(
    `//button[@data-qa-id='editor-publish']`
  );
  const articleTitleHeader: Locator = page.locator(
    `//h1[@data-qa-id='article-title']`
  );

  await signInAnchor.click();
  await email.fill(`olesuser1@yopmail.com`);
  await password.fill(`test1234`);
  await sigInButton.click();

  await newArticleAnchor.click();
  await articleTitle.fill(`Oles Test Article`);
  await articleDescription.fill(`Test Description`);
  await articleText.fill(`Lorem ipsum dolor sit amet, ..`);
  await articleTags.fill(`test tag`);
  await publishArticle.click();
  await expect(articleTitleHeader).toContainText(`Oles Test Article`);
});
