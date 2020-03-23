/// <reference types="cypress" />


import { SearchMenu } from "../pageObjects/searchMenu";
import { TourMenu } from "../pageObjects/tourMenu";
import { CustomFunctions } from "../support/customFunctions";

describe ("Search Tours", ()=> {
    
    const searchMenu = new SearchMenu();
    const tourMenu = new TourMenu();
    const customFunctions = new CustomFunctions();
    let startDate = customFunctions.generateDate('startDate');
    let endDate = customFunctions.generateDate('endDate');
    

    before("Go to search for tours", ()=> {
        cy.visit("/");
        searchMenu.tourButton.click();
    })

    it("Search for tour for barcelona", ()=> {
        tourMenu.setDestination("barcelona");
        tourMenu.setStartDate(startDate);
        tourMenu.setEndDate(endDate);
        tourMenu.searchButton.click();
        cy.url().should('include','barcelona');
    })


})