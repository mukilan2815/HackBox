// Define the bars variable and querySelectorAll
const barss = document.querySelectorAll('.bar');

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const body = document.body;

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });
});









function changeImage(imageSource) {
    const imageElement = document.getElementById('myImage');
    imageElement.style.opacity = '0';
    setTimeout(function () {
        imageElement.src = imageSource;
        imageElement.style.opacity = '1';
    }, 500);
}

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target.querySelector('.progress');
            const percentage = parseInt(entry.target.nextElementSibling.textContent);
            progress.style.width = percentage + '%';
        }
    });
}, {
    threshold: 0.5
});

barss.forEach(bar => {
    observer1.observe(bar);
});



// scroll to top 
// Get the button element and listen for the scroll event
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", toggleScrollButton);

// Function to show/hide the button based on scroll position
function toggleScrollButton() {
    if (document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Function to smoothly scroll to the top when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // This enables smooth scrolling
    });
});
