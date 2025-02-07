import BasePage from "./BasePage";
class CategoryPage extends BasePage{
    constructor(page){
        super(page);
        this.expandItemsButton = page.getByRole('button', { name: 'Expand "Items"' });
        this.categoryLink=  page.getByRole('listitem').filter({ hasText: 'Categories' }).click();
        this.newcategoryLink=page.getByRole('link', { name: 'New Category' }).click();

        this.nameField= page.getByRole('link', { name: 'New Category' }).click(); page.getByRole('link', { name: 'New Category' }).click();
        this.codeField=page.getByRole('textbox', { name: 'Code', exact: true }).click();

        this.unitDropdown = page.getByRole('combobox', { name: 'Unit' });
        this.unitOption = page.getByText('Dozens');

        this.taxSchemeDropdown = page.locator('div').filter({ hasText: /^Tax Scheme$/ }).first().click();
        this.hscodeField= page.getByRole('textbox', { name: 'H.S. code' }).click();

        this.createButton = page.getByRole('button', { name: 'Create' });
    }
    async navigateToAddCategory() {
        await this.expandItemsButton.click();
        await this.categoryLink.click();
        await this.newcategoryLink.click();

}
async navigateToFillDetails(name,code,hscode){
    await this.nameField.fill(name);
    await this.codeField.fill(code);
    await this.hscodeField.fill(hscode)

    await this.unitDropdown.click();
    await this.unitOption.waitFor();
    await this.unitOption.click();

    await this.taxSchemeDropdown.click();
    await this.page.waitForTimeout(500);

    // Find the tax scheme option precisely
    const taxSchemeOption = this.page.locator('div[role="option"]').filter({ hasText: tax }).first();
    await taxSchemeOption.waitFor({ state: 'visible' });
    await taxSchemeOption.click({ force: true });
}
async createButton(){
    await this.createButton.click();
}
}
export default CategoryPage;