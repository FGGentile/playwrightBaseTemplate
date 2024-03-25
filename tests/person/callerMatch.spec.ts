import { test } from '@playwright/test';
import { LoginPage } from "../../pages/loginPage";
import { matchPerson } from '../../pages/personMatch';

test("should match a caller to a recipient", async ({ page, context }) => {
    const login = new LoginPage(page);
    const match = new matchPerson(page);

    await login.login();
    await match.matchPersonFromCaller();
})