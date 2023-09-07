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
      const field = form.querySelector(`[name="${name}"]`);
      const fieldset = field.closest('fieldset');

      // Check if the field's parent fieldset is hidden
      if (!fieldset || getComputedStyle(fieldset).display !== 'none') {
          if(`${name}` != "message" && `${name}` != "subject"  && `${name}` != "email"  && `${name}` != "name"){
            combinedValues += `${name}: ${value}\n\n`;
        }
      }
  }
  /*
    for (const [name, value] of formData) {
        if(`${name}` != "message" && `${name}` != "subject"  && `${name}` != "email"  && `${name}` != "name"){
            combinedValues += `${name}: ${value}\n\n`;
        }
    }
    */
    // Set the combined values in the textarea
    textarea.value = combinedValues;
   });


$(document).ready(function(){
  $('#subject').on('change', function(){
      var demovalue = $(this).val(); 
      $("fieldset").hide();
      $("#"+demovalue).show();
  });
});