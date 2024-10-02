// EJEMPLO

const { html2pdf }   = require("html2pdf.js")

const h1Element = document.getElementById('message');
const button = document.getElementById('changeMessageButton');

//Arrow Function 

const changeMessage = () => {
    h1Element.textContent = 'Pong!'; 
}

button.addEventListener('click', changeMessage); 

function printpdf() {
    var content = document.getElementById("resume"); 

    const allButtons = document.querySelectorAll("#print button"); 
    allButtons.forEach(button => {
        button.classList.add("none"); 
    }); 

    let allInputCheckboxes = document.querySelectorAll(".input-checkbox"); 
    allInputCheckboxes.forEach(input => {
        input.classList.add("none");
    })

    allButtons.forEach(button => {
        button.classList.remove("none"); 
    })
    allInputCheckboxes.forEach(input => {
        input.classList.remove("none");
    })

    html2pdf(content, {
        html2canvas: {scale: 1, logging:true, dpi: 500}
    });   

}

function addedu() {
    const head = document.createElement('div'); 
    document.getElementById("education").appendChild(head); 
    head.innerHTML = ('<div class="edublock"><span><input type="checkbox" class="input-checkbox"></span><span class="education-head" contenteditable="true"> Institute Name</span> - <span contenteditable="true"> Passing Year</span></div></div>'); 
}