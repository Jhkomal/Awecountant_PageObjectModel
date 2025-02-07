class BasePage {
    constructor(page) {
        this.page = page;// Store Playwright's "page" instance
        this.baseURL = 'https://demo.awecountant.com/';//defines the baseURl
    }

    async navigate(path = '') {
        await this.page.goto(`${this.baseURL}${path}`);//open the baseUrl and path
    }
}

export default BasePage;
