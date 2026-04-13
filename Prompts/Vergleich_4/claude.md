Hier ist die `projekte.html` mit vollständig implementierter Filterfunktion. Die wesentlichen Punkte:

**Filterlogik** — Die bestehende `<select>`-Lösung wurde durch klickbare Pill-Buttons ersetzt. Jeder Button trägt ein `data-filter`-Attribut, das mit dem `data-category` der Projektkarten verglichen wird. Das Aus- und Einblenden läuft ausschliesslich über eine CSS-Klasse (`.hidden`), nicht über Inline-Styles.

**Minimales JavaScript** — Das gesamte Script ist ~20 Zeilen, in einem IIFE gekapselt (keine globalen Variablen) und besteht aus drei Teilen:
1. Zähler-Badges befüllen (`(3)` neben jedem Button)
2. `applyFilter()` – toggelt `.hidden` auf jeder Karte und zeigt eine Leer-Meldung wenn nötig
3. Klick-Handler auf alle Buttons

**CSS-Ergänzungen** — direkt im `<style>`-Block der Datei, kein Eingriff in `style.css` nötig. Inklusive kleiner Einblendeanimation via `@keyframes`.

Das HTML:

<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NAS Portfolio – Projekte</title>
    <link rel="stylesheet" href="style.css" />
    <style>
      /* ── Filter Bar ── */
      .filter-bar {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 28px;
        align-items: center;
      }

      .filter-btn {
        padding: 8px 20px;
        border: 1px solid white;
        background: transparent;
        color: white;
        border-radius: 20px;
        cursor: pointer;
        font-size: 0.875rem;
        letter-spacing: 0.03em;
        transition: background 0.2s, color 0.2s;
        white-space: nowrap;
      }

      .filter-btn:hover {
        background: rgba(255, 255, 255, 0.12);
      }

      .filter-btn.active {
        background: white;
        color: black;
        font-weight: 600;
      }

      .filter-btn .count {
        font-size: 0.75rem;
        opacity: 0.65;
        margin-left: 4px;
      }

      /* Gefilterte Karten ausblenden */
      .project-card.hidden {
        display: none !important;
      }

      /* Einblendeanimation */
      .project-card {
        animation: cardIn 0.2s ease both;
      }

      @keyframes cardIn {
        from { opacity: 0; transform: translateY(5px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      /* Leer-Zustand */
      .no-results {
        display: none;
        width: 100%;
        padding: 48px 0;
        text-align: center;
        color: rgba(255, 255, 255, 0.4);
        font-size: 0.95rem;
      }
    </style>
  </head>
  <body>
    <div class="container container--no-sidebar">
      <header class="header">
        <nav class="breadcrumb">
          <a href="index.html" class="breadcrumb-link">Home</a>
        </nav>
        <div class="box header-title">Titel</div>
      </header>

      <main class="main-content">

        <!-- Filter-Buttons -->
        <div class="filter-bar" role="group" aria-label="Kategorie filtern">
          <button class="filter-btn active" data-filter="all">Alle <span class="count"></span></button>
          <button class="filter-btn" data-filter="Setup">Setup <span class="count"></span></button>
          <button class="filter-btn" data-filter="Sicherheit">Sicherheit <span class="count"></span></button>
          <button class="filter-btn" data-filter="Netzwerk">Netzwerk <span class="count"></span></button>
          <button class="filter-btn" data-filter="Software">Software <span class="count"></span></button>
        </div>

        <!-- Projektraster -->
        <section class="projects-grid projects-grid--large" id="projectGrid">
          <a href="/Detailed_Projects/Project-1.html"  class="project-card" data-category="Setup">
            <div class="project-img">Hardware-Auswahl</div>
            <div class="project-info">Die Grundlage für dein NAS</div>
          </a>
          <a href="/Detailed_Projects/Project-2.html"  class="project-card" data-category="Setup">
            <div class="project-img">Ubuntu Server</div>
            <div class="project-info">Installation &amp; Basis</div>
          </a>
          <a href="/Detailed_Projects/Project-3.html"  class="project-card" data-category="Sicherheit">
            <div class="project-img">SSH &amp; Security</div>
            <div class="project-info">Sicherer Fernzugriff</div>
          </a>
          <a href="/Detailed_Projects/Project-4.html"  class="project-card" data-category="Setup">
            <div class="project-img">ZFS &amp; RAID</div>
            <div class="project-info">Datensicherheit auf Disks</div>
          </a>
          <a href="/Detailed_Projects/Project-5.html"  class="project-card" data-category="Sicherheit">
            <div class="project-img">Benutzerrechte</div>
            <div class="project-info">ACLs &amp; Freigaben</div>
          </a>
          <a href="/Detailed_Projects/Project-6.html"  class="project-card" data-category="Netzwerk">
            <div class="project-img">Samba/NFS</div>
            <div class="project-info">Netzwerk-Freigaben</div>
          </a>
          <a href="/Detailed_Projects/Project-7.html"  class="project-card" data-category="Netzwerk">
            <div class="project-img">VPN (Tailscale)</div>
            <div class="project-info">Sicher von unterwegs</div>
          </a>
          <a href="/Detailed_Projects/Project-8.html"  class="project-card" data-category="Sicherheit">
            <div class="project-img">Backup-Strategie</div>
            <div class="project-info">3-2-1 Regel umsetzen</div>
          </a>
          <a href="/Detailed_Projects/Project-9.html"  class="project-card" data-category="Software">
            <div class="project-img">Docker &amp; Dienste</div>
            <div class="project-info">Plex, Nextcloud &amp; Co.</div>
          </a>
          <a href="/Detailed_Projects/Project-10.html" class="project-card" data-category="Netzwerk">
            <div class="project-img">Monitoring</div>
            <div class="project-info">Systemzustand im Blick</div>
          </a>

          <p class="no-results" id="noResults">Keine Projekte in dieser Kategorie.</p>
        </section>

      </main>

      <footer class="footer">
        <div class="box">Footer mit Kontakt</div>
      </footer>
    </div>

    <script>
      (() => {
        const buttons = document.querySelectorAll('.filter-btn');
        const cards   = document.querySelectorAll('.project-card');
        const noRes   = document.getElementById('noResults');

        // Anzahl pro Kategorie in die Badges schreiben
        buttons.forEach(btn => {
          const cat   = btn.dataset.filter;
          const count = cat === 'all'
            ? cards.length
            : [...cards].filter(c => c.dataset.category === cat).length;
          btn.querySelector('.count').textContent = `(${count})`;
        });

        // Filter anwenden
        function applyFilter(selected) {
          let visible = 0;
          cards.forEach(card => {
            const show = selected === 'all' || card.dataset.category === selected;
            card.classList.toggle('hidden', !show);
            if (show) visible++;
          });
          noRes.style.display = visible === 0 ? 'block' : 'none';
        }

        // Klick-Handler
        buttons.forEach(btn => {
          btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilter(btn.dataset.filter);
          });
        });
      })();
    </script>
  </body>
</html>
