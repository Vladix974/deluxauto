const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const signInButton = document.getElementById("signInButton");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Add event listener for the Sign In button
signInButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Here you can add your login validation logic
  // If login is successful, apply fade-out effect and redirect
  container.classList.add("fade-out"); // Add fade-out class

  // Wait for the fade-out transition to complete before redirecting
  setTimeout(() => {
    window.location.href = "index.html"; // Redirect to index page
  }, 100); // Match this duration with the CSS transition duration
});
