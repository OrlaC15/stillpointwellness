async function loadSection(id, file) {
  const element = document.getElementById(id);

  if (!element) return;

  try {
    const response = await fetch(`sections/${file}`);

    if (!response.ok) {
      throw new Error(`Could not load ${file}`);
    }

    element.innerHTML = await response.text();

  } catch (error) {
    console.error(error);
  }
}


// ── NAVIGATION ─────────────────────────────────────

function initNavigation() {

  // Mobile hamburger
  const hamburger = document.querySelector(".nav__hamburger");
  const navLinks = document.querySelector(".nav__links");

  if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {

      const isOpen =
        hamburger.getAttribute("aria-expanded") === "true";

      hamburger.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );

      navLinks.classList.toggle("is-open", !isOpen);
    });
  }


  // Services dropdown
  const dropdownToggle =
    document.querySelector(".nav__dropdown-toggle");

  const dropdown =
    document.querySelector(".nav__dropdown");

  if (dropdownToggle && dropdown) {

    dropdownToggle.addEventListener("click", (event) => {

      event.stopPropagation();

      const isOpen =
        dropdownToggle.getAttribute("aria-expanded") === "true";

      dropdownToggle.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );

      dropdown.classList.toggle(
        "is-open",
        !isOpen
      );
    });


    // Close dropdown when clicking elsewhere
    document.addEventListener("click", () => {

      dropdownToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      dropdown.classList.remove("is-open");

    });
  }
}


// ── LOAD PAGE SECTIONS ──────────────────────────────

async function init() {

  // Load header first
  await loadSection("header", "header.html");

  // Load the rest
  await Promise.all([
    loadSection("hero", "hero.html"),
    loadSection("about", "about.html"),
    loadSection("quote", "quote.html")
    loadSection("services", "services.html"),
    loadSection("contact", "contact.html"),
    loadSection("footer", "footer.html")
  ]);

  // Header now exists, so initialise its buttons
  initNavigation();
}

init();