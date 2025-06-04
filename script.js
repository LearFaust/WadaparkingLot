const navLinks = document.querySelectorAll(".nav-link");
const contentSections = document.querySelectorAll(".content-section");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Close menu on mobile when a link is clicked
    document.querySelector('.nav-links').classList.remove('show');

    const targetId = link.getAttribute("href").replace("#", "") + "-section";

    contentSections.forEach(section => {
      section.classList.remove("active");
      if (section.id === targetId) {
        section.classList.add("active");
      }
    });

    navLinks.forEach(nav => nav.classList.remove("active"));
    link.classList.add("active");
  });
});

const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinksContainer.classList.toggle('show');
});



