





const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowleft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');

    imgSlide.style.transform = 'translatex(calc($(index * -100)% - $(index * 2)rem))';
}
arrowRight.addEventListener('click', ()  => {
    if (index < 4 ){
        index++;
    }

    else{
        index = 5;
    }

    activePortfolio();
});


// const arrowleft = document.querrySelector('.portfolio-box .navigation .arrow-right');
// const arrowleft = document.querrySelector('.portfolio-box .navigation .arrow-left');

// let index = 1;

// const activePortfolio = () => {
//     const imgSlide = document.querrySelector('.portfolio-carousel .img-slide');

//     imgSlide.style.transform = 'translatex(calc($(index * -100)% - $(index * 2)rem))';

arrowleft.addEventListener('click', ()  => {
    if (index < 1 ){
        index--;
    }

    else{
        index = 0;
    }

    activePortfolio();
});