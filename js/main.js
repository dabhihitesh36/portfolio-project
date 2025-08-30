const projects = [
  {
    title: "Portfolio Project",
    description:
      "A responsive personal portfolio built from scratch using HTML, CSS, and vanilla JavaScript. Features a dynamic theme switcher and is populated by a JavaScript data structure.",
    imageUrl: "./images/portfolio-project-preview.jpg",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Guess My Number Game",
    description: `A simple JavaScript project that lets users play the classic "Guess My Number" game. The project is designed to showcase fundamental JavaScript concepts, providing a great starting point for beginners to explore and understand basic programming logic and interactivity on the web.`,

    imageUrl: "./images/project-1.png",
    liveUrl: "https://dabhisguessmynumber.netlify.app/",
    codeUrl: "https://github.com/dabhihitesh36/Guess-My-Number",
  },
  {
    title: "Pig-Game",
    description:
      "I developed this Pig-Game Project using html, css, javascript during javascript learning. In this project i learn lots of fundamentals of javascript like how to generate random number using Math.random() Method, if else conditional statements, and adding event on buttton onClick.",
    imageUrl: "./images/project-2.png",
    liveUrl: "https://dabhispiggame.netlify.app/",
    codeUrl: "https://github.com/dabhihitesh36/Pig-game",
  },
  {
    title: "Model-Window",
    description: "simple open and close model window.",
    imageUrl: "./images/project-3.png",
    liveUrl: "https://dabhismodelwindow.netlify.app/",
    codeUrl: "https://github.com/dabhihitesh36/Model-Window",
  },
  {
    title: "Spotify-Clone",
    description: "",
    imageUrl: "./images/project-4.jpg",
    liveUrl: "https://dabhisspotifyclone.netlify.app/",
    codeUrl: "https://github.com/dabhihitesh36/spotifyclone",
  },
  {
    title: "Second-Portfolio-Project",
    description: "",
    imageUrl: "./images/project-5.jpg",
    liveUrl: "https://dabhihitesh.prafulchauhan.com/",
    codeUrl: "https://github.com/dabhihitesh36/Portfolio",
  },
];

// const themeToggle = document.querySelector("#theme-toggle");
// const htmlElement = document.documentElement;
const projectsContainer = document.querySelector(".projects-container");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

const renderProjects = () => {
  let allProjectsHTML = "";

  projects.forEach((project) => {
    const projectCardHTML = `
      <div class="project-card">
        <div class="project-image-container">
            <img 
              src="${project.imageUrl}" 
              alt="Screenshot of the ${project.title} project" 
              class="project-image"
            >
        </div>
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-links">
            <a 
              href="${project.liveUrl}" 
              class="btn" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a 
              href="${project.codeUrl}" 
              class="btn btn-secondary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    `;

    allProjectsHTML += projectCardHTML;
  });

  projectsContainer.innerHTML = allProjectsHTML;
};

// renderProjects();

// themeToggle.addEventListener("click", () => {
//   const newTheme = themeToggle.checked ? "dark" : "light";
//   htmlElement.setAttribute("data-theme", newTheme);
//   localStorage.setItem("theme", newTheme);
// });

// (() => {
//   const savedTheme = localStorage.getItem("theme");

//   if (savedTheme) {
//     htmlElement.setAttribute("data-theme", savedTheme);

//     if (savedTheme === "dark") {
//       themeToggle.checked = true;
//     }
//   }
// })();

const themeToggleCheckbox = document.getElementById("toggle");
const htmlElement = document.documentElement; // <html> element

themeToggleCheckbox.addEventListener("change", () => {
  const newTheme = themeToggleCheckbox.checked ? "dark" : "light";
  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// Immediately check saved theme on page load
(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    htmlElement.setAttribute("data-theme", savedTheme);

    if (savedTheme === "dark") {
      themeToggleCheckbox.checked = true;
    }
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const submitButton = contactForm.querySelector('button[type="submit"]');

      formStatus.innerHTML = "Sending...";
      formStatus.className = "info";
      formStatus.style.display = "block";
      submitButton.disabled = true;

      fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            formStatus.innerHTML = "Thank you! Your message has been sent.";
            formStatus.className = "success";
            contactForm.reset();
          } else {
            response.json().then((data) => {
              if (Object.hasOwn(data, "errors")) {
                formStatus.innerHTML = data["errors"]
                  .map((error) => error["message"])
                  .join(", ");
              } else {
                formStatus.innerHTML =
                  "Oops! Something went wrong. Please try again later.";
              }
              formStatus.className = "error";
            });
          }
        })
        .catch((error) => {
          formStatus.innerHTML =
            "Oops! A network error occurred. Please check your connection and try again.";
          formStatus.className = "error";
        })
        .finally(() => {
          submitButton.disabled = false;
        });
    });
  }
});
