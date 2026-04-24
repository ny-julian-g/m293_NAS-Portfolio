document.addEventListener("DOMContentLoaded", () => {
  const filter = document.getElementById("projectFilter");
  const cards = document.querySelectorAll(".project-card");

  if (filter && cards.length > 0) {
    const applyProjectFilter = (selectedCategory) => {
      cards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    };

    filter.addEventListener("change", () => {
      applyProjectFilter(filter.value);
    });

    const categoryFromUrl = new URLSearchParams(window.location.search).get(
      "category"
    );

    if (
      categoryFromUrl &&
      Array.from(filter.options).some((option) => option.value === categoryFromUrl)
    ) {
      filter.value = categoryFromUrl;
      applyProjectFilter(categoryFromUrl);
    }
  }

  const openMailDraft = ({ subject, body, button }) => {
    const recipient = "kontakt@nas-portfolio.ch";
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    if (button) {
      button.dataset.originalLabel = button.textContent;
      button.textContent = "E-Mail wird vorbereitet...";
    }

    window.location.href = mailto;

    if (button) {
      window.setTimeout(() => {
        button.textContent = button.dataset.originalLabel || "Absenden";
      }, 1200);
    }
  };

  const newsletterForm = document.querySelector("[data-form='newsletter']");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = newsletterForm.querySelector("input[name='newsletter-email']");
      const button = newsletterForm.querySelector("button[type='submit']");

      openMailDraft({
        subject: "Newsletter-Anmeldung NAS Portfolio",
        body:
          "Hallo Team,\r\n\r\n" +
          "ich möchte mich für den Newsletter anmelden.\r\n\r\n" +
          `E-Mail: ${email ? email.value : ""}`,
        button,
      });
    });
  }

  const contactForm = document.querySelector("[data-form='contact']");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const button = contactForm.querySelector("button[type='submit']");

      openMailDraft({
        subject: `[${formData.get("subject")}] Anfrage über Kontaktformular`,
        body:
          "Hallo Team,\r\n\r\n" +
          `Name: ${formData.get("name") || ""}\r\n` +
          `E-Mail: ${formData.get("email") || ""}\r\n` +
          `Betreff: ${formData.get("subject") || ""}\r\n\r\n` +
          `${formData.get("message") || ""}`,
        button,
      });
    });
  }

  const consultationForms = document.querySelectorAll(
    "[data-form='consultation']"
  );

  consultationForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const button = form.querySelector("button[type='submit']");
      const projectName =
        form.dataset.project ||
        document.querySelector(".detail-project-title")?.textContent?.trim() ||
        "Projektanfrage";

      openMailDraft({
        subject: `Beratungstermin für ${projectName}`,
        body:
          "Hallo Team,\r\n\r\n" +
          `Ich möchte einen Beratungstermin anfragen für: ${projectName}\r\n\r\n` +
          `Name: ${formData.get("name") || ""}\r\n` +
          `E-Mail: ${formData.get("email") || ""}\r\n\r\n` +
          `Frage / Anliegen:\r\n${formData.get("message") || ""}`,
        button,
      });
    });
  });
});
