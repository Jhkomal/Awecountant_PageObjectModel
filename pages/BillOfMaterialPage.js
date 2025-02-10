import BasePage from './BasePage';

class BillOfMaterialPage extends BasePage {
    constructor(page) {
        super(page);

        // Locators
        
        this.expandItemsButton = page.getByRole('button', { name: 'Expand "Items"' });
        this.billOfMaterialLink = page.getByRole('listitem').filter({ hasText: 'Bill of Material' });
        this.addBillOfMaterialButton = page.getByRole('link', { name: 'Add Bill of Material' });
        this.finishedProductDropdown = page.getByRole('combobox', { name: 'Finished Product *' });
        this.unitDropdown = page.getByRole('combobox', { name: 'Unit *' });
        this.quantityInput = page.getByRole('spinbutton', { name: 'Quantity *' });
        this.rateInput = page.getByRole('spinbutton', { name: 'Rate *' });
        this.itemDropdown = page.getByRole('combobox', { name: 'Item' });
        this.unitSelection = page.getByRole('combobox', { name: 'Unit', exact: true });
        this.createButton = page.getByRole('button', { name: 'Create' });
        this.successMessage = page.getByText('check_circle');
        this.savedMessage = page.getByText('Saved');
        this.searchInput = page.getByPlaceholder('Search');
        this.searchResult = page.getByRole('cell', { name: 'Jenisha Neupane' });
    }

    // Actions
  

    async expandItems() {
        await this.expandItemsButton.click();
    }

    async openBillOfMaterial() {
        await this.billOfMaterialLink.click();
    }

    async addBillOfMaterial() {
        await this.addBillOfMaterialButton.click();
    }

    async selectFinishedProduct(productName) {
        await this.finishedProductDropdown.click();
        await this.page.getByRole('option', { name: productName }).locator('div').nth(1).click();
    }

    async selectUnit(unitName) {
        await this.unitDropdown.click();
        await this.page.getByRole('option', { name: unitName }).locator('div').nth(1).click();
    }

    async enterQuantity(quantity) {
        await this.quantityInput.fill(quantity);
    }

    async enterRate(rate) {
        await this.rateInput.fill(rate);
    }

    async selectItem(itemName) {
        await this.itemDropdown.click();
        await this.page.getByText(itemName).click();
    }

    async selectUnitType(unitType) {
        await this.unitSelection.click();
        await this.page.getByRole('option', { name: unitType }).click();
    }

    async createBillOfMaterial() {
        await this.createButton.click();
    }

    
    async searchBillOfMaterial(searchText) {
        await this.searchInput.fill(searchText);
        await this.page.goto(`https://demo.awecountant.com/items/bill-of-material/list/?search=${searchText}`);
    }

    async openSearchResult() {
        await this.searchResult.click();
    }
}

export default BillOfMaterialPage;
