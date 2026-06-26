const { test, expect } = require('@playwright/test');

test('Homepage loads', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page.locator('h1')).toHaveText('My First CI/CD App');
});