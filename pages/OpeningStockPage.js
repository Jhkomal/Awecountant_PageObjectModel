import BasePage from "./BasePage";

class OpeningStockPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;

        // Navigation Elements
        this.expandItemsButton = page.getByRole('button', { name: 'Expand "Items"' });
        this.openingStockLink = page.getByText('edit_noteOpening Stock');
        this.newOpeningBalanceLink = page.getByRole('link', { name: 'New Opening Balance' });

        // Stock Entry Elements
        this.dropdownButton = page.getByText('arrow_drop_down');
        this.itemSelection = page.locator('.q-item__section');  // Adjusted to be dynamic
        this.quantityField = page.getByRole('spinbutton', { name: 'Quantity *' });
        this.rateField = page.getByRole('spinbutton', { name: 'Rate *' });
        this.createButton = page.getByRole('button', { name: 'Create' });
        this.savedMessage = page.getByText('Saved');

        // Search Elements
        this.searchField = page.getByPlaceholder('Search');
        this.resultCell = (itemName) => page.getByRole('cell', { name: itemName }).first();
    }

    async navigateToOpeningStock() {
        await this.expandItemsButton.click();
        await this.openingStockLink.click();
        await this.newOpeningBalanceLink.click();
    }

    async addNewOpeningStock(itemName, quantity, rate) {
        await this.dropdownButton.click();
        const itemOption = this.itemSelection.filter({ hasText: itemName }).first();
        await itemOption.waitFor({ state: 'visible' });
        await itemOption.click();

        await this.quantityField.fill(quantity);
        await this.rateField.fill(rate);
        await this.createButton.click();
        await this.savedMessage.waitFor();
    }

    async searchStockItem(itemName) {
        await this.searchField.fill(itemName);
        await this.resultCell(itemName).click();
    }
}

export default OpeningStockPage;
