const modalFunc = () => {
    const modal = document.querySelector('.modal__overlay');
    const cardBtns = document.querySelectorAll('.button-price');

    function toggleBodyScroll(lock) {
        document.body.style.overflow = lock ? 'hidden' : '';
    }

    const openModal = () => {
        modal.classList.add('open');
        toggleBodyScroll(true);
    };

    const closeModal = () => {
        modal.classList.remove('open');
        toggleBodyScroll(false);
    };

    cardBtns.forEach(btn => {
        btn.addEventListener ('click', () => {
            openModal();
        });
    })

    modal.addEventListener('click', function(event) {
        if(event.target.classList.contains('modal__overlay') || event.target.closest('.modal__header--close')) {
            closeModal()
        }
    } )
};

modalFunc();