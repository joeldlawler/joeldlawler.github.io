'use strict';

/**
 * Creates a button for kicking off the test and adds it to the DOM.
 * @param {HTMLElement} context  the parent element to add the button to
 * @param {Test}        test     the test to be executed
 * @returns {HTMLElement} the button added to the test
 */
function addButtonForTest(context, test) {
    // Set zipcode to Nashville
    const zipCode = "37201";
    let testButton = document.createElement('button');

    testButton.type = 'button';
    testButton.innerText = 'Get the Nashville Weather';
    testButton.onclick = () => test.run(zipCode);

    context.appendChild(testButton);

    return testButton;
}

// Create the Test and add a button to the UI for running the test
const test = new Test();
const buttonContainer = document.getElementById('button-container');

addButtonForTest(buttonContainer, test);