const { test, expect } = require('../utils/fixtures.js')
const { loginPage } = require('../pages/loginPage');

test.describe('Login Test Suite', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goToLoginPage(process.env.STG);
    });

    test('Login with valid credentials', async ({ loginPage }) => {

        await loginPage.login(process.env.userName, process.env.password);
        await loginPage.assertLoggedUser();
    })

    test.afterEach(async ({ page }) => {
        await page.close()
    })
})