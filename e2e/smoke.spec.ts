import { expect, test } from '@playwright/test';

test('home page renders with Vanilla Extract styles', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Task Dashboard' })).toBeVisible();
  // The body background comes from the global theme in app/theme.css.ts.
  await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(255, 255, 255)');
  await expect(page.locator('body')).toHaveCSS('color', 'rgb(17, 24, 39)');
});
