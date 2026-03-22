function showSection(id, event) {
  document
    .querySelectorAll(".section")
    .forEach((sec) => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document
    .querySelectorAll(".nav-btn")
    .forEach((btn) => btn.classList.remove("active"));
  if (event) {
    event.currentTarget.classList.add("active");
  }
}
