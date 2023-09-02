const toggleButton = document.getElementById("toggleButton");
const body = document.body;
const navbar = document.querySelector(".navbars");
const mainSection = document.querySelector("main");
const whoamiSection = document.querySelector(".whoami");
const whatIDoSection = document.querySelector(".watIDo"); // Add this line
const workExpSection = document.querySelector(".workExp"); // Add this line
const ourPortfolioSection = document.querySelector(".ourPort"); // Add this line

toggleButton.addEventListener("click", function () {
    // Toggle dark mode class on the body
    body.classList.toggle("dark-mode");

    // Define a function to handle the styling of sections
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

    // Toggle styles for various sections
    toggleSectionStyles(navbar);
    toggleSectionStyles(mainSection);
    toggleSectionStyles(whoamiSection);
    toggleSectionStyles(whatIDoSection); // Apply dark/light mode to "What I Do" section
    toggleSectionStyles(workExpSection); // Apply dark/light mode to "Work Experience" section
    toggleSectionStyles(ourPortfolioSection); // Apply dark/light mode to "Our Portfolio" section
});
