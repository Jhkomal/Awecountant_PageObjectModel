import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import BrandPage from '../pages/BrandPage';

test('User should be able to create a new brand', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const brandPage = new BrandPage(page);

    // Step 1: Navigate to the login page and log in
    await loginPage.navigate('https://demo.awecountant.com/');
    await loginPage.login('pramod@awecode.com', 'admin');

    // Step 2: Navigate to the Brands page
    await brandPage.navigateToBrands();

    // Step 3: Navigate to the New Brand page
    await brandPage.navigateToNewBrand();

    // Step 4: Fill in brand details
    await brandPage.fillBrandDetails('fena', 'Its a washing powder');

    // Step 5: Create the brand
    await brandPage.createBrand();

    // Step 6: Verify the success message
    await brandPage.verifySavedMessage();

    // Assertion (Optional): Ensure the saved message is visible
    await expect(page.getByText('Saved')).toBeVisible();
});
