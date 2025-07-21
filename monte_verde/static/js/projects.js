// obteniendo conjunto de imágenes de los proyectos
const projectOneSet = document.querySelectorAll('.p1-med');
const projectTwoSet = document.querySelectorAll('.p2-med');
const projectThreeSet = document.querySelectorAll('.p3-med');

// obteniendo los botones back y next
const backProOne = document.querySelector('.back-p1');
const nextProOne= document.querySelector('.next-p1');
const backProTwo = document.querySelector('.back-p2');
const nextProTwo = document.querySelector('.next-p2');
const backProThree = document.querySelector('.back-p3');
const nextProThree = document.querySelector('.next-p3');

// estableciendo índice para cada conjunto de proyectos
let projectOneIndex = 1;
let projectTwoIndex = 1;
let projectThreeIndex = 1;

// función para remover clases de los elementos 
function removeClass(imageSet){
    imageSet.forEach(img => {
        img.classList.remove('izq');
        img.classList.remove('der');
        img.classList.remove('hide');
        img.classList.remove('main');
    })
}

// función para mostrar las imágenes
function addClassToImg(setIndex, imageSet){
    if(setIndex == 0){
        imageSet[imageSet.length - 1].classList.add('izq');
        imageSet[1].classList.add('der');
        imageSet[setIndex].classList.add('main');

        for(let i = 2; i < imageSet.length - 1; i++){
            imageSet[i].classList.add('hide');
        }
    } else if(setIndex == imageSet.length - 1){
        imageSet[imageSet.length - 2].classList.add('izq');
        imageSet[0].classList.add('der');
        imageSet[setIndex].classList.add('main');

        for(let i = 1; i < imageSet.length - 2; i++){
            imageSet[i].classList.add('hide');
        }
    } else {
        imageSet[setIndex].classList.add('main');

        for(let i = 0; i < imageSet.length; i++){
            if(setIndex - 1 == i){
                imageSet[i].classList.add('izq');
            } else if(setIndex + 1 == i){
                imageSet[i].classList.add('der');
            } else if(i != setIndex){
                imageSet[i].classList.add('hide');
            }
        }
    }
}

// Filtrar las imágenes que se mostrarán al cargar la página
addClassToImg(projectOneIndex, projectOneSet);
addClassToImg(projectTwoIndex, projectTwoSet);
addClassToImg(projectThreeIndex, projectThreeSet);

// Agregando eventos a los botones
backProOne.addEventListener('click', () => {
    removeClass(projectOneSet);
    if(projectOneIndex == 0){
        projectOneIndex = projectOneSet.length - 1;
    } else {
        projectOneIndex = projectOneIndex - 1;
    }
    addClassToImg(projectOneIndex, projectOneSet);
})

nextProOne.addEventListener('click', () => {
    removeClass(projectOneSet);
    if(projectOneIndex == projectOneSet.length - 1){
        projectOneIndex = 0;
    } else {
        projectOneIndex = projectOneIndex + 1;
    }
    addClassToImg(projectOneIndex, projectOneSet);
})

backProTwo.addEventListener('click', () => {
    removeClass(projectTwoSet);
    if(projectTwoIndex == 0){
        projectTwoIndex = projectTwoSet.length - 1;
    } else {
        projectTwoIndex = projectTwoIndex - 1;
    }
    addClassToImg(projectTwoIndex, projectTwoSet);
})

nextProTwo.addEventListener('click', () => {
    removeClass(projectTwoSet);
    if(projectTwoIndex == projectTwoSet.length - 1){
        projectTwoIndex = 0;
    } else {
        projectTwoIndex = projectTwoIndex + 1;
    }
    addClassToImg(projectTwoIndex, projectTwoSet);
})

backProThree.addEventListener('click', () => {
    removeClass(projectThreeSet);
    if(projectThreeIndex == 0){
        projectThreeIndex = projectThreeSet.length - 1;
    } else {
        projectThreeIndex = projectThreeIndex - 1;
    }
    addClassToImg(projectThreeIndex, projectThreeSet);
})

nextProThree.addEventListener('click', () => {
    removeClass(projectThreeSet);
    if(projectThreeIndex == projectThreeSet.length - 1){
        projectThreeIndex = 0;
    } else {
        projectThreeIndex = projectThreeIndex + 1;
    }
    addClassToImg(projectThreeIndex, projectThreeSet);
})