const initSlider = () => {
    const slideButtons = document.querySelectorAll('.slider-button');
    const slideList = document.querySelector('.testimonials-list');

    slideButtons.forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.id === 'prev-slide' ? -1 : 1;
            const scrollAmount = slideList.clientWidth * direction;
            slideList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        })
    })
}

window.addEventListener('load', initSlider);
