import { test, expect } from '@playwright/test';

import LoginPage from '../pages/LoginPage';
import InventoryAdjustmentPage from '../pages/InventoryAdjustmentPage';

test('User should be able to create a new inventory adjustment', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryAdjustmentPage(page);

    // Navigate to login page
    await loginPage.navigate('https://demo.awecountant.com/');
    await loginPage.login('pramod@awecode.com', 'admin');
    // Expand "Items" section
    await inventoryPage.expandItems();

    // Select Inventory Adjustment
    await inventoryPage.selectInventoryAdjustment();

    // Click "Add Inventory Adjustment"
    await inventoryPage.addInventoryAdjustment();

    // Select Item
    await inventoryPage.selectItem();

    // Set Rate
    await inventoryPage.setRate('30');

    // Select Unit
    await inventoryPage.selectUnit();

    // Fill Remarks
    await inventoryPage.fillRemarks('testing');

    // Click Create button
    await inventoryPage.createInventoryAdjustment();

    // Select Purpose
    await inventoryPage.selectPurpose();

    // Confirm Stock In
    await inventoryPage.confirmStockIn();

    // Verify the Inventory Adjustment
    await inventoryPage.verifyInventoryAdjustmentPage();
});
