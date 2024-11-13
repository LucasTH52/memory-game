const images = [
    "./src/imagems/Arsenal_FC.png",
    "./src/imagems/Arsenal_FC.png",
    "./src/imagems/AC_Milan.png",   
    "./src/imagems/AC_Milan.png",
    "./src/imagems/Borussia_Dortmund.png",
    "./src/imagems/Borussia_Dortmund.png",
    "./src/imagems/FC_Bayern_München.png",
    "./src/imagems/FC_Bayern_München.png",
    "./src/imagems/FC_Internazionale.png",
    "./src/imagems/FC_Internazionale.png",
    "./src/imagems/FCBarcelona.png",
    "./src/imagems/FCBarcelona.png",
    "./src/imagems/Liverpool_FC.png",
    "./src/imagems/Liverpool_FC.png",
    "./src/imagems/Real_Madrid.png",
    "./src/imagems/Real_Madrid.png",

];
let openCards = [];

// Embaralhar as imagens
let shuffleImages = images.sort(() => (Math.random() > 0.5 ? 2 : -1));

for(let i = 0; i < images.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    //box.style.backgroundImage = "url('back-of-card.png')"; // Imagem do verso da carta
    box.dataset.image = shuffleImages[i]; // Salva a URL da imagem em um atributo personalizado
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2) {
        this.style.backgroundImage = `url('${this.dataset.image}')`; // Mostra a imagem associada
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (openCards[0].dataset.image === openCards[1].dataset.image) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
       // openCards[0].style.backgroundImage = "url('back-of-card.png')"; // Volta para o verso da carta
       // openCards[1].style.backgroundImage = "url('back-of-card.png')";
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === images.length) {
        alert("Você venceu!");
    }
}