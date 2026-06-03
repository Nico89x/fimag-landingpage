const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav]");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const cookie = document.querySelector("[data-cookie]");
const cookieAccept = document.querySelector("[data-cookie-accept]");

if (cookie && cookieAccept && localStorage.getItem("fimagCookieOk") !== "1") {
  cookie.classList.add("is-visible");
  cookieAccept.addEventListener("click", () => {
    localStorage.setItem("fimagCookieOk", "1");
    cookie.classList.remove("is-visible");
  });
}

const form = document.querySelector("[data-lead-form]");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const lines = [
      "Guten Tag FIMAG-Team,",
      "",
      "ich interessiere mich für ein kostenloses Angebot.",
      "",
      `Vorname: ${data.get("Vorname") || ""}`,
      `Nachname: ${data.get("Nachname") || ""}`,
      `Telefon: ${data.get("Telefon") || ""}`,
      `E-Mail: ${data.get("E-Mail") || ""}`,
      `Ort: ${data.get("Ort") || ""}`,
      "",
      "Nachricht:",
      `${data.get("Nachricht") || ""}`,
      "",
      "Freundliche Grüße"
    ];

    const subject = encodeURIComponent("Kostenloses Angebot anfordern");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:kontakt@fimag-malerbetrieb.de?subject=${subject}&body=${body}`;
  });
}
