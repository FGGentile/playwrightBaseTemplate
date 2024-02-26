const { expect } = require('@playwright/test');
class loginPage {

    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByTestId("login-form-input-username");
        this.passwordInput = page.getByTestId("login-form-input-password");
        this.loginButton = page.getByTestId("login-form-button-submit");
        this.orgName = page.getByTestId("organization-detail-header-name");
        this.personName = page.getByText(process.env.personName);
    }

    async goToLoginPage(web_url) {
        await this.page.goto(web_url);
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async assertLoggedUser() {
        await expect(this.orgName).toContainText(process.env.orgName);
        await expect(this.personName).toBeVisible();
    }

}

module.exports = { loginPage };