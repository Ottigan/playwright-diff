import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Example");

  const canvas = await page.$("canvas");

  await page.waitForFunction(({ ele }) => {
    const ctx = ele?.getContext('2d');

    if (!ele || !ctx) {
        return false;
    }

    const { data } = ctx.getImageData(0, 0, ele.width, ele.height);

    // Check if the image is not empty
    return data.some((val) => val !== 0);
  }, { ele: canvas })

  await expect(page).toHaveScreenshot({ timeout: 0 });
});