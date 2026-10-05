const dropdownToggle = document.querySelector(".nav__dropdown-toggle");
const dropdown = document.querySelector(".nav__dropdown");

if (dropdownToggle && dropdown) {
  dropdownToggle.addEventListener("click", (event) => {
    event.stopPropagation();

    const isOpen = dropdownToggle.getAttribute("aria-expanded") === "true";

    dropdownToggle.setAttribute("aria-expanded", String(!isOpen));
    dropdown.classList.toggle("is-open", !isOpen);
  });

  document.addEventListener("click", () => {
    dropdownToggle.setAttribute("aria-expanded", "false");
    dropdown.classList.remove("is-open");
  });
}