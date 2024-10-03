import { test, expect, Locator } from "@playwright/test";

test("TC-1. User can successfully navigate to a section in carousel", async ({
  page,
}) => {
  const carousel: Locator = page.locator(
    `//div[@class="categories-slider"]/div/div/a`
    // `.categories-slider [id^="swiper-wrapper"] [class^="swiper-slide"]`
  );
  const btnNext: Locator = page.locator(`//div[@class="swiper-button-next"]`);
  const activeBanner: Locator = page.locator(
    `//div[@class="categories-slider"]/div/div/a[@class="swiper-slide swiper-slide-active"]`
  );

  await page.goto(`https://telemart.ua/ua/`);
  // console.log(await carousel.all());
  await expect((await carousel.all()).length).toBeGreaterThan(2);

  await btnNext.click();
  await btnNext.click();
  const urlOfActiveBanner = await activeBanner.getAttribute("href");
  await activeBanner.click();
  expect(removeUaFromUrl(page.url())).toEqual(urlOfActiveBanner);
});

function removeUaFromUrl(url: string): string {
  return url.replace("/ua/", "/");
}
