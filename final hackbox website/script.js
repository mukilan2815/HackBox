const toggleButton = document.getElementById("toggleButton");
const body = document.body;
const navbar = document.querySelector(".navbars");
const mainSection = document.querySelector("main");
const whoamiSection = document.querySelector(".whoami");
const whatIDoSection = document.querySelector(".watIDo");
const workExpSection = document.querySelector(".workExp");
const ourPortfolioSection = document.querySelector(".ourPort");
const contactSection = document.querySelector(".edbar");
const page6Section = document.querySelector(".page-6");
const barss = document.querySelectorAll('.bar'); // Select all bars

let darkMode = true; // Track the dark mode state

toggleButton.addEventListener("click", function () {
    // Toggle dark mode state

    // Function to toggle section styles
    function toggleSectionStyles(section, isDarkMode) {
        if (section) {
            if (isDarkMode) {
                section.style.backgroundColor = "#ffffff";
                const allElements = section.querySelectorAll("*");
                allElements.forEach(function (element) {
                    if (getComputedStyle(element).color === "rgb(255, 255, 255)") {
                        element.style.color = "#000000";
                    }
                });
                
            } else {
                section.style.backgroundColor = "#000000"; // Set to dark mode background color
                const allElements = section.querySelectorAll("*");
                allElements.forEach(function (element) {
                    if (getComputedStyle(element).color === "rgb(0, 0, 0)") {
                        element.style.color = "#ffffff";
                    }
                });
               
            }
        }
    }

    // Toggle styles for each section
    toggleSectionStyles(navbar, darkMode);
    toggleSectionStyles(mainSection, darkMode);
    toggleSectionStyles(whoamiSection, darkMode);
    toggleSectionStyles(whatIDoSection, darkMode);
    toggleSectionStyles(workExpSection, darkMode);
    toggleSectionStyles(ourPortfolioSection, darkMode);
    toggleSectionStyles(contactSection, darkMode);
    toggleSectionStyles(page6Section, darkMode);

    // Toggle dark mode for bars as well
    barss.forEach(bar => {
        if (darkMode) {
            bar.style.backgroundColor = "#ffffff";
            bar.style.color = "#000000";
            darkMode=!darkMode;
        } else {
            bar.style.backgroundColor = "#000000"; // Set to dark mode background color
            bar.style.color = "#ffffff";
            darkMode=true;
        }
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
