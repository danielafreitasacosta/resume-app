// EJEMPLO

const h1Element = document.getElementById('message');
const button = document.getElementById('changeMessageButton');

//Arrow Function 

const changeMessage = () => {
    h1Element.textContent = 'Pong!'; 
}

button.addEventListener('click', changeMessage); 