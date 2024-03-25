import { test, expect } from '@playwright/test';
import { LoginPage } from "../../pages/loginPage";
import { NavigationPage } from "../../pages/navigationPage";




test.describe("Section validation", () => {

    test('should validate each sections', async ({ page }) => {
        const login = new LoginPage(page);
        const navigation = new NavigationPage(page);

        await login.login();
        await navigation.navigateAllSections();
    });
})