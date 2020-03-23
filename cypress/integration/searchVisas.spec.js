/// <reference types="cypress" />

import { SearchMenu } from '../pageObjects/searchMenu';
import { VisaMenu } from "../pageObjects/visaMenu";

describe('Search for cars', () => {

    const visaMenu = new VisaMenu();
    const searchMenu = new SearchMenu();
    let date = new Date();
    let travelDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;

    beforeEach('Go to search for cars',() => {
        cy.visit('/');
        searchMenu.visaButton.click();
    })

    it('Search for a car with all fields filled in',() => {
        visaMenu.selectFromCountry("Algeria");
        visaMenu.selectToCountry("Bulgaria");
        visaMenu.selectDate(travelDate);
        visaMenu.submitButton.click();
        cy.url().should('include','Bulgaria');

    })

})