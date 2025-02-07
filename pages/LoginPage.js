import BasePage from './BasePage';

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.emailField = page.getByRole('textbox', { name: 'Email', exact: true });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async login(email, password) {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}

export default LoginPage;
