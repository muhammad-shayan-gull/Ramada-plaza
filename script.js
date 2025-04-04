


 // Get the button
 let backToTopButton = document.getElementById("backToTop");
  
 // Show the button when user scrolls down
 window.onscroll = function () {
   if (document.documentElement.scrollTop > 300) { // Adjust visibility threshold
     backToTopButton.style.display = "block";
   } else {
     backToTopButton.style.display = "none";
   }
 };

 // Scroll to top when button is clicked
 backToTopButton.addEventListener("click", function () {
   window.scrollTo({ top: 0, behavior: "smooth" });
 });



//  animation code

document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".a-left-item");

  const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              setTimeout(() => {
                  entry.target.classList.add("show");
              }, index * 200); // Adds a delay for staggered effect
          }
      });
  }, { threshold: 0.2 });

  boxes.forEach(box => observer.observe(box));
});



document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".a-right-item");

  const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              setTimeout(() => {
                  entry.target.classList.add("show");
              }, index * 200); // Adds a delay for staggered effect
          }
      });
  }, { threshold: 0.2 });

  boxes.forEach(box => observer.observe(box));
});



document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".a-up-item");

  const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              setTimeout(() => {
                  entry.target.classList.add("show");
              }, index * 200); // Adds a delay for staggered effect
          }
      });
  }, { threshold: 0.2 });

  boxes.forEach(box => observer.observe(box));
});



document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".a-show-item");

  const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              setTimeout(() => {
                  entry.target.classList.add("show");
              }, index * 200); // Adds a delay for staggered effect
          }
      });
  }, { threshold: 0.2 });

  boxes.forEach(box => observer.observe(box));
});



// cards code 
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  breakpoints: {
      640: {
          slidesPerView: 2,
      }
  }
});


