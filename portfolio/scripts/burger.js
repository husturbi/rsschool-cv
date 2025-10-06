const burgerFunc = () => {
    const burger = document.querySelector('.burger-overlay');
    const burgerBtn = document.querySelector('.burger-button');

    function toggleBodyScroll(lock) {
        document.body.style.overflow = lock ? 'hidden' : '';
    }

    const scrollWindow = () => {
        if (burger.classList.contains('open')) {
            toggleBodyScroll(true);
        } else {
            toggleBodyScroll(false);
        }
    }

    burgerBtn.addEventListener ('click', () => {
        burger.classList.toggle('open');
        burgerBtn.classList.toggle('active');
        scrollWindow();
    });
    
    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        burgerBtn.classList.toggle('active');
        scrollWindow();
    } )
};

burgerFunc();