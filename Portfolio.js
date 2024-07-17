const navLinkUl = document.querySelector(".nav-links");

// Smooth scrolling to the sections.........................
navLinkUl.addEventListener("click", function (e) {
  e.preventDefault();

  //console.log(e.target);

  const id = e.target.getAttribute("href");
  //console.log(id);

  // Checking the "target" element...
  if (e.target.classList.contains("nav-link")) {
    //console.log("link");

    // selecting element based on "id"...
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Dark and light mode functionality.........................
const lightIcon = document.querySelector(".dark-pic");

lightIcon.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    lightIcon.src = "./images/sun (4).png";
  } else {
    lightIcon.src = "./images/moon (4).png";
  }
});
