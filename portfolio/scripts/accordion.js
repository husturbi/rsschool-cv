function Accordion() {
    const accordionItems = document.querySelectorAll('.FAQ-item');

    accordionItems.forEach(accordionItem => {
        let title = accordionItem.querySelector('.FAQ-item-title');
        
        title.addEventListener('click', event => {
            accordionItems.forEach(Item => {
                if (Item.classList.contains('active')) {
                    Item.classList.remove('show');
                }
            });

            accordionItem.classList.toggle('show');
            accordionItem.classList.add('active');
        });
    });
}

Accordion();