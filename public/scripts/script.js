document.addEventListener("DOMContentLoaded", function() {
  let slides = document.querySelectorAll(".slideshow-image");
  let index = 0;
  let interval = setInterval(showNextSlide, 5000);

  function showNextSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length; 
    slides[index].classList.add("active");
  }

  // Click event to switch manually and reset timer
  document.querySelector(".slideshow-container").addEventListener("click", function() {
    clearInterval(interval); // Stop auto-play
    showNextSlide(); // Manually switch
    interval = setInterval(showNextSlide, 5000); // Restart auto-play
  });
});

console.log("hello world");
