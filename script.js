/*-----------Image Sliding--------------*/
let index = 0;
const images = document.querySelectorAll('.slider-image');

function showImage(n) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === n) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage(index);
}

setInterval(nextImage, 3000); // Change image every 3 seconds
/*-----------------For Welcome----------------------*/
document.addEventListener("DOMContentLoaded", function() {
    const typewriter = document.querySelector('.typewriter');
    typewriter.style.opacity = "0"; // Reset opacity before animation
    setTimeout(() => {
        typewriter.style.opacity = "1"; // Fade in after a delay
    }, 1000); // Adjust delay as needed
});
