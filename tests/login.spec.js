import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('User should be able to log in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    // Navigate to login page
    await loginPage.navigate('https://demo.awecountant.com/');
    
    // Perform login
    await loginPage.login('pramod@awecode.com', 'admin');

    // Validate successful login (adjust selector based on actual page behavior)
    await expect(page).toHaveURL('https://demo.awecountant.com/dashboard');

});
