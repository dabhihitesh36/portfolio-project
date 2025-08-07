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
    description:
      "A concept design and front-end implementation for an e-commerce platform. Focused on a clean UI, responsive product grids, and a streamlined checkout process using modern CSS techniques.",
    imageUrl: "./images/project-1.png",
    liveUrl: "https://dabhisguessmynumber.netlify.app/",
    codeUrl: "https://github.com/dabhihitesh36/Guess-My-Number",
  },
  {
    title: "Pig-Game",
    description:
      "A client-side task management application built with vanilla JavaScript. Allows users to add, edit, delete, and mark tasks as complete, with all data saved to localStorage.",
    imageUrl: "./images/project-2.png",
    liveUrl: "https://dabhispiggame.netlify.app/",
    codeUrl: "https://github.com/dabhihitesh36/Pig-game",
  },
  {
    title: "Model-Window",
    description:
      "A client-side task management application built with vanilla JavaScript. Allows users to add, edit, delete, and mark tasks as complete, with all data saved to localStorage.",
    imageUrl: "./images/project-3.png",
    liveUrl: "https://dabhismodelwindow.netlify.app/",
    codeUrl: "https://github.com/dabhihitesh36/Model-Window",
  },
  {
    title: "Spotify-Clone",
    description:
      "A client-side task management application built with vanilla JavaScript. Allows users to add, edit, delete, and mark tasks as complete, with all data saved to localStorage.",
    imageUrl: "./images/project-4.jpg",
    liveUrl: "https://dabhisspotifyclone.netlify.app/",
    codeUrl: "https://github.com/dabhihitesh36/spotifyclone",
  },
  {
    title: "Second-Portfolio-Project",
    description:
      "A client-side task management application built with vanilla JavaScript. Allows users to add, edit, delete, and mark tasks as complete, with all data saved to localStorage.",
    imageUrl: "./images/project-5.jpg",
    liveUrl: "https://dabhihitesh.prafulchauhan.com/",
    codeUrl: "https://github.com/dabhihitesh36/Portfolio",
  },
];

const themeToggle = document.querySelector("#theme-toggle");
const htmlElement = document.documentElement;
const projectsContainer = document.querySelector(".projects-container");

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

themeToggle.addEventListener("click", () => {
  const newTheme = themeToggle.checked ? "dark" : "light";
  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    htmlElement.setAttribute("data-theme", savedTheme);

    if (savedTheme === "dark") {
      themeToggle.checked = true;
    }
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
});
