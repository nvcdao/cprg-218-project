const acc = document.querySelectorAll(".accordion");

acc.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");

    const panel = item.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});
