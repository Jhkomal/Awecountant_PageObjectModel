import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import UnitPage from '../pages/UnitPage';

test('User should be able to add a unit', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const unitPage = new UnitPage(page);

    // Log in
    await loginPage.navigate();
    await loginPage.login('pramod@awecode.com', 'admin');
    await expect(page).toHaveURL('https://demo.awecountant.com/dashboard');

    // Navigate to New Unit Page
    await unitPage.navigateToNewUnit();

    // Fill unit details
    await unitPage.fillUnitDetails('current', 'A');

    // Click Create button
    await unitPage.createUnit();
    await page.goto('https://demo.awecountant.com/units/list/');
    await expect(page.getByText('watt')).toBeVisible();

   
});
