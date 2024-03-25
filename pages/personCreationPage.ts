import { Page, Locator, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class createPerson {

    readonly page: Page;
    readonly createPersonButton: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly preferredNameInput: Locator;
    readonly emailInput: Locator;
    readonly birthDateInput: Locator;
    readonly zipCodeInput: Locator;
    readonly genderInput: Locator;
    readonly genderSelection: Locator;
    readonly programInput: Locator;
    readonly prefferedLanguageInput: Locator;
    readonly hobbiesTextArea: Locator;
    readonly voiceMethodInput: Locator;
    readonly smsMethodInput: Locator;
    readonly emailMethodInput: Locator;
    readonly statusInput: Locator;
    readonly callerBehaviorInput: Locator;
    readonly timeForCallInput: Locator;
    readonly primaryPhoneInput: Locator;
    readonly primaryPhoneTypeMobileInput: Locator;
    readonly primaryPhoneTypeLandlineInput: Locator;
    readonly alternatePhoneInput: Locator;
    readonly alternatePhoneTypeMobileInput: Locator;
    readonly alternatePhoneTypeLandlineInput: Locator;
    readonly activeInput: Locator;
    readonly externalPersonIdInput: Locator;
    readonly optedOutInput: Locator;
    readonly cancelButton: Locator;
    readonly submitButton: Locator;
    readonly pinInput: Locator;
    readonly pinButton: Locator;
    readonly acceptButton: Locator;
    readonly callersTab: Locator;
    readonly callersAddButton: Locator;
    readonly modalHolder: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createPersonButton = page.getByTestId('organization-detail-button-add-person');
        this.firstNameInput = page.getByTestId('person-org-create-form-input-first-name');
        this.lastNameInput = page.getByTestId('person-org-create-form-input-last-name');
        this.preferredNameInput = page.getByTestId('person-org-create-form-input-preferred-name');
        this.emailInput = page.getByTestId('person-org-create-form-input-email');
        this.birthDateInput = page.locator('.react-datepicker__input-container > .form-control');
        this.zipCodeInput = page.getByPlaceholder('Zip Code');
        this.genderInput = page.getByTestId('form-select-select-personDetail.gender').locator('svg');
        this.genderSelection = page.getByText('Female', { exact: true })
        this.programInput = page.getByTestId('form-select-input-programId');
        this.prefferedLanguageInput = page.getByTestId('form-select-input-personDetail.preferredLanguage');
        this.hobbiesTextArea = page.getByPlaceholder('Hobbies');
        this.voiceMethodInput = page.getByTestId('person-org-create-form-input-preferred-method-communication-Voice');
        this.smsMethodInput = page.getByTestId('person-org-create-form-input-preferred-method-communication-SMS');
        this.emailMethodInput = page.getByTestId('person-org-create-form-input-preferred-method-communication-Email');
        this.statusInput = page.getByTestId('form-select-input-organizationPersonStatusId');
        this.callerBehaviorInput = page.getByTestId('form-select-input-personDetail.phoneCallBehavior');
        this.timeForCallInput = page.getByTestId('form-select-input-personDetail.preferredTimeForCall');
        this.primaryPhoneInput = page.getByTestId('form-phone-field-phone');
        this.primaryPhoneTypeMobileInput = page.getByTestId('person-org-create-form-person-detail-phone-type-mobile');
        this.primaryPhoneTypeLandlineInput = page.getByTestId('person-org-create-form-person-detail-phone-type-landline');
        this.alternatePhoneInput = page.getByTestId('form-phone-field-phoneAlternate');
        this.alternatePhoneTypeMobileInput = page.getByTestId('person-org-create-form-person-detail-phone-alternate-type-mobile');
        this.alternatePhoneTypeLandlineInput = page.getByTestId('person-org-create-form-person-detail-phone-alternate-type-landline');
        this.externalPersonIdInput = page.getByTestId('person-org-edit-form-input-person-external-person-id');
        this.optedOutInput = page.getByTestId('person-org-create-form-input-person-detail-opt-out-Voice');
        this.cancelButton = page.getByTestId('person-org-create-form-button-cancel');
        this.submitButton = page.getByTestId('person-org-create-form-button-submit');
        this.pinInput = page.getByTestId('person-org-create-form-input-pin');
        this.pinButton = page.getByTestId('person-org-create-form-button--generate-pin')
        this.acceptButton = page.getByTestId('form-message-button-accept')
        this.callersTab = page.getByTestId('organization-detail-tab-organization.callers');
        this.modalHolder = page.getByTestId('create-modal-body-holder')
    }


    async createRecipient(): Promise<void> {
        const personName: string = faker.person.firstName();
        await this.createPersonButton.click();
        await this.modalHolder.isVisible();
        await this.firstNameInput.fill(personName);
        await this.lastNameInput.fill(faker.person.lastName());
        await this.preferredNameInput.fill(faker.person.middleName());
        await this.emailInput.fill(faker.internet.email());
        await this.birthDateInput.fill('06/16/1995');
        await this.birthDateInput.press('Enter');
        await this.zipCodeInput.fill(faker.location.zipCode());
        await this.genderInput.click();
        await this.genderSelection.click();
        await this.programInput.fill(faker.helpers.arrayElement(['RSVP', 'Friends/Social Call']));
        await this.programInput.press('Enter');
        await this.prefferedLanguageInput.fill(faker.helpers.arrayElement(['English', 'Spanish']));
        await this.prefferedLanguageInput.press('Enter');
        await this.hobbiesTextArea.fill(faker.lorem.words(10));
        await this.voiceMethodInput.click();
        await this.statusInput.fill(faker.helpers.arrayElement(['Accepted', 'Declined']));
        await this.statusInput.press('Enter');
        await this.callerBehaviorInput.fill(faker.helpers.arrayElement(['Talkative', 'Somewhat Talkative', 'Not Very Talkative']));
        await this.callerBehaviorInput.press('Enter');
        await this.timeForCallInput.fill(faker.helpers.arrayElement(['Morning', 'Afternoon', 'Evening']));
        await this.timeForCallInput.press('Enter');
        await this.primaryPhoneInput.clear()
        await this.primaryPhoneInput.fill('13105043446')
        await this.primaryPhoneTypeMobileInput.click();
        await this.alternatePhoneInput.clear()
        await this.alternatePhoneInput.fill('13105043446')
        await this.alternatePhoneTypeLandlineInput.click();
        await this.externalPersonIdInput.fill(faker.internet.userName())
        await this.submitButton.click()
        await this.acceptButton.click()
        await this.page.getByText(personName).isVisible()
    }

    async createCaller(): Promise<void> {
        await this.callersTab.click();
        const personName: string = faker.person.firstName();
        await this.createPersonButton.click();
        await this.modalHolder.isVisible();
        await this.firstNameInput.fill(personName);
        await this.lastNameInput.fill(faker.person.lastName());
        await this.preferredNameInput.fill(faker.person.middleName());
        await this.emailInput.fill(faker.internet.email());
        await this.birthDateInput.fill('06/16/1995');
        await this.birthDateInput.press('Enter');
        await this.zipCodeInput.fill(faker.location.zipCode());
        await this.genderInput.click();
        await this.genderSelection.click();
        await this.programInput.fill(faker.helpers.arrayElement(['RSVP', 'Friends/Social Call']));
        await this.programInput.press('Enter');
        await this.prefferedLanguageInput.fill(faker.helpers.arrayElement(['English', 'Spanish']));
        await this.prefferedLanguageInput.press('Enter');
        await this.hobbiesTextArea.fill(faker.lorem.words(10));
        await this.voiceMethodInput.click();
        await this.statusInput.fill(faker.helpers.arrayElement(['Accepted', 'Declined']));
        await this.statusInput.press('Enter');
        await this.callerBehaviorInput.fill(faker.helpers.arrayElement(['Talkative', 'Somewhat Talkative', 'Not Very Talkative']));
        await this.callerBehaviorInput.press('Enter');
        await this.timeForCallInput.fill(faker.helpers.arrayElement(['Morning', 'Afternoon', 'Evening']));
        await this.timeForCallInput.press('Enter');
        await this.primaryPhoneInput.clear()
        await this.primaryPhoneInput.fill('13105043446')
        await this.primaryPhoneTypeMobileInput.click();
        await this.pinButton.click()
        await this.alternatePhoneInput.clear()
        await this.alternatePhoneInput.fill('13105043446')
        await this.alternatePhoneTypeLandlineInput.click();
        await this.externalPersonIdInput.fill(faker.internet.userName())
        await this.submitButton.click()
        await this.acceptButton.click()
        await this.page.getByText(personName).isVisible()
    }

}