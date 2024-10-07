import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Example");
  await expect(page).toHaveScreenshot({ timeout: 0 });
});