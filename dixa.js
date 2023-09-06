// Get references to the form, textarea, and submit button
const form = document.getElementById("supportForm");
const textarea = document.getElementById("resultTextarea");
const submitButton = document.getElementById("submitButton");

// Add an event listener to the submit button
submitButton.addEventListener("click", function() {
    // Collect values from all form elements
    const formData = new FormData(form);
    let combinedValues = "";

    // Iterate through the FormData object
    for (const [name, value] of formData) {
        combinedValues += `${name}:\n${value}\n\n`;
    }

    // Set the combined values in the textarea
    textarea.value = combinedValues;
   });