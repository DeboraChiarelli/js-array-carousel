//- creare un array
//        - creare una variabile
//        - assegnare alla variabile un valore tra [] in cui inserire le cinque immagini
const imgs = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];
//console.log(imgs);
    //- creare una costante che mi dica quale img è attiva

//- creare collegamento al DOM del container del carosello
const containerDomElement = document.querySelector('.slide-container');
console.log(imgs.length);
//- creare ciclo for per girare le imgs fin quando i è minore della lunghezza dell'array
for (let i = 0; i < imgs.length; i++) {
    let imgsPath = imgs[i]; //per prendere quell'img con quell'indice
    console.log(imgsPath);
    //  - template literal che sovrascrive contenuto html
    const htmlString = `
    <div class="image">
        <img src="${imgsPath}">
    </div>`;
    console.log(htmlString);
    // aggiungere contenuto all'innerHTML
    containerDomElement.innerHTML += htmlString;
}
// recuperare le imgs dal DOM usando la classe creata con il template literal
const imageDomElement = document.querySelectorAll('.image');
console.log(imageDomElement);
// assegnare variabile che definisce la prima img attiva
let activeImg = 0;
// aggiungere alla prima img, la 0, la classe active 
const firstImageDomElement = imageDomElement[activeImg];
firstImageDomElement.classList.add('active');
// recuperare l'icona dal DOM, assegnandogli la funzione click
const iconUpDomElement = document.querySelector('.icon-up');
iconUpDomElement.addEventListener('click', function() {
    console.log('click icon up');
    // rimuovere la classe attiva dalla prima img
    imageDomElement[activeImg].classList.remove('active');
    activeImg++; // incrementare per selezionare l'img successiva
    // SE activeImg è identico alla lunghezza dell'array
    if (activeImg === imgs.length) {
        activeImg = 0; // ALLORA non si interrompe il ciclo ma torna a zero e ricomincia
    }
// aggiungere la classe attiva all'img successiva
    imageDomElement[activeImg].classList.add('active');
});
// recuperare l'icona dal DOM, assegnandogli la funzione click
const iconDownDomElement = document.querySelector('.icon-down');
iconDownDomElement.addEventListener('click', function() {
    console.log('click icon down');
    // rimuovere la classe attiva dall'ultima img
    imageDomElement[activeImg].classList.remove('active');
    activeImg--; // decrementare per selezionare l'img precedente
    // SE activeImg è minore di 0 
    if(activeImg < 0) {
        activeImg = imgs.length - 1; //ALLORA activeImg tornerà all'ultima img, riaprendo il ciclo in senso contrario
    }
// aggiungere la classe attiva all'img successiva in senso contrario
    imageDomElement[activeImg].classList.add('active');
});


