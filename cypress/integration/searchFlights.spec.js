/// <reference types="cypress" />

import { SearchMenu } from "../pageObjects/searchMenu";
import { FlightMenu } from "../pageObjects/flightMenu";

describe('My First Test', function() {
  const searchMenu = new SearchMenu();
  const flightMenu = new FlightMenu();

  before("Go to site", ()=> {
      cy.visit("/");
      searchMenu.flightButton.click();
  })

    it('Select default fligth and search', () => {   
      flightMenu.searchButton.click();
      cy.url().should('include','thflights')
    })

    it('Select a flight departure and destination', () => {
      flightMenu.setDepartureLocation("LOS");
      flightMenu.setDestination("FUE");
      flightMenu.searchButton.click();
      cy.url().should('include','LOS/FUE')
    })

    //departure date could not be set due to the fact that it is read only and to interact with the calendar would be to difficult in a short time

    it('Select number of ocupants', () => {
      flightMenu.setNumberOfAdults(3);
      flightMenu.setNumberOfChildren(3);
      flightMenu.setNumberOfInfants(3);
      flightMenu.searchButton.click();
      cy.url().should('include','3/3/3');
    })

  })