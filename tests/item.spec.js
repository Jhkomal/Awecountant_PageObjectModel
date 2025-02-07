import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ItemPage from '../pages/ItemPage';

test('User should be able to add an item', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const itemPage = new ItemPage(page);

    // Log in
    await loginPage.navigate();
    await loginPage.login('pramod@awecode.com', 'admin');
    await expect(page).toHaveURL('https://demo.awecountant.com/dashboard');

    // Navigate to Add Item Page
    await itemPage.navigateToAddItem();

    // Fill item details
    await itemPage.fillItemDetails('table', '8765', '90100', '100', 'Just for testing purpose', 'abcd', 'tax');

    // Click Create button
    await itemPage.createItem();

  
    const successMessage = page.locator('div').filter({ hasText: 'Item created successfully' }).first();
    await expect(successMessage).toBeVisible();
});
