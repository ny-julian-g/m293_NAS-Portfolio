### Antwort Claude
Ich analysiere das Wireframe aus dem PDF. Ich sehe 3 zusätzliche Seiten:
1. **Projekte** – Grid mit Filter-Dropdown, Projektkarten (IMG + Projekt-Teil), Aside
2. **Projekt-Detail** – Breadcrumb (Home > Titel), großes Bild/Film, Beschreibung, Kontaktformular-Link
3. **Kontakt** – Teambild, "Kontaktiere uns!", Kontaktformular, Team-Sektion

Ich baue auf dem bestehenden Code auf und erstelle alle drei Seiten plus ein aktualisiertes CSS.Hier sind alle 5 Dateien – du ersetzt deine bisherigen Dateien damit vollständig.

**Was wurde erstellt:**

**`projekte.html`** – Breadcrumb (Home), Filter-Dropdown, 6 Projektkarten im Grid (IMG + Projekt-Teil), kein Sidebar, Footer.

**`projekt-detail.html`** – Breadcrumb (Home › Projekte), großes Bild/Film-Feld links, rechts Projekttitel + Beschreibung + Link zum Kontaktformular, Footer.

**`kontakt.html`** – Teambild + "Kontaktiere uns!"-Headline nebeneinander, Kontaktformular (Name, E-Mail, Nachricht, Absenden), Team-Grid, Footer.

**`style.css`** – Erweitert um alle neuen Klassen. Die `.container--no-sidebar`-Klasse sorgt dafür, dass die neuen Seiten ohne Sidebar-Spalte layouten, während die Home-Seite unverändert bleibt.

**`index.html`** – Leicht aktualisiert: Links zu den anderen Seiten (Kategorieübersicht → Projekte, Projektkarten → Detail, Kontakt im Footer).
