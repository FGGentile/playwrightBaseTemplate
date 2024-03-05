import { test, expect } from '@playwright/test';
import { LoginPage } from "../pages/loginPage";
import { createPerson } from "../pages/personCreationPage";

test.describe("Person creation suite", () => {
    test("should create a recipient", async ({ page }) => {
        const login = new LoginPage(page);
        const create = new createPerson(page);

        await login.login();
        await create.createRecipient();

    });

})