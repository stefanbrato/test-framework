/// <reference types="cypress" />

export class HotelMenu {

    hotelSelect(hotelName){
        cy.get('#s2id_autogen1').type(hotelName);
        cy.wait(1000);
        cy.get('.select2-input').eq(5).type('{enter}');
    }

    get searchButton(){
       return cy.get('form[name="HOTELS"] [type="submit"]');
    }

    checkInDate(date){
        cy.get('#checkin').type('{selectall}');
        cy.get('#checkin').type(date);
    }

    checkOutDate(date){
        cy.get('#checkout').type('{selectall}');
        cy.get('#checkout').type(date);
    }

    get addAdultButton(){
        return cy.get('div.col.o2 .bootstrap-touchspin-up');
    }

    get substractAdultButton(){
        return cy.get('div.col.o2 .bootstrap-touchspin-down');
    }

    get addChildButton(){
        return cy.get('div.col.\\30 1 .bootstrap-touchspin-up');
    }

    get subsctractChildButton(){
        return cy.get('div.col.\\30 1 .bootstrap-touchspin-down');
    }



    setNumberOfAdults(number){

        if(number == 2){
            return
        }

        if(number > 2){
            for (let i=0; i<number-2; i++){
                this.addAdultButton.click();
            }
        }
        else{
            if(number < 2){
                for(let i=0; i<2-number; i++){
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



}