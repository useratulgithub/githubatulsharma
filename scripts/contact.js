// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.


document.addEventListener('DOMContentLoaded', function()
 {
    const submitButton = document.getElementById('submit-button');
    const contactPage = document.getElementById('contact-page');

    submitButton.addEventListener('click', function(event)
    
    {
        event.preventDefault(); // Prevent the form from submitting traditionally
        
        contactPage.innerHTML = '<p style="font-size: 24px;">Thank you for your message!</p>';
    });

});
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

