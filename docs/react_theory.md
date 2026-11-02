# 02 Frontend, UI/UX & React

## Lernziele

Nach diesem Abschnitt kannst du

- grundlegende UI/UX-Prinzipien auf eine Webanwendung anwenden,
- eine React-Anwendung starten und ihre Projektstruktur erklären,
- Benutzeroberflächen in wiederverwendbare Components aufteilen,
- Daten und Inhalte mit Props an Components übergeben,
- lokalen und gemeinsamen State gezielt einsetzen,
- auf Benutzeraktionen mit Events reagieren,
- Listen mit eindeutigen Schlüsseln darstellen,
- Formulare kontrolliert erfassen und Eingaben validieren,
- die Hooks `useState` und `useEffect` grundlegend einsetzen,
- Loading-, Success-, Empty- und Error-Zustände umsetzen,
- mit React Router zwischen Ansichten navigieren,
- Anforderungen als User Stories und Akzeptanzkriterien formulieren,
- Features in umsetzbare Issues und Tasks zerlegen,
- Änderungen mit ESLint und einem Formatter prüfen und
- ein Feature über Branch, Pull Request und Review in das Projekt integrieren.

Die kurzen Beispiele in den Erklärungen verwenden unterschiedliche Anwendungssituationen. Du sollst die Beispiele im Sinne von Prototypen oder der Einarbeitung in die Technologie bzw. Konzepte der Technologie in einer gesonderten Anwendung gleichfalls erstellen. In den **Arbeitsaufträgen** überträgst du das jeweils neue Konzept angeleitet in die TodoApp. So lernst du das React-Konzept zunächst unabhängig vom Projekt kennen und wendest es anschließend in einem zusammenhängenden Produkt an.

---

## 0. Wochenplan und Übungen

Der Block umfasst ungefähr sieben Unterrichtswochen. Die Reihenfolge ist kumulativ: Die Übungen erweitern schrittweise dieselbe TodoApp.

| Woche | Schwerpunkt | Ergebnis / Übung |
| ---: | --- | --- |
| **1** | UI/UX, Projektstart, JSX und erste Components | Workshop-Beispiel analysieren; TodoApp-Wireframe skizzieren; GitHub Project einrichten; initiale Feature-Issues anlegen; Prozessdokumente beginnen; Vite-Projekt starten |
| **2** | Components, JSX und Props | zuerst statische Komponenten erstellen, danach Props und children sowie Conditional Rendering ergänzen; das Muster auf `TodoItem` und `TodoList` übertragen |
| **3** | State, Events, Listen und Filter | State und Events üben; danach Todo-Status ändern, Status- und Textfilter sowie Fälligkeitssortierung umsetzen |
| **4** | Formulare und Validierung | Formulare mit kontrollierten Feldern üben; danach Todo erstellen/bearbeiten und Titel sowie Fälligkeit validieren |
| **5** | Hooks und Datenzustände | Daten mit `useEffect` von `json-server` laden; anschließend die Todo-Datenquelle umstellen und Loading, Empty und Error übertragen |
| **6** | Routing und Codequalität | Routen umsetzen; danach Todo-Ansichten routen; ESLint/Oxlint und Formatter nutzen |
| **7** | Styling in React | verschiedene CSS-Integrationsmethoden kennenlernen; danach die TodoApp mit CSS Modules und CSS-Variablen gestalten |

### Laufende Teamroutine

Zu Beginn einer Arbeitsphase:

1. Board prüfen und ein **Ready**-Issue auswählen.
2. Akzeptanzkriterien, Zuständigkeit und Tasks klären.
3. Branch erstellen und Issue auf **In Progress** setzen.

Zum Ende einer Arbeitsphase:

1. Ergebnis lokal prüfen und Lint/Build ausführen.
2. Commit und Push erstellen; bei fertiger Umsetzung PR eröffnen.
3. Review durchführen und Board nach dem Merge aktualisieren.

---

## 1. Ziel: TodoApp v1

Im Projekt **TodoApp** entsteht schrittweise eine webbasierte Aufgabenverwaltung. Zunächst entwickeln wir ein React-Frontend mit Mock-Daten in einer JSON-Datei, die direkt in die Anwendung importiert wird. Die Aufgaben werden am Beginn nur im React-State bearbeitet.

| Entwicklungsstufe | Projektstand | Datenzugriff | Umfang |
| --- | --- | --- | --- |
| **TodoApp v0** | Projektauftrag und initiales Backlog | Noch kein Frontend | Anforderungen und geplante Funktionen festlegen |
| **TodoApp v1 – Einstieg** | React-Frontend | Importierte JSON-Datei; Änderungen nur im React-State | Aufgaben anzeigen, erstellen, bearbeiten, löschen, erledigen, filtern und sortieren |
| **TodoApp v1 – nach `useEffect`** | React-Frontend mit lokaler Mock-API | `json-server` über HTTP | Dieselben Funktionen schrittweise auf HTTP-Aufrufe umstellen |

Die importierte JSON-Datei dient anfangs nur als Ausgangszustand: Änderungen am React-State schreiben nicht in die Datei zurück. Später übernimmt `json-server` die Rolle einer lokalen Mock-API. Er ist kein selbst entwickeltes Backend und keine produktive Datenbank. Eine REST-WebAPI und eine echte Datenbank folgen in späteren Projektblöcken.

### Merke

> **Frontend** bezeichnet den Teil einer Anwendung, mit dem Benutzer:innen direkt interagieren.
>
> **React** ist eine JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen. Eine React-Anwendung wird aus Components zusammengesetzt.
>
> **Mock-Daten** sind Beispieldaten, die eine spätere Datenquelle vorläufig ersetzen. Sie können zunächst aus einer importierten JSON-Datei stammen und später von einem Mockserver über HTTP bereitgestellt werden.

### Todo-Datenmodell

Alle Todo-Ansichten und -Funktionen verwenden dasselbe Datenmodell:

| Feld | Typ | Regel |
| --- | --- | --- |
| `id` | Zahl | Pflichtfeld; eindeutig; wird beim Anlegen von der Anwendung vergeben und nicht im Formular eingegeben; später vergibt `json-server` die ID |
| `title` | Text | Pflichtfeld; darf nach dem Entfernen von Leerzeichen nicht leer sein |
| `dueDate` | Datum als `YYYY-MM-DD` | Pflichtfeld; muss in der Zukunft liegen |
| `description` | Text | Optional |
| `done` | Boolean | Optional; Standardwert ist `false` |

Beispiel eines Todo-Datensatzes:

```json
{
    "id": 1,
    "title": "React-Grundlagen üben",
    "dueDate": "2026-10-15",
    "description": "Props und State wiederholen",
    "done": false
}
```

Beim Erstellen geben Benutzer:innen `title`, `dueDate` und optional `description` ein. Vor der Mock-API vergibt die React-Anwendung eine eindeutige `id`; nach dem Wechsel zu `json-server` vergibt der Mockserver sie. `done` wird zunächst auf `false` gesetzt. Beim Bearbeiten bleiben `id` und `done` erhalten, sofern der Status nicht ausdrücklich geändert wird.

### GitHub Project und Projektunterlagen

Das **GitHub Repository** enthält den versionierten Quellcode und die Projektdokumente. Ein **GitHub Project** organisiert Arbeit und Fortschritt: Es zeigt Issues, Zuständigkeiten und Status in Tabellen- oder Boardansichten. Ein Project ersetzt kein Repository und ist kein geeigneter Speicherort für lose Dateien.

Für TodoApp verwenden wir daher beides:

```text
GitHub Repository                  GitHub Project
Quellcode                          Issues und Arbeitspakete
docs/wireframes/                   Status, Priorität, Zuständigkeit
docs/prozesse/                     Board- und Tabellenansichten
README.md mit Dokumentlinks und    Verknüpfungen zu Issues/PRs
        Installationshinweisen
```

Wireframes und Prozessbeschreibungen werden als Dateien im Repository versioniert. Die dazugehörigen GitHub Project Items bzw. Issues enthalten Links auf diese Dokumente. So sind Unterlagen auffindbar, Änderungen nachvollziehbar und die Umsetzung mit den Anforderungen verbunden.

### ✏️ Arbeitsauftrag 1.1: GitHub Repository und Project einrichten

**Sozialform:** 2er-Team  
**Ziel:** Ihr richtet die gemeinsame Projektplanung ein und verbindet sie mit Repository und Projektdokumentation.

**Draft Issues:** Dieser Auftrag legt die Draft Issues **F01** bis **F07** an. Die Draft Issues werden in den Folgeaufträgen konkretisiert und vor der Umsetzung in reguläre Issues überführt.

**User Story:** Als TodoApp-Team möchte ich ein Project mit Issues und Statuswerten einrichten, damit Arbeit, Zuständigkeiten und Dokumente nachvollziehbar bleiben.

**Akzeptanzkriterien:** Board- und Tabellenansicht existieren. F01 bis F07 sowie `DOC-01`, `SETUP-01` und `SETUP-02` sind als Draft Issues mit Priorität, Status und Zuständigkeit angelegt. Die Ordner für Wireframes und Prozessdokumente sind vorbereitet; die konkreten Dokumente werden in den Folgeaufträgen erstellt und verlinkt.

**Technische Tasks:**

- [ ] Project und Ansichten erstellen
- [ ] Status- und Prioritätsfelder konfigurieren
- [ ] Feature-Issues F01 bis F07 als Draft Issues anlegen
- [ ] Draft Issues `DOC-01`, `SETUP-01` und `SETUP-02` anlegen
- [ ] Dokumentordner erstellen
- [ ] Links prüfen

**Testszenarien:** Prüfe F01 bis F07 im Backlog. Verschiebe ein Test-Issue durch die Statuswerte. Prüfe, ob die Project-Struktur und die Dokumentordner für die Folgeaufträge vorhanden sind.

**Arbeitsschritte:**

1. Erstellt oder öffnet das gemeinsame `TodoApp`-Repository und erstellt ein GitHub Project für **Todo v1**.
2. Erstellt eine Board- und Tabellenansicht mit **Backlog**, **Ready**, **In Progress**, **Review** und **Done**.
3. Legt F01 bis F07 sowie `DOC-01`, `SETUP-01` und `SETUP-02` als initiale Draft Issues an und weist Priorität sowie Zuständigkeit zu.
4. Erstellt die Ordner `docs/wireframes/` und `docs/prozesse/`.
5. Prüft gemeinsam, ob Anforderungen, Status, Zuständigkeit und Dokumentlinks auffindbar sind.

---

## 2. UI/UX: Eine verständliche Oberfläche gestalten

**UI** (User Interface) bezeichnet die sichtbare und bedienbare Benutzeroberfläche. **UX** (User Experience) beschreibt das Nutzungserlebnis: Finden Benutzer:innen die gewünschte Funktion? Verstehen sie Rückmeldungen? Können sie Fehler erkennen und korrigieren?

Betrachten wir als Beispiel eine **Anmeldung zu einem Workshop**. Benutzer:innen müssen den Workshop-Termin finden, freie Plätze erkennen und sich anmelden können. Dafür sind beispielsweise folgende Entscheidungen wichtig:

- Termine, Ort und verfügbare Plätze sind schnell erfassbar.
- Aktionen wie „Anmelden“ sind eindeutig benannt.
- Formulare besitzen sichtbare Beschriftungen und verständliche Fehlermeldungen.
- Ein ausgebuchter Workshop und ein Fehler sehen nicht wie ein verfügbarer Termin aus.
- Die Oberfläche ist mit Tastatur bedienbar; Fokus und interaktive Elemente sind erkennbar.
- Text und Bedienelemente besitzen ausreichenden Kontrast.
- Auf kleinen Bildschirmen bleiben Inhalte und Aktionen nutzbar.

Eine Oberfläche sollte nicht nur für den Erfolgsfall gestaltet werden. Zur Workshop-Anmeldung gehören beispielsweise auch **Loading** (Termine werden geladen), **Empty** (keine Termine verfügbar), **Error** (Termine können nicht geladen werden) und **Success** (Anmeldung ist erfolgt).

### ✏️ Arbeitsauftrag 2.1: TodoApp-Wireframe erstellen

**Sozialform:** Partnerarbeit  
**Ziel:** Du überträgst die UI/UX-Grundlagen in einen ersten Wireframe für die TodoApp.

**Zugehöriges Draft Issue:** `DOC-01 Wireframe und UI-Zustände dokumentieren`. Dieses Dokumentations-Issue wird aus dem Project-Backlog in ein reguläres Issue überführt.

**User Story:** Als TodoApp-Team möchte ich einen Wireframe erstellen, damit Aufbau und zentrale Bedienaktionen vor der Implementierung abgestimmt sind.

**Akzeptanzkriterien:** Der Wireframe zeigt Liste, Erstellen, Bearbeiten, Löschen, Erledigen, Filtern, Sortieren, Empty-State und Rückmeldung. Die Datei liegt versioniert unter `docs/wireframes/` und ist im Project verlinkt.

**Technische Tasks:**

- [ ] Wireframe erstellen
- [ ] Zustände und Aktionen einzeichnen
- [ ] Datei unter `docs/wireframes/` ablegen
- [ ] README und Project Item verlinken
- [ ] Partner-Review durchführen

**Testszenarien:** Prüfe den Wireframe gegen die fünf Mindestinhalte. Simuliere „Todo erstellen“ und einen Empty-State. Lass eine Partnerin oder einen Partner prüfen, ob alle Aktionen auffindbar sind.

**Arbeitsschritte:**

Skizziert auf Papier oder digital eine Aufgabenübersicht für die TodoApp. Die Skizze soll mindestens enthalten:

1. eine Überschrift und eine Aktion zum Erstellen einer Aufgabe,
2. eine Liste mit Titel, Beschreibung, Fälligkeit und Status,
3. Aktionen zum Erledigen, Bearbeiten und Löschen,
4. eine Auswahl zum Filtern und eine Auswahl zum Sortieren,
5. einen Zustand für eine leere Liste und eine Rückmeldung nach einer Aktion.

Prüft eure Skizze gegenseitig: Sind Beschriftungen eindeutig? Ist erkennbar, was beim Klick auf eine Aktion passiert? Ist die Ansicht auch ohne Maus bedienbar? Übertragt den Wireframe beim Einrichten eures Projektbereichs in das Repository und verlinkt ihn im GitHub Project.

---

## 3. React-Projekt anlegen

### React als Werkzeug für clientseitige Benutzeroberflächen

React als Werkzeug für clientseitige Benutzeroberflächen
Bei einer **serverseitig gerenderten Anwendung (SSR)** erzeugt der Server HTML für eine Anfrage und sendet die fertige Ansicht an den Browser. Bei **Client-Side Rendering (CSR)** führt der Browser JavaScript aus und erzeugt beziehungsweise aktualisiert damit Teile der Benutzeroberfläche.

Auch mit Vanilla JavaScript können interaktive Benutzeroberflächen entwickelt werden. Mit wachsendem Umfang müssen DOM-Änderungen, Zustände und Abhängigkeiten zwischen Teilen der Oberfläche jedoch zunehmend selbst organisiert werden. **React** unterstützt dafür einen komponentenorientierten und deklarativen Ansatz. Die Benutzeroberfläche wird in wiederverwendbare Components zerlegt. React ist eine Bibliothek für Benutzeroberflächen, kein vollständiges Webframework. Funktionen wie Routing werden beispielsweise durch zusätzliche Bibliotheken wie React Router ergänzt.

Statt einzelne DOM-Elemente manuell zu verändern, beschreibt eine Component anhand ihrer Props und ihres States, wie die Oberfläche aktuell aussehen soll. Ändert sich der State, berechnet React die betroffene Darstellung erneut und gleicht notwendige Änderungen mit dem Browser-DOM ab. React erzeugt intern eine Beschreibung der gewünschten Benutzeroberfläche. Bei Änderungen vergleicht React die vorherige und neue Darstellung und aktualisiert anschließend die erforderlichen Teile des DOM.

**Merke:**
> React ist **declarative**: Du beschreibst, wie die Oberfläche aussehen soll, und React kümmert sich um die Umsetzung.
>
> React ist **component-based**: Die Oberfläche wird in wiederverwendbare Bausteine zerlegt.

### React-Projekt mit Vite anlegen

Für neue Frontend-Projekte verwenden wir **Vite** als Entwicklungswerkzeug. Das Frontend wird im Unterordner `frontend/` des gemeinsamen `TodoApp`-Repositorys angelegt; erstellt dafür kein zweites, unabhängiges GitHub-Repository. So kann später im selben Repository beispielsweise auch ein Backend ergänzt werden.

Voraussetzung ist eine aktuelle Node.js-LTS-Version. Im Terminal kann ein React-Projekt mit folgendem Befehl erstellt werden:

```bash
npm create vite@latest frontend -- --template react
```

Wenn `npm` fragt, ob es das Paket `create-vite` installieren darf, bestätige die Installation. Der Befehl oben legt das React-Template bereits fest. Je nach Version kann der Generator zusätzlich nach Werkzeugen fragen. Werden **ESLint** und **Oxlint** angeboten, sind beide geeignete Linter: ESLint besitzt ein besonders breites und etabliertes Plugin-Ökosystem. Oxlint ist eine neuere, auf Geschwindigkeit ausgelegte Alternative und unterstützt viele ESLint-Regeln sowie React-Regeln, ist aber nicht in jeder Konfiguration ein vollständiger Ersatz für ESLint. Für ein neues Projekt könnt ihr Oxlint wählen, sofern keine bestimmte ESLint-Konfiguration benötigt wird. Entscheidend ist, dass das Team dasselbe Werkzeug verwendet.

Dokumentationen:

- [ESLint – Getting Started](https://eslint.org/docs/latest/use/getting-started)
- [Oxlint – User Guide](https://oxc.rs/docs/guide/usage/linter.html)

Ein **Linter** analysiert Quellcode statisch und weist auf mögliche Fehler, problematische Muster und Verstöße gegen vereinbarte Code-Regeln hin. Er führt die Anwendung aber nicht aus und ersetzt daher keine Tests. Prüfe in `package.json`, ob das Projekt ein Skript `lint` bereitstellt. Falls ja, startest du die Prüfung mit:

```bash
npm run lint
```

Vite zeigt im Terminal eine lokale Adresse an, üblicherweise `http://localhost:5173`. Öffne diese Adresse im Browser. Der Entwicklungsserver aktualisiert die Seite, wenn du Quellcode änderst.

Dabei werden folgende Dateien und Ordner angelegt:

```text
TodoApp/
├── README.md           Projektbeschreibung
├── frontend/           React-Anwendung
│   ├── .gitignore      ignorierte Dateien und Ordner
│   ├── .oxlintrc.json  OXLint-Konfiguration
│   ├── index.html      HTML-Einstiegspunkt
│   ├── package.json    Abhängigkeiten und Skripte
│   ├── package-lock.json festgelegte Paketversionen
│   ├── vite.config.js  Vite-Konfiguration
│   ├── node_modules/   Node Pakete -- werden nicht versioniert (siehe .gitignore)
│   ├── public/         statische Dateien
│   └── src/            Anwendungscode
│       ├── App.jsx     Komponente mit der zentralen Anwendung
│       └── main.jsx    React-Einstiegspunkt
└── ...                 spätere Projektteile, z. B. Backend
```

### Wichtige Projektdateien

**`package.json`** beschreibt das Node.js-Projekt. Darin stehen unter anderem der Projektname, die Abhängigkeiten und Skripte wie `npm run dev`, `npm run build` oder `npm run lint`. `npm install` installiert die dort eingetragenen Abhängigkeiten, das ist vor allem dann notwendig, wenn du ein Repository klonst, damit die node_modules, welche durch die .gitignore aus dem Projekt ausgeschlossen wurden, zur Verfügung stehen. Die Datei `package-lock.json` hält die konkret aufgelösten Paketversionen fest und wird gemeinsam mit dem Projekt versioniert.

**`vite.config.js`** enthält die Konfiguration für Vite. Für den Einstieg kann die Standardkonfiguration unverändert bleiben. Später können dort beispielsweise Plugins oder Einstellungen für den Entwicklungsserver ergänzt werden.

**`.gitignore`** legt fest, welche Dateien Git nicht versionieren soll. Typische Beispiele sind `node_modules/` und `dist/`: Sie werden lokal erzeugt und können aus den Projektdateien bzw. mit dem Build-Befehl wiederhergestellt werden. Die Dateien bleiben auf dem Computer; Git nimmt sie lediglich nicht in Commits auf. Quellcode, `package.json` und `package-lock.json` gehören dagegen ins Repository.

### Vom Entwicklungsserver zur React-Oberfläche

Der Befehl **`npm run dev`** wird wie folgt abgearbeitet: `npm` sucht in `package.json` unter `scripts` nach dem Eintrag `dev` und führt das dort konfigurierte Programm aus, bei einem Vite-Projekt typischerweise `vite`. Vite startet einen lokalen Entwicklungsserver und zeigt im Terminal eine Adresse an, zum Beispiel `http://localhost:5173`. Solange der Server läuft, kann der Browser die Anwendung von dieser Adresse laden. Beende den Server mit `Ctrl+C` im Terminal.

Beim Aufruf der Adresse läuft vereinfacht Folgendes ab:

```text
Browser lädt index.html
    ↓
index.html bindet src/main.jsx ein
    ↓
main.jsx erstellt den React-Einstiegspunkt und rendert <App />
    ↓
App.jsx beschreibt die Komponenten der Oberfläche
    ↓
React erzeugt und aktualisiert die sichtbaren DOM-Elemente
```

Die Dateien haben dabei unterschiedliche Aufgaben:

- **`index.html`** ist das HTML-Grundgerüst der Seite. Es enthält unter anderem ein Element wie `<div id="root"></div>` als Ziel für React und bindet `src/main.jsx` als JavaScript-Modul ein.
- **`main.jsx`** ist der Einstiegspunkt des React-Codes. Die Datei importiert üblicherweise `App.jsx` und CSS, sucht das `root`-Element und startet React, zum Beispiel mit `createRoot(...).render(<App />)`.
- **`App.jsx`** enthält die zentrale React-Component. Sie gibt JSX zurück und kann weitere Components zusammensetzen.

Der Browser kann JSX nicht direkt ausführen. Vite verarbeitet und transformiert JSX und die importierten Module während der Entwicklung zu JavaScript, das der Browser ausführen kann. Bei Änderungen am Quellcode aktualisiert Vite die betroffenen Module und lädt die Oberfläche in der Regel ohne vollständigen Seitenneustart neu. Die Haupt-Component kann `App.jsx` oder `App.js` heißen; wichtig ist, dass Importpfad und Dateiname übereinstimmen. Typischerweise werden Komponenten mit der Dateiendung `.jsx` gespeichert, um die Verwendung von JSX zu kennzeichnen.

Beispiel für die Verbindung der Dateien:

```html
<!-- index.html -->
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```

```jsx
// main.jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
```

```jsx
// App.jsx
function App() {
    return <h1>TodoApp</h1>;
}

export default App;
```

### Merke

> `package.json` beschreibt das Projekt und seine Abhängigkeiten.
>
> `vite.config.js` konfiguriert Vite.
>
> `.gitignore` sagt Git, welche Dateien nicht versioniert werden sollen. Sie löscht diese Dateien nicht.
>
> `index.html` ist das HTML-Grundgerüst und enthält das Element, in das React rendert.
>
> `main.jsx` startet React, verbindet die Anwendung mit diesem Element und rendert `<App />`.
>
> `App.jsx` ist die zentrale React-Component und setzt die sichtbare Oberfläche aus Components zusammen.

Der Ordner `node_modules/` wird nicht mit Git versioniert. Nach dem Klonen des Repositorys müssen deshalb die Abhängigkeiten lokal installiert werden, bevor du die Anwendung startest. Öffne dafür ein Terminal im Hauptordner des `TodoApp`-Repositorys und führe aus:

```bash
cd frontend
npm install
npm run dev
```

`cd frontend` wechselt in den Ordner der React-Anwendung. `npm install` liest `package.json` und `package-lock.json` und installiert die benötigten Pakete in `node_modules/`. Führe diesen Befehl nach dem Klonen und erneut aus, wenn sich die Abhängigkeiten ändern. `npm run dev` startet anschließend den Vite-Entwicklungsserver; die lokale Adresse wird im Terminal angezeigt. `npm run build` erstellt eine optimierte Version für die Veröffentlichung.

### ✏️ Arbeitsauftrag 3.1: React-Anwendung anlegen

**Sozialform:** Partnerarbeit  
**Ziel:** Einer von beiden Partnern erstellt die React-Anwendung im gemeinsamen `TodoApp`-Repository.

**Zugehöriges Draft Issue:** `SETUP-01 React-Projekt mit Vite einrichten`. Dieses Setup-Issue wird vor der Umsetzung in ein reguläres Issue überführt.

**User Story:** Als Entwickler:in möchte ich ein startbares Vite-React-Projekt im TodoApp-Repository anlegen, damit die Frontend-Entwicklung beginnen kann.

**Akzeptanzkriterien:** Das Projekt liegt in `frontend/`. `npm install`, `npm run dev` und `npm run build` funktionieren. Die Anwendung zeigt eine TodoApp-Überschrift.

**Technische Tasks:**

- [ ] Vite-Projekt erzeugen
- [ ] Abhängigkeiten installieren
- [ ] `main.jsx` und `App.jsx` anpassen
- [ ] Template-Reste entfernen
- [ ] Build prüfen und PR erstellen
- [ ] Pull Request erstellen und mergen

**Testszenarien:** Führe `npm install`, `npm run dev` und `npm run build` aus. Öffne die lokale Anwendung und prüfe die Überschrift.

**Arbeitsschritte:**

1. Öffne dein `TodoApp`-Repository.
2. Öffne ein Terminal im Repository-Hauptordner und führe den oben gezeigten Befehl `npm create vite@latest frontend -- --template react` aus.
3. Bestätige bei Bedarf die Installation von `create-vite` und wähle bei einer Linter-Abfrage ESLint oder Oxlint.
4. Wechsle in den Ordner `frontend/`, installiere gegebenenfalls die Abhängigkeiten mit `npm install` und starte Vite mit `npm run dev`.
5. Öffne die angezeigte Adresse im Browser und das Vite-Template zeigt sich.
6. Lösche die css-Dateien (index.css und App.css) und passe die Dateien `main.jsx` und `App.jsx` an, sodass die Anwendung eine sichtbare Überschrift anzeigt. Du kannst beispielsweise `<h1>TodoApp</h1>` in `App.jsx` einfügen.
7. Erstelle eine neuen Version (commit) und veröffentliche deinen Commit im remote Repository.
8. Erstelle einen Pull Request, lass ihn reviewen und in weiterer Folge mergen.

```jsx
// main.jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
```

```jsx
// App.jsx
function App() {
    return <h1>TodoApp</h1>;
}

export default App;
```

> **Achtung:** Wenn im Repository bereits ein `frontend/`-Ordner oder andere Projektdateien vorhanden sind, prüfe zuerst die bestehende Struktur. Überschreibe keine vorhandenen Dateien.

### ✏️ Arbeitsauftrag 3.2: Todo-Startdaten in der App anlegen

**Sozialform:** Partnerarbeit  
**Ziel:** Einer von euch beiden legt gültige Todo-Datensätze als importierbare JSON-Datei in der React-Anwendung an.

**Zugehöriges Draft Issue:** **F01 Aufgaben anzeigen**. Die Startdaten bilden die Grundlage für die Anzeige und werden vor der Umsetzung im F01-Issue konkretisiert.

**User Story:** Als Entwickler:in möchte ich gültige Startdaten importieren, damit die TodoApp ohne Backend mit Beispieldaten arbeiten kann.

**Akzeptanzkriterien:** `mockTodos.json` enthält ein Array mit mindestens drei eindeutigen IDs. Titel sind nicht leer und Fälligkeiten liegen in der Zukunft. Optionale Felder werden korrekt behandelt.

**Technische Tasks:**

- [ ] `src/data/mockTodos.json` erstellen
- [ ] Datensätze anlegen
- [ ] JSON und Datenregeln prüfen
- [ ] Datei importierbar machen
- [ ] PR reviewen

**Testszenarien:** Prüfe die Datei mit einem JSON-Parser und kontrolliere eindeutige IDs, nichtleere Titel und zukünftige Fälligkeiten. Prüfe anschließend, ob sich die Datei in der React-Anwendung ohne Fehler importieren lässt.

**Arbeitsschritte:**

1. Erstelle im React-Projekt den Ordner `src/data/`, falls er noch nicht vorhanden ist.
2. Lege darin die Datei `mockTodos.json` an. Sie soll direkt ein JSON-Array enthalten, nicht ein Objekt mit einer Eigenschaft `todos`.
3. Erstelle mindestens drei eigene Todo-Datensätze. Jeder Datensatz benötigt eine eindeutige `id`, einen nichtleeren `title` und ein `dueDate` nach dem heutigen Tag.
4. Ergänze `description` nach Bedarf. Wenn `done` fehlt, soll die Anwendung den Status als `false` behandeln.
5. Prüfe, dass die Datei gültiges JSON enthält und die IDs eindeutig sind. Verwende das folgende Beispiel als Orientierung und passe die Daten an.
6. Erstelle eine neue Version (commit) und veröffentliche deinen Commit im remote Repository.
7. Erstelle einen Pull Request, lass ihn reviewen und in weiterer Folge mergen.

```json
[
  {
    "id": 1,
    "title": "React-Grundlagen üben",
    "dueDate": "2026-10-15",
    "description": "Projekt mit mehreren Komponenten anlegen",
    "done": false
  },
  {
    "id": 2,
    "title": "Wireframe überprüfen",
    "dueDate": "2026-10-20",
    "done": false
  }
]
```

`description` und `done` dürfen in einem Datensatz fehlen. Für die Oberfläche behandelst du eine fehlende Beschreibung als leeren Text und ein fehlendes `done` als `false`. `id`, `title` und ein zukünftiges `dueDate` sind erforderlich.

Diese Datei exportiert direkt ein Array und kann daher direkt in React als `initialTodos` importiert werden. Erst für `json-server` wird das Array später in `mock-api/db.json` in die Eigenschaft `todos` eingeschlossen.

Im React-Projekt befinden sich folgende Dateien:

```text
frontend/
├── public/            statische Dateien
├── src/               Anwendungscode
│   └── data/
│   │       └── mockTodos.json  importierte Startdaten
│   ├── App.jsx        zentrale Anwendung
│   ├── main.jsx       Einstiegspunkt
├── package.json       Abhängigkeiten und Skripte
└── ...     
```

---

## 4. Components und JSX

React-Anwendungen werden aus **Components** aufgebaut. Eine Component ist ein eigenständiger, wiederverwendbarer Baustein der Benutzeroberfläche. Sie beschreibt einen Teil der Ansicht und kann weitere Components enthalten. In React werden Components meist als JavaScript-Funktionen geschrieben; ihr Name beginnt mit einem Großbuchstaben und sie müssen gültiges JSX zurückgeben.

**Exkurs: Function Components und ältere Class Components**
In diesem Lernblock verwenden wir Function Components. In älteren React-Projekten und älteren Tutorials können dir außerdem Class Components begegnen. Sie erfüllen grundsätzlich denselben Zweck, verwenden aber eine andere Syntax und ältere APIs für State und Lifecycle-Verhalten.
Für neuen Code konzentrieren wir uns auf Function Components und Hooks. Du solltest Class Components jedoch als ältere React-Schreibweise erkennen können.

### JSX und eine erste Komponente

**JSX** ist eine JavaScript-Syntax zur Beschreibung einer Benutzeroberfläche. Sie sieht HTML ähnlich, wird aber von Vite in JavaScript umgewandelt, das der Browser ausführen kann. JSX kann statische Inhalte mit JavaScript-Ausdrücken verbinden. Innerhalb von geschweiften Klammern { } kann ein JavaScript-Ausdruck ausgewertet und sein Ergebnis in die Oberfläche eingefügt werden.

```jsx
// CourseCard.jsx
function CourseCard() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("de-AT");

    return (
        <article>
            <h2>React for Beginners</h2>
            <p>Einführung in die Entwicklung mit React</p>
            <p>Stand: {formattedDate}</p>
        </article>
    );
}

export default CourseCard;
```

`formattedDate` ist eine JavaScript-Variable. Mit `{formattedDate}` wird ihr Wert in JSX ausgegeben. Auch einfache Berechnungen oder Funktionsaufrufe können als Ausdruck verwendet werden:

```jsx
<p>Gesamtdauer: {7 * 2} Stunden</p>
<p>Heute: {today.toLocaleDateString("de-AT")}</p>
```

In { } stehen **JavaScript-Ausdrücke**, die einen Wert ergeben. Kontrollstrukturen wie if oder for werden deshalb nicht direkt innerhalb der geschweiften Klammern geschrieben. Bedingungen und Listen behandeln wir später mit Conditional Rendering und map.

### Merke

> **JSX** verbindet die Beschreibung der Benutzeroberfläche mit JavaScript.
>
> **JavaScript-Ausdrücke** in { } können in JSX eingebettet werden.

Diese Komponente erhält noch keine Daten von außen. Titel und Beschreibung sind vorerst direkt in ihr festgelegt. Das ermöglicht uns, zunächst nur die Component selbst und ihre Wiederverwendung kennenzulernen.

### Components zusammensetzen

Eine Component kann innerhalb einer anderen Component verwendet werden. Die `CourseList` setzt drei Kurskarten zusammen. In diesem ersten Schritt zeigen die Karten absichtlich denselben Inhalt:

```jsx
// CourseList.jsx
import CourseCard from "./CourseCard.jsx";

function CourseList() {
    const courseCount = 3;

    return (
        <section>
            <p>Anzahl Kurse: {courseCount}</p>
            <ul>
                <li><CourseCard /></li>
                <li><CourseCard /></li>
                <li><CourseCard /></li>
            </ul>
        </section>
    );
}

export default CourseList;
```

```jsx
// CourseCatalogPage.jsx
import CourseList from "../components/CourseList.jsx";

function CourseCatalogPage() {
    return <CourseList />;
}

export default CourseCatalogPage;
```

Der Component-Baum sieht damit so aus:

```text
CourseCatalogPage
└── CourseList
    ├── CourseCard
    ├── CourseCard
    └── CourseCard
```

Wir haben hier **noch keine Props** verwendet. Die drei Karten sind identisch. Im nächsten Kapitel erhalten sie jeweils einen anderen Titel.

### Separation of Components

Components ermöglichen die **Separation of Components**: Wir teilen die Oberfläche in Bausteine mit klaren Aufgaben auf. `CourseCatalogPage` setzt die Seite zusammen, `CourseList` verantwortet die Liste und `CourseCard` die Darstellung eines einzelnen Kurses.

Das ist etwas anderes als **Separation of Technologies**, bei der Dateien nach HTML, CSS und JavaScript getrennt werden. Komponentenbasierte Entwicklung schafft fachliche bzw. funktionale Einheiten. HTML, CSS und JavaScript bleiben weiterhin Teil der Lösung; in React werden Struktur und Logik einer Component häufig gemeinsam in JSX und JavaScript beschrieben.

Die Aufteilung soll hilfreich und angemessen sein. Eine Komponente für jedes einzelne Textelement bringt meist keinen Vorteil. Eine **Komponente** ist sinnvoll, wenn sie eine **verständliche Verantwortung hat oder wiederverwendet werden kann**.

### Merke

> Eine **Komponente** ist ein wiederverwendbarer Baustein der Oberfläche.
>
> Components können weitere Components zusammensetzen.
>
> **Separation of Components** gliedert die Oberfläche nach Aufgaben und Verantwortlichkeiten; **Separation of Technologies** trennt nach HTML, CSS und JavaScript.

### ✏️ Arbeitsauftrag 4.1: TodoApp in Components aufteilen

**Sozialform:** Partnerarbeit  
**Ziel:** Du wendest die im Kurskarten-Beispiel gezeigte Component-Aufteilung auf die TodoApp an.

**Zugehöriges Draft Issue:** **F01 Aufgaben anzeigen**. Die Component-Struktur wird als technische Umsetzung von F01 im Issue ergänzt.

**User Story:** Als Entwickler:in möchte ich die TodoApp in `App`, `TodoList` und `TodoItem` aufteilen, damit jede Component eine klare Verantwortung besitzt.

**Akzeptanzkriterien:** Die drei Components existieren und werden verwendet. `TodoList` rendert mehrere `TodoItem`-Instanzen und die Anwendung zeigt mehrere Aufgaben.

**Technische Tasks:**

- [ ] `TodoItem.jsx` erstellen
- [ ] `TodoList.jsx` erstellen
- [ ] Components in `App.jsx` zusammensetzen
- [ ] Component-Baum dokumentieren
- [ ] Browserprüfung durchführen

**Testszenarien:** Prüfe, ob `App` die `TodoList` und diese mehrere `TodoItem`-Instanzen rendert.

**Arbeitsschritte:**

1. Erstelle `TodoItem.jsx` mit einer statischen Aufgabenkarte: Titel, Beschreibung, Fälligkeit und Status.
2. Erstelle `TodoList.jsx` und verwende darin dreimal `<TodoItem />`.
3. Rendere `TodoList` in `App.jsx`.
4. Prüfe im Browser, dass drei gleich aufgebaute Aufgabenkomponenten erscheinen.
5. Zeichne den Component-Baum und notiere die Verantwortung von `App`, `TodoList` und `TodoItem`.

---

## 5. Props: Daten an Components übergeben

Im vorherigen Kapitel haben drei `CourseCard`-Components denselben statischen Inhalt angezeigt. Damit jede Karte einen anderen Kurs darstellen kann, übergeben wir den Titel als **Prop**. Props sind Eingabewerte einer Component. Die übergeordnete Component entscheidet, welche Daten übergeben werden; die untergeordnete Component liest diese Daten und stellt sie dar.

### Inhalte mit Props übergeben

Ändere `CourseCard.jsx`, sodass die Component den Titel über die Prop `title` erhält:

```jsx
function CourseCard({ title }) {
    return (
        <article>
            <h2>{title}</h2>
            <p>Einführung in die Entwicklung mit React</p>
        </article>
    );
}

export default CourseCard;
```

Die übergeordnete Component kann jeder Karte einen anderen Titel übergeben:

```jsx
<CourseCard title="React for Beginners" />
<CourseCard title="React Components" />
<CourseCard title="Webdesign Grundlagen" />
```

### Inhalte mit `children` übergeben

Bisher wurden Daten über benannte Props wie title an eine Component übergeben. React stellt zusätzlich die besondere Prop children bereit. Sie enthält den Inhalt, der zwischen dem öffnenden und schließenden Tag einer Component steht.

Eine einfache InfoBox kann dadurch unterschiedliche Inhalte darstellen:

```jsx
function InfoBox({ children }) {
    return (
        <aside>
            {children}
        </aside>
    );
}

export default InfoBox;
```

Beim Verwenden der Component wird der Inhalt zwischen den Tags `<InfoBox>` und `</InfoBox>` automatisch als children übergeben:

```jsx
<InfoBox>
    <p>Für diesen Kurs sind noch Plätze verfügbar.</p>
</InfoBox>

<InfoBox>
    <p>Die Anmeldung endet am Freitag.</p>
</InfoBox>
```

Die InfoBox legt die gemeinsame Struktur fest, während die übergeordnete Component bestimmt, welchen Inhalt sie enthält. Über children können dabei nicht nur Texte, sondern auch JSX-Elemente oder weitere Components übergeben werden.

### Inhalte von Listen mit `map` übergeben

Für eine Liste speichern wir die Kurse in einem Array und erzeugen eine Karte pro Eintrag:

```jsx
const courses = [
    { id: 1, title: "React for Beginners", description: "Einführung in die Entwicklung mit React", teacher: "Max Mustermann" },
    { id: 2, title: "React Components", teacher: "Erika Musterfrau" },
    { id: 3, title: "Webdesign Grundlagen", description: "Grundlagen der Gestaltung von Webseiten", teacher: "Max Mustermann" },
];

function CourseList() {
    return (
        <section>
            <p>Anzahl Kurse: {courses.length}</p>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        <CourseCard title={course.title} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
```

`map` erzeugt hier für jeden Kurs ein Listenelement und übergibt den jeweiligen Titel als Prop an `CourseCard`. Das `key`-Attribut muss eine stabile, eindeutige Kennung sein, damit React Listenelemente bei Änderungen wiedererkennt. Verwendet wird dafür zumeist die ID des Elementes und nicht der Listenindex, da der Index bei Änderungen der Liste sich ändern kann.

Props fließen in eine Richtung: von der übergeordneten Component nach unten. Die empfangende Component soll Props nicht verändern. Soll sie eine Benutzeraktion melden, erhält sie stattdessen eine Callback-Funktion als Prop.

### Merke

> Props machen Components durch unterschiedliche Eingabedaten wiederverwendbar.
>
> Die übergeordnete Component übergibt Props; die untergeordnete Component liest und verwendet sie.
>
> Props werden nicht direkt verändert. Benutzeraktionen meldet eine Component über Callback-Props nach oben.
>
> `children` enthält den JSX-Inhalt zwischen dem öffnenden und schließenden Component-Tag. `children` eignet sich besonders für Components, die eine gemeinsame Struktur besitzen, aber unterschiedliche Inhalte aufnehmen sollen
>
> `map` erzeugt für jedes Element einer Liste ein JSX-Element. React benötigt ein `key`-Attribut, um Listenelemente bei Änderungen wiederzuerkennen.

### ✏️ Arbeitsauftrag 5.1: Props in der TodoApp verwenden

**Sozialform:** Partnerarbeit  
**Ziel:** Einer von euch beiden erweitert die statische Todo-Komponente mit Props damit diese für unterschiedliche Aufgaben wiederverwendbar ist.

**Zugehöriges Draft Issue:** **F01 Aufgaben anzeigen**. Props und Listendarstellung werden als Tasks im F01-Issue ergänzt.

**User Story:** Als Benutzer:in möchte ich unterschiedliche Todos in derselben Component-Struktur sehen, damit die Liste wiederverwendbar bleibt.

**Akzeptanzkriterien:** Titel, Beschreibung, Fälligkeit und Status werden aus Props dargestellt. Unterschiedliche Datensätze erscheinen korrekt.

**Technische Tasks:**

- [ ] Props in `TodoItem` definieren
- [ ] JSON-Daten in `TodoList` importieren
- [ ] Liste mit stabilem `key` erzeugen
- [ ] Statusdarstellung prüfen

**Testszenarien:** Rendere mindestens zwei unterschiedliche Todos und prüfe Titel, Beschreibung, Fälligkeit und Status.

**Arbeitsschritte:**

1. Ändere `TodoItem`, sodass Titel, Beschreibung, Fälligkeit und Status über Props übergeben werden.
2. Importiere `mockTodos.json` in `TodoList` und übergib für jedes Element die Todo-Daten an `TodoItem`.
3. Rendere den Titel, Beschreibung und die Fälligkeit jeder Aufgabe.
4. Prüfe, dass dieselbe `TodoItem`-Component unterschiedliche Datensätze korrekt darstellt.

### ✏️ Arbeitsauftrag 5.2: Todo-Bereiche mit `children` erstellen

**Sozialform:** Partnerarbeit  
**Ziel:** Einer von euch beiden verwendet `children`, um unterschiedliche Inhalte in derselben Container-Component darzustellen.

**Zugehöriges Draft Issue:** **F01 Aufgaben anzeigen**. Die Component-Struktur wird um einen wiederverwendbaren Bereich für Todo-Inhalte ergänzt.

**User Story:** Als Entwickler:in möchte ich unterschiedliche Bereiche der TodoApp mit derselben Component-Struktur darstellen, damit gemeinsame Strukturen wiederverwendbar bleiben.

**Akzeptanzkriterien:** Eine TodoSection-Component erhält eine Überschrift über die Prop `title` und den eigentlichen Inhalt über `children`. Die Component wird mindestens zweimal mit unterschiedlichen Inhalten verwendet. Die Inhalte sind nicht in TodoSection fest codiert.

**Technische Tasks:**

- [ ] `TodoSection.jsx` erstellen
- [ ] `title` als benannte Prop verwenden
- [ ] `children` innerhalb der Component rendern
- [ ] Component mit unterschiedlichen Inhalten verwenden
- [ ] Darstellung im Browser prüfen

**Testszenarien:** Verwende dieselbe TodoSection einmal mit der TodoList und einmal mit einem einfachen Hinweistext. Prüfe, dass jeweils Überschrift und übergebener Inhalt erscheinen.

**Arbeitsschritte:**

1. Erstelle die Component TodoSection.
2. Übergib die Überschrift über die benannte Prop `title`.
3. Übergib den eigentlichen Inhalt zwischen dem öffnenden und schließenden `<TodoSection>`-Tag.
4. Rendere diesen Inhalt in TodoSection über `children`.
5. Verwende die Component zunächst für die Aufgabenliste:

    ```jsx
    <TodoSection title="Meine Aufgaben">
        <TodoList />
    </TodoSection>
    ```

6. Verwende dieselbe Component anschließend mit einem anderen Inhalt:

    ```jsx
    <TodoSection title="Hinweis">
        <p>Plane zuerst die Aufgaben mit der höchsten Priorität.</p>
    </TodoSection>
    ```

7. Prüfe, dass TodoSection selbst weder TodoList noch den Hinweistext fest enthält.

### Conditional Rendering

**Conditional Rendering** bedeutet, dass React abhängig von einer Bedingung unterschiedliche Elemente rendert. So kann eine Component prüfen, ob Daten vorhanden sind, bevor sie die eigentliche Liste ausgibt.

Ist der Kurskatalog leer, geben wir einen Infotext zurück. Dadurch werden keine Listenelemente gerendert:

```jsx
function CourseList({ courses }) {
    if (courses.length === 0) {
        return <p>Derzeit sind keine Kurse verfügbar.</p>;
    }

    return (
        <ul>
            {courses.map((course) => (
                <li key={course.id}>
                    <CourseCard course={course} />
                </li>
            ))}
        </ul>
    );
}
```

Einzelne Elemente können mit dem logischen `&&` nur dann in JSX eingefügt werden, wenn der Wert vorhanden ist. Kurse können eine optionale Beschreibung besitzen. Fehlt sie oder ist sie leer, erscheint kein leerer Absatz:

```jsx
function CourseCard({ course }) {
    return (
        <article>
            <h2>{course.title}</h2>
            {course.description?.trim() && <p>{course.description}</p>}
            <p>Lehrperson: {course.teacher}</p>
        </article>
    );
}
```

### Merke

> `condition && <Element />` rendert das Element nur, wenn `condition` wahr ist.
>
> Für zwei alternative Inhalte kann auch ein ternärer Ausdruck verwendet werden: `condition ? <ElementA /> : <ElementB />`.

### ✏️ Arbeitsauftrag 5.3: Conditional Rendering in der TodoApp verwenden

**Sozialform:** Partnerarbeit  
**Ziel:** Du zeigst passende Inhalte abhängig davon an, ob Todos bzw. optionale Beschreibungen vorhanden sind.

**Zugehöriges Draft Issue:** **F01 Aufgaben anzeigen**. Empty-State und optionale Felder werden als Akzeptanzkriterien und Tasks in F01 ergänzt.

**User Story:** Als Benutzer:in möchte ich bei leeren oder unvollständigen Daten passende Hinweise sehen, damit die Oberfläche verständlich bleibt.

**Akzeptanzkriterien:** Eine leere Liste zeigt einen Empty-State ohne Items. Eine fehlende Beschreibung erzeugt keinen leeren Absatz. Offene und erledigte Todos werden unterschiedlich beschriftet.

**Technische Tasks:**

- [ ] Empty-State ergänzen
- [ ] Optionale Beschreibung bedingt rendern
- [ ] Statusausgabe ergänzen
- [ ] Leeres und vollständiges Array testen

**Testszenarien:** Übergib ein leeres Array. Teste ein Todo mit und eines ohne Beschreibung sowie beide Statuswerte.

**Arbeitsschritte:**

1. Passe `TodoList` an: Wenn `todos` leer ist, rendere einen verständlichen Infotext und keine Liste mit Items.
2. Lege im Test vorübergehend ein leeres Todo-Array an und prüfe, dass nur der Infotext erscheint.
3. Passe `TodoItem` an: Rendere den Absatz für `description` nur, wenn die Description vorhanden und nicht leer ist. Prüfe mindestens zwei Todos: eines mit Description und eines ohne. Beim Todo ohne Description darf kein leerer Absatz entstehen.
4. Prüfe danach wieder die vollständige Liste mit mehreren Todos.
5. Erledigt Items sollen mit **Erledigt** und offene Items mit **Offen** angezeigt werden. Prüfe, dass der Status korrekt angezeigt wird.

---

## 6. State und Events

### Warum braucht eine CSR-Anwendung State?

Bei **CSR** (*Client-Side Rendering*) wird die Benutzeroberfläche im Browser aufgebaut und aktualisiert. Der Browser führt den React-Code aus. Wenn Benutzer:innen mit der Oberfläche interagieren, muss die Anwendung deshalb festhalten, welche veränderlichen Daten gerade gelten, und die betroffenen UI-Elemente passend aktualisieren.

Im Kurskatalog ändern sich zum Beispiel der ausgewählte Kategorienfilter und der Merkliste-Status eines Kurses. Diese Werte gehören in den **State**. React-State ist dabei die aktuelle Datenquelle für die Anzeige: Wird State aktualisiert, rendert React die betroffenen Components erneut. Wir müssen nicht selbst HTML-Elemente im DOM suchen und von Hand ändern.

```text
Benutzeraktion -> Event -> State wird aktualisiert -> React rendert die Ansicht neu
```

Ohne State müssten wir die Oberfläche manuell verändern oder die ganze Seite neu laden, damit die Anzeige den neuen Zustand widerspiegelt. Beides erschwert eine interaktive Anwendung und kann dazu führen, dass Daten und sichtbare Oberfläche auseinanderlaufen.

State ist allerdings nur der aktuelle Zustand im laufenden Browser. `useState` speichert Daten nicht dauerhaft: Nach einem Neuladen der Seite beginnt die Anwendung wieder mit ihren Startdaten, solange sie nicht zusätzlich Daten aus einer Datei, einer API oder einem anderen Speicher lädt.

Ein **Hook** wie `useState` ist eine React-Funktion, mit der eine Function Component React-Funktionalität verwenden kann. Hooks werden auf oberster Ebene einer Component aufgerufen, nicht innerhalb von Bedingungen oder Schleifen. `useState` ist der erste Hook, den wir kennenlernen: Er verbindet eine Component mit einem veränderlichen State und löst nach einer State-Änderung einen neuen Renderdurchlauf aus.

### Props und State unterscheiden

Props und State beeinflussen beide, was eine Component darstellt. Sie haben jedoch unterschiedliche Aufgaben:

| Props | State |
| --- | --- |
| werden von einer übergeordneten Component übergeben | wird von einer Component verwaltet |
| sind Eingabewerte einer Component | beschreibt veränderliche Daten der Anwendung |
| werden von der empfangenden Component nicht verändert | wird über eine State-Funktion aktualisiert |
| ermöglichen die Wiederverwendung einer Component | ermöglicht interaktive Veränderungen |

Eine CourseCard erhält beispielsweise einen Kurs und eine Callback-Funktion über Props. Die Liste der Kurse kann dagegen State der übergeordneten CourseCatalogPage sein.

```text
CourseCatalogPage
│
│ State: courses
│
├── CourseCard
│   Props: course, onToggleFavorite
│
└── CourseCard
    Props: course, onToggleFavorite
```

Ändert eine CourseCard den Favoritenstatus, verändert sie die Prop nicht selbst. Sie meldet die Benutzeraktion über die Callback-Prop nach oben. Die übergeordnete Component aktualisiert den State und React rendert die betroffenen Components erneut.

### Merke

> **Props** kommen von außen in eine Component.
>
> **State** beschreibt veränderliche Daten, für die eine Component verantwortlich ist.

### State speichern

Daten, die sich während der Nutzung ändern, werden in React häufig als **State** verwaltet. Mit dem Hook `useState` erhält eine Component den aktuellen Wert und eine Funktion, mit der sie eine Änderung anfordert.

```jsx
import { useState } from "react";

function CourseInfo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
            >
                Details {isOpen ? "ausblenden" : "anzeigen"}
            </button>

            {isOpen && <p>Der Kurs umfasst 14 Unterrichtseinheiten.</p>}
        </>
    );
}
```

Im Beispiel wird der State `isOpen` mit dem Hook `useState` erzeugt. Der Startwert ist `false`. Beim Klick auf den Button wird die State-Funktion `setIsOpen` aufgerufen und der Wert umgekehrt. React rendert anschließend die Component erneut, sodass der Infotext angezeigt oder ausgeblendet wird.

Zusammengefasst kann man sich merken:

- **isOpen** = aktueller State
- **setIsOpen** = Funktion zum Anfordern einer Änderung
- **false** = Startwert

**State** kann natürlich auch Arrays und Objekte enthalten. Im folgenden Beispiel verwaltet die CourseCatalogPage den State der Kursliste und des ausgewählten Kategorienfilters:

```jsx
import { useState } from "react";

const initialCourses = [
    { id: 1, title: "React for Beginners", category: "Programmierung", isFavorite: false },
    { id: 2, title: "React Components", category: "Programmierung", isFavorite: true },
];

function CourseCatalogPage() {
    const [courses, setCourses] = useState(initialCourses);
    const [category, setCategory] = useState("all");

    function toggleFavorite(courseId) {
        setCourses((currentCourses) =>
            currentCourses.map((course) =>
                course.id === courseId
                    ? { ...course, isFavorite: !course.isFavorite }
                    : course,
            ),
        );
    }

    const visibleCourses = courses
        .filter((course) => category === "all" || course.category === category)
        .toSorted((first, second) => first.title.localeCompare(second.title));

    return (
        <>
            <label htmlFor="course-category">Kategorie</label>
            <select
                id="course-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
            >
                <option value="all">Alle</option>
                <option value="Programmierung">Programmierung</option>
            </select>
            <CourseList courses={visibleCourses} onToggleFavorite={toggleFavorite} />
        </>
    );
}
```

State wird nicht direkt verändert. Stattdessen erzeugen wir einen neuen Array- oder Objektwert und übergeben ihn an die State-Funktion.

**Merke:**
> Hooks wie `useState` können nur in Function Components oder eigenen Hooks verwendet werden. Sie dürfen nicht in regulären Funktionen, Bedingungen, Schleifen, Klassen oder außerhalb von React-Komponenten aufgerufen werden.
>
> `useState` liefert ein Array mit zwei Elementen: dem aktuellen Wert und einer Funktion, die eine Änderung anfordert. Die State-Funktion wird mit dem neuen Wert aufgerufen. React rendert die Component anschließend erneut.

### Wo soll State gespeichert werden?

State sollte in der Component liegen, die für die veränderlichen Daten verantwortlich ist.
Benötigt nur eine Component einen Wert, kann sie ihn lokal verwalten. Benötigen mehrere Components denselben Wert, wird der State in eine gemeinsame übergeordnete Component verschoben. Diese gibt den Wert und benötigte Änderungsfunktionen über Props weiter.

```text
App
│
│ State: todos
│
├── TodoFilter
│   Props: Filterwerte + Änderungsfunktionen
│
└── TodoList
    Props: sichtbare Todos
    │
    └── TodoItem
        Props: Todo + Änderungsfunktion
```

Das Verschieben von State in eine gemeinsame übergeordnete Component wird häufig als Lifting State Up bezeichnet.

### Events behandeln

Ein Event beschreibt eine Benutzeraktion, zum Beispiel einen Klick oder eine Formulareingabe. Eine Component kann über eine Funktion als Prop ein Event an ihre übergeordnete Component melden.

```jsx
function CourseCard({ course, onToggleFavorite }) {
    function handleToggleFavorite() {
        onToggleFavorite(course.id);
    }

    return (
        <article>
            <h2>{course.title}</h2>
            <button type="button" onClick={handleToggleFavorite}>
                {course.isFavorite ? "Aus Merkliste entfernen" : "Kurs merken"}
            </button>
        </article>
    );
}
```

`handleToggleFavorite` wird beim Klick aufgerufen und meldet die ID des Kurses über die Callback-Prop an die übergeordnete Component. Übergibst du stattdessen `onClick={onToggleFavorite(course.id)}`, wird die Funktion bereits beim Rendern aufgerufen.

```text
State
  ↓ Props
CourseCard
  ↓ Benutzer klickt
Event
  ↓ Callback-Prop
CourseCatalogPage
  ↓ setCourses(...)
neuer State
  ↓
neuer Renderdurchlauf
```

Daten werden über Props von oben nach unten weitergegeben. Benutzeraktionen können über Callback-Props von einer untergeordneten Component nach oben gemeldet werden. Die übergeordnete Component verändert daraufhin ihren State.

### Abgeleitete Werte

Ein Filterergebnis wird normalerweise aus dem vorhandenen State berechnet, anstatt zusätzlich als eigener State gespeichert zu werden. So können Liste und Filterauswahl nicht versehentlich auseinanderlaufen.

```js
const visibleCourses = courses
    .filter((course) => category === "all" || course.category === category)
    .toSorted((first, second) => first.title.localeCompare(second.title));
```

Der Filterwert `category` und die Kursdaten `courses` sind State. `visibleCourses` ist daraus abgeleitet und braucht keinen eigenen State. Falls die verwendete JavaScript-Umgebung `toSorted` nicht unterstützt, kann zuerst eine Kopie mit `[...courses]` erstellt und diese sortiert werden. Sortiere den State nicht direkt.

Ein State-Update ändert den Wert nicht sofort in der bereits laufenden Renderfunktion. Stattdessen fordert die Component einen neuen Renderdurchlauf an; React kann mehrere State-Updates dabei bündeln. Wenn der neue Wert vom bisherigen State abhängt, verwende daher die funktionale Schreibweise, zum Beispiel `setCount((currentCount) => currentCount + 1)`. So arbeitet React mit dem aktuellsten State und nicht mit einem möglicherweise veralteten Wert aus dem vorherigen Renderdurchlauf.

Bei einem Counter wird der Unterschied sichtbar:

```jsx
function Counter() {
    const [counter, setCounter] = useState(0);

    function incrementTwiceIncorrectly() {
        setCounter(counter + 1);
        setCounter(counter + 1);
    }

    function incrementTwiceCorrectly() {
        setCounter((currentCounter) => currentCounter + 1);
        setCounter((currentCounter) => currentCounter + 1);
    }

    return (
        <>
            <p>Counter: {counter}</p>
            <button type="button" onClick={incrementTwiceIncorrectly}>
                Falsch zweimal erhöhen
            </button>
            <button type="button" onClick={incrementTwiceCorrectly}>
                Korrekt zweimal erhöhen
            </button>
        </>
    );
}
```

Bei `incrementTwiceIncorrectly` beziehen sich beide Updates auf denselben Wert aus dem aktuellen Renderdurchlauf. Der Counter steigt deshalb nur um `1`. Die funktionale Schreibweise in `incrementTwiceCorrectly` erhält dagegen jeweils den aktuellsten Zwischenstand; der Counter steigt um `2`. Eine anschauliche Visualisierung dieses Ablaufs findest du auf der Seite [State Updates](https://state-updates.vercel.app/).

### Merke

> **State gehört möglichst nahe an die Component, die ihn benötigt.**
>
> Müssen mehrere Components denselben veränderlichen Wert verwenden, liegt der gemeinsame State in einer übergeordneten Component. Änderungsfunktionen werden als Props nach unten weitergegeben.
>
> Werte, die sich aus vorhandenem State berechnen lassen, brauchen in der Regel keinen eigenen State.
>
> State wird nicht direkt verändert. Stattdessen erzeugen wir einen neuen Array- oder Objektwert und übergeben ihn an die State-Funktion.
>
> Hängt ein neuer State-Wert vom bisherigen State ab, verwende die funktionale Aktualisierung: `setState((currentState) => ...)`. So arbeitet React mit dem aktuellsten State und nicht mit einem möglicherweise veralteten Wert aus dem vorherigen Renderdurchlauf.

### ✏️ Arbeitsauftrag 6.1: TodoApp mit State und Events erweitern

**Sozialform:** Partnerarbeit  
**Ziel:** Du überträgst State, Eingaben und abgeleitete Listen auf die TodoApp.

**Zugehörige Draft Issues:** **F06 Aufgaben filtern** und **F07 Aufgaben sortieren**. Die Filter- und Sortierregeln werden vor der Umsetzung in diesen Issues ergänzt.

**User Story:** Als Benutzer:in möchte ich Todos nach Status und Titelteil filtern sowie nach Fälligkeit sortieren, damit ich Aufgaben schnell finde.

**Akzeptanzkriterien:** Das Dropdown filtert nach Alle, Offen und Erledigt. Die Suche ignoriert Groß- und Kleinschreibung. Die sichtbare Liste wird aus dem State abgeleitet und die Sortierung verändert den gespeicherten State nicht.

**Technische Tasks:**

- [ ] Filter-State für Status und Suchtext anlegen
- [ ] Dropdown und Suchfeld erstellen
- [ ] Sichtbare Liste mit `filter` berechnen
- [ ] Sortierung auf einer Kopie durchführen
- [ ] Filterfälle prüfen

**Testszenarien:** Prüfe alle Statusfilter, vollständige und teilweise Titelsuche, unterschiedliche Groß-/Kleinschreibung sowie die Kombination aus Suche und Filter.

**Arbeitsschritte:**

1. Importiere `mockTodos.json` und initialisiere damit den `todos`-State in einer übergeordneten Component.
2. Ergänze eine Filterkomponente mit einem Dropdown-Feld für den Statusfilter **Alle**, **Offen** und **Erledigt**.
3. Ergänze in der Filterkomponente ein Eingabefeld, mit dem nach einem Teil des Todo-Titels gesucht werden kann. Die Suche soll unabhängig von Groß- und Kleinschreibung funktionieren.
4. Berechne die sichtbare Todo-Liste aus `todos`, dem Statusfilter und dem eingegebenen Suchtext. Speichere die gefilterte Liste nicht als zusätzlichen State, sondern leite sie aus dem vorhandenen State ab. Prüfe, dass die Filterung korrekt funktioniert.
5. Ergänze eine Sortierung nach Fälligkeit und prüfe, dass die Sortierung den gespeicherten Todo-State nicht verändert.
6. Prüft gemeinsam: Werden leere Suchtexte und der Filter **Alle** korrekt behandelt? Sind die `key`-Werte stabil?

Während dieser Übung arbeitet ihr nur mit React-State. Die importierte JSON-Datei bleibt unverändert; den Wechsel zu HTTP-Aufrufen behandelt ihr später mit `useEffect`.

### ✏️ Arbeitsauftrag 6.2: Todo als erledigt markieren

**Ziel:** Du ergänzt die Statusänderung als eigene Benutzeraktion.

**Zugehöriges Draft Issue:** **F05 Aufgabe erledigen**. Das Toggle-Verhalten und die Erhaltung der übrigen Felder werden im F05-Issue konkretisiert.

**User Story:** Als Benutzer:in möchte ich ein Todo als erledigt markieren oder wieder öffnen, damit der aktuelle Bearbeitungsstand sichtbar bleibt.

**Akzeptanzkriterien:** Jedes Todo besitzt eine passende Aktion. Nur `done` wird geändert; alle anderen Felder bleiben erhalten. Statusanzeige und Statusfilter aktualisieren sich sofort.

**Technische Tasks:**

- [ ] Button in `TodoItem` ergänzen
- [ ] Callback mit Todo-ID weitergeben
- [ ] `done` funktional und unveränderlich toggeln
- [ ] Filterzusammenspiel testen

**Testszenarien:** Klicke zweimal auf den Button und prüfe den Wechsel Erledigt/Offen, unveränderte übrige Felder und die korrekte Filterung.

**Arbeitsschritte:**

1. Ergänze bei jedem Todo einen Button, der zwischen **Erledigt** und **Offen** toggelt.
2. Übergib die `id` des ausgewählten Todos über eine Callback-Prop an die übergeordnete Component.
3. Aktualisiere den Todo-State unveränderlich und ändere dabei ausschließlich das Feld `done`.
4. Verwende für die Statusänderung die funktionale State-Aktualisierung `setTodos((currentTodos) => ...)`, da der neue Todo-State aus dem bisherigen Todo-State berechnet wird.
5. Prüfe, dass der Status in der Oberfläche sichtbar wechselt und der Statusfilter aus Arbeitsauftrag 6.1 weiterhin korrekt funktioniert.

---

## 7. Formulare und Validierung

Formulare erfassen Eingaben von Benutzer:innen. In React können Eingabefelder mit State verbunden werden. React kennt dann jederzeit den aktuellen Wert des Feldes und kann ihn beispielsweise prüfen, weiterverarbeiten oder zurücksetzen.

### Ein kontrolliertes Eingabefeld

Betrachten wir zunächst nur ein einzelnes Eingabefeld:

```jsx
import { useState } from "react";

function ParticipantName() {
    const [name, setName] = useState("");

    return (
        <>
            <label htmlFor="participant-name">Name</label>
            <input
                id="participant-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <p>Eingegebener Name: {name}</p>
        </>
    );
}
```

Der Wert des Eingabefelds kommt aus dem State `name`. Bei jeder Eingabe wird `onChange` ausgelöst. Über `event.target.value` erhalten wir den aktuellen Inhalt des Eingabefelds und speichern ihn mit `setName`.

Der Ablauf lässt sich vereinfacht so darstellen:

```text
Benutzer:in tippt
        ↓
onChange
        ↓
event.target.value
        ↓
setName(...)
        ↓
State ändert sich
        ↓
React rendert erneut
        ↓
input erhält den neuen value
```

Ein Eingabefeld, dessen Wert auf diese Weise durch React-State gesteuert wird, bezeichnet man als kontrolliertes Eingabefeld.

Bei einem kontrollierten Eingabefeld arbeiten zwei Eigenschaften zusammen:

- `value={name}` legt fest, welcher State-Wert im Eingabefeld angezeigt wird.
- `onChange={...}` reagiert auf eine Eingabe und aktualisiert diesen State.

Ohne `onChange` könnte die Benutzerin oder der Benutzer den angezeigten Wert nicht dauerhaft verändern, weil React bei jedem Renderdurchlauf wieder den Wert aus `value` verwendet.

### Merke

> Bei einem kontrollierten Eingabefeld ist der React-State die Datenquelle für den angezeigten Wert.
>
> `value` bringt den State in das Eingabefeld.
>
> `onChange` bringt die Eingabe zurück in den State.

### Ein Formular absenden

Ein kontrolliertes Eingabefeld kann Teil eines Formulars sein. Beim Absenden des Formulars können die aktuellen Werte verarbeitet werden. Der Formularwert wird über `value` gesetzt und bei Eingaben durch `onChange` aktualisiert.

```jsx
import { useState } from "react";

function CourseRegistrationForm() {
    const [name, setName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        console.log("Anmeldung:", name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="participant-name">Name</label>
            <input
                id="participant-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <button type="submit">Anmelden</button>
        </form>
    );
}
```

Wird der Button mit `type="submit"` aktiviert, löst das Formular sein `submit`-Event aus und `handleSubmit` wird aufgerufen.

`event.preventDefault()` verhindert das normale Verhalten des Browsers, bei dem das Formular abgesendet und die Seite neu geladen würde. Dadurch kann die React-Anwendung die eingegebenen Daten selbst verarbeiten.

### Validierung in React

Validierung bedeutet, dass Eingaben vor ihrer Verarbeitung gegen festgelegte Regeln geprüft werden. Ist eine Eingabe ungültig, wird die Verarbeitung abgebrochen und eine verständliche Rückmeldung angezeigt.

In diesem Beispiel prüfen wir die Eingaben beim Absenden des Formulars. Erst wenn die Validierungsregeln erfüllt sind, werden die Daten weiterverarbeitet.

```jsx
function CourseRegistrationForm() {
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const trimmedName = name.trim();

        if (!trimmedName) {
            setError("Bitte gib deinen Namen ein.");
            return;
        }

        setError("");
        console.log("Anmeldung:", trimmedName);
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="participant-name">Name</label>
            <input
                id="participant-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                aria-invalid={Boolean(error)}
            />

            {error && <p role="alert">{error}</p>}

            <button type="submit">Anmelden</button>
        </form>
    );
}
```

`aria-invalid` kennzeichnet das Feld bei einem Fehler als ungültig; `role="alert"` kennzeichnet die dazugehörige Fehlermeldung als wichtige Rückmeldung. Im vollständigen Formular greifen wir dieses Muster nochmals auf.

### Mehrere Felder validieren

Bei einem größeren Formular müssen häufig mehrere Eingaben gemeinsam geprüft werden. Statt für jedes Feld einen eigenen Fehler-State anzulegen, können die Fehlermeldungen in einem Objekt gesammelt werden.

```js
const [errors, setErrors] = useState({});

const nextErrors = {};

if (!trimmedName) {
    nextErrors.name = "Bitte gib deinen Namen ein.";
}

if (!courseId) {
    nextErrors.courseId = "Bitte wähle einen Kurs aus.";
}

setErrors(nextErrors);

if (Object.keys(nextErrors).length > 0) {
    return;
}
```

Während `error` im vorherigen Beispiel nur eine Fehlermeldung gespeichert hat, kann `errors` Fehlermeldungen für mehrere Felder enthalten.

```text
errors
├── name
├── email
└── courseId
```

### Formulardaten an eine übergeordnete Component übergeben

Das Formular muss nicht selbst entscheiden, was langfristig mit den gültigen Daten geschieht. Wie bereits bei Events in Kapitel 6 kann es die Daten über eine Callback-Prop an eine übergeordnete Component melden.

```text
CourseRegistrationPage
│
│ State: registrations
│
└── CourseRegistrationForm
        │
        │ kontrollierter Formular-State
        │
        └── onRegister(formData)
                    ↓
            CourseRegistrationPage
                    ↓
            setRegistrations(...)
```

Anschließend wird der State in der übergeordneten Component aktualisiert und die Anzeige der gespeicherten Anmeldungen angepasst.

```jsx
import { useState } from "react";

function CourseRegistrationForm({ courses, onRegister }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [courseId, setCourseId] = useState("");
    const [errors, setErrors] = useState({});

    function handleSubmit(event) {
        event.preventDefault();
        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const nextErrors = {};

        if (!trimmedName) {
            nextErrors.name = "Bitte gib deinen Namen ein.";
        }
        if (!trimmedEmail) {
            nextErrors.email = "Bitte gib deine E-Mail-Adresse ein.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
            nextErrors.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
        }
        if (!courseId) {
            nextErrors.courseId = "Bitte wähle einen Kurs aus.";
        }

        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;

        onRegister({ name: trimmedName, email: trimmedEmail, courseId });
        setName("");
        setEmail("");
        setCourseId("");
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="participant-name">Name</label>
            <input
                id="participant-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <p role="alert">{errors.name}</p>}
            <label htmlFor="participant-email">E-Mail-Adresse</label>
            <input
                id="participant-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <p role="alert">{errors.email}</p>}
            <label htmlFor="course-id">Kurs</label>
            <select
                id="course-id"
                value={courseId}
                onChange={(event) => setCourseId(event.target.value)}
                aria-invalid={Boolean(errors.courseId)}
            >
                <option value="">Kurs auswählen</option>
                {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                        {course.title}
                    </option>
                ))}
            </select>
            {errors.courseId && <p role="alert">{errors.courseId}</p>}
            <button type="submit">Zum Kurs anmelden</button>
        </form>
    );
}
```

Neben der fachlichen Prüfung soll auch die Rückmeldung zugänglich sein. `aria-invalid` kennzeichnet ein Eingabefeld als ungültig. Eine Fehlermeldung mit `role="alert"` kann von unterstützenden Technologien als wichtige Rückmeldung erkannt werden.

`event.preventDefault()` verhindert, dass der Browser das Formular klassisch absendet und die Seite neu lädt. Die Feldwerte stammen aus States; `onRegister` meldet die Anmeldung an die übergeordnete Component. Diese kann anschließend ihren Anwendungs-State aktualisieren.

Die übergeordnete `CourseRegistrationPage` **verarbeitet** die Anmeldung. Sie erhält die Formulardaten über den Callback, fügt sie ihrem State hinzu und zeigt die Anzahl der gespeicherten Registrierungen:

```jsx
import { useState } from "react";

function CourseRegistrationPage({ courses }) {
    const [registrations, setRegistrations] = useState([]);

    function handleRegister(registration) {
        setRegistrations((currentRegistrations) => [
            ...currentRegistrations,
            registration,
        ]);
    }

    return (
        <>
            <CourseRegistrationForm
                courses={courses}
                onRegister={handleRegister}
            />
            <p>Gespeicherte Anmeldungen: {registrations.length}</p>
        </>
        );
}
```

Die Registrierung wird hier nur im State des Browsers gehalten und geht beim Neuladen verloren. In einer späteren Ausbaustufe wird `handleRegister` die Anmeldung an eine API senden.

Das Kursanmeldungsformular prüft mindestens:

- **Name:** verpflichtend und nach dem Entfernen von Leerzeichen nicht leer.
- **E-Mail-Adresse:** verpflichtend und in einem gültigen Format.
- **Kurs:** Es muss ein Kurs ausgewählt sein.

Nutze sichtbare Labels, verständliche Fehlermeldungen und markiere ungültige Eingaben nachvollziehbar. Das Beispiel verwendet `noValidate`, damit beim Absenden nicht die native Browser-Validierung eingreift und stattdessen die selbst implementierte Validierung demonstriert werden kann. Ohne `noValidate` kann die native Browser-Validierung beispielsweise mit `required` und `type="email"` unterstützen; fachliche Regeln müssen trotzdem passend geprüft werden.

### Merke

> Bei einem **kontrollierten Eingabefeld** kommt der angezeigte Wert aus dem React-State. `onChange` aktualisiert diesen State.
>
> `onSubmit` verarbeitet das Formular. Mit `event.preventDefault()` verhindern wir das klassische Absenden und Neuladen der Seite.
>
> Eingaben werden vor ihrer Verarbeitung **validiert**. Ungültige Daten werden nicht weitergegeben und verständliche Fehlermeldungen angezeigt.
>
> Ein Formular kann gültige Daten über eine **Callback-Prop** an eine übergeordnete Component melden. Dort kann der gemeinsame Anwendungs-State aktualisiert werden.
>
> Formular-State und Anwendungs-State erfüllen unterschiedliche Aufgaben: Das Formular verwaltet die aktuellen Eingaben; die übergeordnete Component verwaltet beispielsweise die gespeicherten Todos.

### ✏️ Arbeitsauftrag 7.1: Todo erstellen und validieren

**Sozialform:** Partnerarbeit  
**Ziel:** Du überträgst das kontrollierte Formular auf das Erstellen eines Todos.

**Zugehöriges Draft Issue:** **F02 Aufgabe erstellen**. Validierung, Callback, ID-Vergabe und Formular-Reset werden vor der Umsetzung in F02 ergänzt.

**User Story:** Als Benutzer:in möchte ich ein gültiges Todo mit Titel, Fälligkeit und optionaler Beschreibung anlegen, damit neue Tätigkeiten erfasst werden können.

**Akzeptanzkriterien:** Titel und zukünftige Fälligkeit sind erforderlich. Feldfehler verhindern das Speichern. Ein gültiges Todo erhält eine eindeutige ID, `done: false` und erscheint in der Liste.

**Technische Tasks:**

- [ ] Kontrolliertes `TodoForm` erstellen
- [ ] Felder validieren
- [ ] `onCreate`-Callback implementieren
- [ ] ID vergeben und State ergänzen
- [ ] Formular zurücksetzen
- [ ] Fehler- und Erfolgsfälle prüfen

**Testszenarien:** Teste leeren Titel, Leerzeichen-only-Titel, fehlende bzw. ungültige Fälligkeit und ein gültiges Todo. Prüfe nach erfolgreichem Erstellen zusätzlich, dass Formularfelder und Fehlermeldungen zurückgesetzt wurden.

**Arbeitsschritte:**

1. Erstelle `TodoForm` mit kontrollierten Feldern für Titel, optionale Beschreibung und Fälligkeit.
2. Verhindere das Speichern, wenn der Titel nach dem Entfernen von Leerzeichen leer ist.
3. Prüfe, dass die Fälligkeit vorhanden ist und nach dem heutigen Tag liegt.
4. Zeige feldbezogene Fehlermeldungen an und übermittle nur gültige Todo-Daten über `onCreate` an die übergeordnete Component.
5. Füge das neue Todo im State der übergeordneten Component hinzu. Setze die Formularfelder und vorhandene Fehlermeldungen nach erfolgreichem Erstellen zurück.
6. Arbeite weiterhin nur mit React-State. Die importierte JSON-Datei wird nicht verändert und es gibt noch keine Serveraufrufe.

Bei der TodoApp muss das Fälligkeitsdatum **nach dem heutigen Tag** liegen. Für ein Eingabefeld vom Typ `date` kann die Prüfung beispielsweise so vorbereitet werden:

```js
const today = new Date();
today.setHours(0, 0, 0, 0);

const selectedDueDate = new Date(`${dueDate}T00:00:00`);
const dueDateIsValid = dueDate && selectedDueDate > today;
```

Das heutige Datum ist damit ebenfalls ungültig. Bei einem ungültigen oder fehlenden Wert wird nicht gespeichert und beim Feld eine verständliche Rückmeldung angezeigt.

### Formulare mit Anfangswerten

Beim Erstellen kann ein kontrolliertes Feld mit einem leeren Startwert beginnen. Beim Bearbeiten können vorhandene Daten als Anfangswerte verwendet werden. Die Eingaben werden anschließend wieder über State verändert.

```jsx
function CourseForm({ initialTitle = "" }) {
    const [title, setTitle] = useState(initialTitle);

    return (
        <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
        />
    );
}
```

`initialTitle` bestimmt hier den Startwert beim Erzeugen der Component. Eine spätere Änderung der Prop setzt den vorhandenen State nicht automatisch zurück. Für diese Übung wird das zu bearbeitende Todo deshalb festgelegt, bevor das Bearbeitungsformular angezeigt wird.

### ✏️ Arbeitsauftrag 7.2: Todo bearbeiten

**Ziel:** Du erweiterst `TodoForm`, damit ein bestehendes Todo in allen editierbaren Feldern geändert werden kann.

**Zugehöriges Draft Issue:** **F03 Aufgabe bearbeiten**. Die editierbaren Felder und Update-Regeln werden vor der Umsetzung in F03 ergänzt.

**User Story:** Als Benutzer:in möchte ich Titel, Beschreibung und Fälligkeit eines bestehenden Todos ändern, damit Aufgaben aktuell bleiben.

**Akzeptanzkriterien:** Bestehende Werte sind vorausgefüllt. Alle editierbaren Felder werden validiert. ID und `done` bleiben erhalten; Abbrechen verwirft Änderungen.

**Technische Tasks:**

- [ ] Bearbeitungs-State und Anfangswerte ergänzen
- [ ] Formular zwischen Erstellen und Bearbeiten unterscheiden
- [ ] Update-Callback mit ID implementieren
- [ ] Array unveränderlich aktualisieren
- [ ] Abbrechen testen

**Testszenarien:** Ändere jedes Feld einzeln und gemeinsam, teste eine ungültige Änderung, Abbrechen und erfolgreiches Speichern.

**Arbeitsschritte:**

1. Übergib beim Bearbeiten das ausgewählte Todo und zeige Titel, Beschreibung und Fälligkeit vorausgefüllt an.
2. Verwende dieselben Validierungsregeln wie beim Erstellen.
3. Ermögliche Änderungen an **Titel, Beschreibung und Fälligkeit**.
4. Übergib die Änderungen über einen Callback an die übergeordnete Component und aktualisiere das Todo unveränderlich anhand seiner `id`.
5. Übergib dem `TodoForm` über Props, ob ein neues Todo erstellt oder ein bestehendes Todo bearbeitet wird. Passe Überschrift und Buttontext entsprechend an.
6. Prüfe, dass Abbrechen keine Änderungen speichert und nach dem Speichern wieder der aktualisierte Eintrag erscheint.

### Todo-Funktionen vervollständigen

Das Hinzufügen und Bearbeiten haben wir bereits umgesetzt und nun können wir die Löschfunktion ergänzen.

### ✏️ Arbeitsauftrag 7.3: Todo löschen

**Ziel:** Du ergänzt die Löschaktion und vervollständigst die grundlegenden Todo-Funktionen.

**Zugehöriges Draft Issue:** **F04 Aufgabe löschen**. Bestätigung und unveränderliche Entfernung werden vor der Umsetzung in F04 ergänzt.

**User Story:** Als Benutzer:in möchte ich ein nicht mehr benötigtes Todo löschen, damit meine Aufgabenliste übersichtlich bleibt.

**Akzeptanzkriterien:** Jede Aufgabe besitzt eine Löschaktion. Vor dem Löschen wird bestätigt. Danach ist nur das ausgewählte Todo entfernt.

**Technische Tasks:**

- [ ] Löschbutton ergänzen
- [ ] ID an den Parent melden
- [ ] Bestätigung einbauen
- [ ] Todo mit `filter` unveränderlich entfernen
- [ ] Abbruch und Auswahl prüfen

**Testszenarien:** Brich die Bestätigung ab und prüfe, dass das Todo bleibt. Bestätige anschließend und prüfe, dass nur das ausgewählte Todo entfernt wird.

**Arbeitsschritte:**

1. Ergänze bei jedem Todo eine Löschaktion.
2. Übergib die `id` des ausgewählten Todos an die übergeordnete Component.
3. Entferne das Todo durch eine unveränderliche State-Aktualisierung.
4. Frage vor dem Löschen nach einer Bestätigung und prüfe, dass nur der ausgewählte Eintrag entfernt wird.

---

## 8. Hooks und asynchrones Laden

Nachdem `useState` als erster Hook eingeführt wurde, betrachten wir nun `useEffect`. Dieser Hook wird verwendet, wenn eine Component mit etwas außerhalb des Renderns synchronisiert werden muss, zum Beispiel mit einer Netzwerkabfrage.

### `useEffect`

```jsx
import { useEffect, useState } from "react";

function CourseSelection() {
    const [courseId, setCourseId] = useState("");

    useEffect(() => {
        document.title = courseId
            ? `Ausgewählter Kurs: ${courseId}`
            : "Kurs auswählen";
    }, [courseId]);

    return (
        <>
            <label htmlFor="course-id">Kurs</label>
            <select
                id="course-id"
                value={courseId}
                onChange={(event) => setCourseId(event.target.value)}
            >
                <option value="">Kurs auswählen</option>
                <option value="1">React for Beginners</option>
                <option value="2">React Components</option>
            </select>
        </>
    );
}
```

Im oben stehenden Beispiel liegt `document.title` außerhalb des React-Renderings. Der Effect synchronisiert deshalb den Seitentitel mit dem aktuellen React-State.

Der Ablauf ist:

```text
State ändert sich
      ↓
React rendert die Component
      ↓
React aktualisiert die Oberfläche
      ↓
useEffect wird ausgeführt
      ↓
externes System wird synchronisiert
```

Zu beachten ist, dass `useEffect` nicht benötigt wird, um Werte aus vorhandenem State zu berechnen. Solche Werte werden weiterhin direkt während des Renderns abgeleitet.

### Abhängigkeiten eines Effects

Nach einem Rendern kann React den Effect ausführen. Ob er nach weiteren Renderdurchläufen erneut ausgeführt wird, hängt vom Abhängigkeitsarray ab. Als zweiten Parameter kann `useEffect` deshalb ein Array mit den Werten erhalten, von denen der Effect abhängt:

```jsx
useEffect(() => {
    // Effect
}, [courseId]);
```

Der Effect wird nach dem ersten Rendern ausgeführt und erneut, wenn sich courseId geändert hat.

Ein leeres Abhängigkeitsarray bedeutet, dass dieser Effect nach dem ersten Rendern der Component ausgeführt wird. Das eignet sich beispielsweise für einen Ladevorgang, der beim Anzeigen einer Seite gestartet werden soll.

```jsx
useEffect(() => {
    // Effect
}, []);
```

Werte, die der Effect aus Props oder State verwendet, gehören grundsätzlich zu seinen Abhängigkeiten.

Zusammengefasst können drei Fälle unterschieden werden:

```jsx
// Effect wird nach jedem Rendern ausgeführt
useEffect(() => {
    // Effect
});

// Effect wird nach dem ersten Rendern und nach Änderungen von courseId ausgeführt
useEffect(() => {
    // Effect
}, [courseId]);

// Effect wird nach dem ersten Rendern ausgeführt
useEffect(() => {
    // Effect
}, []);
```

### Einen Effect aufräumen

Ein Effect kann eine Funktion zurückgeben. React verwendet diese **Cleanup-Funktion**, um den zuvor gestarteten Effect aufzuräumen. Sie wird ausgeführt, bevor derselbe Effect aufgrund geänderter Abhängigkeiten erneut ausgeführt wird und wenn die Component entfernt wird.

```jsx
useEffect(() => {
    // Verbindung oder Vorgang starten

    return () => {
        // Verbindung oder Vorgang beenden
    };
}, []);
```

### Beispiel: Einen Timer aufräumen

Ein Timer ist ebenfalls ein Vorgang außerhalb des React-Renderings. Mit `setInterval` kann beispielsweise jede Sekunde eine Funktion ausgeführt werden.

```jsx
import { useEffect, useState } from "react";

function CourseTimer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((currentSeconds) => currentSeconds + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return <p>Verstrichene Zeit: {seconds} Sekunden</p>;
}
```

`setInterval` startet einen Timer und gibt eine ID zurück. Diese ID wird benötigt, um den Timer später mit `clearInterval` wieder zu beenden.

Der Effect besitzt ein leeres Abhängigkeitsarray, weil der Timer nach dem ersten Rendern einmal gestartet werden soll. Die Cleanup-Funktion beendet den Timer, wenn die Component entfernt wird.

```text
Component wird eingebunden
        ↓
Effect wird ausgeführt
        ↓
setInterval startet den Timer
        ↓
Timer aktualisiert den State
        ↓
Component wird entfernt
        ↓
Cleanup-Funktion wird ausgeführt
        ↓
clearInterval beendet den Timer
```

Da der neue Zählerstand vom bisherigen State abhängt, verwenden wir wie in Kapitel 6 die funktionale State-Aktualisierung. Dadurch muss `seconds` nicht innerhalb des Effects gelesen werden.

Ohne Cleanup würde der gestartete Timer nicht passend zum Lebenszyklus der Component beendet. Deshalb sollten Vorgänge, die ein Effect startet und die weiterlaufen können, bei Bedarf auch wieder aufgeräumt werden.

### Warum Cleanup notwendig sein kann

Nicht jeder Effect benötigt eine Cleanup-Funktion. Eine Cleanup-Funktion ist sinnvoll bzw. notwendig, wenn ein Effect einen Vorgang startet, eine Verbindung herstellt oder etwas registriert, das später beendet, entfernt oder rückgängig gemacht werden muss.

Beispiele dafür sind:

- ein mit `setInterval` gestarteter Timer,
- eine Event-Registrierung, die wieder entfernt werden muss,
- eine Verbindung zu einem externen System oder
- ein noch laufender Netzwerk-Request, der nicht mehr benötigt wird.

Beim Timer verwenden wir dafür `clearInterval`. Bei einem HTTP-Request kann beispielsweise ein `AbortController` eingesetzt werden, um einen noch laufenden Request abzubrechen. Wird ein Effect aufgrund geänderter Abhängigkeiten erneut ausgeführt, räumt React zunächst den vorherigen Effect auf. Wird die Component entfernt, wird die Cleanup-Funktion ebenfalls ausgeführt. Ein noch laufender Request kann dadurch abgebrochen werden, wenn er nicht mehr benötigt wird.

### Einen laufenden Request aufräumen

Wie der Timer ist auch ein HTTP-Request ein Vorgang, der nach dem Start des Effects noch laufen kann. Wird die Component entfernt, bevor der Request abgeschlossen ist, wird seine Antwort für diese Component nicht mehr benötigt.

Dafür kann ein `AbortController` verwendet werden:

```jsx
useEffect(() => {
    const controller = new AbortController();

    async function loadCourses() {
        const response = await fetch(
            "http://localhost:3001/courses",
            { signal: controller.signal },
        );

        // Antwort verarbeiten ...
    }

    loadCourses();

    return () => {
        controller.abort();
    };
}, []);
```

Der `AbortController` stellt über `controller.signal` ein Abbruchsignal bereit. Dieses Signal wird an `fetch` übergeben. Ruft die Cleanup-Funktion später `controller.abort()` auf, kann der zugehörige Request abgebrochen werden.

Das Prinzip entspricht dem Timer-Beispiel:

```text
Timer                         HTTP-Request
setInterval(...)              fetch(...)
      ↓                            ↓
Vorgang läuft                 Request läuft
      ↓                            ↓
Cleanup                       Cleanup
      ↓                            ↓
clearInterval(...)            controller.abort()
```

### Lokale Mock-API mit json-server einrichten

Damit wir die Kursdaten nicht mehr aus einer importierten JSON-Datei laden, sondern per HTTP von einem Server abrufen, richten wir zunächst eine lokale Mock-API ein. Sie stellt die Kursdaten über `GET /courses` bereit. Später ergänzen wir dieselbe Mock-API um die Todo-Daten unter `GET /todos`.

Dazu installieren wir `json-server` in unserem Projekt. Führe den Befehl im Ordner `frontend/` aus:

```bash
npm install --save-dev json-server
```

Die Option `--save-dev` speichert das Paket als Entwicklungsabhängigkeit. `json-server` ist ein Node.js-Paket, das eine lokale REST-API bereitstellt.
Erstelle im Repository neben `frontend/` den Ordner `mock-api/` und darin `db.json` mit Beispieldaten für den Kurskatalog:

```json
{
    "courses": [
        {
            "id": 1,
            "title": "React for Beginners",
            "teacher": "Alex Morgan",
            "duration": 12,
            "category": "Programmierung"
        },
        {
            "id": 2,
            "title": "React Components",
            "teacher": "Sam Lee",
            "duration": 16,
            "category": "Programmierung"
        }
    ]
}
```

Die Ordnerstruktur sieht dann so aus:

```text
TodoApp/
├── frontend/
│   ├── package.json
│   └── ...
└── mock-api/
    └── db.json
```

Starte Vite in einem Terminal wie bisher. Starte im Ordner `frontend/` in einem **zweiten Terminal** den Mockserver:

```bash
npx json-server --watch ../mock-api/db.json --port 3001
```

`json-server` stellt die Kurse unter `http://localhost:3001/courses` bereit. Öffne diese Adresse im Browser, um die HTTP-Antwort zu kontrollieren. Die lokale `db.json` ist eine Entwicklungsdatenquelle, keine produktive Datenbank.

### Kursdaten von der Mock-API laden

Unsere Mock-API stellt nun Daten außerhalb der React-Anwendung bereit. Im nächsten Schritt verbinden wir die bisher kennengelernten Konzepte: Ein Effect startet nach dem Rendern einen HTTP-Request, `fetch` lädt die Kursdaten und der React-State speichert das Ergebnis für die Darstellung.

Ein HTTP-Aufruf liefert sein Ergebnis nicht sofort. `fetch()` startet den Request und gibt ein Promise zurück. Innerhalb einer `async`-Funktion können wir mit `await` auf die Antwort warten:

```js
const response = await fetch("http://localhost:3001/courses");
```

Ein erfolgreicher Netzwerkaufruf bedeutet noch nicht automatisch einen erfolgreichen HTTP-Status. Deshalb prüfen wir `response.ok`, bevor wir die Antwort weiterverarbeiten. Ein erfolgreicher Request liefert die Daten als JSON:

```js
const response = await fetch("http://localhost:3001/courses");

if (!response.ok) {
    throw new Error("Kurse konnten nicht geladen werden.");
}

const courses = await response.json();
```

Mit `response.json()` lesen wir anschließend den JSON-Inhalt der Antwort ein.
Während dieses asynchronen Ablaufs kann sich die Benutzeroberfläche in unterschiedlichen Zuständen befinden:

| Zustand | Bedeutung | Darstellung |
| --- | --- | --- |
| **Loading** | Request läuft | Ladehinweis |
| **Success** | Daten wurden geladen | Kursliste |
| **Empty** | Request erfolgreich, aber keine Kurse vorhanden | Hinweis auf leere Liste |
| **Error** | Daten konnten nicht geladen werden | Fehlermeldung und erneuter Versuch |

Empty ist kein Error: Eine leere Liste kann eine gültige Antwort des Servers sein.

Beim Laden können aber Fehler auftreten, zum Beispiel wenn der Mockserver nicht erreichbar ist. Deshalb wird der asynchrone Ablauf mit `try`, `catch` und `finally` strukturiert.

- Im `try`-Block wird der Request ausgeführt und die erfolgreiche Antwort verarbeitet.
- `catch` wird ausgeführt, wenn dabei ein Fehler auftritt.
- `finally` wird anschließend unabhängig von Erfolg oder Fehler ausgeführt.

Ein mit `controller.abort()` bewusst abgebrochener Request soll dabei nicht als Ladefehler angezeigt werden. Deshalb unterscheidet der `catch`-Block einen `AbortError` von anderen Fehlern.

Im folgenden Beispiel führen wir `useEffect`, `fetch`, State, diese UI-Zustände und das Cleanup mit `AbortController` zusammen.

```jsx
import { useEffect, useState } from "react";

function CourseCatalogPage() {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        async function loadCourses() {
            setIsLoading(true);
            setError("");

            try {
                const response = await fetch("http://localhost:3001/courses", {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error("Kurse konnten nicht geladen werden.");
                }

                setCourses(await response.json());
            } catch (loadError) {
                if (loadError.name !== "AbortError") {
                    setError("Kurse konnten nicht geladen werden.");
                }
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        }

        loadCourses();
        return () => controller.abort();
    }, [reloadKey]);

    if (isLoading) return <p>Kurse werden geladen ...</p>;
    if (error) {
        return (
            <div>
                <p role="alert">{error}</p>
                <button type="button" onClick={() => setReloadKey((key) => key + 1)}>
                    Erneut versuchen
                </button>
            </div>
        );
    }
    if (courses.length === 0) return <p>Es sind keine Kurse vorhanden.</p>;

    return <CourseList courses={courses} />;
}
```

Das Abhängigkeitsarray löst den Effect beim ersten Rendern und nach einer Änderung von `reloadKey` aus. `response.ok` prüft den HTTP-Status, denn `fetch` behandelt beispielsweise `404` nicht automatisch als Fehler. Der `AbortController` beendet den laufenden Request, wenn die Component entfernt wird. Der Button erhöht `reloadKey` und löst dadurch einen erneuten Ladevorgang aus.

### ✏️ Arbeitsauftrag 8.1: Todo-Daten mit useEffect laden

**Sozialform:** Partnerarbeit  
**Ziel:** Du überträgst den gezeigten HTTP-Ablauf auf die TodoApp.

**Zugehöriges Draft Issue:** **F01 Aufgaben anzeigen**. Die Umstellung der Datenquelle von importiertem JSON auf `GET /todos` wird als technische Erweiterung im F01-Issue ergänzt.

**User Story:** Als Benutzer:in möchte ich Todos von einer lokalen Mock-API laden, damit die Anwendung mit einer externen Datenquelle arbeitet.

**Akzeptanzkriterien:** `json-server` liefert `/todos`. `useEffect` lädt die Daten per `fetch`. Nach erfolgreicher Antwort werden die Todos im State gespeichert und weiterhin über `TodoList` und `TodoItem` dargestellt. Ein laufender Request kann beim Entfernen der Component abgebrochen werden.

**Technische Tasks:**

- [ ] `db.json` um `todos` ergänzen
- [ ] Mockserver starten
- [ ] Fetch-Effect mit `AbortController` implementieren
- [ ] HTTP-Antwort prüfen
- [ ] Geladene Daten im State speichern

**Testszenarien:** Prüfe `GET /todos` und die erfolgreich geladene Todo-Liste. Prüfe im Code, dass der laufende Request über die Cleanup-Funktion abgebrochen werden kann.

**Arbeitsschritte:**

1. Ergänze in `mock-api/db.json` ein `todos`-Array aus `src/data/mockTodos.json`.
2. Starte Vite und `json-server` in getrennten Terminals und prüfe `http://localhost:3001/todos` im Browser.
3. Ersetze in der Todo-Listenansicht den Import der `initialTodos` durch einen `useEffect`- und `fetch`-Aufruf.
4. Stelle sicher, dass die geladenen Todos weiterhin über `TodoList` und `TodoItem` angezeigt werden.

### ✏️ Arbeitsauftrag 8.2: Lade- und Fehlerzustände der TodoApp

**Sozialform:** Partnerarbeit  
**Ziel:** Du unterscheidest Laden, Erfolg, leere Daten und Fehler.

**Zugehöriges Draft Issue:** **F01 Aufgaben anzeigen**. Loading-, Empty- und Error-State werden als zusätzliche Akzeptanzkriterien in F01 ergänzt.

**User Story:** Als Benutzer:in möchte ich beim Laden, bei leerer Antwort und bei Fehlern eine passende Rückmeldung sehen, damit der Zustand der Anwendung verständlich ist.

**Akzeptanzkriterien:** Loading-, Empty- und Error-State werden unterschieden. Ein Ladefehler zeigt eine verständliche Meldung und eine erneute Ladeaktion. Nach Wiederherstellung des Servers kann erneut geladen werden.

**Technische Tasks:**

- [ ] Zustandsvariablen ergänzen
- [ ] Bedingte Ansichten rendern
- [ ] Fehlerfall durch gestoppten Server prüfen
- [ ] Reload-Aktion implementieren

**Testszenarien:** Prüfe Loading, erfolgreiche Liste, leere Antwort und Serverfehler. Starte den Server nach einem Fehler wieder und prüfe den Reload.

**Arbeitsschritte:**

1. Zeige während des Requests „Aufgaben werden geladen ...“ an.
2. Zeige bei einer leeren Todo-Liste einen passenden Hinweis.
3. Stoppe `json-server`, prüfe den Fehlerzustand und starte den Server wieder.
4. Ergänze die Aktion zum erneuten Laden und prüfe, dass sie nach dem Serverneustart funktioniert.

### Daten an die Mock-API senden

Mit `fetch` können nicht nur Daten geladen, sondern auch Daten an einen Server gesendet werden. Die HTTP-Methode wird über `method` festgelegt.

```jsx
const response = await fetch("http://localhost:3001/todos", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
});

if (!response.ok) {
    throw new Error("Todo konnte nicht erstellt werden.");
}

const createdTodo = await response.json();
```

`Content-Type: application/json` teilt dem Server mit, dass der Request JSON enthält. Mit `JSON.stringify()` wird das JavaScript-Objekt in einen JSON-Text umgewandelt.
Für die TodoApp verwenden wir anschließend folgende Requests:

```text
GET     /todos       Todos laden
POST    /todos       Todo erstellen
PATCH   /todos/:id   Todo teilweise ändern
DELETE  /todos/:id   Todo löschen
```

Beim Erstellen wird keine `id` mitgesendet. Vor der Umstellung auf die Mock-API hat die React-Anwendung die ID erzeugt. Nun übernimmt diese Aufgabe `json-server`. Verwende deshalb nach einem erfolgreichen `POST` den vom Server zurückgegebenen Todo-Datensatz für die Aktualisierung des React-States.

```js
const createdTodo = await response.json();

setTodos((currentTodos) => [
    ...currentTodos,
    createdTodo,
]);
```

### ✏️ Arbeitsauftrag 8.3: Todo-Änderungen an die Mock-API senden

Ergänze nun die Schreiboperationen der TodoApp über die Mock-API:

**Zugehörige Draft Issues:** **F02 Aufgabe erstellen**, **F03 Aufgabe bearbeiten**, **F04 Aufgabe löschen** und **F05 Aufgabe erledigen**. Die jeweiligen HTTP-Schreiboperationen werden als Tasks in den bestehenden Issues ergänzt.

**User Story:** Als Benutzer:in möchte ich Todos über die Mock-API erstellen, ändern und löschen, damit Änderungen auch nach einem Neuladen der React-Anwendung in der lokalen Entwicklungsdatenquelle erhalten bleiben.

**Akzeptanzkriterien:** Erstellen verwendet `POST /todos`, Bearbeiten und Statusänderung `PATCH /todos/:id`, Löschen `DELETE /todos/:id`. Nach erfolgreicher Antwort entspricht die Oberfläche dem Serverstand. Fehler werden nicht als Erfolg angezeigt.

**Technische Tasks:**

- [ ] HTTP-Handler für POST, PATCH und DELETE implementieren
- [ ] Response und Fehler prüfen
- [ ] React-State nach erfolgreicher Antwort aktualisieren
- [ ] Schreiboperationen testen

**Testszenarien:** Erstelle, ändere und lösche ein Todo über die jeweiligen Endpunkte. Prüfe nach jeder Antwort die Liste und `db.json`; simuliere zusätzlich einen Fehler.

**Arbeitsschritte:**

1. Verwende `POST /todos`, um eine Aufgabe anzulegen. Sende `title`, `dueDate`, optional `description` und `done: false`; lasse die `id` weg.
2. Verwende `PATCH /todos/:id`, um Titel, Beschreibung, Fälligkeit oder Erledigungsstatus zu ändern.
3. Verwende `DELETE /todos/:id`, um die bestätigte Löschung auszuführen.
4. Aktualisiere nach erfolgreicher Antwort den React-State, damit die Oberfläche den Serverstand anzeigt.

> **Merke:** `json-server` ist eine lokale Mock-API. Änderungen über POST, PATCH und DELETE werden in `mock-api/db.json` gespeichert. Das ist für Übungen hilfreich, ersetzt aber keine echte Datenbank oder ein produktionsreifes Backend.

---

## 9. Routing und Projektstruktur

Beim **Routing** wird abhängig von der URL eine passende Ansicht angezeigt. So kann eine Anwendung mehrere Seiten anbieten, ohne bei jeder Navigation die gesamte Webseite neu zu laden.

```text
URL                         Component
/courses                    CourseCatalogPage
/courses/2                  CourseDetailsPage
/registration               CourseRegistrationPage
unbekannte URL              NotFoundPage
```

Für den Kurskatalog verwenden wir React Router und installieren diesen im Ordner des React-Projekts mit folgendem Befehl:

```bash
npm install react-router-dom
```

Eine **Route** verbindet einen URL-Pfad mit einer React-Component. Wird beispielsweise `/courses` aufgerufen, soll die Kursübersicht erscheinen. Bei `/courses/2` soll dagegen die Detailansicht des Kurses mit der ID `2` angezeigt werden.

### Dynamische Route-Parameter

Ein Teil eines URL-Pfads kann variabel sein. Dadurch kann dieselbe Route beispielsweise die Detailansichten unterschiedlicher Kurse darstellen:

``` jsx
<Route path="/courses/:courseId" element={<CourseDetailsPage />} />
```

`:courseId` ist ein **Route-Parameter**. Die Route passt beispielsweise
zu folgenden URLs:

``` text
/courses/1
/courses/2
/courses/15
```

Bei `/courses/2` besitzt `courseId` den Wert `"2"`.

Mit dem Hook `useParams` kann eine Component die Route-Parameter aus der aktuellen URL lesen:

``` jsx
import { useParams } from "react-router-dom";

function CourseDetailsPage() {
    const { courseId } = useParams();

    return <p>Ausgewählter Kurs: {courseId}</p>;
}
```

Route-Parameter werden als Strings bereitgestellt. Wird die ID für einen Vergleich mit einer numerischen ID benötigt, muss der Wert entsprechend umgewandelt werden.

### Zwischen Ansichten navigieren

Damit Benutzer:innen aus der Kursübersicht zur Detailansicht eines
bestimmten Kurses wechseln können, verwenden wir `Link`:

``` jsx
import { Link } from "react-router-dom";

function CourseCard({ course }) {
    return (
        <article>
            <h2>{course.title}</h2>
            <Link to={`/courses/${course.id}`}>
                Details anzeigen
            </Link>
        </article>
    );
}
```

`Link` erzeugt eine Navigation innerhalb der React-Anwendung. Beim Kurs mit der ID `2` führt der Link beispielsweise zu `/courses/2`. Die Route `/courses/:courseId` erkennt diese URL und rendert `CourseDetailsPage`. Dort kann `useParams` den Wert `2` aus der URL lesen.

``` text
<Link to="/courses/2">
        ↓
URL: /courses/2
        ↓
Route: /courses/:courseId
        ↓
CourseDetailsPage
        ↓
useParams()
        ↓
courseId = "2"
```

Für interne Navigation innerhalb der React-Anwendung verwenden wir
`Link` statt eines normalen `<a>`-Elements. Dadurch kann React Router
die Ansicht wechseln, ohne die gesamte Seite neu zu laden.

Eine mögliche Projektstruktur für den Kurskatalog:

```text
TodoApp/
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── CourseCard.jsx
│       │   ├── CourseList.jsx
│       │   └── CourseFilters.jsx
│       ├── pages/
│       │   ├── CourseCatalogPage.jsx
│       │   ├── CourseDetailsPage.jsx
│       │   ├── CourseRegistrationPage.jsx
│       │   └── NotFoundPage.jsx
│       ├── App.jsx
│       └── main.jsx
└── mock-api/
    └── db.json
```

Die Struktur ist ein Vorschlag, keine Pflicht, jedes Projekt exakt so aufzubauen. Wähle eine einfache Struktur, in der Zuständigkeiten schnell auffindbar sind.

### ✏️ Arbeitsauftrag 9.1: TodoApp-Routing einrichten

**Sozialform:** Teamarbeit  
**Ziel:** Ihr übertragt Routing, Navigation und dynamische Route-Parameter aus dem Kurskatalog-Beispiel auf die TodoApp.

**Zugehöriges Draft Issue:** `SETUP-02 Routing für TodoApp einrichten`. Dieses technische Issue wird vor der Umsetzung in ein reguläres Issue überführt.

**User Story:** Als Benutzer:in möchte ich zwischen Übersicht, Erstellen und Bearbeiten navigieren, damit die TodoApp mehrere klar getrennte Ansichten besitzt.

**Akzeptanzkriterien:** Die Aufgabenübersicht ist über `/todos`, das Erstellen über `/todos/new` und das Bearbeiten über `/todos/:todoId/edit` erreichbar. Links navigieren ohne vollständigen Seitenreload. Die Bearbeitungsansicht liest die ID des ausgewählten Todos aus dem Route-Parameter. Eine unbekannte URL zeigt eine Not-Found-Ansicht.

**Technische Tasks:**

- [ ] React Router installieren
- [ ] Routen definieren

    ```text
    /todos
    /todos/new
    /todos/:todoId/edit
    ```

- [ ] Navigation mit `Link` ergänzen
- [ ] `todoId` mit `useParams` auslesen
- [ ] Not-Found-Component erstellen
- [ ] Navigation testen

**Testszenarien:** Öffne alle drei Ansichten direkt über ihre URLs. Navigiere anschließend über die Links der Anwendung. Prüfe, ob bei `/todos/1/edit` die ID `1` aus dem Route-Parameter gelesen wird. Prüfe außerdem eine unbekannte URL.

**Arbeitsschritte:**

1. Richte Routen für die Aufgabenübersicht, das Erstellen und das Bearbeiten einer Aufgabe ein.
2. Ergänze in der Aufgabenübersicht mit `Link` eine Navigation zum Erstellen.
3. Ergänze bei jedem Todo einen Link zur passenden Bearbeitungsroute.
4. Lies in der Bearbeitungsansicht `todoId` mit `useParams` aus.
5. Ermittle anhand dieser ID das zu bearbeitende Todo und zeige dessen Daten im vorhandenen Bearbeitungsformular an.
6. Ergänze eine `*`-Route für eine Not-Found-Ansicht.
7. Prüft direkte URL-Aufrufe sowie die Navigation innerhalb der Anwendung.

### Query-Parameter

Route-Parameter sind Teil des URL-Pfads und identifizieren häufig eine bestimmte Ressource. Zusätzliche Einstellungen einer Ansicht können dagegen als **Query-Parameter** an die URL angehängt werden.

Eine Kursübersicht könnte beispielsweise nach einer Kategorie gefiltert werden:

``` text
/courses?category=programming
```

Mehrere Query-Parameter werden mit `&` verbunden:

``` text
/courses?category=programming&sort=title
```

Der Teil vor `?` ist weiterhin der Pfad der Route:

``` text
/courses
```

Die Werte nach `?` verändern nicht, welche Route ausgewählt wird. Sie
können stattdessen beeinflussen, **wie die gewählte Ansicht dargestellt
wird**.

``` text
/courses/2
         ↑
         Route-Parameter:
         Welcher Kurs?

/courses?category=programming&sort=title
         ↑
         Query-Parameter:
         Wie soll die Kursliste angezeigt werden?
```

React Router stellt dafür den Hook `useSearchParams` bereit:

``` jsx
import { useSearchParams } from "react-router-dom";

function CourseCatalogPage() {
    const [searchParams] = useSearchParams();

    const category = searchParams.get("category") ?? "all";
    const sort = searchParams.get("sort") ?? "title";

    return (
        <>
            <p>Kategorie: {category}</p>
            <p>Sortierung: {sort}</p>
        </>
    );
}
```

`searchParams.get("category")` liest den Wert des Query-Parameters
`category`. Ist der Parameter nicht vorhanden, liefert `get()` den Wert `null`. Im Beispiel verwenden wir deshalb mit `??` einen Standardwert.

Query-Parameter können auch verändert werden:

``` jsx
import { useSearchParams } from "react-router-dom";

function CourseFilters() {
    const [searchParams, setSearchParams] = useSearchParams();

    const category = searchParams.get("category") ?? "all";

    function handleCategoryChange(event) {
        const nextCategory = event.target.value;

        setSearchParams({
            category: nextCategory,
        });
    }

    return (
        <>
            <label htmlFor="course-category">Kategorie</label>
            <select
                id="course-category"
                value={category}
                onChange={handleCategoryChange}
            >
                <option value="all">Alle</option>
                <option value="programming">Programmierung</option>
                <option value="design">Design</option>
            </select>
        </>
    );
}
```

Die Filterauswahl wird dadurch Teil der URL. Wird beispielsweise
"Programmierung" ausgewählt, kann die URL so aussehen:

``` text
/courses?category=programming
```

Dadurch kann eine bestimmte gefilterte Ansicht direkt über ihre URL aufgerufen werden.

Im Beispiel wird nur ein Query-Parameter verwendet. Werden mehrere Query-Parameter kombiniert, müssen beim Ändern eines Werts die übrigen Werte erhalten bleiben. Genau dieses Verhalten setzt ihr später in der TodoApp um.

> **Merke:** Route-Parameter beschreiben häufig, **welche Ressource oder Ansicht** gemeint ist. Query-Parameter beschreiben häufig, **wie eine Ansicht gefiltert, sortiert oder dargestellt** werden soll.

In Kapitel 6 haben wir Statusfilter und Suchtext noch mit lokalem React-State umgesetzt. Nun soll die URL selbst diese Werte beschreiben. Dadurch wird beispielsweise aus dem bisherigen Filter-State `status` der Query-Parameter `?status=open`.

### ✏️ Arbeitsauftrag 9.2: Filter, Suche und Sortierung über Query-Parameter abbilden

**Sozialform:** Teamarbeit  
**Ziel:** Ihr übertragt Filter-, Such- und Sortierwerte der TodoApp in Query-Parameter, damit eine bestimmte Aufgabenübersicht über ihre URL beschrieben werden kann.

**Zugehörige Issues:** **F06 Aufgaben filtern** und **F07 Aufgaben sortieren**. Die bereits umgesetzten Funktionen werden um URL-basierte Zustände erweitert.

**User Story:** Als Benutzer:in möchte ich Filter, Suche und Sortierung in der URL wiederfinden, damit ich eine bestimmte Ansicht der Aufgabenübersicht direkt aufrufen und weitergeben kann.

**Akzeptanzkriterien:** Der Statusfilter, der Suchtext und die Sortierung werden über Query-Parameter abgebildet. Beim direkten Aufruf einer URL werden die entsprechenden Werte in der Oberfläche übernommen. Änderungen an Filter, Suche oder Sortierung aktualisieren die URL, ohne die Seite vollständig neu zu laden.

Beispiel:

```text
/todos?status=open&search=react&sort=dueDate
```

**Technische Tasks:**

- [ ] Query-Parameter mit `useSearchParams` lesen
- [ ] Statusfilter aus `status` ableiten
- [ ] Suchtext aus `search` ableiten
- [ ] Sortierung aus `sort` ableiten
- [ ] Änderungen mit `setSearchParams` in die URL schreiben
- [ ] sinnvolle Standardwerte für fehlende Parameter verwenden

**Testszenarien:** Prüfe `/todos` ohne Query-Parameter sowie URLs mit einzelnen und kombinierten Parametern. Teste beispielsweise `/todos?status=open`, `/todos?search=react` und `/todos?status=done&sort=dueDate`. Ändere anschließend die Werte über die Benutzeroberfläche und kontrolliere, ob die URL entsprechend aktualisiert wird.

**Arbeitsschritte:**

1. Ersetze den bisherigen lokalen State für den Statusfilter durch den Query-Parameter `status`.
2. Lies `status` mit `useSearchParams` aus und verwende `all` als Standardwert, wenn der Parameter fehlt.
3. Übertrage anschließend den Suchtext auf den Query-Parameter `search`.
4. Übertrage die Sortierung auf den Query-Parameter `sort`.
5. Aktualisiere die Query-Parameter, wenn Benutzer:innen Filter, Suche oder Sortierung verändern.
6. Achte beim Ändern eines Parameters darauf, die anderen vorhandenen Query-Parameter beizubehalten.
7. Prüfe, ob ein direkter Aufruf einer URL wie `/todos?status=open&search=react` sofort die entsprechende gefilterte Ansicht zeigt.
8. Prüfe abschließend, ob Filterung und Sortierung weiterhin nur die sichtbare Liste verändern und nicht den gespeicherten Todo-State.

---

## 10. Styling in React

In diesem Abschnitt gestalten wir die Benutzeroberfläche einer React-Anwendung. Dabei geht es nicht nur um Farben oder Schriftarten.
**Styling** legt fest, wie Inhalte angeordnet, hervorgehoben und auf
unterschiedlichen Bildschirmgrößen dargestellt werden. Die in Kapitel 2 behandelten UI/UX-Grundsätze bleiben dabei wichtig: Eine gestaltete Oberfläche soll verständlich, bedienbar und konsistent bleiben.

Für React gibt es unterschiedliche Styling-Strategien. Die älteren Unterlagen unterscheiden insbesondere **klassisches CSS**, **CSS Modules**, **CSS-in-JavaScript mit Styled Components**, **Utility-First CSS mit Tailwind CSS** sowie vorgefertigte **UI-Bibliotheken**. In diesem Kapitel lernen wir diese Ansätze zunächst anhand kleiner Beispiele kennen. Für die TodoApp verwenden wir anschließend **CSS Modules und CSS-Variablen**.

### Styling-Strategien im Überblick

React schreibt keine bestimmte Styling-Methode vor. Welche Strategie geeignet ist, hängt vom Projekt, dem Team und den technischen Anforderungen ab.

| Ansatz | Grundidee | Typische Eigenschaft |
| --- | --- | --- |
| Klassisches CSS | CSS-Regeln liegen in normalen `.css`-Dateien | einfach, aber Klassen wirken standardmäßig global |
| CSS Modules | CSS wird componentbezogen importiert | lokale Klassennamen vermeiden Namenskollisionen |
| Styled Components | CSS wird mit JavaScript-Components verbunden | Styling und Component liegen eng beieinander |
| Utility-First CSS | kleine Hilfsklassen werden direkt in JSX kombiniert | schnelles Styling ohne viele eigene CSS-Regeln |
| UI-Bibliothek | fertige UI-Components werden importiert | konsistentes UI mit wenig eigener Grundarbeit |

Eine **UI-Bibliothek** stellt bereits gestaltete und häufig anpassbare Components wie Buttons, Dialoge, Formulare oder Navigationselemente bereit. Beispiele sind Material UI, Mantine, Chakra UI, Ant Design oder React Bootstrap. Solche Bibliotheken können die Entwicklung beschleunigen, legen aber auch bestimmte Strukturen und Designentscheidungen fest.

Beispielsweise könnte ein Button aus einer UI-Bibliothek so verwendet werden:

```jsx
import Button from "@mui/material/Button";

function SaveButton() {
    return <Button variant="contained">Speichern</Button>;
}
```

Die Bibliothek muss dafür zuvor als Abhängigkeit installiert werden. In der TodoApp verwenden wir jedoch keine vollständige UI-Bibliothek, sondern gestalten die vorhandenen Components selbst. Dadurch bleiben CSS-Grundlagen und die Verbindung zwischen Component und Styling sichtbar.

> **Merke:** React trennt nicht automatisch zwischen „richtigem" und
> „falschem" Styling. Unterschiedliche Strategien lösen unterschiedliche
> Probleme. Für ein Projekt sollte ein Team bewusst festlegen, welche
> Strategie verwendet wird.

### Klassisches CSS in React

Eine normale CSS-Datei kann in einer React-Anwendung importiert werden. Globale Grundregeln können beispielsweise in `index.css` liegen:

```css
/* index.css */
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f8fafc;
    color: #0f172a;
}
```

Die Datei wird beispielsweise in `main.jsx` importiert:

```jsx
import "./index.css";
```

Auch eine Component kann eine normale CSS-Datei importieren:

```jsx
// Alert.jsx
import "./Alert.css";

function Alert() {
    return (
        <div className="alert">
            <strong className="alert-title">Hinweis</strong>
            <p className="alert-message">
                Die Daten konnten nicht gespeichert werden.
            </p>
        </div>
    );
}

export default Alert;
```

```css
/* Alert.css */
.alert {
    padding: 1rem;
    border: 1px solid #cbd5e1;
    border-radius: 0.5rem;
}

.alert-title {
    display: block;
    margin-bottom: 0.25rem;
}

.alert-message {
    margin: 0;
}
```

In JSX verwenden wir `className` statt des HTML-Attributs `class`.

Das CSS funktioniert wie gewohnt. Ein wichtiger Unterschied zur gedanklichen Component-Grenze in React ist jedoch: Die CSS-Klassen einer normalen CSS-Datei sind **global verfügbar**. Eine zweite Datei könnte ebenfalls eine Klasse `.alert` definieren. Dann können sich Regeln gegenseitig beeinflussen.

```text
Alert.css                    Notification.css
.alert { ... }               .alert { ... }
        \                       /
         \                     /
          globaler Klassenname
```

Bei kleinen Anwendungen ist globales CSS gut handhabbar. Mit zunehmender Zahl an Components werden eindeutige Klassennamen und klare Zuständigkeiten jedoch wichtiger.

### CSS Modules

**CSS Modules** ermöglichen weiterhin normales CSS, behandeln
Klassennamen aber componentbezogen. Eine CSS-Module-Datei endet auf `.module.css`.

Wir ändern das vorherige Beispiel zu:

```text
Alert.jsx
Alert.module.css
```

```css
/* Alert.module.css */
.alert {
    padding: 1rem;
    border: 1px solid #cbd5e1;
    border-radius: 0.5rem;
}

.title {
    display: block;
    margin-bottom: 0.25rem;
}

.message {
    margin: 0;
}
```

Die Styles werden als JavaScript-Objekt importiert:

```jsx
// Alert.jsx
import styles from "./Alert.module.css";

function Alert() {
    return (
        <div className={styles.alert}>
            <strong className={styles.title}>Hinweis</strong>
            <p className={styles.message}>
                Die Daten konnten nicht gespeichert werden.
            </p>
        </div>
    );
}

export default Alert;
```

`styles.alert` verweist auf die CSS-Klasse `.alert` aus genau diesem CSS Module. Beim Build erzeugt das Werkzeug daraus einen eindeutigen Klassennamen. Dadurch kann eine andere Component ebenfalls eine eigene Klasse `.alert`, `.title` oder `.message` besitzen, ohne dass die Klassennamen miteinander kollidieren.

```text
Alert.module.css
.alert
   ↓
import styles from "./Alert.module.css"
   ↓
className={styles.alert}
   ↓
eindeutiger erzeugter Klassenname im Browser
```

CSS Modules verändern also nicht die CSS-Sprache selbst. Eigenschaften wie `display`, `padding`, `grid`, `flex`, Media Queries oder CSS-Variablen werden weiterhin wie gewohnt geschrieben.

> **Merke:** Normale CSS-Dateien eignen sich gut für globale
> Grundregeln. CSS Modules eignen sich für Styles, die zu einer
> bestimmten Component gehören.

### Globale Styles und Component-Styles kombinieren

Nicht jede CSS-Regel muss in einem CSS Module liegen. Für die TodoApp verwenden wir zwei Ebenen:

```text
src/
├── components/
│   ├── TodoItem.jsx
│   └── TodoItem.module.css
├── pages/
│   ├── TodoListPage.jsx
│   └── TodoListPage.module.css
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

`global.css` enthält beispielsweise:

- grundlegende Schrift und Farben,
- `box-sizing`,
- Hintergrundfarbe,
- globale CSS-Variablen.

Die CSS Modules enthalten dagegen das konkrete Layout einzelner Components oder Seiten.

```jsx
// main.jsx
import "./styles/global.css";
```

Diese Trennung hilft dabei, globale Designentscheidungen und lokale Component-Styles auseinanderzuhalten.

### CSS-Variablen für ein konsistentes Design

Wenn dieselbe Farbe oder derselbe Abstand an vielen Stellen verwendet wird, sollten Werte nicht immer wieder direkt eingetragen werden. **CSS Custom Properties**, meist CSS-Variablen genannt, speichern solche wiederverwendbaren Werte.

Globale Variablen können beispielsweise in `:root` definiert werden:

```css
/* global.css */
:root {
    --color-primary: #2563eb;
    --color-primary-hover: #1d4ed8;
    --color-surface: #ffffff;
    --color-background: #f8fafc;
    --color-text: #0f172a;
    --color-muted: #64748b;
    --color-danger: #b91c1c;

    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;

    --radius-sm: 0.375rem;
    --radius-md: 0.625rem;
}
```

Ein CSS Module kann diese Werte anschließend verwenden:

```css
/* TodoItem.module.css */
.item {
    padding: var(--space-md);
    border-radius: var(--radius-md);
    background-color: var(--color-surface);
}

.title {
    color: var(--color-text);
}

.dueDate {
    color: var(--color-muted);
}

.deleteButton {
    color: var(--color-danger);
}
```

Ändert sich später beispielsweise die Primärfarbe, muss sie nur an einer zentralen Stelle angepasst werden.

```text
--color-primary
      ↓
Button
Navigation
Link
Fokusdarstellung
      ↓
gemeinsame Designentscheidung
```

CSS-Variablen sind nicht React-spezifisch. Sie sind eine Funktion von CSS und können deshalb mit klassischem CSS, CSS Modules und vielen anderen Styling-Strategien kombiniert werden.

### Zustände sichtbar gestalten

Eine Benutzeroberfläche enthält unterschiedliche Zustände. Diese sollten nicht nur im React-State existieren, sondern auch visuell verständlich dargestellt werden.

Bei einem Todo kann beispielsweise der Erledigungsstatus die Darstellung beeinflussen:

```jsx
import styles from "./TodoItem.module.css";

function TodoItem({ todo }) {
    const itemClassName = todo.done
        ? `${styles.item} ${styles.done}`
        : styles.item;

    return (
        <article className={itemClassName}>
            <h2 className={styles.title}>{todo.title}</h2>
            <p>{todo.description}</p>
        </article>
    );
}
```

```css
.item {
    padding: var(--space-md);
    background-color: var(--color-surface);
}

.done {
    opacity: 0.65;
}

.done .title {
    text-decoration: line-through;
}
```

Hier wird die CSS-Klasse abhängig vom vorhandenen React-State zusammengesetzt. Der State selbst bleibt weiterhin die Datenquelle; CSS übernimmt nur die Darstellung.

Auch Interaktionszustände gehören zum Styling:

```css
.button {
    border: 0;
    border-radius: var(--radius-sm);
    padding: var(--space-sm) var(--space-md);
    background-color: var(--color-primary);
    color: white;
    cursor: pointer;
}

.button:hover {
    background-color: var(--color-primary-hover);
}

.button:focus-visible {
    outline: 3px solid #93c5fd;
    outline-offset: 2px;
}

.button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}
```

`hover` allein reicht nicht aus. Tastaturbenutzer:innen benötigen ebenfalls eine erkennbare Fokusdarstellung. Das Styling soll die in Kapitel 2 behandelte Bedienbarkeit unterstützen und nicht verschlechtern.

### Responsive Layouts

Die TodoApp soll auch auf kleineren Bildschirmen nutzbar bleiben. CSS kann Layouts an den verfügbaren Platz anpassen.

Ein einfaches Layout mit CSS Grid:

```css
.list {
    display: grid;
    gap: var(--space-md);
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
```

Mit einer Media Query kann die Darstellung auf kleinen Bildschirmen geändert werden:

```css
@media (max-width: 700px) {
    .list {
        grid-template-columns: 1fr;
    }
}
```

Auch Aktionsbereiche können flexibel umbrechen:

```css
.actions {
    display: flex;
    gap: var(--space-sm);
    flex-wrap: wrap;
}
```

Responsive Styling bedeutet nicht, für jedes Gerät eine eigene Oberfläche zu bauen. Stattdessen soll sich dieselbe Oberfläche sinnvoll an den verfügbaren Platz anpassen.

### ✏️ Arbeitsauftrag 10.1: Styling-Strategien vergleichen

**Sozialform:** Partnerarbeit
**Ziel:** Ihr setzt dieselbe kleine Component mit klassischem CSS und
CSS Modules um und vergleicht die beiden Ansätze.

Erstellt dafür eine neue kleine Prototype-Component `StatusMessage`. Sie soll unabhängig von der TodoApp entstehen, damit ihr euch zunächst auf die Styling-Technik konzentrieren könnt.

**Akzeptanzkriterien:** Die Component wird einmal mit einer normalen
CSS-Datei und einmal mit einem CSS Module gestaltet. Beide Varianten besitzen dieselbe sichtbare Darstellung. Ihr könnt erklären, wie sich der Gültigkeitsbereich der Klassennamen unterscheidet.

**Technische Tasks:**

- [ ] `StatusMessage` mit klassischem CSS gestalten
- [ ] normale CSS-Datei importieren
- [ ] dieselbe Component mit CSS Module umsetzen
- [ ] `styles`-Objekt und `className` verwenden
- [ ] Verhalten der Klassennamen im Browser vergleichen

**Testszenarien:** Verwende in zwei unterschiedlichen Components
denselben Klassennamen `.message`. Prüfe, wie sich normales CSS und CSS Modules dabei unterscheiden. Kontrolliere anschließend im Browser mit den Developer Tools die tatsächlich erzeugten Klassennamen.

**Arbeitsschritte:**

1. Erstelle eine Component `StatusMessage`, die eine Überschrift und einen kurzen Text darstellt.
2. Gestalte sie zunächst über `StatusMessage.css` und normale `className`-Werte.
3. Erstelle eine zweite Variante mit `StatusMessage.module.css`.
4. Importiere das CSS Module als `styles` und greife beispielsweise mit `styles.message` auf eine Klasse zu.
5. Verwende denselben CSS-Klassennamen testweise auch in einer zweiten Component.
6. Vergleicht, welche Auswirkungen globale CSS-Klassen haben und wie CSS Modules Namenskollisionen vermeiden.
7. Haltet in zwei bis drei Sätzen fest, welchen Ansatz ihr für componentbezogene Styles bevorzugen würdet und warum.

### CSS-in-JavaScript: Styled Components

Eine weitere Strategie verbindet Styling stärker mit JavaScript. Die Bibliothek **Styled Components** erzeugt React-Components, denen Styles direkt zugeordnet werden.

Nach der Installation:

```bash
npm install styled-components
```

kann beispielsweise ein gestalteter Button definiert werden:

```jsx
import styled from "styled-components";

const PrimaryButton = styled.button`
    border: 0;
    border-radius: 0.375rem;
    padding: 0.5rem 1rem;
    background-color: #2563eb;
    color: white;
`;

function SaveButton() {
    return <PrimaryButton>Speichern</PrimaryButton>;
}
```

Hier ist `PrimaryButton` gleichzeitig eine React-Component und ein gestaltetes `button`-Element. Styled Components kann außerdem JavaScript-Werte beziehungsweise Props für dynamische Styles verwenden.

Der Ansatz unterscheidet sich damit deutlich von CSS Modules:

```text
CSS Modules                     Styled Components
CSS bleibt in .css-Dateien      CSS wird über JavaScript definiert
className verbindet JSX/CSS     gestaltete Component wird verwendet
lokale Klassennamen             erzeugte lokale Styles
keine zusätzliche Runtime-      zusätzliche Bibliothek
Bibliothek nötig
```

Für die TodoApp setzen wir Styled Components nicht als Hauptstrategie ein. Ihr sollt den Ansatz aber erkennen und von CSS Modules unterscheiden können.

### Utility-First CSS: Tailwind CSS

Bei **Utility-First CSS** werden kleine, zweckbezogene CSS-Klassen direkt im Markup kombiniert. Tailwind CSS ist ein verbreitetes Beispiel für diesen Ansatz.

Eine Karte könnte beispielsweise so aussehen:

```jsx
function CourseCard({ title }) {
    return (
        <article className="rounded-lg bg-white p-4 shadow">
            <h2 className="text-lg font-semibold">{title}</h2>
        </article>
    );
}
```

Statt selbst Klassen wie `.card` oder `.title` zu definieren, werden vorhandene Utility-Klassen kombiniert.

Tailwind unterstützt unter anderem Layout, Abstände, Farben und responsive Varianten. Dafür wird Tailwind als zusätzliche Projektabhängigkeit eingerichtet. Der konkrete Installationsweg hängt von der verwendeten Tailwind- und Vite-Version ab und sollte deshalb mit der aktuellen Tailwind-Dokumentation durchgeführt werden.

Utility-First CSS verändert vor allem, **wo** Styling-Entscheidungen sichtbar werden:

```text
CSS Module
JSX: className={styles.card}
CSS: .card { padding: ...; }

Tailwind
JSX: className="p-4 rounded-lg ..."
```

Beide Ansätze können responsive und konsistente Oberflächen erzeugen. Sie organisieren die Styles jedoch unterschiedlich.

### Theme Provider und Dark/Light Mode -- Ausblick

Größere Styling-Lösungen und UI-Bibliotheken bieten häufig ein
**Theme**. Darin können gemeinsame Werte wie Farben, Abstände oder
Typografie zentral definiert werden. Ein Theme Provider stellt diese Designinformationen für darunterliegende Components bereit.

In React kann ein solcher Mechanismus beispielsweise auf der Context API aufbauen. Dadurch lässt sich unter anderem zwischen einem hellen und einem dunklen Theme wechseln.

Dieses Kapitel führt die Context API noch nicht ein. Für die TodoApp verwenden wir deshalb zunächst CSS-Variablen als einfache zentrale Designwerte.

Ein späterer Dark Mode könnte beispielsweise unterschiedliche Werte für dieselben Variablen bereitstellen:

```css
:root {
    --color-background: #f8fafc;
    --color-surface: #ffffff;
    --color-text: #0f172a;
}

[data-theme="dark"] {
    --color-background: #0f172a;
    --color-surface: #1e293b;
    --color-text: #f8fafc;
}
```

Die Components müssten ihre Farben dann nicht einzeln ändern, solange sie bereits die Variablen verwenden.

> **Merke:** Ein Theme beschreibt gemeinsame Designentscheidungen.
> CSS-Variablen sind eine einfache Möglichkeit, solche Werte zentral zu
> verwalten. Ein Theme Provider ist ein weiterführender React-Ansatz,
> der beispielsweise mit Context umgesetzt werden kann.

### ✏️ Arbeitsauftrag 10.2: TodoApp mit CSS Modules gestalten

**Sozialform:** Teamarbeit
**Ziel:** Ihr übertragt die Styling-Grundlagen auf die bestehende
TodoApp und setzt den Wireframe aus Kapitel 2 als konsistente, responsive Benutzeroberfläche um.

**Zugehöriges Issue:** `UI-01 TodoApp gestalten`. Legt dieses Issue im
Project an und verknüpft es mit dem vorhandenen Wireframe unter `docs/wireframes/`.

**User Story:** Als Benutzer:in möchte ich eine übersichtliche und
konsistent gestaltete TodoApp verwenden, damit Aufgaben, Zustände und Aktionen schnell erkennbar und auf unterschiedlichen Bildschirmgrößen gut bedienbar sind.

**Akzeptanzkriterien:** Die TodoApp verwendet globale CSS-Variablen für
wiederkehrende Designwerte und CSS Modules für componentbezogene Styles. Aufgabenliste, Formulare, Navigation, Filter und Aktionen sind konsistent gestaltet. Erledigte Aufgaben und Rückmeldungen sind visuell unterscheidbar. Tastaturfokus ist sichtbar. Die Anwendung bleibt auf einem schmalen Bildschirm nutzbar.

**Technische Tasks:**

- [ ] `src/styles/global.css` anlegen
- [ ] CSS-Variablen für Farben, Abstände und Radien definieren
- [ ] globale Grundregeln festlegen
- [ ] wichtige Components mit `.module.css`-Dateien gestalten
- [ ] Navigation und aktive/interaktive Zustände gestalten
- [ ] Todo-Status visuell darstellen
- [ ] Formulare und Validierungsrückmeldungen gestalten
- [ ] Loading-, Empty- und Error-Zustände gestalten
- [ ] sichtbare `:focus-visible`-Darstellung umsetzen
- [ ] responsives Layout prüfen
- [ ] Build und Linter ausführen

**Testszenarien:** Prüft die Aufgabenübersicht mit mehreren Todos und
ohne Todos. Testet ein erledigtes Todo, eine Validierungsfehlermeldung, Loading und Error. Navigiert ausschließlich mit der Tastatur durch Links, Formularfelder und Buttons. Verkleinert anschließend das Browserfenster auf eine schmale Ansicht und prüft, ob Inhalte lesbar und Aktionen bedienbar bleiben.

**Arbeitsschritte:**

1. Öffnet den Wireframe aus Kapitel 2 und legt fest, welche visuellen Entscheidungen ihr für Farben, Abstände, Typografie, Karten, Formulare und Aktionen benötigt.
2. Erstellt `src/styles/global.css` und importiert die Datei in `main.jsx`.
3. Definiert in `:root` mindestens Variablen für Primärfarbe, Hintergrund, Oberfläche, Text, gedämpften Text, Fehlerfarbe, Abstände und Radien.
4. Legt globale Grundregeln für `body`, `box-sizing`, Schrift und Hintergrund fest.
5. Erstellt für zentrale Components passende CSS Modules, beispielsweise `TodoItem.module.css`, `TodoList.module.css` und `TodoForm.module.css`.
6. Gestaltet Navigation, Filter, Suche, Sortierung, Formularfelder und Buttons so, dass ähnliche Elemente auch ähnlich aussehen.
7. Ergänzt eine sichtbare Darstellung für erledigte Todos. Der Status muss zusätzlich weiterhin inhaltlich beziehungsweise über die vorhandenen Bedienelemente erkennbar sein und darf nicht ausschließlich über Farbe vermittelt werden.
8. Gestaltet Validierungsfehler sowie Loading-, Empty- und Error-Zustände verständlich.
9. Ergänzt für interaktive Elemente einen deutlich sichtbaren Tastaturfokus.
10. Verwendet Flexbox, Grid, `flex-wrap` oder Media Queries, damit die Oberfläche auch auf schmalen Bildschirmen bedienbar bleibt.
11. Vergleicht das Ergebnis mit eurem ursprünglichen Wireframe und dokumentiert größere Abweichungen beziehungsweise begründete Verbesserungen.
12. Führt `npm run lint` und `npm run build` aus, erstellt einen Pull Request und führt ein Partner-Review durch.

### ✏️ Arbeitsauftrag 10.3: Styling-Ansätze einordnen

**Sozialform:** Partnerarbeit
**Ziel:** Ihr ordnet die kennengelernten Styling-Strategien ein und
begründet eine technische Entscheidung.

Betrachtet **klassisches CSS**, **CSS Modules**, **Styled Components**,
**Tailwind CSS** und eine **UI-Bibliothek**. Erstellt eine kurze
Vergleichstabelle mit den Kriterien:

- Wo werden Styles definiert?
- Sind Styles global oder componentbezogen?
- Wird eine zusätzliche Bibliothek benötigt?
- Wie eng liegen Styling und JSX beieinander?
- Welche Vorteile seht ihr für ein kleines beziehungsweise größeres Projekt?

Beantwortet anschließend gemeinsam:

> Warum verwendet die TodoApp in diesem Lernprojekt CSS Modules und
> CSS-Variablen, obwohl auch andere Styling-Strategien möglich wären?

Eure Begründung soll sich auf mindestens drei der oben genannten Kriterien beziehen. Es gibt nicht für jedes Projekt dieselbe richtige Styling-Strategie; entscheidend ist eine nachvollziehbare und im Team konsistent umgesetzte Entscheidung.

### Zusammenfassung

Für das Styling einer React-Anwendung stehen unterschiedliche Strategien zur Verfügung:

```text
React-Component
      ↓
Wie soll sie gestaltet werden?
      ↓
┌──────────────────┬──────────────────┬──────────────────┐
│ klassisches CSS  │ CSS Modules      │ CSS-in-JS        │
│ globale Klassen  │ lokale Klassen   │ z. B. Styled     │
│                  │                  │ Components       │
└──────────────────┴──────────────────┴──────────────────┘
             ↓
      weitere Ansätze
             ↓
Utility-First CSS / UI-Bibliotheken
```

Für die TodoApp kombinieren wir **globale Grundregeln und CSS-Variablen** mit **CSS Modules für einzelne Components**. Damit bleiben zentrale Designwerte wiederverwendbar, während componentbezogene Klassennamen voneinander getrennt sind.

Styling ist dabei kein rein dekorativer letzter Schritt. Sichtbare Zustände, Fokusdarstellung, Kontrast, responsive Layouts und konsistente Bedienelemente unterstützen die Bedienbarkeit der Anwendung und verbinden damit die React-Umsetzung wieder mit den UI/UX-Grundsätzen aus Kapitel 2.

---

## 11. ToDo v1: Gesamtauftrag

**Sozialform:** 2er-Team  
**Projekt:** TodoApp  
**Ergebnis:** React-Frontend, das zunächst importierte JSON-Startdaten verwendet und nach Einführung von `useEffect` auf einen lokalen `json-server` umgestellt wird; dazu GitHub Issues und nachvollziehbarer Feature-Branch-/PR-Workflow.

Setzt die folgenden Features um. Teilt sie im Project Board in Issues und Tasks auf und priorisiert sie gemeinsam. Für den Lernblock gelten alle folgenden Punkte als Umfang von ToDo v1:

| ID / Feature | User Story | Abnahmekriterium |
| --- | --- | --- |
| **F01** Aufgaben anzeigen | Als Benutzer:in möchte ich meine Aufgaben sehen, damit ich einen Überblick habe. | ID, Titel, zukünftige Fälligkeit und Status sind sichtbar; die optionale Beschreibung wird angezeigt, wenn sie vorhanden ist; eine leere Liste besitzt einen Empty-State. |
| **F02** Aufgabe erstellen | Als Benutzer:in möchte ich eine Aufgabe anlegen, damit ich neue Tätigkeiten erfassen kann. | Ein nichtleerer Titel und ein Datum nach heute sind erforderlich; Beschreibung ist optional; ID wird vergeben und Done ist anfangs `false`; die neue Aufgabe erscheint nach dem Speichern. |
| **F03** Aufgabe bearbeiten | Als Benutzer:in möchte ich eine Aufgabe ändern, damit ich ihre Angaben aktualisieren kann. | Bestehende Werte sind vorausgefüllt; gültige Änderungen erscheinen in der Liste. |
| **F04** Aufgabe löschen | Als Benutzer:in möchte ich eine Aufgabe löschen, wenn ich sie nicht mehr benötige. | Die ausgewählte Aufgabe wird nach einer passenden Bestätigung aus der Liste entfernt. |
| **F05** Aufgabe erledigen | Als Benutzer:in möchte ich eine Aufgabe als erledigt markieren oder wieder öffnen. | Der Status kann umgeschaltet werden und wird sichtbar dargestellt. |
| **F06** Aufgaben filtern | Als Benutzer:in möchte ich Aufgaben nach Status filtern. | **Alle**, **Offen** und **Erledigt** liefern die erwarteten Aufgaben. |
| **F07** Aufgaben sortieren | Als Benutzer:in möchte ich Aufgaben nach Fälligkeit sortieren. | Auf- und absteigende Sortierung ist verfügbar und verändert den gespeicherten Aufgaben-State nicht. |

Berücksichtigt außerdem folgende Zustände:

- Beim Laden der Daten vom lokalen `json-server` wird ein Loading-Zustand angezeigt.
- Nach erfolgreichem Laden werden Aufgaben oder ein Empty-State angezeigt.
- Bei einem Ladefehler wird eine verständliche Meldung mit erneutem Ladeversuch angezeigt.
- Formularfehler werden an den jeweiligen Eingaben erkennbar.
- Die Anwendung bietet sinnvolle Navigation und eine Not-Found-Ansicht.

Ein GitHub Project verwaltet Project Items wie Issues und PRs, aber keine beliebigen Dateien wie ein Dateiordner. Deshalb liegen Wireframes und Prozessbeschreibungen versioniert im Repository; Issues und Project Items verlinken auf die Dateien.

### Definition of Ready und Definition of Done

Ein Issue ist **Ready**, wenn das Team es ohne grundlegende Rückfragen in die Umsetzung nehmen kann. Prüfe vor dem Verschieben nach **Ready**:

- Das Ziel und der Nutzen sind als verständliche User Story beschrieben.
- Der Umfang ist abgegrenzt: Es ist klar, was zum Issue gehört und was nicht.
- Die Akzeptanzkriterien sind konkret, beobachtbar und einzeln prüfbar.
- Normaler Ablauf, relevante Fehlerfälle und benötigte Zustände sind berücksichtigt.
- Die Tasks sind klein, verständlich und einem umsetzbaren Ergebnis zugeordnet.
- Priorität und zuständige Person sind festgelegt.
- Abhängigkeiten, offene Entscheidungen und Links zu benötigten Unterlagen sind geklärt.
- Es ist klar, wie die Umsetzung lokal geprüft werden kann, zum Beispiel mit Testdaten, einem manuellen Prüfschritt oder einem vorhandenen Test.

Fehlt ein Punkt, bleibt das Issue im **Backlog**, bis die fehlende Information ergänzt wurde. Die Definition of Ready verhindert, dass offene Anforderungen erst während der Implementierung entdeckt werden.

Die **Definition of Done v1** für ein React-Issue ist erst erfüllt, wenn die Umsetzung über einen Pull Request geprüft und integriert wurde:

- Die Akzeptanzkriterien sind erfüllt.
- Die Oberfläche ist verständlich und mit passenden Labels und Zuständen bedienbar.
- Code ist sinnvoll auf Components verteilt und formatiert.
- `npm run lint` und `npm run build` sind erfolgreich.
- Der Pull Request ist mit dem Issue verknüpft und wurde von einem Teammitglied anhand der Akzeptanzkriterien geprüft.
- Review-Kommentare sind bearbeitet oder begründet abgeschlossen.
- Der Pull Request wurde gemergt; erst danach wird das Issue im Board auf **Done** gesetzt.

### Projektabgabe

Zum Ende des Blocks enthält euer Repository:

- ein startbares React-Projekt,
- die implementierten ToDo-v1-Features,
- importierte JSON-Startdaten und anschließend eine funktionierende lokale Mock-API mit `json-server`,
- eine nachvollziehbare Component- und Projektstruktur,
- ein mit dem `TodoApp`-Repository verknüpftes GitHub Project mit Board- und Tabellenansicht,
- sieben Feature-Issues mit User Stories, Akzeptanzkriterien, Tasks, Prioritäten und Zuständigkeiten,
- Wireframes und Prozessbeschreibungen unter `docs/`, verlinkt in README und den zugehörigen Project Items bzw. Issues,
- eine dokumentierte Definition of Ready und Definition of Done,
- mehrere nachvollziehbare Feature-Branches und Pull Requests,
- erfolgreiche Lint- und Build-Prüfungen sowie
- eine README mit Startanleitung und kurzem Projektüberblick.

---
