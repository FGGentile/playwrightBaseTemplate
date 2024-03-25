import { test } from '@playwright/test';
import { LoginPage } from "../../pages/loginPage";
import { createPerson } from "../../pages/personCreationPage";

test("should create a caller", async ({ page }) => {
    const login = new LoginPage(page);
    const create = new createPerson(page);

    await login.login();
    await create.createCaller();
});