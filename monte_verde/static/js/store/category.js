const filterButton = document.querySelector('.filter-button');
const categoriesContainer = document.querySelector('.categories-container');
const backgroundContainer = document.querySelector('.background-categories-container');

filterButton.addEventListener('click', () => {
    categoriesContainer.classList.toggle('show');
    backgroundContainer.classList.toggle('show');
})

backgroundContainer.addEventListener('click', () => {
    categoriesContainer.classList.remove('show');
    backgroundContainer.classList.remove('show');
})