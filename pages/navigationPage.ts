import { Page, Locator, expect } from '@playwright/test';

export class NavigationPage {
    readonly page: Page;
    readonly notesLink: Locator;
    readonly broadcastLink: Locator;
    readonly callLogsLink: Locator;
    readonly surveysLink: Locator;
    readonly outreachLink: Locator;
    readonly callAnalyticsLink: Locator;
    readonly myAccountLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.notesLink = page.getByTestId('navbar-leftbar-navlink-notes');
        this.broadcastLink = page.getByTestId('navbar-leftbar-navlink-broadcast');
        this.callLogsLink = page.getByTestId('navbar-leftbar-navlink-call-logs');
        this.surveysLink = page.getByTestId('navbar-leftbar-navlink-surveys');
        this.outreachLink = page.getByTestId('navbar-leftbar-navlink-outreach');
        this.callAnalyticsLink = page.getByTestId('navbar-leftbar-navlink-call-analytics');
        this.myAccountLink = page.getByTestId('navbar-leftbar-navlink-my-account');
    };

    async validateUrl(section) {
        const url = this.page.url();

        const path = new URL(url).pathname;

        expect(path).toContain(section)
    };
    async navigateToNotes() {
        await this.notesLink.click({timeout: 10000});
        this.validateUrl('notes')
    };

    async navigateToBroadcast() {
        await this.broadcastLink.click();
        this.validateUrl('broadcast')
    };

    async navigateToCallLogs() {
        await this.callLogsLink.click();
        this.validateUrl('call-logs')
    };

    async navigateToSurveys() {
        await this.surveysLink.click();
        this.validateUrl('surveys')
    };

    async navigateToOutreach() {
        await this.outreachLink.click();
        this.validateUrl('outreachQueues')
    };

    async navigateToCallAnalytics() {
        await this.callAnalyticsLink.click();
        this.validateUrl('call-analytics')
    }

    async navigateToMyAccount() {
        await this.myAccountLink.click();
        this.validateUrl('account')
    }

    async navigateAllSections(){
       await this.navigateToNotes();
       await this.navigateToBroadcast();
       await this.navigateToCallLogs();
       await this.navigateToSurveys();
       await this.navigateToOutreach();
       await this.navigateToCallAnalytics();
       await this.navigateToMyAccount();
    }
};