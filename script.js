      document.addEventListener("DOMContentLoaded", () => {
        const filter = document.getElementById("projectFilter");
        const cards = document.querySelectorAll(".project-card");

        filter.addEventListener("change", () => {
          const selectedCategory = filter.value;

          cards.forEach((card) => {
            const cardCategory = card.getAttribute("data-category");

            // Zeige Karte, wenn 'all' gewählt ist oder die Kategorie übereinstimmt
            if (
              selectedCategory === "all" ||
              cardCategory === selectedCategory
            ) {
              card.style.display = "flex";
            } else {
              card.style.display = "none";
            }
          });
        });
      });