document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const body = document.body;
    const whoami = document.querySelector(".whoami");
    const main = document.querySelector("main");
    const watIDo = document.querySelector(".watIDo");
    const workExp = document.querySelector(".workExp");
    const ourPort = document.querySelector(".ourPort");

    // Define themes
    const lightTheme = {
        backgroundColor: "#ffffff",
        textColor: "#000000",
    };

    const darkTheme = {
        backgroundColor: "#0f0f0f",
        textColor: "#ffffff",
    };

    // Variable to track the current theme
    let currentTheme = lightTheme; // Start with the light theme

    // Function to toggle themes
    function toggleTheme() {
        // Check the current theme and toggle to the opposite theme
        if (currentTheme === lightTheme) {
            currentTheme = darkTheme;
        } else {
            currentTheme = lightTheme;
        }

        // Apply the new theme to various elements
        body.style.backgroundColor = currentTheme.backgroundColor;
        body.style.color = currentTheme.textColor;

        if (whoami) {
            whoami.style.backgroundColor = currentTheme.backgroundColor;
            whoami.style.color = currentTheme.textColor;
        }

        if (main) {
            main.style.backgroundColor = currentTheme.backgroundColor;
            main.style.color = currentTheme.textColor;
        }

        if (watIDo) {
            watIDo.style.backgroundColor = currentTheme.backgroundColor;
            watIDo.style.color = currentTheme.textColor;
        }

        if (workExp) {
            workExp.style.backgroundColor = currentTheme.backgroundColor;
            workExp.style.color = currentTheme.textColor;
        }

        if (ourPort) {
            ourPort.style.backgroundColor = currentTheme.backgroundColor;
            ourPort.style.color = currentTheme.textColor;
        }
    }

    toggleButton.addEventListener("click", toggleTheme);
});









function changeImage(imageSource) {
    const imageElement = document.getElementById('myImage');
    imageElement.style.opacity = '0';
    setTimeout(function () {
        imageElement.src = imageSource;
        imageElement.style.opacity = '1';
    }, 500);
}

// const observer1 = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const progress = entry.target.querySelector('.progress');
//             const percentage = parseInt(entry.target.nextElementSibling.textContent);
//             progress.style.width = percentage + '%';
//         }
//     });
// }, {
//     threshold: 0.5
// });

// barss.forEach(bar => {
//     observer1.observe(bar);
// });



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
