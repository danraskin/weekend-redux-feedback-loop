## Description

This project integrates React, Redux, client->server requests (Axios), and server->database requests (SQL), and default MUI for display.
App mimics a customer review form, specifically modelled after the daily review form students submit at Prime Digital Academy.

![first response field](https://user-images.githubusercontent.com/104224468/198848346-7c19d110-1616-46e3-8efd-a93ae53563de.png)

    First Response Field
![user input validation](https://user-images.githubusercontent.com/104224468/198848360-21ffd0b5-6a71-462e-9c2d-4d154d469602.png)

    User Input Validation
![Submission page](https://user-images.githubusercontent.com/104224468/198848381-d35c5a3d-4275-42e2-95f3-4371d99a98d4.png)

    Submission Page

## User Experience

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
reducer is seeded with not-null initial values: { 0, 0 ,0 , ''} for the four response keys (feeling, understanding, support, comments)

For user response pages:
- on page load, store is queried for value of response key. (initializing values could happen in local component state, but by retrieving existing values from store, page renders previous responses if user is editing their respose);
- user input check is based on MUI sample code for 'radio' type inputs, with three local states: Value (value of radio button), and error message.
- if user clicks submit prior to selecting a value, radio value is 0 an error message appears, 'error' state is set to TRUE. error state is sent as prop to MUI display elements. when user makes a selection, error state is reset to 'false'. when value is not zero, reducer is updated and user is navigated to next page.
- user data is submitted to server on Review page. SQL table requires >0 values for three numerical responses. If user were to navigate straight to review page without having selected response values, SUBMIT would result in a alert.
    

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
