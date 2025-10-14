// Create El
export function createEl(el) {
    return document.createElement(`${el}`)
}
// Create El
export function domSelect(el) {
    return document.querySelector(`${el}`)
}
// SWIPER SLIDER
export function createSwiper(selector, numSlides) {
    new Swiper(`${selector}`, {
        direction: 'horizontal',
        lazy: true,
        loop: true,
        speed: 200, slidesPerView: numSlides,
        spaceBetween: 10,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}
// MOVIE DOM NODES
export function createMovieDomNodes(movieCont, imgSrc, name) {
    const card = createEl("div");
    card.className = 'card border-0 p-0 vid-cont bg-transparent text-center mx-2 swiper-slide'
    const cardBody = createEl("div");
    cardBody.className = "card-body px-0";
    const imgCont = createEl("div")
    imgCont.className = "img-container vid-cont-img";
    const cardImg = createEl("img");
    cardImg.src = imgSrc;
    cardImg.title = name;
    cardImg.alt = name;
    cardImg.loading = "lazy";
    cardImg.className = "rounded-2 img-fluid card-img"
    const title = createEl("h6")
    title.className = "card-title text-white";
    title.textContent = name
    // Appending
    card.appendChild(cardBody);
    imgCont.appendChild(cardImg)
    cardBody.append(imgCont, title)
    domSelect(movieCont).appendChild(card)
}