import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import OpeningStockPage from '../pages/OpeningStockPage';

test('Verify user can add new opening stock', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  const openingStockPage = new OpeningStockPage(page);

  await page.goto('https://demo.awecountant.com/');
  
  // Perform login
  await loginPage.login('pramod@awecode.com', 'admin');

  // Navigate to Opening Stock
  await openingStockPage.navigateToOpeningStock();

  // Add new Opening Stock
  await openingStockPage.addNewOpeningStock('electrical', '7', '300');

  // Verify the stock was added successfully
  await expect(openingStockPage.savedMessage).toBeVisible(); // Verifies if "Saved" message appears

  // Verify stock is present in search
  await openingStockPage.searchStockItem('electrical');
  await expect(openingStockPage.resultCell('electrical')).toBeVisible();
});
