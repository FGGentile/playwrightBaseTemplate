import { test, expect } from '@playwright/test';
import { LoginPage } from "../pages/loginPage";


const orgName: string = "TEST_ORG";

test.describe("Login test suite", () => {
    test("should do a valid login", async ({ page }) => {
        const login = new LoginPage(page);
        await login.login();
        await login.validateUser(orgName);
    });

    test('should do an invalid login', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goTo();
        await login.invalidLogin();
    });
})

