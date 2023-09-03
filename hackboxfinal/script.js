const toggleButton = document.getElementById("toggleButton");
const body = document.body;
const navbar = document.querySelector(".navbars");
const mainSection = document.querySelector("main");
const whoamiSection = document.querySelector(".whoami");
const whatIDoSection = document.querySelector(".watIDo");
const workExpSection = document.querySelector(".workExp");
const ourPortfolioSection = document.querySelector(".ourPort");
const blogSection = document.querySelector(".blog");
const contactSection = document.querySelector(".edbar");
const page6Section = document.querySelector(".page-6"); 

toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    function toggleSectionStyles(section) {
        if (body.classList.contains("dark-mode")) {
            section.style.backgroundColor = "#ffffff";
            const allElements = section.querySelectorAll("*");
            allElements.forEach(function (element) {
                if (getComputedStyle(element).color === "rgb(255, 255, 255)") {
                    element.style.color = "#000000";
                }
            });
        } else {
            section.style.backgroundColor = "#0e0f0f";
            const allElements = section.querySelectorAll("*");
            allElements.forEach(function (element) {
                if (getComputedStyle(element).color === "rgb(0, 0, 0)") {
                    element.style.color = "#ffffff";
                }
            });
        }
    }

    toggleSectionStyles(navbar);
    toggleSectionStyles(mainSection);
    toggleSectionStyles(whoamiSection);
    toggleSectionStyles(whatIDoSection);
    toggleSectionStyles(workExpSection);
    toggleSectionStyles(ourPortfolioSection);
    toggleSectionStyles(blogSection);
    toggleSectionStyles(contactSection);
    toggleSectionStyles(page6Section); 
});





function changeImage(imageSource) {
    const imageElement = document.getElementById('myImage');
    imageElement.style.opacity = '0';
    setTimeout(function () {

        imageElement.src = imageSource;
        imageElement.style.opacity = '1';
    }, 500);
}



const bars = document.querySelectorAll('.bar');

const observer = new IntersectionObserver(entries => {
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

bars.forEach(bar => {
    observer.observe(bar);
});