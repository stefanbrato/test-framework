/// <reference types="cypress" />

export class SearchMenu {

   get flightButton(){
        return cy.get('.flights');
    }

    get hotelButton(){
        return cy.get('.hotels');
    }

    get tourButton(){
        return cy.get('.tours');
    }

    get visaButton(){
        return cy.get('.visa');
    }

    get carButton(){
        return cy.get('.cars');
    }

}