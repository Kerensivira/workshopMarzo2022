const agregarAlCarrito = document.querySelectorAll('#aggToBag')
const CARDS = document.querySelector('#cardBox')

agregarAlCarrito.forEach(botonCompra => {
    
    botonCompra.addEventListener('click', addToBagClicked)

});

function addToBagClicked(event) {

const button = event.target
const cards = button.closest('#container_CARDS')

const cardTitle = document.querySelector('.card-title').textContent;
const cardPrice = document.querySelector('.card-price').textContent;
const cardimg = document.querySelector('.card-img-top').src;

aggToBagCards(cardTitle, cardPrice, cardimg);


}

function aggToBagCards(cardTitle, cardPrice, cardimg){
   const showMeCardsRow = document.createElement('div')
   const cards_box = `
   

   <div id="cardBox">

   <div class="item_card" style="width: 18rem;">
       <img src= ${cardimg} class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${cardTitle}</h5>
         <p class="card-price"> ${cardPrice} </p>
       
       </div>
     </div>

</div>`;

showMeCardsRow.innerHTML = cards_box
CARDS.appendChild (showMeCardsRow);
}

