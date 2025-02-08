import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';  
import InventoryPage from '../pages/InventoryPage';  

test('User should be able to search the inventory item', async ({ page }) => {
    const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  // Log in
  await loginPage.navigate('https://demo.awecountant.com/');
  await loginPage.login('pramod@awecode.com', 'admin');

  // Navigate through the inventory
  await inventoryPage.expandItems();
  await inventoryPage.openInventoryLedger();
  await inventoryPage.searchItem('locker');
  await page.goto('https://demo.awecountant.com/inventory-account/list/?search=locker');
  await inventoryPage.selectSearchResult();
});
