/// <reference types="cypress" />

export class TourMenu {

    setDestination(destinationName){
        cy.get('#s2id_textsearch').type(destinationName);
        cy.wait(1000);
        cy.get('#select2-drop div input').type('{enter}');
    }
    
    setStartDate(date){
        cy.get('#DateTours').type(date);
    }

    setEndDate(date){
        cy.get('#EndDateTours').type(date);
    }

    get searchButton(){
        return cy.get('#tours [type="submit"]');
    }
    
}