import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  await page.getByTestId('hero').locator('div').filter({ hasText: 'Learn more' }).getByRole('link').click();
});