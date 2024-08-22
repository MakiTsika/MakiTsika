document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.flip-image');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const wrapper = document.querySelector('.flip-through-wrapper');
    let currentIndex = 0;

    function showImage(index) {
        requestAnimationFrame(() => {
            wrapper.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === images.length - 1;
    }

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            showImage(currentIndex);
            updateButtons();
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            showImage(currentIndex);
            updateButtons();
        }
    });

    showImage(currentIndex);
    updateButtons();
});
