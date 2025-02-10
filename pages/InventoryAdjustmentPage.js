import BasePage from './BasePage';

class InventoryAdjustmentPage extends BasePage {
    constructor(page) {
        super(page);

        // Locators
        this.expandItemsButton = page.getByRole('button', { name: 'Expand "Items"' });
        this.inventoryAdjustmentItem = page.getByRole('listitem').filter({ hasText: 'Inventory Adjustment' });
        this.addInventoryAdjustmentLink = page.getByRole('link', { name: 'Add Inventory Adjustment' });
        this.itemDropdown = page.locator('label').filter({ hasText: 'Itemarrow_drop_down' }).locator('i');
        this.testItemOption = page.getByRole('option', { name: 'Test', exact: true }).locator('div').nth(1);
        this.rateInput = page.getByRole('spinbutton', { name: 'Rate' });
        this.unitDropdown = page.getByRole('combobox', { name: 'Unit' });
        this.unitOption = page.getByRole('option', { name: 'mm' });
        this.remarksInput = page.getByRole('textbox', { name: 'Remarks*' });
        this.createButton = page.getByRole('button', { name: 'Create' });
        this.purposeDropdown = page.locator('div').filter({ hasText: /^Purposeerrorarrow_drop_down$/ }).locator('div').nth(1);
        this.stockInOption = page.getByText('Stock In', { exact: true });
        this.confirmationCheck = page.getByText('check_circle');
        this.verifyInventoryAdjustment = page.getByRole('row', { name: '15 2025-02-10 Issued Stock In' }).getByRole('link').nth(1);
        this.finalVerification = page.locator('div').filter({ hasText: 'Awecode Pvt. Ltd.MahadevsthanTax Reg. No. 14562239841785647Inventory Adjustment' }).nth(2);
    }

    // Actions
    async expandItems() {
        await this.expandItemsButton.click();
    }

    async selectInventoryAdjustment() {
        await this.inventoryAdjustmentItem.click();
    }

    async addInventoryAdjustment() {
        await this.addInventoryAdjustmentLink.click();
    }

    async selectItem() {
        await this.itemDropdown.click();
        await this.testItemOption.click();
    }

    async setRate(rate) {
        await this.rateInput.fill(rate);
    }

    async selectUnit() {
        await this.unitDropdown.click();
        await this.unitOption.click();
    }

    async fillRemarks(remarks) {
        await this.remarksInput.fill(remarks);
    }

    async createInventoryAdjustment() {
        await this.createButton.click();
    }

    async selectPurpose() {
        await this.purposeDropdown.click();
        await this.stockInOption.click();
    }

    async confirmStockIn() {
        await this.createButton.click();
        await this.confirmationCheck.click();
    }

    async verifyInventoryAdjustmentPage() {
        await this.verifyInventoryAdjustment.click();
        
    }
}

export default InventoryAdjustmentPage;
