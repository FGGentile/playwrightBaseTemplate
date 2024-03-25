import { Page, Locator, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const programName = faker.company.buzzVerb();


export class organizationPage{
    readonly page: Page;
    readonly addEditProgramButton: Locator;
    readonly addStatusButton: Locator;
    readonly editOrganizationButton: Locator;
    readonly programNameInput: Locator;
    readonly programSubmitButton: Locator;
    readonly programSetDefaultButton: Locator;
    readonly programDeleteButton: Locator;
    readonly acceptButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.addEditProgramButton = page.getByTestId('organization-detail-header-edit-program');
        this.addStatusButton = page.getByTestId('organization-detail-header-edit-status');
        this.editOrganizationButton = page.getByTestId('organization-detail-header-edit-modal');
        this.programNameInput = page.getByTestId('program-create-form-input-program-name');
        this.programSubmitButton = page.getByTestId('program-create-form-button-submit');
        this.programSetDefaultButton = page.locator('[id*="set-default-program-id"]').first();
        this.programDeleteButton = page.locator('[id*="delete-program-id-"]').first();
        this.acceptButton = page.getByTestId('form-message-button-accept')

    }

    async clickAddProgramButton(){
        await this.addEditProgramButton.click();
        await this.programNameInput.fill(programName);
        await this.programSubmitButton.click();
        await this.acceptButton.click();
    }

    async programValidations(){
        await this.addEditProgramButton.click();
        await expect(this.page.getByText(programName)).toBeVisible();
        await this.programSetDefaultButton.click();
        await this.programDeleteButton.click();
    }

}

