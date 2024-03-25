import { Page, Locator } from '@playwright/test';

export class matchPerson {
    private page: Page;
    private firstPerson: Locator;
    private matchButton: Locator;
    private personMatchSelect: Locator;
    private personMatchFirstSelect: Locator;
    private submitButton: Locator;
    private acceptButton: Locator;
    private callerTab: Locator;


    constructor(page: Page) {
        this.page = page;
        this.initializaLocators();

    }

    private initializaLocators() {
        this.firstPerson = this.page.locator('[data-testid*="people-table-table-email-td-link"] > a').first();
        this.matchButton = this.page.getByTestId('person-org-detail-match-button');
        this.personMatchSelect = this.page.getByTestId('form-select-select-personOrganizationsArray');
        this.personMatchFirstSelect = this.page.locator('.css-i3li50-option').first();
        this.submitButton = this.page.getByTestId('person-org-match-form-button-submit');
        this.acceptButton = this.page.getByTestId('form-message-button-accept');
        this.callerTab = this.page.getByTestId('organization-detail-tab-organization.callers');
    }

    public setPage(newPage: Page) {
        this.page = newPage;
        this.initializaLocators();
    }

    async matchPersonFromRecipient() {
        const popupPromise = this.page.waitForEvent('popup');
        await this.firstPerson.click();
        const popup = await popupPromise;
        await popup.waitForLoadState('domcontentloaded');
        this.setPage(popup);
        await this.matchButton.click();
        await this.personMatchSelect.click();
        await this.page.waitForResponse(response => response.url().includes('/v2/personorganizations?role=CALLER&search=&page=0&') && response.status() === 200);
        await this.personMatchFirstSelect.click();
        await this.submitButton.click();
        await this.acceptButton.click();
    }


    async matchPersonFromCaller() {
        await this.callerTab.click();
        const popupPromise = this.page.waitForEvent('popup');
        await this.firstPerson.click();
        const popup = await popupPromise;
        await popup.waitForLoadState('domcontentloaded');
        this.setPage(popup);
        await this.matchButton.click();
        await this.personMatchSelect.click();
        await this.personMatchFirstSelect.click();
        await this.submitButton.click();
        await this.acceptButton.click();
    }

}