function Accordeon() {
    const accordeonItems = document.querySelectorAll('.FAQ-item');

    accordeonItems.forEach(accordeonItem => {
        let title = accordeonItem.querySelector('.FAQ-item-title');
        
        title.addEventListener('click', event => {
            accordeonItems.forEach(Item => {
                if (Item.classList.contains('active')) {
                    Item.classList.remove('show');
                }
            });

            accordeonItem.classList.toggle('show');
            accordeonItem.classList.add('active');
        });
    });
}

Accordeon();