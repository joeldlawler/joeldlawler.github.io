'use strict';

/**
 * Creates a button for kicking off the test and adds it to the DOM.
 * @param {HTMLElement} context  the parent element to add the button to
 * @param {Test}        test     the test to be executed
 * @param {string}      zipCode  the zip code to use for the test
 * @param {string}      buttonText  the text to display on the button
 * @returns {HTMLElement} the button added to the test
 */
function addButtonForTest(context, test, zipCode, buttonText) {
    let testButton = document.createElement('button');

    testButton.type = 'button';
    testButton.innerText = buttonText;
    testButton.onclick = () => test.getWeather(zipCode);

    context.appendChild(testButton);

    return testButton;
}

// Create the Test and add a button to the UI for running the test
const test = new Weather();
const buttonContainer = document.getElementById('location-button');
// I changed the city to zipcode to make it a little more precise 
const zipCode = "37201";
const buttonText = "Get the Nashville Weather";

const testButton = addButtonForTest(buttonContainer, test, zipCode, buttonText);