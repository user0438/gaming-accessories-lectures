# Arbeitsauftrag – Webshop Frontend mit React & State Management

## Ausgangssituation

Im Rahmen von **SOF Vertiefung** entwickelt ihr im Laufe des Schuljahres einen vollständigen, individuellen Webshop. Nachdem ihr im ersten Themenblock (**01 CSS Frameworks & UI Components**) verschiedene CSS-Ansätze erprobt, Komponenten gestaltet und euer bevorzugtes CSS Framework ausgewählt habt, folgt nun der nächste zentrale Entwicklungsschritt: **die funktionale Frontend-Entwicklung mit React**.

Moderne Webanwendungen basieren auf einer modularen Komponentenarchitektur, reaktiver Zustandsverwaltung und der asynchronen Kommunikation mit Web-APIs. Um diesen Übergang von statischen HTML/CSS-Templates zu einer lebendigen Webapplikation strukturiert zu meistern, arbeiten wir zweistufig:

1. **Geführte Referenzimplementierung (Tutorial):** Ihr baut zunächst anhand des Projekts *„Gaming Accessoires“* schrittweise ein funktionierendes React-Frontend mit Produktübersicht, Warenkorb, modalen Dialogen und Checkout auf. Zentrale Architekturmuster und Kernkonzepte werden dabei gemeinsam im Unterricht erarbeitet und vertieft.
2. **Selbständige Anpassung & Transfer (Eigenes Thema):** Im Anschluss übertragt ihr diese Konzepte eigenverantwortlich auf euren **eigenen Webshop**. Ihr bindet euer gewähltes CSS-Framework ein, passt Mock-Daten und Backend an, plant ab dem Feature `QA-01` eigene GitHub Issues und erweitert gegebenenfalls den Shop um zusätzliche Features.

---

## Bezug zum Gesamtprojekt

Dieser Arbeitsauftrag realisiert **Meilenstein M2 – Webshop Frontend mit Mock-Daten** aus dem Gesamtprojekt und knüpft direkt an die bisherigen sowie kommenden Meilensteine an:

* **Rückblick – Meilenstein M1 (UI-Prototypen):** Ihr habt Tailwind CSS und ein zweites Framework (z. B. Bootstrap, Bulma, Open Props, Primer etc.) verglichen und erste Shop-Templates erstellt. Das von euch gewählte Framework und euer Gestaltungskonzept bilden die gestalterische Grundlage für euren eigenen Shop in diesem Block.
* **Fokus – Meilenstein M2 (Aktueller Auftrag):** Die statischen Entwürfe werden in wiederverwendbare React-Komponenten überführt. Produkte, Warenkorb und Bestellformulare werden über dynamischen State (`useReducer`, Context API, Custom Hooks) und eine Mock-REST-API gesteuert.
* **Ausblick – Meilenstein M3 (WebGL & 3D-Produktkonfigurator):** Die in diesem Block aufgebaute Komponentenstruktur bereitet die Einbindung des Three.js-Produktkonfigurators vor (z. B. dedizierter Platzhalter/Canvas auf der Produktdetailseite und Konfigurationszustände im Frontend-State).
* **Ausblick – Meilenstein M4 & M5 (Backend, REST-API & Persistenz):** Die hier verwendete Schnittstellenlogik (`fetch`, Lade- und Fehlerzustände) wird später nahtlos von der lokalen JSON-Mock-API auf ein vollwertiges C#/.NET REST-Backend mit relationaler Datenbank umgestellt.

---

## Arbeitsform und Zeitrahmen

Dieser Arbeitsauftrag wird als Einzelarbeit durchgeführt. Fachliche Diskussionen, gegenseitige Unterstützung bei der Fehlersuche und strukturierte Code Reviews sind ausdrücklich erwünscht.

Für den gesamten Themenblock stehen uns **6 Wochen** zur Verfügung:

* **4 Wochen** für die geführte Umsetzung des Tutorials und die gemeinsame Erarbeitung der Kernkonzepte im Unterricht
* **2 Wochen** für die selbständige Anpassung und den Transfer auf euer eigenes Webshop-Thema
* **1 Woche** für Präsentationen, Fachgespräche und die Überarbeitung eures Projekts basierend auf erhaltenem Feedback

Die wöchentliche Aufteilung:

* **Woche 1 (Tutorial):** ca. 2,5 Stunden Unterricht + ca. 1,5 Stunden eigenständige Arbeitszeit (Setup, API-Vertrag, Stylesheet & Wireframe-Analyse: `PLAN-01` bis `UX-01`)
* **Woche 2 (Tutorial):** ca. 2,5 Stunden Unterricht + ca. 1,5 Stunden eigenständige Arbeitszeit (Komponentenarchitektur & dynamische Produktdaten mit `useEffect`: `UI-01` & `API-02`)
* **Woche 3 (Tutorial):** ca. 2,5 Stunden Unterricht + ca. 1,5 Stunden eigenständige Arbeitszeit (Globaler Warenkorb-State mit `useReducer`, Context API & `Modal.jsx`: `CART-01`)
* **Woche 4 (Tutorial):** ca. 2,5 Stunden Unterricht + ca. 1,5 Stunden eigenständige Arbeitszeit (Dialog-Steuerung, Form Actions, `useHttp` & Tutorial-Abschluss: `CART-02`, `ORDER-01` & `QA-01`)
* **Woche 5 (Transfer Phase 1):** ca. 2,5 Stunden Unterricht + ca. 1,5 Stunden eigenständige Arbeitszeit (Eigenes Konzept, Mock-Daten & CSS-Framework)
* **Woche 6 (Transfer Phase 2):** ca. 2,5 Stunden Unterricht + ca. 1,5 Stunden eigenständige Arbeitszeit (Eigene funktionale Features & Peer Review)
* **Woche 7 (Transfer Phase 3 & Abschluss):** ca. 2,5 Stunden Präsentationen und Fachgespräche + ca. 1,5 Stunden Überarbeitung basierend auf Feedback (QA, Feedback-Überarbeitung, Doku & Review)

Der wöchentliche Gesamtaufwand beträgt ca. **4 Stunden** (insgesamt ca. **24 bis 28 Stunden**).

---

## Didaktisches Konzept: Unterricht & Tutorial

Die Erarbeitung folgt dem Prinzip aus *Input, praktischer Erprobung, gemeinsamer Reflexion und selbständigem Transfer*:

```text
┌────────────────────────────────────────────────────────────────────────┐
│                   GEMEINSAME UNTERRICHTSPHASE                          │
│  - Problemstellung analysieren & Architektur diskutieren               │
│  - Kernkonzepte gemeinsam entwickeln (State, Reducer, Actions, Hooks)  │
│  - Live-Coding & Diskussion typischer Stolpersteine                    │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                ANGELEITETE VERTIEFUNG (TUTORIAL)                       │
│  - Schrittweises Abarbeiten der Issues (PLAN-01 bis QA-01)             │
│  - Nutzung des Begleitdokuments frontend-tutorial.md                   │
│  - Nachschlagen in react_theory.md & Testen mit REST Client            │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│             SELBSTÄNDIGER TRANSFER (EIGENER WEBSHOP)                   │
│  - Ab QA-01: Eigenständige Issue-Definition im GitHub Project          │
│  - Eigene Daten (data/*.json), Bilder & eigenes Thema                  │
│  - Integration des CSS-Frameworks aus Block 01                         │
│  - Mindestens 2 eigene funktionale Erweiterungen                       │
│  - Qualitätssicherung, Testbericht, Dokumentation & Peer Review        │
└────────────────────────────────────────────────────────────────────────┘
```

* **Rolle des Tutorials:** dient als präziser roter Faden, technisches Nachschlagewerk und Sicherheitsnetz bei Fehlern oder Abwesenheiten.

---

## Lernziele

Nach Abschluss dieses Arbeitsauftrags könnt ihr:

* eine moderne Single-Page-Application mit **Vite und React** aufsetzen und strukturieren,
* Benutzeroberflächen nach dem **Component-Driven-Development** in modulare, wiederverwendbare Komponenten zerlegen,
* Daten unidirektional über **Props** weitergeben und Kindkomponenten über Callback-Funktionen anbinden,
* asynchrone API-Abfragen mit `fetch` und `useEffect` durchführen sowie Lade-, Erfolgs- und Fehlerzustände robust visualisieren,
* globale Anwendungszustände (Warenkorb, UI-Dialoge) mit **React Context** und dem **`useReducer`**-Muster zustandsgetreu verwalten,
* modale Fenster mit dem nativen HTML-Element `<dialog>` barrierearm und zustandsgesteuert implementieren,
* Formulare mit **React 19 Form Actions** (`useActionState`) validieren und strukturierte POST-Requests an ein Backend senden,
* wiederkehrende Datenlogik in **Custom Hooks** (z. B. `useHttp`) kapseln und abbrechen (`AbortController`),
* professionelles Projektmanagement mit **GitHub Projects**, **Issues**, User Stories und Akzeptanzkriterien durchführen,
* ab `QA-01` eigenständig neue Anforderungen in präzise GitHub Issues überführen und abarbeiten,
* bestehende Backend-Endpunkte und Mock-Daten (`JSON`) an ein eigenes Thema anpassen,
* euer in Block 01 gewähltes CSS-Framework erfolgreich in eine React-Architektur integrieren,
* und die Codequalität mittels **ESLint**, **Vite Build** und strukturierten **Testberichten** nachweisen.

---

## Abgabe und GitHub-Anforderungen

Die gesamte Entwicklung wird in eurem eigenen **GitHub-Repository** durchgeführt. Ein sauberer Git-Verlauf und ein gepflegtes GitHub Project sind wesentlicher Bestandteil der Bewertung.

### 1. Repository einrichten

Ihr startet mit dem bereitgestellten Repository [https://github.com/vfasti/gaming-accessories-start](https://github.com/vfasti/gaming-accessories-start) (enthält Backend und Testdaten, aber kein Frontend).

1. Erstellt auf GitHub ein neues, leeres Repository unter eurem Account (z. B. `webshop-project`).
2. Klont das Start-Repository lokal.
3. Ändert den Remote-URL von `origin` auf euer eigenes GitHub-Repository:

   ```powershell
   git remote -v
   git remote set-url origin https://github.com/<DEIN-BENUTZERNAME>/<DEIN-REPOSITORY>.git
   git remote -v
   git push -u origin HEAD
   ```

4. Richtet ein **GitHub Project** ein und verknüpft es mit eurem Repository.

### 2. Projektboard & Issue-Management

Verwendet im GitHub Project ein Board mit folgenden Spalten:

* `Backlog`
* `Ready`
* `In Progress`
* `Review`
* `Done`

**Wichtig:** Es befindet sich immer nur dasjenige Issue auf `In Progress`, an dem ihr gerade aktiv arbeitet!

* **Phase 1 (Tutorial):** Ihr legt exakt die im Tutorial definierten 11 Issues an (`PLAN-01`, `API-01`, `SETUP-01`, `STYLE-01`, `UX-01`, `UI-01`, `API-02`, `CART-01`, `CART-02`, `ORDER-01`, `QA-01`).
* **Phase 2 (Transfer):** **Ab dem Abschluss von `QA-01` müsst ihr selbständig neue Issues für euer eigenes Webshop-Thema erstellen.** Jedes dieser Issues muss eine User Story, messbare Akzeptanzkriterien und konkrete Checkbox-Tasks enthalten (z. B. `THEME-01`, `DATA-01`, `FEAT-01` etc.).

### 3. Verbindliche Commit-Konventionen

Jeder inhaltliche Arbeitsschritt erfordert einen aussagekräftigen Git-Commit mit Bezug zur Issue-ID. Sammel-Commits am Ende einer Arbeitsphase oder vor der Deadline führen zu Punkteabzug!

**Schema:**

```text
<typ>: <kurze Beschreibung> (<ISSUE-ID>)
```

Gültige Typen:

* `feat`: neue Funktionalität oder Komponente
* `fix`: Behebung eines Fehlers
* `style`: Anpassung von Layout, CSS oder Formatierung
* `refactor`: Code-Umstrukturierung ohne funktionale Änderung
* `docs`: Dokumentation, Testberichte oder README-Updates
* `chore`: Konfigurations- oder Tooling-Änderungen

**Gute Beispiele:**

* `feat: render dynamic accessory cards from API (API-02)`
* `feat: manage cart items with reducer and context (CART-01)`
* `fix: prevent empty order submission in checkout (ORDER-01)`
* `docs: add comprehensive test report and build verification (QA-01)`
* `feat: customize mock data for vintage watch catalog (DATA-01)`
* `style: integrate tailwind utility classes for product grid (THEME-01)`

**Nicht zulässig:** `update`, `working`, `changes`, `commit`, `fertig`, `fix bug`.

### 4. Empfohlene Repository-Struktur am Ende des Projekts

```text
/
├── README.md                          # Zentrale Projektdokumentation & Startanleitung
├── docs/
│   ├── api-contract.md                # Dokumentation der REST-Schnittstellen (API-01)
│   ├── test-report-tutorial.md        # QA-Bericht Referenzprojekt (QA-01)
│   ├── test-report-custom-shop.md     # QA-Bericht eigener Webshop
│   └── reflexion.md                   # Persönliche Reflexion & Ausblick auf M3
├── backend/                           # Node.js Express Backend
│   ├── app.js                         # Server & REST-Routen
│   ├── data/                          # JSON-Daten (Produkte, Bestellungen)
│   ├── public/images/                 # Produktbilder (Gaming & eigenes Thema)
│   └── tests/                         # .http Testdateien für REST Client
└── frontend/                          # Vite + React Webanwendung
    ├── package.json
    ├── vite.config.js
    ├── index.html
    ├── public/                        # Statische Assets (Favicon, Logo)
    └── src/
        ├── main.jsx                   # Einstiegspunkt
        ├── App.jsx                    # Root-Komponente
        ├── index.css                  # Globales Stylesheet / CSS-Framework
        ├── assets/                    # Bilder, Logos, Icons
        ├── components/                # UI- & Fach-Komponenten
        │   ├── Header.jsx
        │   ├── Products.jsx           # Produktliste
        │   ├── ProductItem.jsx        # Einzelproduktkarte
        │   ├── Cart.jsx               # Warenkorb-Dialog
        │   ├── CartItem.jsx
        │   ├── Checkout.jsx           # Bestell-Dialog
        │   └── UI/                    # Wiederverwendbare Basis-Komponenten
        │       ├── Button.jsx
        │       ├── Input.jsx
        │       └── Modal.jsx
        ├── hooks/                     # Custom Hooks (z. B. useHttp.js)
        ├── store/                     # Context & Reducer State-Management
        │   ├── CartContext.jsx
        │   └── UserProgressContext.jsx
        └── utils/                     # Hilfsfunktionen (z. B. formatting.js)
```

---

## Erwartungen an die Arbeitsweise

Da es sich um **SOF Vertiefung** handelt, steht die professionelle Arbeits- und Denkweise im Vordergrund:

* **Eigenständigkeit & Problemlösung:** Bei Fehlermeldungen (in der Browser-Konsole, im Terminal oder bei ESLint) analysiert ihr die Ursache systematisch, nutzt Dokumentationen und Debugging-Tools (`console.log`, React Developer Tools, Breakpoints), bevor ihr Hilfe anfordert.
* **Codeverständnis:** Verwendet keinen Code, den ihr nicht erklären könnt. Dies gilt insbesondere für Codebeispiele aus dem Tutorial oder KI-Tools. In den Fachgesprächen und Reviews müsst ihr jede Zeile eures Codes begründen können.
* **Verantwortungsvoller KI-Einsatz:** KI-Assistenten dürfen/sollen als Tutor, zur Erklärung von Konzepten oder zur gezielten Fehlersuche verwendet werden. Blindes Copy-Paste von KI-Code ohne Verständnis führt zu Problemen bei den Fachfragen und der individuellen Anpassung.
* **Kontinuierlicher Arbeitsfortschritt:** Arbeitet wöchentlich kontinuierlich an eurem Projekt. Die Commit-Historie muss die Entwicklungsschritte über alle 6 Wochen hinweg transparent widerspiegeln.
* **Feedbackkultur:** Gebt Mitschüler:innen konstruktives Feedback bei Code Reviews und setzt erhaltenes Feedback nachweislich in eurem Code um.

---

## Beurteilung & Bewertungsvorlage

Es gibt keinen klassischen schriftlichen Test. Die Beurteilung erfolgt anhand des **kontinuierlichen Arbeitsprozesses**, der **technischen Qualität der Umsetzung**, der **selbständigen Anpassung** sowie eines **Code Reviews / Fachgesprächs**.

Insgesamt können **60 Punkte** erreicht werden:

* **Teil A: Tutorial, React-Grundlagen & Entwicklungsprozess (30 Punkte)**
* **Teil B: Selbständige Anpassung (Transfer), eigene Issues, Präsentationen & Fachgespräch (30 Punkte)**

---

### Teil A – Tutorial, React-Grundlagen & Entwicklungsprozess

| Bereich | Max. | Erreicht | Erwartung |
| :--- | :---: | :---: | :--- |
| **Selbstständigkeit & Lernprozess** | **6** | | Arbeitet im Unterricht mit oder das Tutorial zielstrebig durch; nutzt `react_theory.md` und Dokumentationen; analysiert Fehlermeldungen eigenständig. |
| **Praktische Umsetzung des Tutorials (`PLAN-01` bis `QA-01`)** | **6** | | Alle Tutorial-Issues sind vollständig und funktional umgesetzt: REST-API-Anbindung, dynamische Produktkarten, modaler Warenkorb mit Mengenanpassung, funktionierender Checkout-Dialog mit Datenübermittlung. |
| **Git / GitHub Project Workflow (`PLAN-01` bis `QA-01`)** | **6** | | GitHub Project Board gepflegt (Issues durchlaufen alle Spalten); regelmäßige, aussagekräftige Commits gemäß Konvention mit referenzierter Issue-ID; kein nachträglicher Sammel-Commit. |
| **Codequalität, Linting & Build** | **6** | | Saubere Datei- und Komponentenstruktur; Trennung von Darstellung und Logik; Einhaltung der React-Best-Practices; `npm run lint` wirft 0 Fehler/Warnungen; `npm run build` erzeugt fehlerfreien Produktions-Build. |
| **Qualitätssicherung & Testdokumentation (`QA-01`)** | **6** | | Vollständiger, aussagekräftiger Testbericht in `docs/test-report-tutorial.md`; alle Testfälle (Erfolg, Validierungsfehler, Serverfehler, Tastatursteuerung, Responsive) sauber dokumentiert. |
| **Zwischensumme Teil A** | **30** | | |

---

### Teil B – Selbständige Anpassung (Transfer), eigene Issues, Präsentationen & Fachgespräch

In Woche 7 (3. Dezember 2026) findet eine **Präsentation und Fachgespräch** statt, in dem ihr euren eigenen Webshop präsentiert und die Umsetzung eurer Issues erläutert. Die Bewertung erfolgt anhand der folgenden Kriterien:

| Bereich | Max. | Erreicht | Erwartung |
| :--- | :---: | :---: | :--- |
| **Eigenständige Projektplanung ab `QA-01`** | **5** | | Hat ab `QA-01` selbständig mindestens 3 neue, hochwertige Issues mit präzisen User Stories, Akzeptanzkriterien und Tasks für den eigenen Shop im GitHub Project angelegt und nachvollziehbar abgearbeitet. |
| **Fachlicher Transfer & eigenes Thema (Mock-Daten & Backend)** | **5** | | Eigenes individuelles Produktthema überzeugend umgesetzt; Mock-Daten im Backend (`data/*.json`) strukturiert erweitert/angepasst; eigene ansprechende Produktbilder (`public/images/`) integriert; REST-Tests angepasst. |
| **UI/UX & CSS-Framework-Integration aus M1** | **5** | | Das in Block 01 gewählte CSS-Framework (z. B. Tailwind CSS oder Alternative) wurde erfolgreich und sauber in die React-Anwendung integriert; konsistentes Corporate Design; responsive Darstellung auf Desktop, Tablet und Smartphone. |
| **Eigene funktionale Erweiterungen** | **6** | | Mindestens zwei eigenständige funktionale Features über das Tutorial hinaus sauber implementiert (z. B. Kategoriefilter, Suchfunktion, Produktdetail-Modal, Mengeneditor im Warenkorb, Bestandsanzeige, Rabattcode etc.). |
| **Dokumentation, Reflexion & Bezug zum Gesamtprojekt** | **4** | | Aussagekräftige Root-`README.md` mit Startanleitung und Feature-Übersicht; nachvollziehbarer Testbericht des eigenen Shops; fundierte Reflexion in `docs/reflexion.md` mit konkretem Ausblick auf Meilenstein M3 (3D-Modell). |
| **Technisches Verständnis & Fachgespräch** | **5** | | Kann im Fachgespräch den Code, die State-Verwaltung und die Architektur überzeugend präsentieren; beantwortet fachliche Vertiefungsfragen souverän; nimmt Feedback konstruktiv auf. |
| **Zwischensumme Teil B** | **30** | | |

---

### Feedback als fester Bestandteil des Entwicklungsprozesses

Im Laufe der Transferphase (nach Umsetzung der ersten eigenen Features in Woche 6) führt ihr gegenseitige **Peer Reviews** durch. Mindestens eine konstruktive Rückmeldung aus dem Review oder aus den Unterrichtsbesprechungen muss in der Transfer-Abschlussphase nachweislich in eurem Code überarbeitet werden.

Dokumentiert diese Überarbeitung transparent im Commit-Verlauf, zum Beispiel:

```text
refactor: improve keyboard accessibility in cart modal based on peer review (REFACTOR-01)
```

---

## Wochenweise Planung

Der Ablauf gliedert sich in zwei aufeinander aufbauende Phasen:

* **Wochen 1 bis 4 (4 Wochen):** Geführtes Tutorial *Gaming Accessoires* & gemeinsame Erarbeitung der React-Architektur im Unterricht
* **Wochen 5 bis 7 (2 bis 3 Wochen):** Selbständige Anpassung & Transfer auf das eigene Webshop-Thema (Start ab `QA-01`)

```text
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│ WOCHE 1: Setup, API-Vertrag, Stylesheet & Wireframe-Analyse (PLAN-01 bis UX-01)               │
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WOCHE 2: Komponentenarchitektur & dynamische Produktdaten mit useEffect (UI-01 & API-02)       │
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WOCHE 3: Globaler Warenkorb-State mit useReducer, Context API & Modal.jsx (CART-01)            │
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WOCHE 4: Dialog-Steuerung, Form Actions, useHttp & Tutorial-Abschluss (CART-02, ORDER-01, QA) │
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ─────────── MEILENSTEIN-CHECKPOINT: TUTORIAL VOLLSTÄNDIG ABGESCHLOSSEN ────────────────────────│
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WOCHE 5: Transfer Phase 1 – Eigenes Konzept, Mock-Daten & CSS-Framework (Start eigene Issues)  │
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WOCHE 6: Transfer Phase 2 – Eigene Features, Filter/Suche & Peer Review (FEAT-01, FEAT-02)     │
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WOCHE 7: Transfer Phase 3 – QA, Feedback-Refactoring, Doku & Fachgespräche (QA-02, REFACTOR)   │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### Woche 1: Setup, API-Vertrag, Stylesheet & Wireframe-Analyse

In der ersten Woche legen wir das Fundament. Wir analysieren das Backend, klären die API-Schnittstellen, setzen das Vite-Projekt auf und leiten die künftige Komponentenstruktur aus dem Wireframe ab.

#### Gemeinsame Unterrichtsinhalte & Erarbeitung

* **REST-API & HTTP-Inspektion:** Analyse der REST-Endpunkte im Backend (`GET /accessories`, `GET /images/:name`, `POST /orders`) mittels VS Code REST Client (`.http`-Dateien). Diskussion von Statuscodes (200, 201, 400), Headern und JSON-Strukturen.
* **Moderne Frontend-Toolchain:** Warum Vite? Vergleich zu klassischen Bundlern; Funktionsweise von Hot Module Replacement (HMR) und ES-Modulen.
* **Globales Styling & Asset-Handling:** Einbindung des bereitgestellten Stylesheets `assets/index.css` und Bereitstellung statischer Assets (Logos in `public/` und `src/assets/`).
* **UX & Wireframe-Analyse:** Auswertung des vorgegebenen Wireframes; Identifikation künftiger Komponenten, hierarchischer Strukturen und Layout-Bereiche.

#### Praktische Aufgaben im Tutorial

1. `PLAN-01`: GitHub Project Board anlegen, Spalten konfigurieren und die 11 Tutorial-Issues im Backlog erfassen.
2. `API-01`: HTTP-Requests in `backend/tests/` ausführen und den Schnittstellenvertrag in `docs/api-contract.md` dokumentieren.
3. `SETUP-01`: Vite-React-Projekt mit `npm create vite@latest frontend -- --template react` erstellen, Abhängigkeiten installieren und Logos bereitstellen.
4. `STYLE-01`: Das vorbereitete Stylesheet `assets/index.css` in das Frontend integrieren und die globale CSS-Struktur verstehen.
5. `UX-01`: Wireframe-Analyse durchführen und Komponentenstruktur ableiten (Erkenntnisse direkt im GitHub-Issue festhalten).

#### Wochenergebnis (Definition of Done Woche 1)

* Das Vite-Frontend startet fehlerfrei unter `http://localhost:5173` und bindet Logo sowie Stylesheet korrekt ein.
* Der Schnittstellenvertrag ist in `docs/api-contract.md` festgehalten.
* Das GitHub Project Board ist eingerichtet; Issues `PLAN-01` bis `UX-01` stehen auf `Done` mit zugehörigen Commits.

---

### Woche 2: Komponentenarchitektur & dynamische Produktdaten (`UI-01` & `API-02`)

In der zweiten Woche bauen wir die Komponentenstruktur auf und verbinden sie direkt mit der REST-API: Zuerst werden die UI-Komponenten mit statischen Props aufgebaut (`UI-01`), danach erfolgt das asynchrone Laden der Produktdaten vom Backend (`API-02`).

#### Gemeinsame Unterrichtsinhalte & Erarbeitung

* **Komponentenorientierung in React (`UI-01`):** Trennung von Zuständigkeiten (Single Responsibility); Komponenten als wiederverwendbare Funktionen; JSX-Syntax vs. reines HTML.
* **Props & Datenweitergabe:** Unidirektionaler Datenfluss von Eltern- zu Kindkomponenten; Destructuring von Props; `children`-Prop für flexible Container (wie `Button.jsx`).
* **Asynchrones Datenladen mit `useEffect` (`API-02`):** Warum darf ein Fetch-Call nicht direkt im Body einer Komponente stehen? Render-Zyklen und Seiteneffekte (Side Effects); Abhängigkeits-Array (`deps`) verstehen und Endlosschleifen vermeiden.
* **UI-Zustände (State Machine Light):** Strukturierung der drei unverzichtbaren Zustände jeder API-Abfrage:
  1. *Loading State:* Ladeanzeige („Lade Produkte...“) während der Netzwerk-Laufzeit.
  2. *Success State:* Rendern der empfangenen Daten als interaktive Liste.
  3. *Error State:* Saubere Fehlerbehandlung und verständliche Fehlermeldung bei Verbindungsabbrüchen oder HTTP-Fehlern (`Error`-Komponente).
* **Dynamische Medien & Formatierung:** Konstruktion von Bild-URLs ausgehend von der Backend-Origin (`http://localhost:3000/images/...`); Lokalisierte Währungsformatierung mit `Intl.NumberFormat` in `src/utils/formatting.js`.

#### Praktische Aufgaben im Tutorial

1. `UI-01`: Statische Komponentenstruktur aufbauen (`Header`, `Accessories`, `AccessoryItem`, `Button`) und mit statischen Beispieldaten testen; Vite-Beispieldateien entfernen.
2. `API-02`: Produktdaten asynchron per `fetch` vom Backend (`http://localhost:3000/accessories`) laden; `isLoading`- und `error`-State implementieren; Produktbilder und Preisformatierung einbinden; Serverausfall simulieren und Fehleranzeige testen.

#### Wochenergebnis (Definition of Done Woche 2)

* Die UI-Komponenten sind modular gegliedert und wiederverwendbar aufgebaut.
* Die Produktkarten werden dynamisch aus der Backend-Schnittstelle geladen und gerendert.
* Lade- und Fehlerzustände werden im Browser visuell ansprechend und fehlerfrei dargestellt.
* Issues `UI-01` und `API-02` sind mit aussagekräftigen Commits auf `Done` gesetzt.

---

### Woche 3: Globaler Warenkorb-State mit `useReducer`, Context API & `Modal.jsx` (`CART-01`)

In der dritten Woche etablieren wir die zentrale Geschäftslogik des Shops: Die Verwaltung des Warenkorbs über Komponenten- und Baumgrenzen hinweg sowie die Erstellung der wiederverwendbaren Dialogkomponente `Modal.jsx` und der Warenkorb-Ansichten.

#### Gemeinsame Unterrichtsinhalte & Erarbeitung

* **State Lifting vs. React Context:** Warum stößt das Weiterreichen von Callbacks und Props über mehrere Ebenen (Prop Drilling) an Grenzen? Architektur der React Context API (`createContext`, `useContext`).
* **Zustandsverwaltung mit dem Reducer-Muster (`useReducer`):** Warum komplexe, geschäftskritische Zustände nicht mit verteilten `useState`-Hooks verwaltet werden sollten.
* **Actions, Dispatch & Immutability:** Das Prinzip unveränderlicher Zustandstransformationen in JavaScript (`map`, `filter`, Spread-Operator); Modellierung der Aktionen `ADD_ITEM`, `REMOVE_ITEM` und `CLEAR_CART`.
* **Abgeleitete Werte (Derived State):** Warum die Gesamtartikelanzahl oder der Gesamtpreis nicht als separater State gespeichert, sondern deklarativ aus den `items` berechnet wird (`items.reduce(...)`).
* **Modale Dialogkomponente (`Modal.jsx`):** Erstellung der wiederverwendbaren Modal-Komponente mit dem nativen HTML5 `<dialog>`-Element und React `useRef` zur DOM-Steuerung (`showModal()` und `close()`). *Hinweis: `Modal.jsx` wird bereits in `CART-01` angelegt und von `Cart.jsx` eingebunden!*
* **Warenkorb-Komponenten:** Aufbau von `Cart.jsx` und `CartItem.jsx` zur Darstellung der Positionen und Gesamtsumme.

#### Praktische Aufgaben im Tutorial

1. `CART-01`: `CartContext.jsx` mit `useReducer` und `cartReducer` implementieren; `Modal.jsx` mit `<dialog>` und `useRef` erstellen; `Cart.jsx` und `CartItem.jsx` anlegen; Warenkorb-Badge im Header mit dynamischer Gesamtzahl (`items.reduce`) verknüpfen; „In den Warenkorb“-Buttons auf den Produktkarten funktional anbinden.

#### Wochenergebnis (Definition of Done Woche 3)

* Klick auf „In den Warenkorb“ erhöht reaktiv die Anzahl im Header-Badge.
* Mehrfaches Hinzufügen desselben Produkts erhöht die Menge (`quantity`), anstatt Duplikate anzulegen.
* Die Warenkorb-Zustandsverwaltung ist vollständig gekapselt und über den Custom Hook `useCart()` zugänglich.
* Die Komponenten `Modal.jsx`, `Cart.jsx` und `CartItem.jsx` sind erstellt und einsatzbereit.
* Issue `CART-01` ist mit sauberem Commit auf `Done`.

---

### Woche 4: Dialog-Steuerung, Form Actions, Custom Hook `useHttp` & Tutorial-Abschluss (`CART-02`, `ORDER-01` & `QA-01`)

In der vierten Woche vervollständigen wir das Referenzprojekt: Wir steuern den Dialog-Flow (`CART-02`), wickeln die Bestellung über React 19 Form Actions und den Custom Hook `useHttp` ab (`ORDER-01`) und schließen das Tutorial mit einer umfassenden Qualitätssicherung ab (`QA-01`).

#### Gemeinsame Unterrichtsinhalte & Erarbeitung

* **UI-Flow-State mit `UserProgressContext.jsx` (`CART-02`):** Zentrales Steuern der Dialogzustände (`'cart'`, `'checkout'`, `''`); Öffnen des Warenkorbs aus dem Header; Wechsel zwischen Warenkorb und Checkout ohne State-Verlust; Escape-Taste und Schließen über Backdrop.
* **Formulare & React 19 Form Actions (`ORDER-01`):** Moderne Formularabwicklung mit `useActionState`; Verzicht auf manuelles `e.preventDefault()`; Extrahieren von Werten via `FormData`; automatischer Ladezustand (`isPending`) für Submit-Buttons und Ladehinweise.
* **Eigene Hooks (Custom Hooks):** Architektur und Erstellung von `useHttp.js` zur Eliminierung redundanter Fetch- und Ladelogik; sauberes Request-Cleanup und Abbruch laufender Anfragen via `AbortController`.
* **Systematische Qualitätssicherung (`QA-01`):** Durchführung definierter Prüffälle (Gutfall, Validierungsfehler, Serverausfall, Responsive Design, Keyboard-Navigation); Ausführen von ESLint und Produktions-Build.

#### Praktische Aufgaben im Tutorial

1. `CART-02`: `UserProgressContext.jsx` anlegen; Warenkorb-Schaltfläche im Header verbinden; Schließ- und Wechselverhalten zwischen `Cart.jsx` und `Modal.jsx` funktional fertigstellen.
2. `ORDER-01`: Checkout-Dialog (`Checkout.jsx`) mit Eingabefeldern erstellen; Custom Hook `useHttp.js` für POST-Request implementieren; Formular über `useActionState` anbinden; erfolgreiche Bestellung bestätigen und Warenkorb leeren.
3. `QA-01`: Alle im Tutorial definierten Funktionsprüfungen durchführen; `npm run lint` und `npm run build` ausführen; Prüfergebnisse im strukturierten Testbericht `docs/test-report-tutorial.md` festhalten.

#### Wochenergebnis (Definition of Done Woche 4)

* Der Gaming-Webshop ist vom Laden der Produkte bis zum Absenden der Bestellung vollständig lauffähig.
* `npm run lint` meldet keine Fehler; `npm run build` erzeugt fehlerfrei den Produktionsordner `dist/`.
* `docs/test-report-tutorial.md` ist vollständig ausgefüllt.
* Alle 11 Tutorial-Issues (`PLAN-01` bis `QA-01`) stehen auf `Done`.
* **Das Referenzprojekt (Tutorial) ist damit erfolgreich abgeschlossen!**

---

### Woche 5: Transfer Phase 1 – Eigenes Konzept, Mock-Daten & CSS-Framework (Start eigene Issues)

Nun beginnt der entscheidende Transferteil von SOF Vertiefung: **die selbständige Übertragung auf euren eigenen Webshop**. Ihr verlasst das Gaming-Tutorial und entwickelt eure individuelle Webshop-Lösung.

#### WICHTIG: Eigenständiges Issue-Management ab hier!

Ab sofort gibt es keine vorgefertigten Tutorial-Issues mehr. **Ihr müsst selbständig im GitHub Project Board neue Issues mit User Stories, Akzeptanzkriterien und Tasks anlegen.**

#### Aufgaben dieser Woche

1. **Thema & Sortiment definieren:**
   * Legt euer individuelles Webshop-Thema fest (z. B. Sneaker, Vintage-HiFi, Sportbekleidung, Feinkost, Möbel etc. – basierend auf eurer Idee aus Block 01).
   * Erstellt mindestens 8–12 realistische Produkte mit Titel, Beschreibung, Preis und Bild.
2. **Backend-Daten anpassen (`DATA-01`):**
   * Passt `backend/data/available-accessories.json` (oder eine neue Datendatei) an euer Sortiment an.
   * Legt eure eigenen Produktbilder im Ordner `backend/public/images/` ab.
   * Prüft mit dem REST Client (`.http`), ob euer Backend die neuen Daten und Bilder fehlerfrei ausliefert.
3. **Integration des CSS-Frameworks aus Block 01 (`THEME-01`):**
   * Ersetzt das bisherige Gaming-Stylesheet durch euer in Block 01 gewähltes CSS-Framework (z. B. Tailwind CSS oder euer 2. Framework).
   * Installiert und konfiguriert das Framework im Ordner `frontend/` (z. B. `npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`).
   * Übertragt euer Corporate Design (Farben, Fonts, Header-Logo, Abstände) in die React-Komponenten.
4. **Backlog für eigene Features planen:**
   * Erstellt im GitHub Project die Issues für Woche 6 (z. B. Filterung, Suche, Produktdetailansicht).

#### Wochenergebnis (Definition of Done Woche 5)

* Das Backend liefert eure eigenen Produktdaten und Bilder aus.
* Das Frontend präsentiert euer eigenes Thema im Gewand eures gewählten CSS-Frameworks aus Block 01.
* Eigene Issues (mindestens `DATA-01` und `THEME-01`) sind angelegt, umgesetzt, committet und im Project Board gepflegt.
* Die Feature-Issues für Woche 6 sind im Status `Ready`.

---

### Woche 6: Transfer Phase 2 – Eigene Features, funktionale Erweiterungen & Peer Review

In dieser Woche hebt ihr euren Webshop durch eigene Funktionalitäten deutlich über das Tutorial hinaus und gebt euch gegenseitig Feedback.

#### Anforderungen an eigene Features

Ihr sollt **mindestens zwei signifikante funktionale Erweiterungen** aus folgendem Katalog (oder nach individueller Absprache mit der Lehrperson) selbständig planen und implementieren:

1. **Kategorie-Filterung:**
   * Produkte besitzen eine Kategorie (z. B. *Schuhe, Jacken, Accessoires*).
   * Filter-Buttons oder ein Dropdown im Frontend filtern die Produktliste reaktiv ohne Seiten-Reload.
2. **Live-Suche & Sortierung:**
   * Eingabefeld für Textsuche (filtert live nach Produktname oder Beschreibung).
   * Dropdown zur Sortierung (Preis aufsteigend/absteigend, Alphabetisch).
3. **Produktdetail-Modal / erweiterte Ansicht (Vorbereitung für M3):**
   * Klick auf eine Produktkarte öffnet ein detailliertes Ansichtsfenster mit zusätzlichen Attributen, Produktgalerie und Platzhalter-Bereich für den kommenden 3D-Konfigurator (Meilenstein M3).
4. **Variantenauswahl (Größe, Farbe, Material):**
   * Produkte können in verschiedenen Varianten gewählt werden, bevor sie in den Warenkorb gelegt werden.
   * Die gewählte Variante wird im Warenkorb und in der Bestellung korrekt abgebildet.
5. **Erweiterter Warenkorb:**
   * Möglichkeit, Produkte komplett per "Entfernen"-Button zu löschen (nicht nur schrittweise decrementieren).
   * Rabattcode-Feld mit clientseitiger Validierung und prozentualem Abzug auf die Gesamtsumme.
   * Bestandsprüfung (z. B. maximal 5 Stück pro Artikel verfügbar).

#### Arbeitsweise & Peer Review

* Arbeitet streng nach dem Issue-Workflow: Issue auf `In Progress` setzen → Umsetzen → Testen → Commit mit Issue-ID → Issue auf `Review` / `Done`.
* Achtet darauf, dass neuer State sauber in bestehende Reducer oder eigene Hooks integriert wird.
* Führt am Ende der Woche ein gegenseitiges **Peer Review** mit einem/einer Mitschüler:in durch und notiert euch konstruktives Feedback im Issue oder als Review-Kommentar.

#### Wochenergebnis (Definition of Done Woche 6)

* Mindestens zwei eigenständige Zusatz-Features sind vollständig und fehlerfrei im Shop integriert.
* Zu jedem Feature existiert ein eigenes GitHub Issue mit erfüllten Akzeptanzkriterien.
* Mindestens ein aussagekräftiges Peer Review wurde durchgeführt und dokumentiert.

---

### Woche 7: Transfer Phase 3 – QA, Feedback-Refactoring, Dokumentation & Fachgespräche

Die Abschlusswoche dient dem Feinschliff, der Qualitätssicherung, der Dokumentation und den individuellen Fachgesprächen. *(Bei einem 6-wöchigen Gesamtrahmen wird diese Phase kompakt mit Woche 6 verzahnt).*

#### Aufgaben dieser Phase

1. **Feedback-Einarbeitung (`REFACTOR-01`):**
   * Überarbeitet mindestens einen Aspekt eurer Anwendung basierend auf dem Feedback aus dem Peer Review oder dem Unterricht.
   * Kennzeichnet diesen Schritt mit einem aussagekräftigen Commit (z. B. `refactor: refine category filter layout based on peer feedback (REFACTOR-01)`).
2. **Qualitätssicherung & Eigener Testbericht (`QA-02`):**
   * Führt einen vollständigen Systemtest eures eigenen Shops durch.
   * Erstellt die Datei `docs/test-report-custom-shop.md` mit den Prüfergebnissen eurer neuen Features.
   * Führt `npm run lint` und `npm run build` aus – beide Befehle müssen fehlerfrei durchlaufen!
3. **Abschlussdokumentation (`README.md` & `docs/reflexion.md`):**
   * Eure `README.md` im Hauptverzeichnis muss enthalten:
     1. Name und Konzept eures eigenen Webshops.
     2. Verwendetes CSS-Framework und Begründung der Gestaltungsentscheidungen.
     3. Schritt-für-Schritt Startanleitung (Backend & Frontend starten).
     4. Übersicht über die implementierten Features (Tutorial + eigene Erweiterungen).
     5. Übersicht über die selbst erstellten Issues.
   * In `docs/reflexion.md` reflektiert ihr:
     * Welche Herausforderungen traten bei State-Management und React auf?
     * Wie funktionierte die Integration des CSS-Frameworks im Vergleich zu den statischen Templates aus M1?
     * **Konkreter Ausblick auf Meilenstein M3:** Wo und wie wird das 3D-Modell integriert? Welche Produktdaten müssen für den Konfigurator erweitert werden?
4. **Code Review & Fachgespräch:**
   * Fachgespräch (ca. 5–10 Minuten) mit der Lehrperson: Präsentation des Webshops, Code-Erklärung (Datenfluss, Reducer, Custom Hook) und Beantwortung von Vertiefungsfragen.

#### Wochenergebnis (Definition of Done Woche 7)

* Das Repository ist vollständig aufgeräumt, fehlerfrei baubar und vorbildlich dokumentiert.
* Alle Issues im GitHub Project stehen auf `Done`.
* Der Meilenstein M2 ist vollständig erreicht.

---

## Leitfaden: Eigene Issues ab `QA-01` erstellen

Damit ihr eine klare Vorstellung davon habt, wie professionelle Issues für Phase 2 aussehen müssen, findet ihr hier konkrete Vorlagen:

### Beispiel 1: Eigene Produktdaten & Sortiment (`DATA-01`)

```markdown
### `DATA-01` – Eigene Produktdaten und Bilder für Uhren-Webshop bereitstellen

**User Story**
Als Shop-Betreiber möchte ich mein eigenes Sortiment an mechanischen Uhren im Backend hinterlegen, damit Kunden im Frontend reale Produkte mit Bildern, Beschreibungen und Preisen betrachten können.

**Akzeptanzkriterien**
- `backend/data/available-accessories.json` enthält mindestens 8 reale Produkte meines Themas.
- Jedes Produkt besitzt eine eindeutige `id`, `name`, `price`, `description` und einen gültigen Bildpfad `image`.
- Passende, hochauflösende Bilder sind unter `backend/public/images/` gespeichert.
- Die HTTP-Requests in `backend/tests/` liefern die neuen Daten und Bilder fehlerfrei zurück.

**Tasks**
- [ ] Produktthema und 8 Produkte mit Texten und Preisen definieren.
- [ ] Bilder recherchieren/erstellen, optimieren und in `backend/public/images/` ablegen.
- [ ] JSON-Datei im Backend aktualisieren.
- [ ] REST Client Tests ausführen und Datenformat verifizieren.
- [ ] Änderungen committen und pushen.
```

### Beispiel 2: Integration des CSS-Frameworks aus Block 01 (`THEME-01`)

```markdown
### `THEME-01` – Tailwind CSS integrieren und Shop-Styling anpassen

**User Story**
Als Frontend-Entwickler möchte ich Tailwind CSS als mein in Meilenstein M1 gewähltes Framework einbinden, damit der Shop ein modernes, konsistentes und responsives Erscheinungsbild erhält.

**Akzeptanzkriterien**
- Tailwind CSS und PostCSS sind im Frontend installiert und über `vite.config.js` / PostCSS eingebunden.
- Header, Produktkarten, Buttons und Modals nutzen Tailwind-Utility-Klassen statt des alten Gaming-Stylesheets.
- Das Design spiegelt das eigene Thema wider (passende Farbpalette, Typografie, Abstände).
- Die Oberfläche ist auf Mobilgeräten (< 640px) und Desktops (> 1024px) einwandfrei bedienbar.

**Tasks**
- [ ] Tailwind-Pakete installieren und Konfigurationsdateien anlegen.
- [ ] `index.css` bereinigen und Tailwind-Direktiven einbinden.
- [ ] `Header.jsx` und `Button.jsx` mit Tailwind-Klassen gestalten.
- [ ] `AccessoryItem.jsx` / `ProductItem.jsx` responsiv mit Tailwind Grid stylen.
- [ ] Responsives Verhalten in den DevTools prüfen.
- [ ] Änderungen committen und pushen.
```

### Beispiel 3: Eigene Feature-Erweiterung – Kategoriefilter (`FEAT-01`)

```markdown
### `FEAT-01` – Reaktiv filterbare Produktkategorien implementieren

**User Story**
Als Kunde möchte ich Produkte nach Kategorien (z. B. Automatik, Chronograph, Taucheruhr) filtern können, um schnell die für mich relevanten Artikel zu finden.

**Akzeptanzkriterien**
- Die Produktdaten im Backend/Frontend enthalten ein Attribut `category`.
- Oberhalb der Produktliste wird eine Filterleiste mit Buttons für alle Kategorien sowie „Alle anzeigen“ gerendert.
- Der aktuell ausgewählte Filter wird optisch hervorgehoben (Active-State).
- Beim Klick auf eine Kategorie aktualisiert sich die Anzeige reaktiv ohne Neuladen der Seite.
- Befinden sich keine Produkte in einer Kategorie, wird ein verständlicher Hinweis ("Keine Produkte gefunden") angezeigt.

**Tasks**
- [ ] Kategorie-Attribut im Datenmodell und Backend ergänzen.
- [ ] Filter-Zustand (`selectedCategory`) in `Products.jsx` anlegen.
- [ ] Filter-Bar-Komponente erstellen und rendern.
- [ ] Produktliste basierend auf dem ausgewählten Filter filtern (`products.filter(...)`).
- [ ] Leeren Zustand (Empty State) gestalten.
- [ ] Änderungen testen, committen und pushen.
```

---

## Checkliste vor der finalen Abgabe

Bevor ihr euer Repository zur Beurteilung einreicht, kontrolliert gewissenhaft folgende Punkte:

* [ ] **Repository & Remote:** Euer GitHub-Repository ist öffentlich oder für die Lehrperson freigegeben; alle Branches sind gemergt; der `main`-Branch ist aktuell.
* [ ] **Startbarkeit:** Eine andere Person kann das Repository klonen, im Backend `npm install && npm start` und im Frontend `npm install && npm run dev` ausführen, und die Anwendung läuft auf Anhieb.
* [ ] **Tutorial-Abschluss:** Alle 11 Issues von `PLAN-01` bis `QA-01` sind im GitHub Project auf `Done`.
* [ ] **Eigene Issues:** Mindestens 3–5 eigene Issues (ab `QA-01`) mit User Stories, Kriterien und Tasks sind dokumentiert und auf `Done`.
* [ ] **Commit-Historie:** Regelmäßige, kontinuierliche Commits über alle 6 Wochen vorhanden; jede Commit-Nachricht folgt der Konvention `<typ>: ... (<ISSUE-ID>)`.
* [ ] **Eigenes Design & Framework:** Das CSS-Framework aus Block 01 ist integriert; kein unverändertes Gaming-Tutorial-Design mehr vorhanden.
* [ ] **Eigene Features:** Mindestens 2 wesentliche Erweiterungen funktionieren fehlerfrei.
* [ ] **Codequalität:** `npm run lint` meldet keine Fehler; `npm run build` erzeugt erfolgreich den `dist/`-Ordner.
* [ ] **Dokumentation:**
  * `README.md` mit Projektbeschreibung, Installationsanleitung und Feature-Auflistung vorhanden.
  * `docs/api-contract.md` vorhanden.
  * `docs/test-report-tutorial.md` und `docs/test-report-custom-shop.md` vollständig ausgefüllt.
  * `docs/reflexion.md` mit Reflexion und Ausblick auf Meilenstein M3 (3D-Modell) ausgearbeitet.
* [ ] **Fachgespräch:** Vorbereitung abgeschlossen; Code und Architektur können jederzeit live präsentiert und erklärt werden.
