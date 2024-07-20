const navLinkUl = document.querySelector(".nav-links");
const imagesBox = document.querySelector(".images-box");
const sliderBtn = document.querySelectorAll(".slide-btn");

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

// Slide using "slide button" ................................
sliderBtn.forEach((button) => {
  button.addEventListener("click", function () {
    // Direction of sliding.....
    const slideDirection = button.id === "prev-btn" ? -1 : 1;

    // Sliding width......
    const slideWidth = (imagesBox.clientWidth + 10) * slideDirection;

    // Sliding......
    imagesBox.scrollBy({ left: slideWidth, behavior: "smooth" });
  });
});

// Contact form submission functionality...........................
const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});
