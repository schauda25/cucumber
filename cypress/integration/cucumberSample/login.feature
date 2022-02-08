Feature: Login into App

Scenario: Valid login
Given user is on login page
#When user enter login credentials
When user enter "tomsmith" and  "SuperSecretPassword!"
Then should display home page
