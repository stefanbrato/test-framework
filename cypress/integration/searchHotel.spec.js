/// <reference types="cypress" />

import { HotelMenu } from "../pageObjects/hotelMenu"
import { CustomFunctions } from "../support/customFunctions";

describe('My First Test', function() {
  const hotelMenu = new HotelMenu();
  const customFunctions = new CustomFunctions();
  let checkIn = customFunctions.generateDate('startDate');
  let checkOut = customFunctions.generateDate('endDate');

  beforeEach("Go to site", ()=> {
      cy.visit("/");
  })

    it('Select a hotel and search', () => {   
      hotelMenu.hotelSelect("Hamilton");
      hotelMenu.searchButton.click();
      cy.url().should('include','hamilton');
    })

    it('Select a hotel and specific checkin/out dates', ()=> {
      hotelMenu.hotelSelect("Hamilton");
      hotelMenu.checkInDate(checkIn);
      hotelMenu.checkOutDate(checkOut);
      hotelMenu.searchButton.click();
      cy.url().should('include','hamilton');
    })

    it('Select a hotel and specific checkin/out dates and number of ocupants', ()=> {
      hotelMenu.hotelSelect("Hamilton");
      hotelMenu.checkInDate(checkIn);
      hotelMenu.checkOutDate(checkOut);
      hotelMenu.setNumberOfAdults(0);
      hotelMenu.setNumberOfChildren(2);
      hotelMenu.searchButton.click();
      cy.url().should('include','hamilton');
    })

  })