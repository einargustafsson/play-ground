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
        if(`${name}` != "message" && `${name}` != "subject"  && `${name}` != "email"  && `${name}` != "name"){
            combinedValues += `${name}: ${value}\n\n`;
        }
    }

    // Set the combined values in the textarea
    textarea.value = combinedValues;
   });


(function (w, d, s) {
  if (w._dixa_) return;
  w._dixa_ = {
    invoke: function (m, a) {
      w._dixa_.pendingCalls = w._dixa_.pendingCalls || [];
      w._dixa_.pendingCalls.push([m, a]);
    },
    addListener: function (event, listener) {
      w._dixa_.pendingAddListenerCalls = w._dixa_.pendingAddListenerCalls || [];
      w._dixa_.pendingAddListenerCalls.push([event, listener]);
    },
  };
  s = d.createElement('script');
  s.type = 'text/javascript';
  s.setAttribute('charset', 'utf-8');
  s.async = true;
  s.src = 'https://messenger.dixa.io/bootstrap.js';
  var before = d.getElementsByTagName('script')[0];
  before.parentNode.insertBefore(s, before);
})(window, document);
_dixa_.invoke('init', { messengerToken: '36ec56fce8394e9dbc347d025a621bc5' });

$(document).ready(function(){
  $('#subject').on('change', function(){
      var demovalue = $(this).val(); 
      $("fieldset").hide();
      $("#"+demovalue).show();
  });
});