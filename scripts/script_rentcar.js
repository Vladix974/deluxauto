const gridView = document.getElementById("gridView");
const listView = document.getElementById("listView");

gridView.addEventListener("click", () => {
  gridView.classList.add("active");
  listView.classList.remove("active");
  // Add logic to switch to grid view
});

listView.addEventListener("click", () => {
  listView.classList.add("active");
  gridView.classList.remove("active");
  // Add logic to switch to list view
});
