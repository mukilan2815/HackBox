const animateElements = document.querySelectorAll('.animate');

function checkElementsInView() {
    animateElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.75) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', checkElementsInView);
window.addEventListener('load', checkElementsInView);