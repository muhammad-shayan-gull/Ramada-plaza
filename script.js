


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



// Slider code 

(function(){
  const carousel = document.getElementById('carousel');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');

  let idx = 0;

  function createCard(id){
    const wrapper = document.createElement('div');
    wrapper.className = 'card card-item';
    wrapper.innerHTML = `
      <div class="card-inner">
        <div class="card-body">
         
          <button class="Card-button">Book Now</button>
        </div>
      </div>`;
    return wrapper;
  }

  // start with 8 cards
  for(let i=1;i<=8;i++){ carousel.appendChild(createCard(++idx)); }

  // drag with mouse/touch
  let isDown=false, startX, scrollLeft;
  carousel.addEventListener('pointerdown', (e)=>{
    isDown = true; carousel.classList.add('grabbing');
    startX = e.pageX; scrollLeft = carousel.scrollLeft;
    carousel.setPointerCapture(e.pointerId);
  });
  carousel.addEventListener('pointermove', (e)=>{
    if(!isDown) return;
    const walk = e.pageX - startX;
    carousel.scrollLeft = scrollLeft - walk;
  });
  function endDrag(){ isDown=false; carousel.classList.remove('grabbing'); }
  carousel.addEventListener('pointerup', endDrag);
  carousel.addEventListener('pointerleave', endDrag);

  // one-card-at-a-time movement (synced)
  function scrollToCard(index){
    const card = carousel.querySelector('.card-item');
    if(!card) return;
    const gap = parseInt(getComputedStyle(carousel).gap) || 16;
    const cardWidth = card.offsetWidth + gap;
    carousel.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  }

  function getCurrentIndex(){
    const card = carousel.querySelector('.card-item');
    if(!card) return 0;
    const gap = parseInt(getComputedStyle(carousel).gap) || 16;
    const cardWidth = card.offsetWidth + gap;
    return Math.round(carousel.scrollLeft / cardWidth);
  }

  nextBtn.addEventListener('click', ()=>{
    let index = getCurrentIndex();
    scrollToCard(index+1);
  });

  prevBtn.addEventListener('click', ()=>{
    let index = getCurrentIndex();
    scrollToCard(index-1);
  });

})();
