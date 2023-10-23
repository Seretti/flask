const displayImage = document.getElementById('display-image');
const btnWrong = document.getElementById('btn-wrong');
const btnCorrect = document.getElementById('btn-correct');
const btnCancel = document.getElementById('btn-cancel');

const imageNames = ['1.jpg', '2.jpg', '3.jpg'];
let currentImageIndex = 0;

function loadImage() {
    const imageName = imageNames[currentImageIndex];
    displayImage.src = `/static/images/${imageName}`;
}

btnWrong.addEventListener('click', () => {
    currentImageIndex++;
    loadImage();
});

btnCorrect.addEventListener('click', () => {
    currentImageIndex++;
    loadImage();
});

btnCancel.addEventListener('click', () => {
    // Handle the "Anuleaza actiunea" button as needed
});

// Load the initial image
loadImage();
