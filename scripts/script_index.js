document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  // Add a slight delay to allow the CSS to apply
  setTimeout(() => {
    body.classList.add("fade-in-active");
  }, 10); // A small delay to ensure the fade-in effect is visible
});
