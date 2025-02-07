import BasePage from './BasePage';

class UnitPage extends BasePage {
    constructor(page) {
        super(page);
        this.expandItemsButton = page.getByRole('button', { name: 'Expand "Items"' });
        this.unitsLink = page.getByRole('listitem').filter({ hasText: 'Units' });
        this.newUnitLink = page.getByRole('link', { name: 'New Unit' });

        this.nameField = page.getByRole('textbox', { name: 'Name *' });
        this.shortNameField = page.getByRole('textbox', { name: 'Short Name' });

        this.createButton = page.getByRole('button', { name: 'Create' });
    }

    async navigateToNewUnit() {
        await this.expandItemsButton.click();
        await this.unitsLink.click();
        await this.newUnitLink.click();
    }

    async fillUnitDetails(name, shortName) {
        await this.nameField.fill(name);
        await this.shortNameField.fill(shortName);
    }

    async createUnit() {
        await this.createButton.click();
    }
}

export default UnitPage;
