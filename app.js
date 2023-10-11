//- creare un array
//        - creare una variabile
//        - assegnare alla variabile un valore tra [] in cui inserire le cinque immagini
const imgs = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];
console.log(imgs);
    //- creare una costante che mi dica quale img è attiva
const activeImg = 0;
//- creare collegamento al DOM
const containerDomElement = document.querySelector('.container');
console.log(imgs);
//- creare ciclo for
for (let i = 0; i < imgs.length; i++) {
    const imgsPath = imgs[i];
    console.log(imgsPath);
    //  - template literal
    const htmlString = `
    <div class="image">
        <img src="${imgsPath}">
    </div>`;
    console.log(htmlString);
    containerDomElement.innerHTML += htmlString;
}

const imageDomElement = document.getElementsByClassName('slide-img');
console.log(imageDomElement);

const secondImageDomElement = imageDomElement[0];
secondImageDomElement.classList.add('active');


const iconUpDomElement = document.querySelector('.icon-up');
iconUpDomElement.addEventListener('click');

const iconDownDomElement = document.querySelector('.icon-down');
iconDownDomElement.addEventListener('click');


