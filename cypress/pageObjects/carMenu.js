export class CarMenu {

    setPickUp(location){
        cy.get('#s2id_autogen5').type(location);
        cy.wait(1500);
        cy.get('div.select2-search input.select2-input').eq(5).type('{enter}');
    }

    setDropOff(location){
        cy.get('#s2id_autogen7').type(location);
        cy.wait(1500);
        cy.get('div.select2-search input.select2-input').eq(5).type('{enter}');
    }

    setDepartDate(date){
        cy.get('input[name="pickupdate"]').type('{selectall}');
        cy.get('input[name="pickupdate"]').type(date);
    }

    setReturnDate(date){
        cy.get('input[name="dropoffdate"]').type('{selectall}');
        cy.get('input[name="dropoffdate"]').type(date);
    }

    get searchButton(){
        return cy.get('div.col-md-2.col-xs-12 [type="submit"]').eq(1);
    }

    

}