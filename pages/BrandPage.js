class BrandPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.expandItemsButton = page.getByRole('button', { name: 'Expand "Items"' });
        this.brandsMenuItem = page.getByRole('listitem').filter({ hasText: 'Brands' });
        this.newBrandLink = page.getByRole('link', { name: 'New brand', exact: true });
        this.nameInput = page.getByRole('textbox', { name: 'Name *' });
        this.descriptionInput = page.getByRole('textbox', { name: 'Description' });
        this.createButton = page.getByRole('button', { name: 'Create' });
        this.savedMessage = page.getByText('Saved');
    }

    // Actions
    async navigateToBrands() {
        await this.expandItemsButton.click();
        await this.brandsMenuItem.click();
    }

    async navigateToNewBrand() {
        await this.newBrandLink.click();
    }

    async fillBrandDetails(name, description) {
        await this.nameInput.fill(name);
        await this.descriptionInput.fill(description);
    }

    async createBrand() {
        await this.createButton.click();
    }

    async verifySavedMessage() {
        await this.savedMessage.click();
    }
}

export default BrandPage;
