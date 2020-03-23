/// <reference types="cypress" />

export class FlightMenu {

    get searchButton(){
        return cy.get('[name="flightmanualSearch"] [type="submit"]');
    }

    setDepartureLocation(location){
        cy.get('#s2id_location_from').type(location);
        cy.wait(1500);  // wait for the loading animation to finish
        cy.get('div.select2-search input.select2-input').eq(5).type("{enter}");
    }

    setDestination(location){
        cy.get('#s2id_location_to').type(location);
        cy.wait(1500);  // wait for the loading animation to finish
        cy.get('.select2-drop').eq(5).type("{enter}");
    }

    // Read only field
    // setDepartureDate(departureDate){
    //     cy.get('#FlightsDateStart').type(departureDate);
    // }

    get addAdultButton(){
        return cy.get('div.col-4 .bootstrap-touchspin-up').eq(0);
    }

    get substractAdultButton(){
        return cy.get('div.col-4 .bootstrap-touchspin-down').eq(0);
    }

    get addChildButton(){
        return cy.get('div.col-4 .bootstrap-touchspin-up').eq(1);
    }
    get addInfantButton(){
        return cy.get('div.col-4 .bootstrap-touchspin-up').eq(2);
    }

    setNumberOfAdults(number){

        if(number == 1){
            return
        }

        if(number > 1){
            for (let i=0; i<number-1; i++){
                this.addAdultButton.click();
            }
        }
        else{
            if(number < 1){
                for(let i=0; i<1; i++){
                    this.substractAdultButton.click();
                }
            }
        }
    }

    setNumberOfChildren(number){
        if(number == 0){
            return
        }
        else{
            for (let i=0; i<number; i++){
                this.addChildButton.click();
            }
        }     
    }

    setNumberOfInfants(number){
        if(number == 0){
            return
        }
        else{
            for (let i=0; i<number; i++){
                this.addInfantButton.click();
            }
        }     
    }


}