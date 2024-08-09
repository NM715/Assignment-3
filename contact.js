// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

function changeMessage() {
    let contactpage = document.getElementById("contact-page");
    contactpage.innerHTML = 'Thank you for your message!';
    contactpage.style.fontSize = "24px";
    contactpage.style.textAlign = "center";
}

 document.getElementById("submit-button");
submitButton.addEventListener("click", changeMessage);