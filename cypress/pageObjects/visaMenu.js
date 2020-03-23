export class VisaMenu {

    selectFromCountry(country){
        cy.get('[name=nationality_country] ~ div a div').click();
        cy.get('[name=nationality_country] ~ div input').type(country);
        cy.get('[name=nationality_country] ~ div input').type('{enter}');
    }

    selectToCountry(country){
        cy.get('[name="destination_country"] ~ div a div').click()
        cy.get('[name="destination_country"] ~ div input').type(country);
        cy.get('[name="destination_country"] ~ div input').type('{enter}');
    }

    selectDate(date){
        cy.get('input[placeholder="Date"]').type(date);
    }

    get submitButton(){
        return cy.get('#visa [type="submit"]');
    }
}

