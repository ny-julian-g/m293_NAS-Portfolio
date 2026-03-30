# m293_NAS-Portfolio_Dokumentation

## Vergleich ChatGPT vs Gemini
Folgend sind Kriterien und Vergleiche der LLMs ChatGPT und Gemini
### Kriterien:
- Wurde das Problem gelösst? (Ja/Nein)
- Kompetenz der Lösung (wie gut wurde es gelösst)

## 1. Anwendung: Grundgerüst
Ich habe Gemini Fast und LeChat Mistral folgendes Skript und das Wireframe gegeben. 
### Skript
Erstelle die Website mit HTML, Inhaltlich soll es leer sein, nur das Gerüst. Nutze folgendes Wireframe als Vorlage. Darauf ist ein Layout für Smartphone, Tablet und Desktop. Kümmere dich dabei noch nicht um ein responsives Design, es soll jedoch später möglich sein, dieses Design responsiv zu machen. Nutze keine Frameworks! <br>
Folgendes [WireFrame](./WireFrame-NAS_Portfolio.drawio.pdf) als Anhang.

### Antwort Gemini
Das ist ein sehr sauberer Wireframe! Ich habe dir ein Grundgerüst erstellt, das die Struktur (Mobile, Tablet, Desktop) originalgetreu abbildet.

Um die Umsetzung später so einfach wie möglich für das **responsive Design** zu machen, verwende ich **CSS Grid** und **Flexbox**. So musst du später nur die Media-Queries hinzufügen, um zwischen den Layouts zu wechseln.

### HTML-Struktur (`index.html`)
Ich habe semantische HTML5-Tags (`header`, `main`, `aside`, `footer`) verwendet, da dies der Standard für modernes Webdesign ist.

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NAS Website Wireframe</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <header class="header">
            <div class="box">Titel</div>
        </header>

        <main class="main-content">
            
            <section class="hero-section">
                <div class="main-image-box">IMG / Video</div>
                
                <div class="content-text">
                    <h2>Was ist ein NAS?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <div class="category-link">Kategorieübersicht</div>
                </div>
            </section>

            <section class="projects-grid">
                <div class="project-box">IMG (Projekt)</div>
                <div class="project-box">IMG (Projekt)</div>
                <div class="project-box">IMG (Projekt)</div>
            </section>

        </main>

        <aside class="sidebar">
            <div class="aside-box">
                Aside / Newsletter Abo
            </div>
        </aside>

        <footer class="footer">
            <div class="box">Footer mit Kontakt</div>
        </footer>
    </div>

</body>
</html>
```

---

### CSS-Styling (`style.css`)
Damit das Layout wie in deinem Wireframe aussieht (schwarzer Hintergrund, weiße Rahmen), habe ich die entsprechenden Styles definiert. Die Abstände sind so gewählt, dass sie dem Desktop-Layout entsprechen.

```css
/* Grund-Einstellungen */
body {
    background-color: #121212;
    color: white;
    font-family: sans-serif;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    /* Vorbereitung für Desktop-Layout */
    grid-template-columns: 1fr 300px; 
    grid-template-areas: 
        "header header"
        "main sidebar"
        "footer footer";
    gap: 20px;
}

/* Platzhalter Box-Styling */
.box, .main-image-box, .project-box, .aside-box {
    border: 2px solid #ffffff;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

/* Bereiche zuweisen */
.header { grid-area: header; }
.main-content { grid-area: main; }
.sidebar { grid-area: sidebar; }
.footer { grid-area: footer; }

/* Hero-Bereich (Bild links, Text rechts) */
.hero-section {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.main-image-box {
    flex: 2;
    height: 350px;
}

.content-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* Projekt-Raster unten */
.projects-grid {
    display: flex;
    gap: 20px;
}

.project-box {
    flex: 1;
    height: 150px;
}

/* Sidebar Höhe anpassen */
.sidebar .aside-box {
    height: 100%;
    min-height: 500px;
}

.footer .box {
    height: 60px;
}
```

### Wie es weitergeht:
* **Für Tablet/Mobile:** Da wir CSS Grid (`grid-template-areas`) und Flexbox nutzen, kannst du später einfach per Media-Query die `flex-direction` auf `column` stellen oder die Spaltenbreite im Grid auf `1fr` ändern.
* **Inhalt:** Du kannst jetzt die Platzhalter-Texte durch echte Inhalte ersetzen.

Soll ich dir zeigen, wie man die erste Media-Query für die Smartphone-Ansicht hinzufügt, oder möchtest du erst einmal die Desktop-Struktur verfeinern?

![Antwort_Grundgeruest_Gemini](image.png)

### Antwort LeChat

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NAS - Network Attached Storage</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #121212;
            color: #ffffff;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        header {
            background-color: #1e1e1e;
            padding: 20px 0;
            text-align: center;
        }
        nav {
            display: flex;
            justify-content: center;
            background-color: #333;
            padding: 10px;
        }
        nav a {
            color: #fff;
            text-decoration: none;
            padding: 10px 20px;
        }
        .hero {
            text-align: center;
            padding: 50px 0;
            background-color: #1e1e1e;
            margin: 20px 0;
        }
        .hero img {
            max-width: 100%;
            height: auto;
        }
        .content-section {
            display: flex;
            margin: 20px 0;
            background-color: #1e1e1e;
            padding: 20px;
        }
        .content-section .text-content {
            flex: 2;
            padding: 20px;
        }
        .content-section .aside {
            flex: 1;
            background-color: #333;
            padding: 20px;
        }
        .projects {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin: 20px 0;
        }
        .project-card {
            flex: 1;
            margin: 10px;
            background-color: #333;
            padding: 20px;
            min-width: 200px;
        }
        footer {
            background-color: #000;
            text-align: center;
            padding: 20px 0;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>NAS - Network Attached Storage</h1>
        </div>
    </header>
    <nav>
        <a href="#">Home</a>
    </nav>
    <div class="container">
        <section class="hero">
            <h2>Titel</h2>
            <img src="placeholder.jpg" alt="Hero Image">
        </section>
        <section class="content-section">
            <div class="text-content">
                <h2>Was ist ein NAS?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h3>Kategorieübersicht</h3>
            </div>
            <aside class="aside">
                <h3>Aside</h3>
                <p>Newsletter Abo</p>
            </aside>
        </section>
        <section class="projects">
            <div class="project-card">
                <h3>Ein paar einzelne Projekte</h3>
                <img src="placeholder.jpg" alt="Project Image">
            </div>
            <div class="project-card">
                <img src="placeholder.jpg" alt="Project Image">
            </div>
            <div class="project-card">
                <img src="placeholder.jpg" alt="Project Image">
            </div>
        </section>
    </div>
    <footer>
        <div class="container">
            <p>Footer mit Kontakt</p>
        </div>
    </footer>
</body>
</html>



Das HTML-Gerüst für deine NAS-Website ist fertig! Es basiert auf dem Wireframe und enthält alle notwendigen Abschnitte: Header, Hero-Bereich, Hauptinhalt, Projekte und Footer. Die Platzhalter für Bilder und Texte sind bereits eingebaut, sodass du später einfach Inhalte hinzufügen kannst. Möchtest du noch Anpassungen am Layout oder an den Styles vornehmen?

### Auswertung
Auswertung & VergleichBeim Vergleich der beiden KIs sind mir folgende Punkte aufgefallen:

**Benutzerfreundlichkeit:** LeChat bietet eine direkte Preview, was Zeit spart. Gemini trennt HTML und CSS strikt, was für den modularen Aufbau meiner Website sauberer ist.

**Layout-Treue:** Gemini liegt deutlich näher an meinem Wireframe. Der aside-Bereich wurde korrekt rechts neben dem Content platziert, während LeChat den aside eher einfach unter den Textblock geschoben hat.

**Technische Mängel:** Gemini hat einen kleinen Bug im CSS – die Sidebar und der Footer überlappen sich leicht, weil die Grid-Reihen nicht strikt genug definiert wurden. Das muss ich manuell korrigieren. LeChat ist fehlerfrei, aber eben auch viel simpler aufgebaut.

**Fazit:** Der Punkt geht an Gemini. Obwohl ich den CSS-Fehler fixen muss, bietet mir die Grid-Struktur eine viel bessere Basis für die geforderte responsive Umsetzung auf Smartphone und Tablet.

**Lerneffekt:** Ich habe gemerkt, dass KIs bei komplexeren Wireframes mit CSS Grid (Gemini) präziser arbeiten als mit einfachem Flexbox-Stacking (LeChat), auch wenn man kleine Bugs im Code selbst finden und korrigieren muss.

## 2. Andwendung: Alle Seiten erstellen und verlinken
Mit Gemini Thinking und LeChat Mistral, respektive Claude Sonnet 4.6, da LeChat nicht mehr mitmachte.

### Skript:
*Anhang:* *Wireframe aller Seiten*
Ich habe bereits die Seite für das Home erstellt. Erstelle mir die restlichen Seiten nach anhängendem Wireframe. Nutze kein Template und baue auf mitgegebenen Code auf. 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NAS Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <header class="header">
            <div class="box">Titel</div>
        </header>

        <main class="main-content">
            <section class="hero-section">
                <div class="main-image-box">IMG / Video</div>
                
                <div class="content-text">
                    <h2>Was ist ein NAS?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                    <div class="category-link">Kategorieübersicht</div>
                </div>
            </section>

            <section class="projects-grid">
                <div class="project-box">Projekt 1</div>
                <div class="project-box">Projekt 2</div>
                <div class="project-box">Projekt 3</div>
            </section>
        </main>

        <aside class="sidebar">
            <div class="aside-box">
                <h3>Aside</h3>
                <p>Newsletter Abo</p>
            </div>
        </aside>

        <footer class="footer">
            <div class="box">Footer mit Kontakt</div>
        </footer>
    </div>

</body>
</html>

/* Grund-Einstellungen (Styleguide-Basis) */
body {
    background-color: #121212;
    color: white;
    font-family: sans-serif; /* Hier später dein System-Font-Stack */
    margin: 0;
    padding: 10px;
}

.container {
    display: grid;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
    /* Fix für Überlappung: Zeilen definieren (Header, Content, Footer) */
    grid-template-rows: auto 1fr auto;
}

/* Box-Design aus deinem Wireframe */
.box, .main-image-box, .project-box, .aside-box {
    border: 2px solid #ffffff;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

/* --- DESKTOP LAYOUT (Standard) --- */
@media (min-width: 1025px) {
    .container {
        grid-template-columns: 1fr 300px;
        grid-template-areas: 
            "header header"
            "main sidebar"
            "footer footer";
    }
    .hero-section {
        display: flex;
        gap: 20px;
    }
    .main-image-box { flex: 2; height: 350px; }
    .content-text { flex: 1; text-align: left; align-items: flex-start; }
    .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
}

/* --- TABLET LAYOUT (iPad & Co.) --- */
@media (min-width: 601px) and (max-width: 1024px) {
    .container {
        grid-template-columns: 1fr; /* Alles untereinander: Header, Main, Sidebar, Footer */
        grid-template-areas: 
            "header"
            "main"
            "sidebar"
            "footer";
    }

    /* Oben: Bild neben Text (wie Desktop) */
    .hero-section {
        display: flex; 
        flex-direction: row; /* Side-by-Side */
        gap: 20px;
        margin-bottom: 30px;
    }
    
    .main-image-box {
        flex: 1; /* Bild nimmt Platz ein */
        height: 300px;
    }

    .content-text {
        flex: 1; /* Text daneben */
        text-align: left;
    }

    /* Unten: Projekte untereinander (wie Smartphone) */
    .projects-grid {
        display: grid;
        grid-template-columns: 1fr; /* Nur ein Projekt pro Zeile */
        gap: 20px;
    }

    .project-box {
        height: 200px;
    }

    .sidebar .aside-box {
        min-height: 150px;
        margin-top: 20px;
    }
}

/* --- SMARTPHONE LAYOUT --- */
@media (max-width: 600px) {
    .container {
        grid-template-columns: 1fr;
        grid-template-areas: 
            "header"
            "main"
            "sidebar"
            "footer";
    }
    .hero-section, .projects-grid {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .main-image-box { height: 200px; }
    .project-box { height: 150px; }
}

/* Zuweisung der Bereiche */
.header { grid-area: header; }
.main-content { grid-area: main; }
.sidebar { grid-area: sidebar; }
.footer { grid-area: footer; }

### Antwort Gemini: 
Das ist ein hervorragendes Fundament. Dein CSS nutzt bereits ein sauberes Grid-System, das wir für die anderen Seiten übernehmen und leicht anpassen können.

Hier sind die drei weiteren Seiten (**Projekte**, **Projekt-Detail** und **Kontakt**), basierend auf deinem Wireframe und Code-Stil.

### 1. Ergänzung zum CSS (`style.css`)
Damit die Formulare und die Navigation auf allen Seiten einheitlich aussehen, füge diese Regeln zu deinem bestehenden CSS hinzu:

```css
/* Ergänzungen für Navigation und Formulare */
.nav-link {
    color: white;
    text-decoration: none;
    font-weight: bold;
    border: 1px solid white;
    padding: 5px 10px;
    border-radius: 5px;
}

.nav-link:hover {
    background-color: white;
    color: #121212;
}

.filter-select, .form-input, .form-textarea {
    width: 100%;
    background: transparent;
    border: 2px solid white;
    color: white;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    font-family: inherit;
}

.submit-btn {
    background: white;
    color: #121212;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 10px;
}

.team-section {
    margin-top: 20px;
    display: grid;
    gap: 15px;
}
```

---

### 2. Projekt-Übersicht (`projekte.html`)
Diese Seite nutzt den Filter im `aside`-Bereich (wie auf Seite 4 des Wireframes angedeutet).

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projekte - NAS Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header class="header">
            <div class="box" style="flex-direction: row; justify-content: space-between; width: 100%;">
                <a href="index.html" class="nav-link">Home</a>
                <span>Titel / Projekte</span>
            </div>
        </header>

        <main class="main-content">
            <section class="projects-grid">
                <div class="project-box"><div class="img-placeholder">IMG</div> Projekt-Teil 1</div>
                <div class="project-box"><div class="img-placeholder">IMG</div> Projekt-Teil 2</div>
                <div class="project-box"><div class="img-placeholder">IMG</div> Projekt-Teil 3</div>
                <div class="project-box"><div class="img-placeholder">IMG</div> Projekt-Teil 4</div>
                <div class="project-box"><div class="img-placeholder">IMG</div> Projekt-Teil 5</div>
                <div class="project-box"><div class="img-placeholder">IMG</div> Projekt-Teil 6</div>
            </section>
        </main>

        <aside class="sidebar">
            <div class="aside-box">
                <h3>Filter</h3>
                <select class="filter-select">
                    <option>Alle Kategorien</option>
                    <option>Kategorie 1</option>
                    <option>Kategorie 2</option>
                </select>
            </div>
        </aside>

        <footer class="footer">
            <div class="box">Footer mit Kontakt</div>
        </footer>
    </div>
</body>
</html>
```

---

### 3. Projekt-Detailseite (`projekt-detail.html`)
Fokussiert auf die Darstellung eines einzelnen Elements (Wireframe Seite 6).

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projekt Detail - NAS Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header class="header">
            <div class="box" style="flex-direction: row; justify-content: space-between; width: 100%;">
                <a href="index.html" class="nav-link">Home</a>
                <span>Projekt-Detail</span>
            </div>
        </header>

        <main class="main-content">
            <section class="hero-section" style="flex-direction: column;">
                <div class="main-image-box" style="width: 100%; height: 400px;">Bild / Film</div>
                <div class="content-text" style="margin-top: 20px;">
                    <h2>Projekt Titel</h2>
                    <h3>Beschreibung</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="kontakt.html" class="nav-link" style="display: inline-block; margin-top: 20px;">Link zu Kontakt</a>
                </div>
            </section>
        </main>

        <footer class="footer">
            <div class="box">Footer mit Kontakt</div>
        </footer>
    </div>
</body>
</html>
```

---

### 4. Kontaktseite (`kontakt.html`)
Inklusive Team-Bereich und Formular (Wireframe Seite 7).

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kontakt - NAS Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header class="header">
            <div class="box" style="flex-direction: row; justify-content: space-between; width: 100%;">
                <a href="index.html" class="nav-link">Home</a>
                <span>Kontakt</span>
            </div>
        </header>

        <main class="main-content">
            <div class="main-image-box" style="width: 100%; height: 250px; margin-bottom: 20px;">Bild von Team</div>
            
            <section class="box">
                <h2>Kontaktiere uns!</h2>
                <form style="width: 100%; max-width: 500px;">
                    <input type="text" class="form-input" placeholder="Dein Name">
                    <input type="email" class="form-input" placeholder="Deine E-Mail">
                    <textarea class="form-textarea" rows="5" placeholder="Deine Nachricht"></textarea>
                    <button type="submit" class="submit-btn">Absenden</button>
                </form>
            </section>

            <section class="team-section">
                <div class="box">
                    <h3>Das Team</h3>
                    <p>(darunter das Team)</p>
                </div>
            </section>
        </main>

        <footer class="footer">
            <div class="box">Footer</div>
        </footer>
    </div>
</body>
</html>
```

### Was wurde umgesetzt?
* **Struktur:** Alle Seiten nutzen die `container` Klasse mit dem von dir definierten Grid.
* **Responsive Verhalten:** Da die Klassen `hero-section` und `projects-grid` wiederverwendet werden, greifen deine Media Queries automatisch auch auf den neuen Seiten.
* **Wireframe-Treue:** Die Platzierung der Bilder, Titel und Formularfelder entspricht exakt den Skizzen (z.B. der Team-Teil unter dem Anmeldeformular).

Soll ich dir zeigen, wie du die Projekt-Boxen mit echten Bildern oder einem Hover-Effekt (z.B. Zoom) noch dynamischer gestalten kannst?

### Antwort LeChat
LeChat antwortete mir mit: "Deine Eingabe ist zu lang"

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



### Fazit
Hier gibt es einen klaren Sieger. Claude hat es deutlich schöner gemacht und organisierter. Es hatte so gut wie keine Macken. Bei Gemini hat es bei meinem Layout, welches ungewöhnlich ist, es nicht geschaft, es zu verhindern, dass die Seite auf der X-Achse bündig ist und man sie nicht verschieben muss.  Die Links waren auch nicht erkennbar oder konnten von der Home-Seite nicht erreicht werden.

Responsiv war es sowohl bei Gemini als auch bei Claude. Bilder werde ich hier nicht zeigen, da es zu viele wären


# 3. Vergleich CSS Styling
Hierbei habe ich beiden den Styleguide und das jetztige CSS gegebnen, um es anzupassen

Es wurden wieder Gemini Fast mit Claude Sonnet 4.6 verglichen.

## Der Skript:
Passe das CSS so an, dass es dem Styleguide entspricht. Erstelle ebenfalls ein CSS File für die einzelnen Detailseiten:

Styleguide: [Styleguide]

CSS: [Zurzeitiges CSS File]

## Antwort von Gemini:
Ich schreibe Antworten aus Platzgründen nicht mehr hin, dafür ein Beispielresultat der Beiden Modellen.
## Antwort Claude
Ich schreibe Antworten aus Platzgründen nicht mehr hin, dafür ein Beispielresultat der Beiden Modellen.
## Vergleich:
Als Vergleichsbild wurde die Home-Seite verwendet.

### Beispiel von Gemini:
![Gemini CSS](/Zusätze/Images/Design_Gemini.png)
### Beispiel von Claude:
![Claude CSS](/Zusätze/Images/Design_Claude.png)

Im 3. Battle lagen die Modelle optisch nah beieinander. Gemini punktete durch Geschwindigkeit, während Claude im Detail (besonders bei den Abständen und der Typografie auf den Detailseiten) harmonischer wirkte.

Ein technischer Minuspunkt für Claude: Die KI verwendete den !important-Tag, um Style-Konflikte zwischen den beiden CSS-Dateien zu lösen. Dies ist zwar funktional, gilt aber als Bad Practice, da es die Wartbarkeit des Codes erschwert (Stichwort: CSS-Spezifität). Gemini löste dies sauberer über die Struktur, auch wenn das Design initial etwas simpler wirkte. Dennoch gewinnt Claude in der Kategorie 'Design-Ästhetik', da das Endergebnis ohne manuelle Nachbesserung moderner aussah.