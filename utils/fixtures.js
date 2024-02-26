const base = require('@playwright/test');
const { loginPage } = require('../pages/loginPage');

exports.test = base.test.extend({
    loginPage: async ({ page }, use) => {
        await use(new loginPage(page))
    }
})

exports.expect = base.expect;