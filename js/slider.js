const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev_button');
const nextButton = document.querySelector('.next_button');
const slides = slider.querySelectorAll('div');
const slidesCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slidesCount) % slidesCount;
    updateSlider();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slidesCount;
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index == slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none'
        }
    });
}

updateSlider();

