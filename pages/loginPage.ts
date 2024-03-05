import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly header: Locator;
    readonly orgNameText: Locator;
    readonly orgNameProfile: Locator;
    readonly invalidLoginMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.getByTestId('login-form-input-username');
        this.passwordInput = page.getByTestId('login-form-input-password');
        this.loginButton = page.getByTestId('login-form-button-submit');
        this.header = page.locator('p', { hasText: 'Welcome!' });
        this.orgNameText = page.getByTestId('organization-detail-header-name');
        this.orgNameProfile = page.locator('.profile-organization');
        this.invalidLoginMessage = page.getByTestId('login-form-error-message');
    }

    async goTo() {
        await this.page.goto('/public/login');
    }

    async fill(username: string, password: string) {
        await this.header.isVisible();
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async login() {
        await this.goTo();
        await this.fill(process.env.userNameV as string, process.env.passwordV as string);
        await expect(this.orgNameProfile).toBeVisible()
        await expect(this.orgNameText).toBeVisible()
    }

    async invalidLogin() {
        await this.fill("invalidUs", "invalidPwd");
        await expect(this.invalidLoginMessage).toBeVisible();
    }

    async validateUser(orgNaming: string) {
        await expect(this.orgNameText).toHaveText(orgNaming);
        await expect(this.orgNameProfile).toHaveText(orgNaming);

    }
}
