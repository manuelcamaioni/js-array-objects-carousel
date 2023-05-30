// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1: Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.

// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const sliderElement = document.querySelector('div.slider');
const sliderItemElement = document.querySelector('div.slider-item');
let activeIndex = 0;


images.forEach((imgElement) => {
        sliderElement.innerHTML += 
        `<div class="slider-item">
            <h1 class="position-absolute top-0 end-0">${imgElement.title}</h1>
            <img src="${imgElement.image}" alt="${imgElement.title} pic">
            <p class="position-absolute bottom-0 end-0 fs-3 ps-6">${imgElement.text}</p>
        </div>`;
});


const listNodesOfImages = document.querySelectorAll('div.slider-item');
const arrayImages = Array.from(listNodesOfImages);
arrayImages[activeIndex].classList.add('active');

const btnBack = document.getElementById('back-button');
const btnNext = document.getElementById('next-button');

// miniature implementation
const miniaturesContainer = document.querySelector('div.miniatures');
images.forEach((imgMiniature) => {
    miniaturesContainer.innerHTML +=  
    `<div class="miniature-item">
        <img src="${imgMiniature.image}" alt="${imgMiniature.title} pic">
    </div>`;
});


const miniatureItem = document.querySelectorAll('div.miniature-item');
const arrayMiniatures = Array.from(miniatureItem);





arrayMiniatures.forEach((miniatureEvent) => {
    const selectedMiniature = arrayMiniatures.indexOf(miniatureEvent);
    miniatureEvent.addEventListener('click', () =>{
        if(activeIndex !== selectedMiniature){
            const activeImage = arrayImages[activeIndex];
            activeImage.classList.remove('active');
            activeIndex = selectedMiniature;
            arrayImages[activeIndex].classList.add('active');     
        } 
    });
});


function autoplay (){
    const activeImage = arrayImages[activeIndex];
    activeImage.classList.remove('active');
    
    if(activeIndex === images.length - 1){
        activeIndex = 0;

    } else{
        activeIndex = activeIndex + 1;
    }

    arrayImages[activeIndex].classList.add('active');
    
}

setInterval(autoplay, 5000);


// BUTTONS EVENTS
btnBack.addEventListener('click', function() {
    const activeImage = arrayImages[activeIndex];
    activeImage.classList.remove('active');

    if(activeIndex === 0){
        activeIndex = images.length - 1;

    } else{
        activeIndex = activeIndex - 1;
    }
    
    arrayImages[activeIndex].classList.add('active');
});

btnNext.addEventListener('click', function() {
    const activeImage = arrayImages[activeIndex];
    activeImage.classList.remove('active');
    
    if(activeIndex === images.length - 1){
        activeIndex = 0;

    } else{
        activeIndex = activeIndex + 1;
    }
    
    arrayImages[activeIndex].classList.add('active');
});

