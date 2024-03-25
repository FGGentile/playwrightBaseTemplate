import { test} from '@playwright/test';
import { LoginPage } from "../../pages/loginPage";
import { organizationPage } from "../../pages/organizationPage";




test.describe("Org add program", () => {

    test('should add a program and vlaidate', async ({ page }) => {
        const login = new LoginPage(page);
        const orgPage = new organizationPage(page);

        await login.login();
        await orgPage.clickAddProgramButton();
        await orgPage.programValidations();
    });
})

