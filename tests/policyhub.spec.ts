import { test, expect } from '@playwright/test';

test('Verify successful login', async ({ page }) => {

  // 1. Open the Home page
  await page.goto('http://127.0.0.1:6101');

  // 2. Click GetQuote
  await page.locator('#Get a Quote').click();

  // 3. Enter Fullname
  await page.locator('#Full name').fill('TestUser');

  // 4. Click Submit button
  await page.locator('#Email').fill('testuser@test.com');

  // 5. Verify the new page URL
  await expect(page).toHaveURL('http://127.0.0.1:6101/quote/new');

});