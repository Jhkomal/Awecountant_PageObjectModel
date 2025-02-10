import { test, expect } from '@playwright/test';
import BillOfMaterialPage from '../pages/BillOfMaterialPage';
import LoginPage from '../pages/LoginPage';

test('Bill of Material Test', async ({ page }) => {
    const loginPage =new LoginPage(page)
    const billOfMaterialPage = new BillOfMaterialPage(page);

    // Navigate to the site
    await loginPage.navigate('https://demo.awecountant.com/');
    await loginPage.login('pramod@awecode.com', 'admin');

    // Expand "Items" section and open Bill of Material
    await billOfMaterialPage.expandItems();
    await billOfMaterialPage.openBillOfMaterial();

    // Add Bill of Material
    await billOfMaterialPage.addBillOfMaterial();
    await billOfMaterialPage.selectFinishedProduct('Gita');
    await billOfMaterialPage.selectUnit('uyo8k7');
    await billOfMaterialPage.enterQuantity('12');
    await billOfMaterialPage.enterRate('6');
    await billOfMaterialPage.selectItem('testitem78');
    await billOfMaterialPage.selectUnitType('mm');
    await billOfMaterialPage.createBillOfMaterial();

    // Verify success message
    await billOfMaterialPage.verifySavedMessage();

    // Search for the created Bill of Material
    await billOfMaterialPage.searchBillOfMaterial('jenisha');
    await billOfMaterialPage.openSearchResult();
});
