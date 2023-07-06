// Smooth scroll effect for navigation links
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("nav ul li a");

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
      const targetId = links[i].getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        event.preventDefault();

        const offsetTop = targetElement.offsetTop;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    });
  }
});

// Get the dismiss button element
var dismissButton = document.getElementById('dismissButton');

// Add event listener to dismiss button
dismissButton.addEventListener('click', function() {
  var overlay = document.querySelector('.overlay');
  overlay.style.display = 'none';
});
