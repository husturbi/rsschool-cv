const scrollContainer = document.querySelector('.slider-wrapper');
let scrollSpeed = 0;
let scrollInterval;

scrollContainer.addEventListener('mousemove', (e) => {
    const containerWidth = scrollContainer.offsetWidth;
    const mouseX = e.clientX - scrollContainer.getBoundingClientRect().left;
    const scrollLeftMax = scrollContainer.scrollWidth - containerWidth;

  if (mouseX < containerWidth * 0.3) {
    scrollSpeed = -5;
    }

  else if (mouseX > containerWidth * 0.7) {
    scrollSpeed = 5;
    }

    else {
    scrollSpeed = 0;
    }
});

scrollContainer.addEventListener('mouseleave', () => {
    scrollSpeed = 0;
});

scrollInterval = setInterval(() => {
    if (scrollSpeed !== 0) {
    scrollContainer.scrollLeft += scrollSpeed;
    }
}, 16);