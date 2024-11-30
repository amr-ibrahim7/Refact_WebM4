document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("backToTop");
  const contactForm = document.getElementById("contactForm");

  // Back to Top functionality
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.remove("d-none");
    } else {
      backToTopButton.classList.add("d-none");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Simple form submission handler (client-side only)
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  });
});
