const acc = document.querySelectorAll(".accordion");

acc.forEach((item) => {
  item.addEventListener("click", () => {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    item.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    const panel = item.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});
