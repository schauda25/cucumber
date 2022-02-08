///<reference types='cypress'/>
import {Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

/* Given ('user is on login page',() => {
    cy.visit('https://the-internet.herokuapp.com/login')
})

When ('user enter login credentials', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
})

Then ('should display home page', () => {
    cy.url().should('include', 'secure')
}) */

Given ('user is on login page',() => {
   LoginPage.visitURL();
})

When ('user enter {string} and {string}', (username,password) => {
    LoginPage.userLogin(username,password)
})

Then ('should display home page', () => {
    cy.url().should('include', 'secure')
})