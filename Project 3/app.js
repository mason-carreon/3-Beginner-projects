const circle = document.querySelector('#circle')

circle.addEventListener('mouseenter', () => {
    if (!circle.classList.contains('hover')) {
        circle.classList.add('hover');
    }
});

circle.addEventListener('mouseenter', () => {
    if (!circle.classList.contains('hover')) {
        circle.classList.remove('hover');
    }
});