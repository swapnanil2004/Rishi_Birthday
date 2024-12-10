const card = document.querySelector('.card');
const openButton = document.getElementById('open-card');
const closeButton = document.getElementById('close-card');

openButton.addEventListener('click', () => {
    card.style.transform = 'rotateY(180deg)';
});

closeButton.addEventListener('click', () => {
    card.style.transform = 'rotateY(0deg)';
});
