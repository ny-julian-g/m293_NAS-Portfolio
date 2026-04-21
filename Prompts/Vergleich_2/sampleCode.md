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