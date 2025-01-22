import { test, expect } from '@playwright/test';

test('pLaying with assertions', async ({ page }) => {
  await page.goto('https://www.duckduckgo.com');
    await expect(page.locator('#searchbox_input')).toBeVisible();

  await page.locator('#searchbox_input').fill("Hello World");

  await page.locator('#searchbox_homepage > div > div.searchbox_searchbox__eaWKL > div > button.iconButton_button__6x_9C.searchbox_searchButton__F5Bwq').click();
  


});