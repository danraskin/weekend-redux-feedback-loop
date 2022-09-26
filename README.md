# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

This project integrates React, Redux, client->server requests (Axios), and server-database requests (SQL), and some basic MUI for display and styling.

App mimics a customer review form, specifically modelled after the daily review form students submit at Prime Digital Academy.

# User Experience

User submits responses to four questions. On submit, user responses are posted to a database of previous responses.

User is navigates through 6 pages. user cannot 'go back' except where prompted.
Users evaluate their feelings, understanding, and experience of support for the curricular material with a 1-5 rank.
    User must select a value (1-5) from a MUI-radio button element. If user attempts to advance pages without selection, an error message appears.
User are prompted to submit additional comments. Users can proceed without adding comments.

User sees their answers on "Review" page. Review page prompts users either to submit or edit their responses.
    if users edit responses, they navigate back to the first page. 
Once responses are submitted, user can choose to fill out a second form.

## App function

The primary tasks of this app are to facilitate page navigation, ensure proper user inputs, and allow form submission to database.

User responses are compiled in one redux reducer in index.js and accessible via store.
reducer is seeded with initial values: { 0, 0 ,0 , ''} for the four response keys (feeling, understanding, support, comments)

For user response pages:
   - on page load, store is queried for value of response key.
    (initializing values could happen in local component state, but by retrieving existing values from store, page renders previous responses if user is editing their respose);

   - user input check is based on MUI sample code for 'radio' type inputs, with three local states: Value (value of radio button), and error message.

    if use clicks submit prior to selecting a value, radio value is 0 an error message appears, 'error' state is set to TRUE. error state is sent as prop to MUI display elements.
    when user makes a selection, error state is reset to 'false'. when value is not zero, reducer is updated and user is navigated to next page.

user data is submitted to server on Review page. SQL table requires >0 values for three numerical responses. If user were to navigate straight to review page without having selected response values, SUBMIT would result in a alert.
    

To Do

[] MUI DESIGN
    [x] center card
    [] style input cards
    [] style review display, possibly with fun 'interactive' stuff?
[] page navigation
    [x] success page to new form
    [] page nav display

STRETCH

[] admin page
    [] axios GET route
    [] axios DELETE route
    [] style display
[] format for mobile