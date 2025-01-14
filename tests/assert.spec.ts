import { test, expect } from '@playwright/test';

test('pLaying with assertions', async ({ page }) => {
  await page.goto('https://uitestingplayground.com/textinput');
    await expect(page.locator('#newButtonName')).toBeVisible();

  await page.locator('#newButtonName').fill("Hello World");

  await page.locator('updatingButton').click();
  await expect(page.locator('#updatingButton')).toContainText('Hello World');


});