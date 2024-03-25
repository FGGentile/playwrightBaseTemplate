import { test } from '@playwright/test';
import { LoginPage } from "../../pages/loginPage";
import { matchPerson } from '../../pages/personMatch';

test("should match a recipient to a caller", async ({ page }) => {
    const login = new LoginPage(page);
    const match = new matchPerson(page);

    await login.login();
    await match.matchPersonFromRecipient();
})