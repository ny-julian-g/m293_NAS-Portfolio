# m293_NAS-Portfolio_Dokumentation

## Vergleich ChatGPT vs Gemini
Folgend sind Kriterien und Vergleiche der "big 4" wenn es um LLMs im User bereich geht: OpenAI, Mistral, Google und Anthropic.
### Kriterien:
- Wurde das Problem gelösst? (Ja/Nein)
- Kompetenz der Lösung (wie gut wurde es gelösst)

## 1. Anwendung: Grundgerüst
Ich habe Gemini Fast und LeChat Mistral folgendes Skript und das Wireframe gegeben. 
### Skript
Erstelle die Website mit HTML, Inhaltlich soll es leer sein, nur das Gerüst. Nutze folgendes Wireframe als Vorlage. Darauf ist ein Layout für Smartphone, Tablet und Desktop. Kümmere dich dabei noch nicht um ein responsives Design, es soll jedoch später möglich sein, dieses Design responsiv zu machen. Nutze keine Frameworks! <br>
Folgendes [WireFrame](./WireFrame-NAS_Portfolio.drawio.pdf) als Anhang.

### Anwort Gemini
Antwort von [Gemini](./Prompts/Vergleich_1/Gemini.md)

### Anwort LeChat
Antwort von [LeChat-Mistral](./Prompts/Vergleich_1/LeChat.md)

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

Mitgegebener [Code](./Prompts/Vergleich_2/sampleCode.md)

### Anwort Gemini
Antwort von [Gemini](./Prompts/Vergleich_2/gemini.md)

### Antwort LeChat
LeChat antwortete mir mit: "Deine Eingabe ist zu lang"

### Antwort Claude
Anwort von [Claude](./Prompts/Vergleich_2/claude.md)

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

# 4. Verleich JS Filter-Logik
Bei diesem Vergleich geht es darum, wer mit JavaScript
eine bessere Filterlogik für die Website macht. 

Der Vergleich findet zwischen Gemini Thinking und Claude Sonnet 4.6 statt.

## Prompt
Folgend erhältst du eine Website, die eine Sammlung mehrerer Projekte beinhaltet. Wenn man alle Projekte ansehen will, soll es auch eine Filterfunktion geben. Implementiere diese Filterfunktion und nutze minimales JavaScript. Wichtig zu wissen ist, dass Project-1 eine von 10 Dateien ist, die alle gleich aufgebaut sind, nur mit anderem Inhalt

## Anworten
[Gemini](./Prompts/Vergleich_4/gemini.md)
[Claude](./Prompts/Vergleich_4/claude.md)

## Auswertung
Ich persönlich finde, Gemini hat hier besser geantwortet. Es hat das vorherige Design übernommen und sauberen code geschrieben.
Claude hat zwar einen schönneren Filter-Ansatz gehabt, jedoch nicht so, wie gewollt und mit unschönem CSS, was nicht gewollt war. Das CSS hatte wieder die !Important Tags. 
Beide funktionierten aufgrund der bisherig sauberen umsetzung des codes problemlos.