/// <reference types="cypress" />

import { CarMenu } from '../pageObjects/carMenu';
import { SearchMenu } from '../pageObjects/searchMenu';
import { CustomFunctions } from "../support/customFunctions";

describe('Search for cars', () => {

    const carMenu = new CarMenu();
    const searchMenu = new SearchMenu();
    const customFunctions = new CustomFunctions();
    let pickUpDate = customFunctions.generateDate('startDate');
    let returnDate = customFunctions.generateDate('endDate');
    let pickUp = 'york';
    let dropOff = 'port';

    beforeEach('Go to search for cars',() => {
        cy.visit('/');
        searchMenu.carButton.click();
    })

    it('Search for a car with all fields filled in',() => {
        carMenu.setPickUp(pickUp);
        carMenu.setDropOff(dropOff);
        carMenu.setDepartDate(pickUpDate);
        carMenu.setReturnDate(returnDate);
        carMenu.searchButton.click();
        cy.url().should('include','car');
    })

})