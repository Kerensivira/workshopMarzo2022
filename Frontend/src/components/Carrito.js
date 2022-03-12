const agregarAlCarrito = document.querySelectorAll('#aggToBag')

agregarAlCarrito.forEach(botonCompra => {
    
    botonCompra.addEventListener('click', addToBagClicked)

});

function addToBagClicked(event) {

const button = event.target
const cards = button.closest('#container_CARDS')

const cardTitle = document.querySelector('.card-title').textContent;
const cardPrice = document.querySelector('.card-price').textContent;
console.log(addToBagClicked = cardTitle, cardPrice);

}
