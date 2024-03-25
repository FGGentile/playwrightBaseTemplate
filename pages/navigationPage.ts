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
    }

    async validateUrl(section: string): Promise<void> {
        const url = this.page.url();
        const path = new URL(url).pathname;
        expect(path).toContain(section);
    }

    async navigateToNotes(): Promise<void> {
        await this.notesLink.click({timeout: 10000});
        await this.validateUrl('notes');
    }

    async navigateToBroadcast(): Promise<void> {
        await this.broadcastLink.click();
        await this.validateUrl('broadcast');
    }

    async navigateToCallLogs(): Promise<void> {
        await this.callLogsLink.click();
        await this.validateUrl('call-logs');
    }

    async navigateToSurveys(): Promise<void> {
        await this.surveysLink.click();
        await this.validateUrl('surveys');
    }

    async navigateToOutreach(): Promise<void> {
        await this.outreachLink.click();
        await this.validateUrl('outreachQueues');
    }

    async navigateToCallAnalytics(): Promise<void> {
        await this.callAnalyticsLink.click();
        await this.validateUrl('call-analytics');
    }

    async navigateToMyAccount(): Promise<void> {
        await this.myAccountLink.click();
        await this.validateUrl('account');
    }

    async navigateAllSections(): Promise<void> {
        await this.navigateToNotes();
        await this.navigateToBroadcast();
        await this.navigateToCallLogs();
        await this.navigateToSurveys();
        await this.navigateToOutreach();
        await this.navigateToCallAnalytics();
        await this.navigateToMyAccount();
    }
}
