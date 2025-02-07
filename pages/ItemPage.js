import BasePage from "./BasePage";

class ItemPage extends BasePage {
    constructor(page) {
        super(page);
        this.expandItemsButton = page.getByRole('button', { name: 'Expand "Items"' });
        this.allItemsLink = page.getByRole('listitem').filter({ hasText: 'All Items' });
        this.addItemLink = page.getByRole('link', { name: 'Add Item' });

        this.nameField = page.getByRole('textbox', { name: 'Name *' });
        this.codeField = page.getByRole('textbox', { name: 'Code' });
        this.costPriceField = page.getByRole('spinbutton', { name: 'Cost Price' });
        this.sellingPriceField = page.getByRole('spinbutton', { name: 'Selling Price' });

        this.brandDropdown = page.getByRole('combobox', { name: 'Brand' });
        this.brandOption = page.getByRole('option', { name: 'New Brand' }).locator('div').nth(1);

        this.descriptionField = page.getByRole('textbox', { name: 'Description' });

        this.categoryDropdown = page.getByRole('combobox', { name: 'Category' });

        this.unitDropdown = page.getByRole('combobox', { name: 'Unit' });
        this.unitOption = page.getByText('Dozens');

        this.taxSchemeDropdown = page.locator('div').filter({ hasText: /^Tax Scheme$/ }).first();

        this.createButton = page.getByRole('button', { name: 'Create' });
    }

    async navigateToAddItem() {
        await this.expandItemsButton.click();
        await this.allItemsLink.click();
        await this.addItemLink.click();
    }

    async fillItemDetails(name, code, costPrice, sellingPrice, description, category, tax) {
        await this.nameField.fill(name);
        await this.codeField.fill(code);
        await this.costPriceField.fill(costPrice.toString()); // Ensure string format
        await this.sellingPriceField.fill(sellingPrice.toString()); // Ensure string format

        await this.brandDropdown.click();
        await this.brandOption.waitFor();
        await this.brandOption.click();

        await this.descriptionField.fill(description);

       

        await this.unitDropdown.click();
        await this.unitOption.waitFor();
        await this.unitOption.click();

        // Select Tax Scheme
        await this.taxSchemeDropdown.click();
        await this.page.waitForTimeout(500);

        // Find the tax scheme option precisely
        const taxSchemeOption = this.page.locator('div[role="option"]').filter({ hasText: tax }).first();
        await taxSchemeOption.waitFor({ state: 'visible' });
        await taxSchemeOption.click({ force: true });
    }

    async createItem() {
        await this.createButton.click();
    }
}

export default ItemPage;
