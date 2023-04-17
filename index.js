document.querySelectorAll('.carousel').forEach(carousel => {
    const items = carousel.querySelectorAll('.carousel_item');
    
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            items.forEach(item => item.classList.remove('carousel_item--active'));
            buttons.forEach(button => button.classList.remove('carousel_button--active'));

            items[index].classList.add('carousel_item--active');
            button.classList.add('carousel_button--active');
        });
    });

    // Set first item active
    items[0].classList.add('carousel_item--active');
    buttons[0].classList.add('carousel_button--active');
});