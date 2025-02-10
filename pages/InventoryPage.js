import BasePage from './BasePage';
class InventoryPage extends BasePage {
    constructor(page) {
        super(page);
    

        // Locators
        this.expandItemsButton = page.getByRole('button', { name: 'Expand "Items"' });
        this.inventoryLedgerLink = page.getByText('inventoryInventory Ledger');
        this.searchInput = page.getByPlaceholder('Search');
        this.searchResult = page.getByRole('cell', { name: 'locker' });
    }

    // Actions
    async expandItems() {
        await this.expandItemsButton.click();
    }

    async openInventoryLedger() {
        await this.inventoryLedgerLink.click();
    }

    async searchItem(itemName) {
        await this.searchInput.fill(itemName);
    }

    async selectSearchResult() {
        await this.searchResult.click();
    }
}

export default InventoryPage;
