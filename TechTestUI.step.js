/// <reference types="Cypress" />

import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome

Given('User launches the BBC URL',()=>
{
    cy.visit(Cypress.env('url'));
    cy.get('#orb-accessibility-help').should('be.visible');
})

When('user clicks on top navigation links',dataTable => 
{
    cy.get('#orb-nav-links').should('be.visible');
    
    // Date and Time format validation
    const dayjs = require('dayjs')
    cy.log(dayjs().format('DD/MM/YYYY'))  //Prints todays date 30/09/2021
    cy.get('textfield').type(dayjs().format('DD/MM/YYYY')) //input today's date in DD/MM/YYYY format

    
});

Then('user should be navigated to respective pages as per link opened',()=>
    {
        //Click on Home Link
    cy.get('#orb-nav-links >ul>li').within(() => {
        cy.get('a').should('have.attr', 'href').and('have.text',dataTable.rawTable[0][0]).click();
      });
    cy.url().should('eq', Cypress.env('url'));

    //Click on News link
    cy.get('#orb-nav-links >ul>li').within(() => {
        cy.get('a').should('have.attr', 'href').and('have.text',dataTable.rawTable[0][1]).click();
      });
    cy.url().should('include','/news');

    //Click on News link
    cy.get('#orb-nav-links >ul>li').within(() => {
        cy.get('a').should('have.attr', 'href').and('have.text',dataTable.rawTable[0][2]).click();
      });
    cy.url().should('include','/sport');
    });
   
When('user perform search for Houghton Mifflin Harcourt',()=>{
    // show hidden element with invoke
    cy.get('#orb-search-q').invoke('show');
    cy.contains('Search the BBC').click();
    cy.get('#orb-search-q').type('Houghton Mifflin Harcourt');
    cy.get('#orb-search-button').click();
});
Then('search list should be displayed',()=>{
    cy.wait(2000);
    cy.get(' div > div > ul').should('be.visible')
});



