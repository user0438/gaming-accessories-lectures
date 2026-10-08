# Gaming-Accessoires-Webshop: Frontend Schritt für Schritt

In diesem Tutorial entwickelst du selbstständig ein React-Frontend für einen Webshop. Du erhältst ein GitHub-Repository mit einem fertigen Backend und HTTP-Testdateien, aber ohne fertiges Frontend. Du untersuchst und testest zuerst die Schnittstellen. Danach erstellst du das Vite-React-Projekt selbst und entwickelst schrittweise Produktliste, Warenkorb und Bestellformular.

## Lernziele

Am Ende kannst du:

- die bereitgestellten HTTP-Tests ausführen und einen API-Vertrag ableiten,
- ein Vite-React-Frontend selbst erstellen und starten,
- die Komponenten einer Oberfläche sinnvoll aufteilen,
- Produktdaten von einer REST-API laden und Lade-, Erfolgs- und Fehlerzustände darstellen,
- Daten mit Props und React-Context zwischen Komponenten teilen,
- Warenkorbänderungen mit einem Reducer nachvollziehbar verwalten,
- ein Formular validieren und eine Bestellung an das Backend senden,
- modale Dialoge mit dem nativen HTML-Element `<dialog>` umsetzen und
- die Anwendung im Browser sowie mit Lint- und Build-Befehlen überprüfen.

## So arbeitest du mit dem Tutorial

Arbeite die Schritte der Reihe nach ab. Nach jedem Abschnitt:

1. speichere deine Änderungen,
2. prüfe die Anwendung im Browser,
3. vergleiche sie mit den Akzeptanzkriterien und
4. lies die passende Stelle in [react_theory.md](docs/react_theory.md) nach.

**Theorie-Verweise** nennen Kapitel und Überschrift in [react_theory.md](docs/react_theory.md). Ein Abschnitt **Zusätzliche Theorie** erklärt Konzepte, die dort noch nicht ausführlich behandelt werden.

### Voraussetzungen

- Node.js in mindestens Version 18.18 (empfohlen: aktuelle 20-LTS-Version) mit npm ist installiert (`node -v` und `npm -v` zeigen Versionsnummern). Ältere Node-Versionen scheitern bereits beim Anlegen des Vite-Projekts.
- Git, Visual Studio Code mit der Erweiterung REST Client und ein Browser sind verfügbar.
- Du kannst im Editor Dateien im geklonten Projekt ändern und mehrere Terminals öffnen.

## 0. GitHub Project und Arbeitsaufträge vorbereiten

Bevor du programmierst, organisierst du die Aufgaben in einem GitHub Project. So ist sichtbar, was noch offen ist, woran du gerade arbeitest und woran du den Abschluss erkennst. Die Issues unten sind so formuliert, dass du sie in GitHub übernehmen kannst. Erstelle zuerst das Project und danach die Issues. Beginne mit `PLAN-01`; die Umsetzung erfolgt anschließend in der Reihenfolge der Abschnitte dieses Tutorials.

### Eigenes GitHub-Repository einrichten

Du arbeitest mit einem lokalen Clone des bereitgestellten Repositorys, legst deine Ergebnisse aber in deinem eigenen GitHub-Repository ab. Ein Fork ist dafür nicht nötig: Forks sind vor allem sinnvoll, wenn du Änderungen später per Pull Request in das ursprüngliche Repository zurückführen möchtest.

1. Erstelle auf GitHub unter deinem Benutzerkonto ein neues, leeres Repository. Füge beim Erstellen keine README-Datei, Lizenz oder `.gitignore` hinzu.
2. Öffne ein Terminal im Ordner des geklonten Projekts und ersetze die URL von `origin` durch die URL deines neuen Repositorys:

   ```bash
   git remote -v
   git remote set-url origin https://github.com/<DEIN-BENUTZERNAME>/<DEIN-REPOSITORY>.git
   git remote -v
   git push -u origin HEAD
   ```

3. Prüfe mit `git remote -v`, dass `origin` auf dein eigenes Repository zeigt. Der Push überträgt den aktuellen Branch samt Git-Historie dorthin. Ab jetzt gehen deine `git push`-Befehle in dein Repository.

Verknüpfe das GitHub Project und die Issues im folgenden Abschnitt mit deinem eigenen Repository. Wenn du die Inhalte nicht sofort pushen möchtest, kannst du den letzten Befehl ausführen, sobald du bereit bist; stelle aber sicher, dass `origin` vor dem ersten Push umgestellt ist.

### 0.1 Project einrichten

1. Öffne dein eigenes GitHub-Repository.
2. Erstelle oder öffne ein GitHub Project und verknüpfe es mit dem Repository.
3. Verwende ein Board mit den Statuswerten `Backlog`, `Ready`, `In Progress`, `Review` und `Done`.
4. Lege die folgenden Issues mit Titel, User Story, Akzeptanzkriterien und Tasks an. Kennzeichne die Issue-IDs im Titel oder als Labels.
5. Trage die Issues zunächst in `Backlog` ein. Verschiebe immer nur das Issue, an dem du tatsächlich arbeitest, nach `In Progress`.
6. Nach der Prüfung verschiebst du es nach `Review`, lässt es überprüfen und setzt es danach auf `Done`. Bei Einzelarbeit kannst du Review anhand der Akzeptanzkriterien selbst durchführen.

Das GitHub Project organisiert Aufgaben und Status; der Quellcode und diese Dokumentation bleiben im Repository. Issue-IDs wie `API-01` sind Kurzbezeichnungen für das Tutorial und keine automatisch von GitHub vergebenen Nummern.

### 0.2 Issue-Vorlagen für das Frontend-Backlog

Erstelle die folgenden Issues. Kopiere jeweils Titel und Beschreibung in ein GitHub Issue. Die Tasks sind Checkboxen, die du während der Umsetzung abhaken kannst. Ergänze bei **jedem Umsetzungs-Issue ab `API-01`** zusätzlich die folgenden Commit-Vorgaben. `PLAN-01` ist die einmalige Project-Einrichtung und benötigt keinen Code-Commit.

**Verbindliches zusätzliches Akzeptanzkriterium für jedes Umsetzungs-Issue**

- Alle zu diesem Issue gehörenden Code- und Dokumentationsänderungen sind in einem nachvollziehbaren Git-Commit gespeichert und in dein GitHub-Repository gepusht.
- Der Commit bezieht sich erkennbar auf das Issue und enthält keine sachfremden Änderungen.

**Verbindliche zusätzliche Tasks für jedes Umsetzungs-Issue**

- [ ] `git status` prüfen und sicherstellen, dass nur Änderungen zu diesem Issue eingecheckt werden.
- [ ] Änderungen mit einem aussagekräftigen Commit erstellen, der die Issue-ID enthält.
- [ ] Commit in dein GitHub-Repository pushen und den Commit im Issue verlinken oder referenzieren.

Verwende für Commit-Nachrichten dieses Schema:

```text
<typ>: <kurze Beschreibung> (<ISSUE-ID>)
```

Beispiele: `docs: document backend API tests (API-01)`, `feat: create Vite frontend (SETUP-01)`, `feat: render accessory cards (UI-01)`, `fix: handle checkout errors (ORDER-01)`. Für Dokumentation verwendest du `docs`, für neue Funktionalität `feat`, für Fehlerkorrekturen `fix` und für reine Formatierung `style`.

#### `PLAN-01` – GitHub Project und Frontend-Backlog vorbereiten

**User Story**  
Als Lernende:r möchte ich die Frontend-Arbeit in einem GitHub Project organisieren, damit ich die Anforderungen, den Fortschritt und die nächsten Arbeitsschritte selbstständig überblicken kann.

**Akzeptanzkriterien**

- Das GitHub Project ist mit deinem GitHub-Repository verknüpft.
- Das Board enthält `Backlog`, `Ready`, `In Progress`, `Review` und `Done`.
- Die Issues `API-01`, `SETUP-01`, `STYLE-01`, `UX-01`, `UI-01`, `API-02`, `CART-01`, `CART-02`, `ORDER-01` und `QA-01` sind angelegt und im Project sichtbar.
- Jedes Issue enthält eine User Story, Akzeptanzkriterien und ausführbare Tasks.
- Die Issues sind entsprechend der unten angegebenen Reihenfolge sortiert; `API-01` ist als nächstes umsetzbares Issue auf `Ready` gesetzt.

**Tasks**

- [ ] Project erstellen oder öffnen und mit dem Repository verknüpfen.
- [ ] Board-Statuswerte einrichten.
- [ ] Issues aus diesem Tutorial anlegen.
- [ ] Issues dem Project hinzufügen und nach Reihenfolge sortieren.
- [ ] `API-01` als nächstes Issue auf `Ready` setzen.

#### `API-01` – Backend-Schnittstellen mit HTTP-Requests erkunden

**User Story**  
Als Frontend-Entwickler:in möchte ich die bereitgestellten Backend-Requests ausführen und ihre Datenformate verstehen, damit ich das Frontend korrekt an die vorhandene API anbinde.

**Akzeptanzkriterien**

- `GET /accessories` liefert eine Liste mit den erwarteten Produktfeldern.
- Der Bild-Request liefert das Bild unter dem vom Produkt verwendeten relativen Pfad.
- `POST /orders` liefert bei gültigen Daten eine erfolgreiche Antwort und speichert eine Bestellung.
- Der Negativtest für `GET /data/orders.json` wird als nicht unterstützter Zugriff erkannt.
- Eine kurze API-Übersicht mit Methoden, Pfaden, Request-Daten und beobachteten Antworten ist unter `docs/api-contract.md` festgehalten.

**Tasks**

- [ ] Backend-Abhängigkeiten installieren und Server starten.
- [ ] REST Client in Visual Studio Code verwenden.
- [ ] `getAccessories.http` ausführen und Produktfelder notieren.
- [ ] `getImage.http` ausführen und Produkt-Bildpfad zu Bild-URL zuordnen.
- [ ] `postOrder.http` ausführen und Status, Antwort und Seiteneffekt auf `orders.json` notieren.
- [ ] `getOrders_fail.http` ausführen und die Fehlerantwort erklären.
- [ ] `docs/api-contract.md` mit API-Übersicht erstellen.

#### `SETUP-01` – Vite-React-Projekt erzeugen und Backend-Logo übernehmen

**User Story**  
Als Lernende:r möchte ich das Frontend-Projekt selbst erstellen und das bereitgestellte Logo übernehmen, damit ich eine eigenständige, startbare Grundlage für die Webshop-Oberfläche habe.

**Akzeptanzkriterien**

- Im Repository-Hauptordner existiert ein mit Vite erzeugtes React-Projekt `frontend/`.
- Abhängigkeiten sind installiert und `npm run dev` startet den Frontend-Entwicklungsserver.
- `frontend/public/logo.png` ist eine Kopie von `backend/public/logo.png`.
- `frontend/src/assets/logo.png` ist ebenfalls eine Kopie von `backend/public/logo.png`.
- Das Logo in `public` wird über `/logo.png` ausgeliefert und später als Favicon verwendet; das Logo in `src/assets` wird später als Vite-Asset per `import` in den Header eingebunden.
- Backend- und Frontend-Server können gleichzeitig laufen.

**Tasks**

- [ ] Vite-React-Projekt im Repository-Hauptordner erzeugen.
- [ ] Frontend-Abhängigkeiten installieren.
- [ ] Backend-Logo nach `frontend/public/logo.png` kopieren.
- [ ] Backend-Logo zusätzlich nach `frontend/src/assets/logo.png` kopieren.
- [ ] Logo über `http://localhost:5173/logo.png` im Browser prüfen.
- [ ] Frontend-Entwicklungsserver starten und Vite-Startseite öffnen.

#### `STYLE-01` – Vorgegebenes Styling in das Frontend übernehmen

**User Story**  
Als Lernende:r möchte ich ein fertig abgestimmtes Stylesheet in mein Frontend übernehmen, damit die Shop-Oberfläche von Anfang an dem Ziel-Design entspricht und ich mich auf React und die Webshop-Funktionen konzentrieren kann.

**Akzeptanzkriterien**

- `assets/index.css` wurde unverändert nach `frontend/src/index.css` kopiert.
- `frontend/src/main.jsx` importiert `./index.css`.
- Das Stylesheet enthält das Styling für die Komponenten und CSS-Klassen aus diesem Tutorial.
- Die globale Gestaltung und die CSS-Klassen stehen bereit, bevor die Lernenden ihre React-Komponenten aufbauen.
- Der CSS-Ansatz und die Gründe für die Auswahl sind im Tutorial nachvollziehbar erklärt.
- Lernende müssen für dieses Issue kein eigenes CSS schreiben.

**Tasks**

- [ ] `assets/index.css` im bereitgestellten Repository öffnen und kurz überfliegen.
- [ ] Die Datei nach `frontend/src/index.css` kopieren.
- [ ] Prüfen, dass `main.jsx` das Stylesheet importiert.
- [ ] Vite starten und Hintergrund, Header, Buttons und Produktkarten im Browser kontrollieren.
- [ ] Nach dem Copy keine CSS-Regeln selbst neu schreiben; bei späteren Components die vorhandenen Klassen verwenden.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 10 „Styling in React“. Das Stylesheet wird bereitgestellt, damit der Lernschwerpunkt auf React, Komponenten und API-Integration liegt. Der gewählte Ansatz wird in Abschnitt 2.3 erläutert.

#### `UX-01` – Vorgegebenes Webshop-Wireframe analysieren

**User Story**  
Als Lernende:r möchte ich das vorgegebene Webshop-Wireframe und seine Zustände analysieren, damit ich die Oberfläche ohne zusätzliche Wireframe-Erstellung zielgerichtet implementieren kann.

**Akzeptanzkriterien**

- Das im Tutorial vorgegebene Desktop- und Mobile-Wireframe wurde gelesen.
- Produktkarte, Warenkorb und Checkout können den passenden Komponenten zugeordnet werden.
- Lade-, Fehler-, Leer-, Sende- und Erfolgszustände sind im Project-Issue notiert.
- Es wurde kein eigenes Wireframe erstellt; das vorgegebene Wireframe dient als verbindliche Gestaltungsgrundlage.

**Tasks**

- [ ] Vorgegebenes Desktop-Wireframe im Tutorial durchgehen.
- [ ] Vorgegebenes Mobile-Wireframe im Tutorial durchgehen.
- [ ] Komponenten und Aktionen aus dem Wireframe im Issue notieren.
- [ ] Lade-, Fehler-, Leer-, Sende- und Erfolgszustände für die spätere Prüfung notieren.

#### `UI-01` – React-Anwendung und Produktkarten strukturieren

**User Story**  
Als Shop-Kund:in möchte ich Produkte in einheitlichen Karten sehen, damit ich die Angebote leicht vergleichen kann.

**Akzeptanzkriterien**

- Die Vite-Anwendung rendert eine eigene `App`-Komponente.
- Es gibt getrennte Komponenten für die Seite, Produktliste und einzelne Produktkarte.
- Produktkarten erhalten die darzustellenden Daten über Props.
- Mehrere unterschiedliche Karten werden mit `map` gerendert und haben stabile Produkt-Keys.
- Der Header zeigt das aus `src/assets` importierte Logo mit sinnvollem Alternativtext.

**Tasks**

- [ ] Vite-Einstiegspunkt und `App` untersuchen.
- [ ] Nicht verwendete Vite-Beispieldateien `frontend/src/App.css`, `frontend/src/assets/react.svg` und `frontend/public/vite.svg` entfernen, sofern sie vom Generator angelegt wurden.
- [ ] `Header`, `Accessories` und `AccessoryItem` anlegen.
- [ ] `Header` mit Logo, Seitentitel und Warenkorb-Schaltfläche aufbauen.
- [ ] Temporäre Beispieldaten an Produktkarten übergeben.
- [ ] Produktkarten mit `map` und `key={accessory.id}` anzeigen.

#### `API-02` – Produktliste vom Backend laden

**User Story**  
Als Shop-Kund:in möchte ich die aktuell vom Backend gelieferten Produkte sehen, damit die Produktübersicht nicht von fest eingebauten Beispieldaten abhängt.

**Akzeptanzkriterien**

- Die Anwendung lädt `GET http://localhost:3000/accessories` beim Anzeigen der Produktliste.
- Alle gelieferten Produkte werden mit Name, Beschreibung, Europreis und passendem Bild angezeigt.
- Während des Requests ist ein Ladehinweis sichtbar.
- Bei Netzwerk- oder HTTP-Fehlern erscheint eine verständliche Fehlermeldung.
- Ein Request, dessen Component nicht mehr benötigt wird, wird aufgeräumt oder sein Abbruch wird nicht als Fehler angezeigt.

**Tasks**

- [ ] Fetching mit `useEffect` einbauen.
- [ ] Loading-, Daten- und Error-State verwalten.
- [ ] HTTP-Status über `response.ok` prüfen.
- [ ] `AbortController` beim Entfernen der Component aufräumen.
- [ ] Produktbilder über die Backend-Adresse und das `image`-Feld laden.
- [ ] Preis als Zahl formatieren und mit `Intl.NumberFormat` als EUR anzeigen.
- [ ] Lade-, Erfolgs- und Fehlerzustand im Browser prüfen.

#### `CART-01` – Warenkorb-State und Produktaktionen implementieren

**User Story**  
Als Shop-Kund:in möchte ich Produkte zum Warenkorb hinzufügen und ihre Menge ändern können, damit ich meine gewünschte Bestellung zusammenstellen kann.

**Akzeptanzkriterien**

- Ein Produkt wird beim ersten Hinzufügen mit Menge eins aufgenommen.
- Wiederholtes Hinzufügen derselben Produkt-ID erhöht die Menge der vorhandenen Position.
- Verringern reduziert die Menge; bei Menge eins wird die Position entfernt.
- Warenkorb-Anzahl und Zwischensumme stimmen mit den Positionen überein.
- State wird unveränderlich über einen Reducer aktualisiert.

**Tasks**

- [ ] `CartContext` mit Provider und `useCart()` anlegen.
- [ ] Reducer-Aktionen `ADD_ITEM`, `REMOVE_ITEM` und `CLEAR_CART` implementieren.
- [ ] Provider in `App` einhängen.
- [ ] Produktkarten mit `addItem` verbinden.
- [ ] Warenkorb-Anzahl im Header aus dem Warenkorb ableiten.
- [ ] Warenkorbpositionen und Zwischensumme ausgeben.
- [ ] Mengenänderungen und Entfernen im Browser prüfen.

#### `CART-02` – Warenkorb- und Checkout-Dialog bedienen

**User Story**  
Als Shop-Kund:in möchte ich den Warenkorb ansehen und von dort zur Kasse wechseln oder zurück zum Einkauf gelangen, damit der Bestellablauf verständlich bleibt.

**Akzeptanzkriterien**

- Die Warenkorb-Schaltfläche öffnet einen nativen modalen Dialog.
- Der Dialog zeigt einen Leerzustand oder alle Warenkorbpositionen samt Summe.
- „Zur Kasse“ ist nur bei nichtleerem Warenkorb verfügbar.
- Der Wechsel zum Checkout schließt den Warenkorb-Dialog ohne den gemeinsamen Dialogzustand versehentlich zurückzusetzen.
- Schließen per Schaltfläche und Escape funktioniert.

**Tasks**

- [ ] `UserProgressContext` für Warenkorb- und Checkout-Ansicht anlegen.
- [ ] `Modal` mit `useRef`, `<dialog>`, `showModal()` und `close()` erstellen.
- [ ] Escape-Schließen an den Context zurückmelden.
- [ ] Warenkorb-Schaltfläche im Header verbinden.
- [ ] `Cart` mit Leerzustand, Positionen, Summe und Aktionen bauen.
- [ ] Dialogwechsel und Schließverhalten testen.

#### `ORDER-01` – Kundendaten erfassen und Bestellung absenden

**User Story**  
Als Shop-Kund:in möchte ich meine Kontaktdaten eingeben und eine Bestellung absenden können, damit das Backend meine ausgewählten Produkte erhält.

**Akzeptanzkriterien**

- Das Formular enthält Name, E-Mail, Straße, Postleitzahl und Ort mit API-kompatiblen Feldnamen.
- Pflichtfelder und E-Mail-Eingabe werden clientseitig geprüft.
- Während des Sendens wird der Submit-Button deaktiviert oder ein Ladezustand angezeigt.
- Die Bestellung wird als JSON mit Form `{ order: { customer, items } }` an `POST /orders` gesendet.
- Erfolg zeigt eine Bestätigung; Fehler zeigen die Servermeldung oder einen verständlichen Netzwerkfehler.
- Bei fehlgeschlagener Bestellung bleiben Warenkorb und Formulardaten erhalten.
- Nach erfolgreicher Bestätigung kann der Warenkorb geleert und der Dialog geschlossen werden.

**Tasks**

- [ ] Checkout-Dialog und wiederverwendbare Eingabekomponente erstellen.
- [ ] Feldnamen exakt nach API-Vertrag setzen, insbesondere `postal-code`.
- [ ] Formularwerte mit `FormData` lesen und `customer` erzeugen.
- [ ] Request-Body mit `order`, `customer` und Warenkorb-`items` aufbauen.
- [ ] POST-Request mit JSON-Header und `JSON.stringify` senden.
- [ ] `response.ok`, Ladezustand und Fehlerbehandlung implementieren.
- [ ] Erfolg, Wiederholen nach Fehler und Leeren nach Bestätigung testen.

#### `QA-01` – Shop-Funktionen prüfen und Produktions-Build erstellen

**User Story**  
Als Entwickler:in möchte ich den Webshop anhand nachvollziehbarer Prüffälle testen, damit ich Fehler vor der Abgabe finde.

**Akzeptanzkriterien**

- Alle Funktionsprüfungen aus Abschnitt 10.1 sind durchgeführt und im Repository unter `docs/test-report.md` dokumentiert.
- `npm run lint` läuft ohne Fehler.
- `npm run build` erstellt erfolgreich den Produktions-Build.
- Bekannte Einschränkungen oder noch offene Fehler sind im Issue dokumentiert.

**Tasks**

- [ ] Produktladen, Bilder, Preisformatierung und Fehlerzustand testen.
- [ ] Warenkorb-Mengen, Entfernen und Summen testen.
- [ ] Checkout mit gültigen und ungültigen Daten testen.
- [ ] Fehlerfall bei nicht verfügbarem Backend prüfen.
- [ ] Dialoge mit Maus und Tastatur testen.
- [ ] Responsives Layout auf schmalem Viewport prüfen.
- [ ] Lint und Build ausführen und Ergebnis im Issue notieren.
- [ ] Ergebnisse der Funktionsprüfung in `docs/test-report.md` speichern.

### 0.3 Arbeitsroutine: immer ein Issue nach dem anderen

1. Wähle nur ein Issue aus `Ready` und setze es auf `In Progress`.
2. Lies User Story und Akzeptanzkriterien vollständig; kläre offene Fragen, bevor du implementierst.
3. Arbeite die Tasks der Reihe nach ab. Nutze den entsprechenden Abschnitt dieses Tutorials als Anleitung, aber überprüfe selbst, dass jedes Akzeptanzkriterium erfüllt ist.
4. Führe die im Issue genannten Tests durch und hake die Tasks erst nach erfolgreicher Prüfung ab.
5. Prüfe `git status`. Nimm nur Änderungen auf, die zu diesem Issue gehören. Erstelle einen eigenen Commit mit der Issue-ID und pushe ihn:

   ```powershell
   git status
   git add <DATEI-1> <DATEI-2>
   git commit -m "feat: <kurze Beschreibung> (<ISSUE-ID>)"
   git push
   ```

   Ersetze Dateinamen, Commit-Typ und Beschreibung passend zum Issue. Verwende nicht `git add .`, wenn noch andere, nicht zu diesem Issue gehörende Änderungen vorhanden sind. Falls der Push abgelehnt wird, behebe zuerst die Git-Ursache; markiere das Issue nicht als fertig, solange der Commit nicht im GitHub-Repository sichtbar ist.
6. Prüfe auf GitHub, dass Commit und Änderungen angekommen sind. Verlinke den Commit im Issue.
7. Setze das Issue erst dann auf `Review`, lasse Ergebnis, Commit und Akzeptanzkriterien prüfen und verschiebe es danach auf `Done`.
8. Beginne erst danach mit dem nächsten Issue.

Ein Issue ohne zugehörige Dateiänderungen (`PLAN-01` und `UX-01`) braucht keinen künstlichen Commit. Für alle Issues, die Code oder Projektdokumentation ändern, sind Commit und Push verpflichtend.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 1 „GitHub Project und Projektunterlagen“ sowie Kapitel 11 „ToDo v1: Gesamtauftrag“, besonders „Definition of Ready und Definition of Done“.

### 0.4 Reihenfolge und erwartete Projektstruktur je Issue

Arbeite in dieser Reihenfolge. Die Code- und Dateiänderungen pro Issue werden im Kapitel **„Code- und Projektstände pro Issue“** vollständig beschrieben. Verzeichnisse erst dann anlegen, wenn ein Issue sie benötigt.

| Reihenfolge | Issue | Ergebnis | Dateien/Struktur |
| ---: | --- | --- | --- |
| 1 | `PLAN-01` | GitHub Project und Issues angelegt | GitHub Project, keine Code-Dateien |
| 2 | `API-01` | Backend-Vertrag verstanden und dokumentiert | `docs/api-contract.md` |
| 3 | `SETUP-01` | Vite-React-Frontend startet; Logo liegt in Frontend-`public` und `src/assets` | `frontend/index.html`, `frontend/public/logo.png`, `frontend/src/assets/logo.png`, Vite-Dateien |
| 4 | `STYLE-01` | vorgegebenes Styling eingebunden und Stylingansatz verstanden | `assets/index.css` → `frontend/src/index.css` |
| 5 | `UX-01` | vorgegebenes Wireframe ausgewertet | keine neue Wireframe-Datei |
| 6 | `UI-01` | statische Produktübersicht mit wiederverwendbaren Komponenten | `src/App.jsx`, `src/components/`, `src/components/UI/` |
| 7 | `API-02` | API-Hook, Produktladen, Loading/Error, Bilder und Preise | `src/hooks/`, `src/util/`, `src/components/Error.jsx` |
| 8 | `CART-01` | Context/Reducer und Warenkorbpositionen | `src/store/CartContext.jsx`, `Cart.jsx`, `CartItem.jsx` |
| 9 | `CART-02` | Dialogzustand und native modale Dialoge | `src/store/UserProgressContext.jsx`, `src/components/UI/Modal.jsx`, `index.html` |
| 10 | `ORDER-01` | Checkout-Formular sendet Bestellung | `src/components/Checkout.jsx`, `src/components/UI/Input.jsx` |
| 11 | `QA-01` | Prüfergebnisse, Lint und Build dokumentiert | `docs/test-report.md` |

`PLAN-01` und `UX-01` ändern keine Projektdateien und benötigen daher keinen künstlichen Commit. Bei `UX-01` werden die Erkenntnisse direkt im GitHub-Issue festgehalten.

## 1. Backend-Schnittstellen verstehen und testen

### 1.1 Repository klonen

Kopiere die Repository-URL, die dir die Lehrperson zur Verfügung stellt:

```powershell
git clone <URL-DES-REPOSITORYS>
cd <REPOSITORY-ORDNER>
```

Das Repository enthält das Backend und die vorbereiteten Requests im Ordner `backend/tests/`. Es enthält **kein Frontend**. Du erstellst dieses erst, nachdem du die API verstanden und getestet hast.

### 1.2 Backend starten und HTTP-Tests ausführen

```powershell
cd backend
npm install
npm run start
```

Das Backend läuft unter `http://localhost:3000`. Lass das Terminal geöffnet.

Öffne die Dateien in `backend/tests/` in Visual Studio Code. Zum Ausführen der Requests benötigst du die Erweiterung [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client). Über der HTTP-Anfrage erscheint der Link **Send Request**. Führe die folgenden Dateien nacheinander aus und notiere Methode, URL, erwartete Antwort und die Datenfelder:

- `getAccessories.http`: `GET /accessories` liefert eine JSON-Liste. Prüfe ID, Name, Preis, Beschreibung und Bildpfad eines Eintrags.
- `getImage.http`: `GET /images/gaming-mouse.png` liefert die Bilddatei. Vergleiche den URL-Pfad mit dem `image`-Feld eines Produkts.
- `postOrder.http`: `POST /orders` sendet eine Bestellung als JSON. Prüfe den Status der Antwort sowie deren Inhalt. Dieser Request legt einen Beispieldatensatz in `backend/data/orders.json` an.
- `getOrders_fail.http`: Dieser Negativtest versucht `GET /data/orders.json`. Die Datei liegt nicht im statisch ausgelieferten Ordner `backend/public/`, und das Backend bietet keinen GET-Endpunkt für Bestellungen; erwarte daher HTTP `404` und notiere, weshalb diese URL nicht als regulärer API-Endpunkt verwendet werden darf.

Die Dateien sind ausführbare Beispiele und gleichzeitig Teil der Schnittstellendokumentation. Öffne sie und lies Methode, Pfad, Header und Request-Body, bevor du **Send Request** anklickst. Beachte: `postOrder.http` verändert Beispieldaten auf dem lokalen Rechner, indem es eine Bestellung in `backend/data/orders.json` speichert.

**Arbeitsauftrag 1.1 – API-Erkundung:** Erstelle eine Tabelle mit Endpunkt, HTTP-Methode, Request-Daten und beobachteter Antwort für die bereitgestellten `.http`-Dateien. Markiere, welcher Request Produkte liest, welcher ein Bild lädt und welcher Daten verändert. Erkläre in eigenen Worten, weshalb `GET /data/orders.json` kein unterstützter API-Endpunkt ist.

Speichere die Tabelle als `docs/api-contract.md`. Der Issue-Task `API-01` verlangt diesen API-Vertrag als versionierte Dokumentation; committe und pushe die Datei mit der Issue-ID im Commit.

### 1.3 API-Vertrag dokumentieren

`GET /accessories` liefert ein JSON-Array. Ein Produkt hat diese Form:

```json
{
  "id": "g1",
  "name": "RGB Gaming Mouse",
  "price": "49.99",
  "description": "High-precision gaming mouse with customizable RGB lighting and 8 programmable buttons.",
  "image": "images/gaming-mouse.png"
}
```

Das Feld `price` kommt als Zeichenkette. Das Feld `image` enthält einen relativen Pfad; die vollständige URL entsteht durch Voranstellen von `http://localhost:3000/`.

Der Bestell-Endpunkt erwartet `POST /orders`. Die JSON-Daten müssen in ein Objekt `order` eingeschlossen sein:

```json
{
  "order": {
    "customer": {
      "name": "Max Mustermann",
      "email": "max@example.com",
      "street": "Hauptstraße 1",
      "postal-code": "6900",
      "city": "Bregenz"
    },
    "items": [
      {
        "id": "g1",
        "name": "RGB Gaming Mouse",
        "price": "49.99",
        "description": "Gaming Mouse",
        "image": "images/gaming-mouse.png",
        "quantity": 2
      }
    ]
  }
}
```

Das Backend prüft Kundendaten und Warenkorbinhalt. Bei erfolgreicher Bestellung antwortet es mit HTTP-Status `201`; bei ungültigen oder fehlenden Daten mit einem Fehlerstatus und einer JSON-Nachricht. Die Schnittstelle und diese Feldnamen sind verbindlich: Ändere sie nicht, ohne auch das Backend anzupassen.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 8 „Hooks und asynchrones Laden“, insbesondere „Daten an die Mock-API senden“. Eine REST-API stellt Daten und Aktionen über HTTP-Endpunkte bereit. React läuft im Browser, das Backend in einem getrennten Prozess; `fetch` verbindet beide über HTTP.

## 2. Frontend-Projekt selbst erstellen

### 2.1 Vite-React-Projekt erzeugen

Erst nachdem du die Requests getestet und den API-Vertrag notiert hast, erstellst du das Frontend im Repository-Hauptordner. Achte darauf, dass du dich **nicht** im Ordner `backend/` befindest:

```powershell
npm create vite@latest frontend -- --template react
cd frontend
npm install
npm run dev
```

Öffne die von Vite angezeigte Adresse, üblicherweise `http://localhost:5173`. Das Frontend läuft damit in einem eigenen Entwicklungsserver; das Backend läuft weiterhin im ersten Terminal auf Port `3000`.

### 2.2 Backend-Logo ins Frontend kopieren

Das Logo liegt im bereitgestellten Backend unter `backend/public/logo.png`. Du brauchst davon zwei Kopien im Frontend, weil sie unterschiedliche Zwecke erfüllen:

- `frontend/public/logo.png` für das Favicon in `index.html` (ein statischer Verweis außerhalb des React-Codes),
- `frontend/src/assets/logo.png` für das Logo im Header, das du als Vite-Asset per `import` einbindest.

Führe beide Kopierbefehle im Repository-Hauptordner in einem dritten Terminal aus:

```powershell
Copy-Item .\backend\public\logo.png .\frontend\public\logo.png
Copy-Item .\backend\public\logo.png .\frontend\src\assets\logo.png
```

Prüfe, dass beide Dateien existieren. Dateien in Vites `public`-Ordner werden unverändert in den Build übernommen und unter dem Webpfad `/` ausgeliefert; `index.html` kann sie daher direkt über einen absoluten Pfad referenzieren:

```html
<link rel="icon" type="image/png" href="/logo.png" />
```

Dateien unter `src/assets` durchlaufen dagegen Vites Modul- und Build-Pipeline. Importiere das Logo dort, wo du es als Bild anzeigen willst, und verwende den Importwert als `src`:

```jsx
import logoImg from '../assets/logo.png';

<img src={logoImg} alt="Gaming Accessoires" />
```

Kopiere das Logo jetzt, bevor du den Header entwickelst, damit du es gleich in der ersten tatsächlichen Oberfläche verwenden kannst. Importiere es nicht aus dem Backend-Ordner: Das Frontend soll eigenständig aus seinen eigenen Verzeichnissen `public` und `src/assets` bereitgestellt werden.

**Zusätzliche Theorie – `public`-Ordner und `src/assets` im Vergleich:** Vite kopiert Dateien aus `public` unverändert in den Build und erreicht sie über einen stabilen, absoluten Pfad ab der Website-Wurzel; das eignet sich für Ressourcen, die außerhalb des JavaScript-Modulgraphen referenziert werden, etwa Favicons in `index.html`. Ein relativer Import wie `../backend/public/logo.png` würde die getrennten Projektbereiche koppeln und funktioniert im Produktions-Build ohnehin nicht als statische Frontend-Datei.

Dateien unter `src/assets` importierst du dagegen wie JavaScript-Module. Vite löst den Import zur Build-Zeit auf, optimiert das Bild bei Bedarf und vergibt im Produktions-Build einen gehashten Dateinamen für zuverlässiges Caching. Der Importwert (`logoImg`) ist zur Laufzeit bereits die passende URL; du musst den Pfad nicht selbst zusammensetzen. Diese Variante ist für Bilder, die direkt aus Components heraus verwendet werden, die bessere Wahl, weil der Build die Abhängigkeit zwischen Component und Bild kennt und ungenutzte Bilder erkennen könnte.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 3 „React-Projekt anlegen“, besonders „React-Projekt mit Vite anlegen“ und „Wichtige Projektdateien“.

### 2.3 Styling vorbereiten

Das vorbereitete Stylesheet liegt unabhängig vom Frontend-Ordner unter `assets/index.css`. So bleibt es erhalten, obwohl du das Frontend-Projekt selbst erzeugst. Nachdem Vite das Frontend angelegt hat, kopierst du es im Repository-Hauptordner im Issue `STYLE-01`:

```powershell
Copy-Item .\assets\index.css .\frontend\src\index.css
```

Prüfe, dass `frontend/src/main.jsx` weiterhin `import './index.css';` enthält. Das CSS wird dadurch beim Start der App geladen. Vite liefert zunächst eine Beispiel-Datei `src/index.css`; sie wird durch das bereitgestellte Stylesheet ersetzt.

**Gewählter Styling-Ansatz:** Das Projekt verwendet klassisches, globales CSS in einer zentralen `src/index.css`-Datei. JSX verbindet die Komponenten über `className` mit semantisch benannten CSS-Klassen. Das Stylesheet nutzt normale CSS-Regeln, CSS Grid und Media Queries für unterschiedliche Bildschirmgrößen. Es werden weder CSS Modules noch CSS-in-JS oder ein Utility-Framework wie Tailwind eingesetzt.

Für ein größeres Produktivprojekt könnten CSS Modules oder ein anderes komponentenbezogenes Verfahren sinnvoll sein, um Namensräume und Stile stärker zu kapseln. Für dieses Lernprojekt ist eine einzelne, lesbare CSS-Datei einfacher zu überblicken und verursacht keine zusätzliche Konfiguration oder Bibliothek. Das fertige Styling ist bewusst vorgegeben: Die Lernenden konzentrieren sich auf Komponenten, Props, State, HTTP und den Bestellablauf statt parallel das visuelle Design zu entwickeln.

Styling lässt sich grundsätzlich schrittweise parallel zur Entwicklung oder gesammelt am Projektende umsetzen. In diesem Tutorial wird es gleich nach dem Projekt-Setup übernommen, damit die Oberfläche während der gesamten React-Entwicklung schon dem Ziel-Design ähnelt. Die CSS-Datei wird nicht neu geschrieben; später verwenden die Komponenten die darin bereits vorgesehenen Klassen.

## 3. Vorgegebenes Wireframe verstehen und Komponenten planen

### 3.1 Desktop-Wireframe

Das folgende Wireframe ist vorgegeben. Du musst **kein eigenes Wireframe** zeichnen oder erstellen. Es ist eine verbindliche Orientierung für Struktur und Funktionen. Das abgestimmte Farbschema, Layout und responsive Verhalten sind bereits im bereitgestellten Stylesheet umgesetzt.

```text
+---------------------------------------------------------------------+
| [LOGO] GAMING ACCESSOIRES                              Warenkorb (2)|
+---------------------------------------------------------------------+
|                         PRODUKTE                                   |
| +----------------------+ +----------------------+ +---------------+ |
| | [Produktbild]        | | [Produktbild]        | | [Produktbild] | |
| | RGB Gaming Mouse     | | Mechanical Keyboard  | | Headset       | |
| | Beschreibung ...     | | Beschreibung ...     | | Beschreibung | |
| |              49,99 €| |              89,99 €| |      69,99 €| |
| | [In den Warenkorb]   | | [In den Warenkorb]   | | [In den ...] | |
| +----------------------+ +----------------------+ +---------------+ |
+---------------------------------------------------------------------+
```

### 3.2 Dialog- und Zustands-Wireframes

```text
Warenkorb leer                 Warenkorb gefüllt
+-------------------------+    +--------------------------------------+
| Warenkorb               |    | Warenkorb                            |
| Dein Warenkorb ist leer.|    | 1 x RGB Gaming Mouse       49,99 €   |
| [Weiter einkaufen]      |    |       [-] 1 [+]                      |
|                         |    | Summe:                      49,99 €   |
|                         |    | [Weiter einkaufen] [Zur Kasse]       |
+-------------------------+    +--------------------------------------+

Checkout                       Bestätigung
+-------------------------+    +--------------------------------------+
| Zur Kasse               |    | Bestellung erfolgreich               |
| Gesamt: 49,99 €         |    | Vielen Dank für deine Bestellung.    |
| Name       [__________] |    |                                      |
| E-Mail     [__________] |    | [Fertig]                             |
| Straße     [__________] |    +--------------------------------------+
| PLZ [____] Ort [______] |
| [Abbrechen] [Bestellen] |
+-------------------------+
```

Für die Produktliste gibt es zusätzlich diese Zustände:

```text
Loading:  „Produkte werden geladen …“
Error:    verständliche Meldung; Seite bleibt bedienbar
Success:  Produktkarten werden angezeigt
Empty:    Hinweis, dass aktuell keine Produkte verfügbar sind
```

### 3.3 Mobile-Wireframe

```text
+-----------------------------+
| [LOGO] GAMING       [Cart 2]|
+-----------------------------+
| PRODUKTE                    |
| +-------------------------+ |
| | [Produktbild]           | |
| | RGB Gaming Mouse        | |
| | Beschreibung ...        | |
| | 49,99 €                 | |
| | [In den Warenkorb]      | |
| +-------------------------+ |
| +-------------------------+ |
| | [nächste Produktkarte]  | |
| +-------------------------+ |
+-----------------------------+
```

**Arbeitsauftrag zu `UX-01`:** Analysiere die vorgegebenen Ansichten. Ordne Header, Produktliste, Produktkarte, Warenkorb, Warenkorbposition, Checkout und Meldungen den React-Komponenten zu. Notiere die Zustände und die Benutzeraktionen im Issue `UX-01`. Erstelle keine Wireframe-Datei.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 2 „UI/UX: Eine verständliche Oberfläche gestalten“. Das Wireframe ist bereits vorgegeben; du wendest die Theorie auf dieses Beispiel an.

### 3.4 Komponentenverantwortung

Verwende zunächst diese Struktur. Lege zusätzliche Komponenten nur an, wenn sie eine klare Aufgabe haben:

```text
App
├── Header
├── Accessories
│   └── AccessoryItem (pro Produkt)
├── Cart
│   └── CartItem (pro Warenkorbposition)
└── Checkout
    └── Input (pro Formularfeld)
```

`CartContextProvider` verwaltet den gemeinsamen Warenkorb-State; `UserProgressContextProvider` merkt sich, ob gerade der Warenkorb oder Checkout angezeigt wird. Beide Provider umschließen die Komponenten, die diese Werte benötigen.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 4 „Components und JSX“ und Kapitel 5 „Props: Daten an Components übergeben“. Achte auf die Trennung zwischen Daten (Produkt), Darstellung (Produktkarte) und Zusammensetzung (Produktliste).

## 4. React-Grundgerüst und Produktkarten

Die Abschnitte 4 bis 10 erklären die Konzepte und Anforderungen. Die verbindlichen Dateipfade, Projektbäume und vollständigen einzusetzenden Inhalte stehen issueweise in Kapitel 12. Wenn ein verkürztes Beispiel in diesem Theorieteil vom späteren vollständigen Dateistand abweicht, ist Kapitel 12 der maßgebliche Umsetzungsstand.

### 4.1 Vite-Startpunkt prüfen

Im selbst erzeugten Ordner `frontend/` findest du `package.json`, `index.html` und `src/main.jsx`. Öffne die Dateien und untersuche den generierten Einstiegspunkt. In `main.jsx` wird die React-App in das HTML-Element mit der ID `root` gerendert. Behalte `StrictMode` bei:

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

`StrictMode` hilft im Entwicklungsmodus, bestimmte problematische Muster aufzudecken. Er ist kein zusätzlicher sichtbarer Teil der Oberfläche.

### 4.2 `App` und erste Produktkarte

Erstelle `src/App.jsx`. Am Anfang genügt es, eine Überschrift und eine einzelne statische Produktkarte anzuzeigen. Lege danach die Karte als eigene Komponente unter `src/components/AccessoryItem.jsx` ab. Übergib das Produkt als Prop `accessory`; schreibe Produktdaten nicht mehrfach fest in das JSX.

Die Karte kann vorübergehend ein Objekt mit denselben Feldern wie ein API-Produkt erhalten. Baue in `AccessoryItem` die sichtbaren Daten schrittweise ein:

```jsx
function AccessoryItem({ accessory }) {
  return (
    <li className="accessory-item">
      <article>
        <img src={accessory.image} alt={accessory.name} />
        <h3>{accessory.name}</h3>
        <p>{accessory.description}</p>
        <p>{accessory.price}</p>
      </article>
    </li>
  );
}

export default AccessoryItem;
```

Die Karte soll semantisch in einer Liste verwendet werden:

```jsx
<ul id="accessories">
  <AccessoryItem accessory={accessory} />
</ul>
```

Eine Karte erhält später beispielsweise Name, Beschreibung, Preis, Bild und eine Schaltfläche zum Hinzufügen. Verwende für das Bild einen aussagekräftigen `alt`-Text, zum Beispiel den Produktnamen.

### 4.3 Wiederholungen mit `map` anzeigen

Wenn du ein Array mit Produkten hast, rendere es mit `map`. Jedes Element bekommt einen stabilen `key`, hier die Produkt-ID:

```jsx
{accessories.map((accessory) => (
  <AccessoryItem key={accessory.id} accessory={accessory} />
))}
```

Die API verwendet Text-IDs wie `"g1"`. Verwende genau diese ID und keinen Array-Index als `key`.

**Checkpoint:** Die Komponenten sind getrennt und können mehrere unterschiedliche Produktdaten darstellen. Die Produktdaten dürfen für diesen kurzen Zwischenschritt noch lokal sein; im nächsten Abschnitt ersetzt du sie durch die API-Antwort.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 5 „Inhalte von Listen mit `map` übergeben“ und „Conditional Rendering“.

## 5. Produkte vom Backend laden

### 5.1 `Accessories` erstellen

Setze diese Anforderung im Code im Issue `API-02` um; die vollständigen Dateien stehen in Abschnitt 12.7. Das folgende Effect-Muster erklärt zunächst das Prinzip des Ladens mit `useEffect`. Den daraus abgeleiteten, wiederverwendbaren Hook `useHttp` baust und erklärst du gemeinsam mit dem zweiten HTTP-Request – dem Absenden der Bestellung – in Abschnitt 8.2 und 8.3; anschließend verwendet auch `Accessories` diesen Hook, wie in Abschnitt 12.7 vollständig gezeigt.

Erstelle `src/components/Accessories.jsx`. Die Komponente lädt beim ersten Anzeigen die Daten von `http://localhost:3000/accessories`. Verwende drei State-Werte:

- `loadedAccessories`: geladene Produkte,
- `isLoading`: zeigt, ob der Request läuft,
- `error`: enthält eine verständliche Fehlermeldung oder keinen Fehler.

Der Request soll auf `response.ok` prüfen. `fetch` wirft nicht automatisch einen Fehler, wenn der Server mit Status `404` oder `500` antwortet. Prüfe daher den Status, bevor du die Daten als erfolgreich behandelst.

Beispiel für den Ablauf im Effect:

```jsx
useEffect(() => {
  const controller = new AbortController();

  async function loadAccessories() {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3000/accessories', {
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`Produkte konnten nicht geladen werden (HTTP ${response.status}).`);
      }

      const data = await response.json();
      setLoadedAccessories(data);
    } catch (requestError) {
      if (requestError.name !== 'AbortError') {
        setError(requestError.message || 'Unbekannter Fehler beim Laden.');
      }
    } finally {
      if (!controller.signal.aborted) {
        setIsLoading(false);
      }
    }
  }

  loadAccessories();
  return () => controller.abort();
}, []);
```

Importiere `useEffect` und `useState` aus React. Die folgenden vollständigen Ausschnitte zeigen, wie die State-Werte vorbereitet und die drei Zustände gerendert werden. Ergänze sie mit dem Effect aus dem vorherigen Beispiel:

```jsx
const [loadedAccessories, setLoadedAccessories] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState('');

if (isLoading) return <p className="center">Produkte werden geladen …</p>;
if (error) return <p className="error" role="alert">{error}</p>;

return (
  <ul id="accessories">
    {loadedAccessories.map((accessory) => (
      <AccessoryItem key={accessory.id} accessory={accessory} />
    ))}
  </ul>
);
```

Erzeuge die Produktliste erst, wenn Daten geladen sind. Damit rufst du `map` nicht auf einem noch fehlenden Wert auf.

### 5.2 Bilder und Preise korrekt darstellen

In `AccessoryItem` ist `accessory.image` ein relativer Pfad, zum Beispiel `images/gaming-mouse.png`. Die Bild-URL lautet:

```jsx
const imageUrl = `http://localhost:3000/${accessory.image}`;
```

Die Preiswerte kommen in der vorhandenen Beispieldatei als Zeichenketten. Wandle sie vor der Formatierung in eine Zahl um. Erstelle `src/util/formatting.js`:

```js
export const currencyFormatter = new Intl.NumberFormat('de-AT', {
  style: 'currency',
  currency: 'EUR',
});

export function formatPrice(value) {
  const price = Number(value);
  if (!Number.isFinite(price)) {
    throw new Error(`Ungültiger Preis: ${value}`);
  }
  return currencyFormatter.format(price);
}
```

Verwende `formatPrice(accessory.price)` für Produkt- und Warenkorbpreise. Summen berechnest du ebenfalls mit `Number(item.price) * item.quantity`.

**Zusätzliche Theorie – HTTP-Fehler und Abbruch von Requests:** `fetch` unterscheidet zwischen einem Netzwerkfehler und einer HTTP-Fehlerantwort. Ein Netzwerkfehler (zum Beispiel ein nicht gestartetes Backend) führt in den `catch`-Zweig; ein HTTP-Status wie `404` führt zunächst trotzdem zu einer normalen `Response`. `response.ok` ist nur bei erfolgreichen Statuscodes wahr. Ein `AbortController` kann einen noch laufenden Request abbrechen, wenn die Component nicht mehr benötigt wird. `AbortError` ist in diesem Fall erwartbar und soll nicht als Ladefehler angezeigt werden.

**Hinweis zu `StrictMode`:** Das von Vite erzeugte Projekt rendert `<App />` standardmäßig innerhalb von `<StrictMode>`. Im Entwicklungsmodus führt React dadurch jeden Effect beim ersten Rendern einer Component absichtlich zweimal aus (mit Cleanup dazwischen), um Seiteneffekte ohne sauberes Aufräumen sichtbar zu machen. Du siehst deshalb im Network-Tab des Browsers unter Umständen zwei Requests an `/accessories`, obwohl dein Code korrekt ist – im Production-Build (`npm run build` und `npm run preview`) tritt das nicht mehr auf. Das ist also kein Fehler in deiner Implementierung, solange der zweite Request den ersten nicht einfach dupliziert, sondern über den `AbortController` sauber abgebrochen wird.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 8 „`useEffect`“, „Abhängigkeiten eines Effects“, „Einen laufenden Request aufräumen“ und „Kursdaten von der Mock-API laden“.

**Checkpoint:** Du siehst alle Produkte mit korrekten Bildern und Europreisen. Stoppe testweise das Backend und lade die Seite neu: Das Frontend soll eine verständliche Fehlermeldung statt eines Absturzes zeigen.

## 6. Gemeinsamen Warenkorb-State anlegen

Produktkarten, Kopfzeile, Warenkorb und Checkout benötigen dieselben Warenkorbdaten. Lege `src/store/CartContext.jsx` an und stelle darin Funktionen wie `addItem`, `removeItem` und `clearCart` bereit.

### 6.1 Zusätzliche Theorie: Context und `useContext`

Mit Props kann eine Elternkomponente Daten an direkte Kinder übergeben. Wenn viele Ebenen dazwischenliegen, müssten Komponenten, die die Daten gar nicht verwenden, diese nur weiterreichen. Dieses sogenannte **Prop Drilling** macht Änderungen umständlich.

React **Context** stellt einen Wert für einen Teil des Component-Baums bereit. Ein Provider umschließt diesen Bereich; Komponenten darunter lesen den Wert mit `useContext`. Context ersetzt nicht jeden lokalen State: Ein nur von einer Komponente verwendeter Dialogzustand bleibt sinnvollerweise dort.

Für dieses Projekt:

```text
CartContextProvider
└── App
    ├── Header       liest Warenkorb-Anzahl
    ├── Accessories  löst addItem aus
    ├── Cart         liest und ändert Positionen
    └── Checkout     liest Positionen und leert nach Erfolg
```

Wenn eine Komponente `useContext(CartContext)` aufruft, muss sie unterhalb des zugehörigen Providers gerendert werden.

### 6.2 Zusätzliche Theorie: Reducer und unveränderliche State-Updates

Ein **Reducer** ist eine Funktion, die aus dem bisherigen State und einer Aktion den nächsten State berechnet:

```text
reduce(state, action) -> nextState
```

Der Reducer selbst führt keine Seiteneffekte aus. Er sendet keine Requests und ändert den vorhandenen State nicht direkt. Stattdessen erstellt er neue Arrays und Objekte. `useReducer` eignet sich, wenn mehrere klar benannte Aktionen denselben State verändern. In diesem Warenkorb sind das `ADD_ITEM`, `REMOVE_ITEM` und `CLEAR_CART`.

Die Aktion beschreibt **was** geschehen soll; der Reducer entscheidet **wie** daraus ein neuer State entsteht. Das macht Warenkorbänderungen leichter nachvollziehbar als mehrere lose State-Setter.

### 6.3 Warenkorb-Context implementieren

Verwende als Ausgangszustand `{ items: [] }`. Jede Position enthält die Produktdaten und `quantity`. Wenn das Produkt bereits im Warenkorb liegt, erhöhe die Menge, statt eine zweite Position anzulegen. Beim Verringern der Menge entfernst du die Position, sobald die Menge null wäre. Eine Aktion für eine nicht vorhandene ID soll den State unverändert zurückgeben.

Baue den Reducer schrittweise:

1. `ADD_ITEM`: Produkt anhand von `id` suchen; neues Objekt mit erhöhter Menge erstellen oder eine Position mit `quantity: 1` ergänzen.
2. `REMOVE_ITEM`: passendes Produkt suchen; bei Menge `1` aus dem Array entfernen, sonst die Menge reduzieren.
3. `CLEAR_CART`: `{ ...state, items: [] }` zurückgeben.
4. Bei unbekannten Aktionen den unveränderten `state` zurückgeben.

Für die `ADD_ITEM`-Aktion kannst du dieses unveränderliche Update-Muster verwenden:

```jsx
if (action.type === 'ADD_ITEM') {
  const existingItem = state.items.find((item) => item.id === action.item.id);

  if (existingItem) {
    return {
      ...state,
      items: state.items.map((item) =>
        item.id === action.item.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    };
  }

  return {
    ...state,
    items: [...state.items, { ...action.item, quantity: 1 }],
  };
}
```

Für `REMOVE_ITEM` prüfst du zuerst `find` auf die ID. Ist keine Position vorhanden, gibst du `state` zurück. Bei `quantity === 1` filterst du diese ID aus dem Array; sonst verwendest du `map` und erstellst für die passende Position ein neues Objekt mit `quantity - 1`:

```jsx
if (action.type === 'REMOVE_ITEM') {
  const existingItem = state.items.find((item) => item.id === action.id);
  if (!existingItem) return state;

  if (existingItem.quantity === 1) {
    return {
      ...state,
      items: state.items.filter((item) => item.id !== action.id),
    };
  }

  return {
    ...state,
    items: state.items.map((item) =>
      item.id === action.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ),
  };
}
```

Für `CLEAR_CART` genügt ein neues State-Objekt mit leerem `items`-Array; es gibt keine ID zu prüfen:

```jsx
if (action.type === 'CLEAR_CART') {
  return { ...state, items: [] };
}
```

Ergänze abschließend den Fallback für unbekannte Aktionen:

```jsx
return state;
```

Lege anschließend den Context mit `createContext(null)` an. Exportiere `CartContextProvider` und einen Hook `useCart()`, der den Context mit `useContext` liest und einen Fehler wirft, falls der Provider fehlt. So wird eine falsch platzierte Komponente nicht stillschweigend als funktionierend behandelt.

Die Grundform des Providers und des Custom Hooks ist:

```jsx
const CartContext = createContext(null);

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  const value = {
    items: cart.items,
    addItem: (item) => dispatch({ type: 'ADD_ITEM', item }),
    removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', id }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error('useCart muss innerhalb von CartContextProvider verwendet werden.');
  }
  return context;
}
```

Ergänze die Imports für `createContext`, `useContext` und `useReducer` und definiere `cartReducer` oberhalb des Providers.

Ein Reducer soll beispielsweise keine Operation wie `state.items.push(...)` verwenden. Erstelle stattdessen ein neues Array, etwa mit `map`, `filter` oder Spread-Syntax. React erkennt Änderungen zuverlässig, wenn neuer State als neue Objekte zurückgegeben wird.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 6 „State und Events“, insbesondere „Wo soll State gespeichert werden?“ und „Abgeleitete Werte“. Context und Reducer werden im Abschnitt oben zusätzlich eingeführt.

### 6.4 Provider einhängen und Warenkorbaktionen verbinden

Umschließe die Anwendung in `src/App.jsx` mit `CartContextProvider`. In `AccessoryItem` liest du `useCart()` und rufst beim Button-Klick `addItem(accessory)` auf.

Die Provider werden in `App` um die gesamte Oberfläche gelegt:

```jsx
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <main>
          <Accessories />
        </main>
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}
```

Importiere die Komponenten und Provider aus den Dateien, in denen du sie angelegt hast. Die Reihenfolge sorgt dafür, dass alle Shop-Komponenten beide Contexts lesen können.

Berechne Warenkorb-Anzahl und Zwischensumme aus `items`, statt sie zusätzlich im State zu speichern:

```js
const itemCount = items.reduce((total, item) => total + item.quantity, 0);
const total = items.reduce(
  (sum, item) => sum + Number(item.price) * item.quantity,
  0
);
```

Das sind **abgeleitete Werte**: Sie werden aus vorhandenem State berechnet. Wenn du sie parallel speicherst, können sie von den tatsächlichen Positionen abweichen.

Erstelle `CartItem.jsx`, das Name, Einzelpreis, Menge sowie „+“ und „−“-Aktionen darstellt. Verwende in jeder gerenderten Warenkorbposition `key={item.id}`.

**Checkpoint:** Produkte lassen sich hinzufügen. Mehrfaches Hinzufügen erhöht die Menge; „−“ verringert sie und entfernt sie bei Menge eins. Kopfzeile und Summe aktualisieren sich direkt.

## 7. Warenkorb und Checkout-Dialog

### 7.1 Dialogzustand verwalten

Erstelle `src/store/UserProgressContext.jsx` mit einem State `progress`, dessen Werte `null`, `'cart'` oder `'checkout'` sein können. Stelle Funktionen bereit, um Warenkorb und Checkout anzuzeigen und den Dialog zu schließen. So kann `Header` den Warenkorb öffnen und `Cart` zum Checkout wechseln.

Verwende denselben Context/Provider-Aufbau wie für den Warenkorb, aber `useState` statt `useReducer`: `showCart()` setzt `progress` auf `'cart'`, `showCheckout()` auf `'checkout'` und `hideProgress()` auf `null`. Der Provider stellt `progress` und diese drei Funktionen bereit. In `App` kommt der Provider oberhalb von `CartContextProvider`, damit alle Shop-Komponenten darauf zugreifen können.

Ein möglicher vollständiger Context:

```jsx
import { createContext, useContext, useState } from 'react';

const UserProgressContext = createContext(null);

export function UserProgressContextProvider({ children }) {
  const [progress, setProgress] = useState(null);

  const value = {
    progress,
    showCart: () => setProgress('cart'),
    showCheckout: () => setProgress('checkout'),
    hideProgress: () => setProgress(null),
  };

  return (
    <UserProgressContext.Provider value={value}>
      {children}
    </UserProgressContext.Provider>
  );
}

export function useUserProgress() {
  const context = useContext(UserProgressContext);
  if (context === null) {
    throw new Error('useUserProgress muss innerhalb von UserProgressContextProvider verwendet werden.');
  }
  return context;
}
```

### 7.2 Zusätzliche Theorie: natives `<dialog>`, `useRef` und DOM-APIs

Ein **Ref** ist eine Referenz auf ein DOM-Element. Anders als State löst eine Änderung an einem Ref selbst kein erneutes Rendern aus. `useRef(null)` eignet sich unter anderem, wenn eine Browser-API direkt auf ein Element angewendet werden muss.

Das HTML-Element `<dialog>` stellt mit `showModal()` einen modalen Dialog bereit. Ein modaler Dialog liegt über der übrigen Seite; der Browser behandelt den Hintergrund als inaktiv. `useEffect` verbindet hier React-State (`open`) mit der Dialog-API. Das DOM-Element wird über `ref` angesprochen:

```jsx
const dialog = useRef(null);

useEffect(() => {
  const node = dialog.current;
  if (!node) return;

  if (open && !node.open) node.showModal();
  if (!open && node.open) node.close();
}, [open]);
```

Eine Dialog-Komponente rendert das Element mit `ref={dialog}`. Beim Drücken der Escape-Taste wird das `cancel`-Ereignis ausgelöst. Verhindere das direkte native Schließen mit `event.preventDefault()` und melde das Schließen an die zuständige Context-Funktion; diese ändert den React-State, woraufhin der Effect den Dialog schließt. Verwende `useEffect` hier, weil `showModal()` eine Browser-API außerhalb des normalen React-Renderings ist.

Die vollständige Komponentenhülle sieht beispielsweise so aus:

```jsx
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, open, onClose, className = '' }) {
  const dialog = useRef(null);

  useEffect(() => {
    const node = dialog.current;
    if (!node) return;
    if (open && !node.open) {
      node.showModal();
    } else if (!open && node.open) {
      node.close();
    }
  }, [open]);

  function handleCancel(event) {
    event.preventDefault();
    onClose?.();
  }

  const portalElement = document.getElementById('modal');
  if (!portalElement) {
    throw new Error('Das Dialog-Portal #modal fehlt in index.html.');
  }

  return createPortal(
    <dialog
      ref={dialog}
      className={`modal ${className}`.trim()}
      onCancel={handleCancel}
    >
      {children}
    </dialog>,
    portalElement
  );
}
```

Der vollständige, issuebezogene Stand für `Modal.jsx`, das Portal-Element und die Warenkorb-Komponente ist in Abschnitt 12.9 dokumentiert.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 8 „`useEffect`“ und „Abhängigkeiten eines Effects“. Refs und die `<dialog>`-API werden dort nicht vertieft; die Erklärung oben gilt für die konkrete Verwendung im Tutorial.

### 7.3 Dialogkomponente und Warenkorb

Erstelle `src/components/UI/Modal.jsx` mit Props `open`, `onClose`, `className` und `children`. Implementiere darin den Effect aus dem vorherigen Abschnitt. Setze das Dialog-Element nicht zusätzlich mit einem JSX-Attribut `open` auf, weil du es über `showModal()` und `close()` steuerst.

`Cart.jsx` soll:

- den Warenkorb als modalen Dialog zeigen,
- eine verständliche Nachricht bei leerem Warenkorb anzeigen,
- für jede Position `CartItem` rendern,
- die Gesamtsumme anzeigen,
- eine Schaltfläche „Weiter einkaufen“ zum Schließen und
- eine Schaltfläche „Zur Kasse“ nur bei nichtleerem Warenkorb zeigen.

Beim Klick auf „Zur Kasse“ wechselst du den Dialogzustand zu `'checkout'`. Berechne die Summe wieder aus den Warenkorbpositionen.

Übergib dem Warenkorb-Dialog `open={progress === 'cart'}` und einen `onClose`-Callback, der den Dialogzustand zurücksetzt. Die Modal-Komponente ruft diesen Callback beim Escape-Ereignis auf. Wenn der Warenkorb beim Wechsel zum Checkout programmatisch geschlossen wird, wird kein Escape-Ereignis ausgelöst; der Zustand bleibt daher auf `'checkout'` und das Checkout-Dialogfenster kann öffnen.

**Checkpoint:** Warenkorb lässt sich über die Kopfzeile öffnen, per Escape oder Schaltfläche schließen und zum Checkout wechseln.

## 8. Bestellformular an das Backend senden

### 8.1 Formular und Eingabekomponenten

Erstelle eine wiederverwendbare `Input.jsx`-Komponente mit Props für `label`, `id` und weitere native Input-Eigenschaften. Verknüpfe das Label mit dem Eingabefeld über `htmlFor={id}` und `id={id}`. Formulareingaben müssen einen `name` besitzen, damit der Browser ihre Werte in `FormData` aufnehmen kann.

Das Formular benötigt diese Felder:

| Feld | `name`-Wert | Regel |
| --- | --- | --- |
| Name | `name` | erforderlich |
| E-Mail | `email` | erforderlich, Eingabetyp `email` |
| Straße | `street` | erforderlich |
| Postleitzahl | `postal-code` | erforderlich |
| Ort | `city` | erforderlich |

Verwende für die Felder `required`. Das ist eine erste clientseitige Validierung und verbessert die Bedienung. Das Backend validiert unabhängig davon nochmals. Die Namen müssen exakt zum Backend-Vertrag passen.

### 8.2 Zusätzliche Theorie: eigene Hooks und Request-Lebenszyklus

`Accessories` lädt die Produkte bereits mit einem eigenen Lade-, Fehler- und Datenstate rund um `fetch` (Abschnitt 5.1). Für das Absenden der Bestellung brauchst du ein fast identisches Muster: wieder einen Lade-State, einen Fehler-State und wieder `fetch` mit Statusprüfung. Statt diese Logik ein zweites Mal zu schreiben, lohnt es sich jetzt, sie in einen eigenen Hook auszulagern.

Ein **Custom Hook** ist eine JavaScript-Funktion, deren Name mit `use` beginnt und die selbst React-Hooks verwendet. Er bündelt zustandsbezogene Logik, damit mehrere Components sie wiederverwenden können; er rendert selbst keine Oberfläche. `useHttp` soll Fetching-, Lade- und Fehlerlogik an einem Ort halten, während `Accessories` und `Checkout` weiterhin selbst entscheiden, wie sie ihre Zustände darstellen.

Für den GET-Request der Produktliste soll der Hook selbstständig beim ersten Rendern laden; für den POST-Request der Bestellung soll er erst auf Aufruf senden, etwa beim Absenden des Formulars. Beide Fälle benötigen außerdem eine Abbruchmöglichkeit: Jeder Request erhält einen eigenen `AbortController`, dessen `signal` an `fetch` übergeben wird. Startet ein neuer Request, bricht der Hook den vorherigen ab; wird die Component entfernt, bricht die Cleanup-Funktion des Effects einen noch laufenden GET-Request ab. Ein Abbruch ist kein fachlicher Fehler: `fetch` lehnt dabei mit einem `AbortError` ab, den der Hook nicht als Fehlermeldung anzeigt.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 8 „`useEffect`“, „Einen Effect aufräumen“ und „Einen laufenden Request aufräumen“. Eigene Hooks als wiederverwendbare Abstraktion werden dort nicht vertieft; die Erklärung oben gilt für die konkrete Verwendung im Tutorial.

### 8.3 Eigenen Hook `useHttp` erstellen

Lege `src/hooks/useHttp.js` an. Der Hook erhält `url`, `config` (Fetch-Optionen wie `method` und `headers`) und `initialData` als Parameter und gibt `{ data, isLoading, error, sendRequest, clearData }` zurück:

```jsx
import { useCallback, useEffect, useRef, useState } from 'react';

async function sendHttpRequest(url, config, signal) {
  const response = await fetch(url, { ...config, signal });
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      responseData.message ||
        `Request fehlgeschlagen (HTTP ${response.status}).`
    );
  }

  return responseData;
}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(
    !config?.method || config.method === 'GET'
  );
  const [error, setError] = useState('');
  const controllerRef = useRef(null);

  const sendRequest = useCallback(
    async (body, controller = new AbortController()) => {
      controllerRef.current?.abort();
      controllerRef.current = controller;
      setIsLoading(true);
      setError('');

      const requestConfig = {
        ...config,
        ...(body !== undefined ? { body } : {}),
      };

      try {
        const responseData = await sendHttpRequest(
          url,
          requestConfig,
          controller.signal
        );

        if (controller.signal.aborted) {
          return null;
        }

        setData(responseData);
        return responseData;
      } catch (requestError) {
        if (!controller.signal.aborted && requestError.name !== 'AbortError') {
          setError(requestError.message || 'Unbekannter HTTP-Fehler.');
        }
        return null;
      } finally {
        if (controllerRef.current === controller) {
          controllerRef.current = null;
          if (!controller.signal.aborted) {
            setIsLoading(false);
          }
        }
      }
    },
    [url, config]
  );

  useEffect(() => {
    if (config?.method && config.method !== 'GET') {
      return undefined;
    }

    const controller = new AbortController();
    void sendRequest(undefined, controller);

    return () => {
      controller.abort();
      if (controllerRef.current === controller) {
        controllerRef.current = null;
      }
    };
  }, [config, sendRequest]);

  useEffect(
    () => () => {
      controllerRef.current?.abort();
      controllerRef.current = null;
    },
    []
  );

  const clearData = useCallback(() => {
    controllerRef.current?.abort();
    controllerRef.current = null;
    setData(initialData);
    setError('');
    setIsLoading(false);
  }, [initialData]);

  return { data, isLoading, error, sendRequest, clearData };
}
```

Ohne `method` oder bei `method: 'GET'` startet der innere Effect den Request automatisch, sobald sich `url` oder `config` ändern; das deckt den Fall von `Accessories` ab. Bei anderen Methoden wie `POST` bleibt `isLoading` zunächst `false`, und erst ein Aufruf von `sendRequest(body)` löst den Request aus; das deckt den Fall von `Checkout` ab. `sendRequest` gibt die Antwortdaten bei Erfolg zurück und `null` bei Fehler oder Abbruch, damit der Aufrufer darauf reagieren kann. `clearData()` setzt Daten-, Fehler- und Ladezustand zurück und bricht einen noch laufenden Request ab; das brauchst du gleich, wenn der Checkout-Dialog nach erfolgreicher Bestellung geschlossen wird.

Baue `Accessories.jsx` jetzt auf den Hook um. Der bisherige Stand aus Abschnitt 5.1 verwaltet `loadedAccessories`, `isLoading` und `error` noch selbst und lädt mit einem eigenen Effect:

```jsx
import { useEffect, useState } from 'react';
import AccessoryItem from './AccessoryItem.jsx';

export default function Accessories() {
  const [loadedAccessories, setLoadedAccessories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadAccessories() {
      setIsLoading(true);
      setError('');

      try {
        const response = await fetch('http://localhost:3000/accessories', {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Produkte konnten nicht geladen werden (HTTP ${response.status}).`);
        }

        const data = await response.json();
        setLoadedAccessories(data);
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message || 'Unbekannter Fehler beim Laden.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadAccessories();
    return () => controller.abort();
  }, []);

  if (isLoading) return <p className="center">Produkte werden geladen …</p>;
  if (error) return <p className="error" role="alert">{error}</p>;

  return (
    <ul id="accessories">
      {loadedAccessories.map((accessory) => (
        <AccessoryItem key={accessory.id} accessory={accessory} />
      ))}
    </ul>
  );
}
```

Entferne die drei State-Werte, den Effect, den `AbortController` und die `fetch`-Logik vollständig. An ihre Stelle tritt ein einziger Aufruf von `useHttp`, der dieselben drei Werte liefert:

```jsx
import AccessoryItem from './AccessoryItem.jsx';
import useHttp from '../hooks/useHttp.js';
import Error from './Error.jsx';

const requestConfig = {};

export default function Accessories() {
  const {
    data: loadedAccessories,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/accessories', requestConfig, []);

  if (isLoading) {
    return <p className="center">Produkte werden geladen …</p>;
  }

  if (error) {
    return (
      <Error title="Produkte konnten nicht geladen werden" message={error} />
    );
  }

  return (
    <ul id="accessories">
      {loadedAccessories.map((accessory) => (
        <AccessoryItem key={accessory.id} accessory={accessory} />
      ))}
    </ul>
  );
}
```

Beachte, dass `requestConfig` als Konstante außerhalb der Komponente steht, statt bei jedem Rendern neu als `{}` erzeugt zu werden. `config` ist Abhängigkeit des `useCallback` für `sendRequest` und des automatisch startenden Effects in `useHttp`. Ein bei jedem Rendern neues Objekt hätte eine neue Referenz, selbst wenn der Inhalt gleich bleibt; der Effect würde dadurch nach jedem Rendern erneut auslösen und endlos nachladen. Eine außerhalb der Komponente angelegte Konstante bleibt referenziell stabil, solange die Komponente nicht neu geladen wird.

Imports, Zustände (`isLoading`, `error`, Liste) und das `map` über `loadedAccessories` bleiben inhaltlich gleich; nur Herkunft und Bündelung der drei Werte ändern sich. Der vollständige Dateiinhalt von `useHttp.js` und der überarbeiteten `Accessories.jsx` steht in Abschnitt 12.7.

### 8.4 Zusätzliche Theorie: Formular-Actions und `useActionState`

Seit React 19 kann das `action`-Attribut eines `<form>` direkt eine Funktion erhalten, statt den klassischen Umweg über `onSubmit` und `event.preventDefault()` zu gehen. React ruft diese Funktion beim Absenden automatisch mit einem `FormData`-Objekt auf; ein eigener `preventDefault()`-Aufruf ist nicht nötig, da React das native Neuladen der Seite bereits unterbindet.

`useActionState(actionFn, initialState)` verbindet eine solche Action mit React-State und liefert ein Array `[state, formAction, isPending]`:

- `state` ist der zuletzt von `actionFn` zurückgegebene Wert (zu Beginn `initialState`),
- `formAction` wird an `<form action={...}>` übergeben,
- `isPending` ist `true`, solange `actionFn` noch läuft, und eignet sich direkt für `disabled` und Ladehinweise – ein eigener `isSubmitted`- oder `isSending`-State ist dafür nicht mehr nötig.

`actionFn` erhält als Parameter `(previousState, formData)` und darf `async` sein; React wartet automatisch auf das zurückgegebene Promise, bevor `isPending` wieder auf `false` wechselt. Du kannst innerhalb von `actionFn` weiterhin den Hook `useHttp` aus Abschnitt 8.3 verwenden: `actionFn` ruft `sendRequest(...)` auf und wartet dessen Ergebnis ab, während `useHttp` wie gewohnt für Abbruch, Datenhaltung und Fehlerzustand zuständig bleibt. So verbinden sich die beiden Konzepte, statt sich zu ersetzen.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 7 „Formulare und Validierung“. Form-Actions und `useActionState` sind ein React-19-Feature und daher dort noch nicht beschrieben; die klassische Variante mit `onSubmit` und `event.preventDefault()` aus Kapitel 7 bleibt ein gültiger, kontrollierter Ansatz für andere Formulare.

**Hinweis zur React-Version:** `useActionState` setzt React 19 voraus. Das in Abschnitt 2.1 erzeugte Vite-Projekt installiert React 19 standardmäßig; prüfe sicherheitshalber die Version in `frontend/package.json` (`"react": "^19..."`). Falls dort eine ältere Hauptversion steht, führe `npm install react@^19 react-dom@^19` im Ordner `frontend/` aus, bevor du mit diesem Abschnitt fortfährst.

### 8.5 Bestellung mit `useHttp` und `useActionState` senden

Verwende `useHttp` wie in `Accessories.jsx` mit einer außerhalb der Komponente angelegten, referenziell stabilen Request-Konfiguration, diesmal für `POST` und ohne `initialData`:

```jsx
const requestConfig = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
};

const { data, error, sendRequest, clearData } = useHttp(
  'http://localhost:3000/orders',
  requestConfig
);
```

Lies `items` und `clearCart` aus `useCart()`. Die Action-Funktion verpackt die Formulardaten und den Warenkorb in den vom Backend erwarteten Umschlag `{ order: { customer, items } }` und delegiert das eigentliche Senden an `sendRequest`:

```jsx
async function checkoutAction(previousState, formData) {
  const customer = Object.fromEntries(formData.entries());
  const order = { customer, items };
  await sendRequest(JSON.stringify({ order }));
  return null;
}

const [, formAction, isSending] = useActionState(checkoutAction, null);
```

Das Backend erwartet den Wrapper `order` und die Positionen mit `quantity`. Schicke nicht nur `customer` oder ein Feld `products`; das entspricht nicht dem API-Vertrag.

`sendRequest` prüft intern `response.ok` und wirft bereits einen Fehler mit der `message` aus der Antwort, wenn sie vorhanden ist; dieser Fehler landet automatisch im `error`-Rückgabewert von `useHttp`. Einen eigenen Erfolgs-State brauchst du nicht: Leite den Erfolg direkt aus dem Hook ab, etwa mit `const orderSucceeded = Boolean(data) && !error;`. Übergib `formAction` an `<form action={formAction}>`; ein `onSubmit`-Handler und `event.preventDefault()` entfallen damit.

Setze `disabled={isSending}` auf die Absende-Schaltfläche und zeige bei `isSending` einen Ladehinweis. Zeige `error` mit `role="alert"` an. Ist `orderSucceeded` wahr, rendere anstelle des Formulars eine Bestätigung mit einer Schaltfläche zum Beenden. In deren Handler kannst du `clearCart()`, `clearData()` und `hideCheckout()` aufrufen; `clearData()` setzt dabei Daten- und Fehlerzustand des Hooks zurück, damit `orderSucceeded` wieder `false` wird und ein erneuter Checkout im leeren Ausgangszustand startet.

Behandle einen nicht erfolgreichen HTTP-Status als Fehler und zeige dessen `message` an. Zeige im Erfolgszustand eine Bestätigung. Leere den Warenkorb erst, wenn der Request erfolgreich war. Bei einem Fehler bleiben Warenkorb und Formular erhalten, damit die Bestellung erneut versucht werden kann.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 7 „Formulare und Validierung“ und Kapitel 8 „Daten an die Mock-API senden“. Du verwendest hier ein nicht kontrolliertes Formular mit `FormData`, dessen Absenden über eine Form-Action statt über `onSubmit` abläuft (siehe 8.4); kontrollierte Felder mit `value` und `onChange` sind eine Alternative aus Kapitel 7.

### 8.6 Erfolgreichen Abschluss umsetzen

Nach bestätigtem Erfolg soll „Fertig“:

- den Warenkorb mit `clearCart()` leeren,
- den Hook-Zustand mit `clearData()` zurücksetzen und
- den Dialogzustand schließen.

Setze diese Aktionen nicht schon vor dem Absenden um. Falls der Request fehlschlägt, dürfen die eingegebenen Daten und Warenkorbpositionen nicht verloren gehen.

**Checkpoint:** Fülle alle Felder aus und sende eine Bestellung. Prüfe, dass der Erfolgszustand angezeigt wird und die Bestellung in `backend/data/orders.json` gespeichert wurde. Teste auch einen leeren Warenkorb und einen Request bei gestopptem Backend.

## 9. Styling und Bedienbarkeit

Das Stylesheet wurde bereits im frühen Issue `STYLE-01` übernommen. Schreibe es nicht neu und erfinde keine zusätzlichen CSS-Klassen, sofern sie für die Umsetzung nicht wirklich erforderlich sind. Verwende in den Komponenten die im bereitgestellten Stylesheet vorgesehenen Klassen. Gestalte kein losgelöstes Demo-Layout, sondern die tatsächlichen Zustände der Anwendung.

### Gestaltungs- und Bedienbarkeitsprüfungen

- Prüfe, dass Produktkarten in einem responsiven Grid erscheinen und Bilder einheitlich zugeschnitten sind.
- Prüfe, dass Preise, Aktionen und Produktbeschreibungen gut unterscheidbar sind.
- Prüfe, dass Warenkorb und Checkout als Dialoge mit klarem Hintergrund und gut erkennbaren Aktionen erscheinen.
- Prüfe, dass Lade-, Fehler-, Leer- und Erfolgszustände sichtbar sind.
- Lass sichtbare Fokuszustände für interaktive Elemente bestehen.
- Verwende ausreichend große und verständlich beschriftete Schaltflächen.
- Prüfe auf schmalen Fenstern, dass Karten, Warenkorb und Formular ohne horizontales Scrollen bedienbar bleiben.

Halte die Struktur in JSX, Aussehen in CSS und Datenverarbeitung in JavaScript gedanklich unterscheidbar. Verwende semantische Elemente wie `<header>`, `<main>`, `<ul>`, `<li>`, `<form>` und `<button>`. Bei Schaltflächen innerhalb eines Formulars, die nicht absenden sollen, setze `type="button"`; Submit-Schaltflächen erhalten `type="submit"`.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 10 „Styling in React“, besonders „Klassisches CSS in React“, „Zustände sichtbar gestalten“ und „Responsive Layouts“. Die Prüfung der Bedienbarkeit erfolgt hier; das CSS selbst ist vorgegeben. Für Formulare und Bedienbarkeit siehe Kapitel 7.

## 10. Prüfen, Fehler finden und abgeben

### 10.1 Funktionsprüfung

Gehe alle Fälle durch und hake sie ab:

- [ ] Produktliste lädt beim Start.
- [ ] Bei gestopptem Backend erscheint eine Fehlermeldung und die Seite bleibt bedienbar.
- [ ] Jedes Produkt zeigt das richtige Bild, den Namen, die Beschreibung und den Preis.
- [ ] Wiederholtes Hinzufügen erhöht die Menge derselben Position.
- [ ] „−“ verringert die Menge; bei Menge eins verschwindet die Position.
- [ ] Anzahl im Header und Zwischensumme stimmen mit dem Warenkorb überein.
- [ ] Ein leerer Warenkorb erlaubt keinen Checkout.
- [ ] Pflichtfelder verhindern ein leeres Formular.
- [ ] Ein gültiger Checkout sendet `POST /orders` und zeigt Erfolg.
- [ ] Ein fehlgeschlagener Request zeigt einen Fehler; der Warenkorb bleibt erhalten.
- [ ] Nach bestätigtem Erfolg wird der Warenkorb geleert.
- [ ] Dialoge lassen sich mit Schaltfläche und Escape schließen.
- [ ] Oberfläche ist mit Tastatur und auf schmalen Bildschirmen bedienbar.

Dokumentiere die durchgeführten Prüffälle und ihre Ergebnisse in `docs/test-report.md`. Nenne auch bekannte Fehler oder Abweichungen. Dieses Prüfprotokoll gehört zum Issue `QA-01` und muss mit dessen Commit gepusht werden.

### 10.2 Lint und Produktions-Build

Im `frontend/`-Ordner:

```powershell
npm run lint
npm run build
```

Behebe gemeldete Fehler. Ein erfolgreicher Build prüft, ob Vite die Anwendung für die Produktion erstellen kann; er ersetzt nicht die Funktionsprüfung im Browser.

### 10.3 Häufige Fehler

| Symptom | Prüfe zuerst |
| --- | --- |
| `Failed to fetch` | Läuft das Backend im ersten Terminal auf Port `3000`? |
| Bilder sind nicht sichtbar | Beginnt die Bild-URL mit `http://localhost:3000/` und stimmt `accessory.image`? |
| `map is not a function` | Ist die Antwort von `/accessories` ein Array? Wird erst nach dem Laden `map` aufgerufen? |
| Browser meldet CORS | Ist der Request an den richtigen Backend-Port gerichtet? Läuft das bereitgestellte Backend mit seiner CORS-Konfiguration? |
| Sehr viele oder endlose Requests im Network-Tab | Ist `requestConfig` für `useHttp` als Modul-Konstante außerhalb der Komponente definiert statt als `{}`-Literal im Komponentenkörper (siehe Abschnitt 8.3/8.5)? Ein neues Objekt bei jedem Rendern löst sonst eine Endlosschleife aus. |
| Backend meldet fehlende Bestelldaten | Stimmen `order`, `customer`, `items`, `postal-code` und `quantity` exakt mit dem API-Vertrag überein? |
| Dialog öffnet nicht | Ist `ref` am `<dialog>` gesetzt und wird `showModal()` erst nach dem Rendern im Effect aufgerufen? |
| Warenkorbsumme ist falsch | Wurde `price` vor der Rechnung mit `Number(...)` in eine Zahl umgewandelt? |
| React meldet fehlende Keys | Hat jedes Element aus `map` einen stabilen `key`, zum Beispiel `accessory.id`? |

## 11. Theorieüberblick

| Im Tutorial verwendetes Konzept | Nachlesen in [react_theory.md](docs/react_theory.md) |
| --- | --- |
| React-Einstiegspunkt und Vite | Kapitel 3 „React-Projekt anlegen“ |
| Components und JSX | Kapitel 4 „Components und JSX“ |
| Props, `children`, Listen und Keys | Kapitel 5 „Props: Daten an Components übergeben“ |
| State, Events, abgeleitete Werte | Kapitel 6 „State und Events“ |
| Formular und Validierung | Kapitel 7 „Formulare und Validierung“ |
| `useEffect`, Fetching, Loading und Fehler | Kapitel 8 „Hooks und asynchrones Laden“ |
| Responsives CSS und sichtbare Zustände | Kapitel 10 „Styling in React“ |
| Context, `useContext`, Reducer, `useRef`, `<dialog>` und eigene Hooks (`useHttp`) | Zusätzliche Theorie in den Abschnitten 6, 7, 8 und 12 dieses Tutorials |
| Form-Actions und `useActionState` (React 19) | Zusätzliche Theorie in Abschnitt 8.4 dieses Tutorials (noch nicht in react_theory.md) |
| Schnittstellen und API-Vertrag erkunden | Arbeitsauftrag 1.1 und Kapitel 8 „Hooks und asynchrones Laden“ |
| `public`-Ordner und `src/assets`-Importe im Vergleich | Abschnitt 2.2 „Backend-Logo ins Frontend kopieren“ |

## 12. Code- und Projektstände pro Issue

Dieses Kapitel ist die praktische Bauanleitung. Arbeite die Issues aus Kapitel 0 weiter in der angegebenen Reihenfolge ab und verwende pro Issue genau den dazugehörigen Abschnitt. Die Codeblöcke zeigen vollständige Datei-Inhalte, sofern ausdrücklich „vollständiger Inhalt“ dabeisteht. Bei „Datei ergänzen/ersetzen“ ist der jeweilige Block der vollständige neue Inhalt für diesen Stand.

Die Zwischenstände sind aufeinander aufgebaut: Eine Datei, die in einem späteren Issue verändert wird, erhält dort erneut ihren vollständigen Inhalt. Lege Verzeichnisse und Dateien nicht vorzeitig an. Nach jedem Issue muss der im Abschnitt gezeigte Projektbaum vorhanden sein.

Die Projektbäume innerhalb der Issue-Abschnitte zeigen teilweise nur die neu angelegten oder geänderten Bereiche. Alle Dateien des vorangehenden Stands bleiben erhalten, sofern nicht ausdrücklich „ersetzt“ oder „entfernen“ dabeisteht. Der vollständige Endstand ist im Abschnitt `QA-01` aufgelistet.

### 12.1 `PLAN-01` – Project einrichten

Erstelle das GitHub Project und die Issues gemäß Kapitel 0. Dafür werden keine lokalen Dateien verändert und kein Git-Commit erstellt.

### 12.2 `API-01` – HTTP-Requests testen und Vertrag dokumentieren

Führe die Requests in `backend/tests/` gemäß Kapitel 1 aus. Lege im Repository-Hauptordner danach die folgende Datei an und trage beim Ausführen beobachtete Statuscodes und Antwortinhalte ein:

**`docs/api-contract.md`**

```markdown
# API-Vertrag Gaming-Accessoires

## GET /accessories

- Zweck: Produktliste laden
- Erfolgsstatus: (beim Test eintragen)
- Antwort: JSON-Array
- Felder eines Produkts: id, name, price, description, image
- Datentypen/Beobachtungen: (beim Test ergänzen)

## GET /images/gaming-mouse.png

- Zweck: Produktbild laden
- Erfolgsstatus: (beim Test eintragen)
- Antworttyp: Bilddatei
- Bezug zum Produkt: `image` enthält `images/gaming-mouse.png`

## POST /orders

- Zweck: Bestellung absenden
- Erfolgsstatus: 201
- Request-Header: `Content-Type: application/json`
- Request-Form: `{ "order": { "customer": { ... }, "items": [ ... ] } }`
- Pflichtfelder customer: name, email, street, postal-code, city
- Pflichtfelder der Warenkorbposition: id, name, price, description, image, quantity
- Beobachtete Antwort: (beim Test ergänzen)
- Seiteneffekt: Bestellung wird in `backend/data/orders.json` gespeichert

## Negativtest: GET /data/orders.json

- Beobachteter Status: (beim Test eintragen)
- Erklärung: Die Datei liegt nicht im statisch bereitgestellten `backend/public/`;
  außerdem existiert kein GET-Endpunkt zum Abrufen der Bestellungen.
```

**Projektstand nach `API-01`:**

```text
repository/
├── backend/                 (unverändert; bereitgestellt)
├── assets/
│   └── index.css            (bereitgestellt; Stylesheet für das Frontend)
├── docs/
│   └── api-contract.md      (neu)
└── frontend/                (noch nicht vorhanden)
```

Commit: `docs: document backend API contract (API-01)`.

### 12.3 `SETUP-01` – Vite-Projekt und Logo

Erstelle das Vite-Projekt im Repository-Hauptordner:

```powershell
npm create vite@latest frontend -- --template react
cd frontend
npm install
```

Kopiere das Logo ausgehend vom Repository-Hauptordner in beide Zielorte:

```powershell
Copy-Item .\backend\public\logo.png .\frontend\public\logo.png
Copy-Item .\backend\public\logo.png .\frontend\src\assets\logo.png
```

Starte Vite mit `npm run dev`. Öffne danach `/logo.png` auf der Vite-Adresse. Behalte die vom Generator erstellten Dateien bis `UI-01` bei. Der erwartete Projektbaum:

```text
repository/
├── backend/
├── docs/
│   └── api-contract.md
├── assets/
│   └── index.css              (bereitgestellt; Vorlage für das Frontend)
└── frontend/
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── eslint.config.js
    ├── vite.config.js
    ├── public/
    │   ├── logo.png         (Kopie von backend/public/logo.png; für das Favicon)
    │   └── vite.svg         (Vite-Beispiel; wird in UI-01 entfernt)
    └── src/
        ├── App.jsx
        ├── App.css          (Vite-Beispiel; wird in UI-01 entfernt)
        ├── index.css
        ├── main.jsx
        └── assets/
            ├── logo.png     (Kopie von backend/public/logo.png; für den Header-Import)
            └── react.svg    (Vite-Beispiel; wird in UI-01 entfernt)
```

Die Vite-Konfigurationsdateien stammen vom Generator und werden in diesem Tutorial nicht verändert. Die JSX-, Komponenten- und CSS-Dateien werden in den folgenden Issues schrittweise angepasst.

Commit: `feat: create Vite frontend and copy logo (SETUP-01)`.

### 12.4 `STYLE-01` – Vorbereitetes Stylesheet übernehmen

Das Stylesheet ist bereits fertig gestaltet und liegt unter `assets/index.css`. Kopiere es im Repository-Hauptordner in das neu angelegte Frontend:

```powershell
Copy-Item .\assets\index.css .\frontend\src\index.css
```

Prüfe, dass `frontend/src/main.jsx` `import './index.css';` enthält. Vite legt diesen Import standardmäßig an. Falls du ihn beim Bereinigen des Templates entfernt hast, füge ihn wieder hinzu.

Das ist der einzige notwendige CSS-Arbeitsschritt: Du schreibst keine CSS-Regeln selbst. Das vorgegebene, zentrale Stylesheet mit globalen CSS-Klassen, Grid und Media Queries ist für die überschaubare Projektgröße leicht lesbar und benötigt weder Zusatzbibliotheken noch Konfiguration. So kannst du dich auf React-Komponenten, State und die Webshop-Logik konzentrieren. In größeren Projekten können CSS Modules oder andere Verfahren Vorteile haben; dieser Einstieg priorisiert bewusst Einfachheit und Nachvollziehbarkeit.

Einige wenige Regeln (unter anderem `.modal`, `.center`, `.error` und die Animation `fade-slide-up`) sind in der Datei doppelt definiert. Das ist harmlos, da beide Vorkommen identisch sind, aber kein Hinweis auf einen Fehler in deinem eigenen Code: Übernimm die Datei trotzdem unverändert, wie sie bereitgestellt wird. Nicht jede im JSX verwendete Klasse hat zwingend eine eigene Regel – `accessory-item-content` zum Beispiel dient in Abschnitt 5 nur als strukturierender Wrapper ohne eigenes Styling; das Aussehen der enthaltenen Elemente kommt von deren eigenen Klassen.

Styling kann grundsätzlich während der Entwicklung schrittweise oder gesammelt am Ende ergänzt werden. Hier wird es früh eingebunden, damit die App bereits während des Komponentenaufbaus ähnlich wie das Ziel-Wireframe aussieht. Die Datei wird später nicht nochmals durch ein anderes Stylesheet ersetzt; du kontrollierst in Abschnitt 9 nur noch die Darstellung und Bedienbarkeit der fertigen Funktionen.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 10 „Styling in React“. JSX stellt mit `className` die Verbindung zu CSS-Klassen her; CSS-Regeln und Media Queries steuern Darstellung und responsive Layouts.

**Projektstand nach `STYLE-01`:** Der Inhalt von `frontend/src/index.css` wurde durch die bereitgestellte Datei ersetzt. Es kommen keine neuen Frontend-Dateien hinzu.

Commit: `style: apply provided webshop stylesheet (STYLE-01)`.

### 12.5 `UX-01` – Vorgegebenes Wireframe auswerten

Verwende das Wireframe aus Kapitel 3. Trage im Issue ein, welche Komponenten und Zustände du darin erkennst. Es wird **keine Datei angelegt oder ein Wireframe neu gezeichnet**.

**Projektstand nach `UX-01`:** unverändert gegenüber `STYLE-01`. Kein künstlicher Commit.

### 12.6 `UI-01` – Statische Produktübersicht aufbauen

Ersetze die von Vite erzeugte `App.jsx` und lege die drei Komponenten sowie den UI-Button an. Die Produktdaten sind für diesen Zwischenstand lokale Beispieldaten. Die Add-Schaltfläche ist zunächst deaktiviert; sie wird in `CART-01` funktional verbunden.

Entferne bei diesem Issue die Vite-Template-Dateien `src/App.css`, `src/assets/react.svg` und `public/vite.svg`, sofern vorhanden. Nach dem Ersetzen von `App.jsx` werden sie nicht mehr benötigt. Entferne keine Konfigurationsdateien und nicht die beiden Logo-Kopien.

**Projektstruktur nach `UI-01`:**

```text
frontend/
├── public/
│   └── logo.png
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── assets/
    │   └── logo.png
    └── components/
        ├── Accessories.jsx
        ├── AccessoryItem.jsx
        ├── Header.jsx
        └── UI/
            └── Button.jsx
```

**`frontend/src/main.jsx` – vollständiger Inhalt**

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

**`frontend/index.html` – vollständiger Inhalt nach `UI-01`**

```html
<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gaming Accessoires</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**`frontend/src/App.jsx` – vollständiger Inhalt**

```jsx
import Header from './components/Header.jsx';
import Accessories from './components/Accessories.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Accessories />
      </main>
    </>
  );
}
```

**`frontend/src/components/UI/Button.jsx` – vollständiger Inhalt**

```jsx
export default function Button({
  children,
  textOnly = false,
  className = '',
  ...props
}) {
  const variantClass = textOnly ? 'text-button' : 'button';
  const classes = [variantClass, className].filter(Boolean).join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
```

**`frontend/src/components/Header.jsx` – vollständiger Inhalt**

```jsx
import Button from './UI/Button.jsx';
import logoImg from '../assets/logo.png';

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Gaming Accessoires" />
        <h1>Gaming Accessoires</h1>
      </div>
      <nav aria-label="Hauptnavigation">
        <Button type="button" textOnly disabled>
          Warenkorb (0)
        </Button>
      </nav>
    </header>
  );
}
```

**`frontend/src/components/Accessories.jsx` – vollständiger Inhalt**

```jsx
import AccessoryItem from './AccessoryItem.jsx';

const sampleAccessories = [
  {
    id: 'g1',
    name: 'RGB Gaming Mouse',
    price: '49.99',
    description: 'Gaming-Maus mit RGB-Beleuchtung und programmierbaren Tasten.',
    image: 'images/gaming-mouse.png',
  },
  {
    id: 'g2',
    name: 'Mechanical Keyboard',
    price: '89.99',
    description: 'Mechanische Tastatur mit RGB-Beleuchtung.',
    image: 'images/mechanical-keyboard.png',
  },
  {
    id: 'g3',
    name: 'Gaming Headset',
    price: '69.99',
    description: 'Headset mit Surround-Sound und Mikrofon.',
    image: 'images/gaming-headset.png',
  },
];

export default function Accessories() {
  return (
    <section aria-labelledby="accessories-heading">
      <h2 id="accessories-heading" className="center">
        Produkte
      </h2>
      <ul id="accessories">
        {sampleAccessories.map((accessory) => (
          <AccessoryItem key={accessory.id} accessory={accessory} />
        ))}
      </ul>
    </section>
  );
}
```

**`frontend/src/components/AccessoryItem.jsx` – vollständiger Inhalt**

```jsx
import Button from './UI/Button.jsx';

export default function AccessoryItem({ accessory }) {
  return (
    <li className="accessory-item">
      <article>
        <img
          src={`http://localhost:3000/${accessory.image}`}
          alt={accessory.name}
        />
        <div className="accessory-item-content">
          <h3>{accessory.name}</h3>
          <p className="accessory-item-price">€{accessory.price}</p>
          <p className="accessory-item-description">{accessory.description}</p>
        </div>
        <p className="accessory-item-actions">
          <Button type="button" disabled>
            Warenkorb folgt in CART-01
          </Button>
        </p>
      </article>
    </li>
  );
}
```

In diesem Schritt ist das Bild bereits vom Backend geladen, aber Produktdaten sind noch lokal. Im nächsten Issue ersetzt du die temporären Daten durch die API-Antwort und ergänzt Fehler- und Ladebehandlung. Die Schaltfläche ist deaktiviert, damit die Oberfläche keine Funktion vorgibt, die noch nicht implementiert wurde.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 3 „React-Projekt anlegen“, Kapitel 4 „Components und JSX“ und Kapitel 5 „Props: Daten an Components übergeben“.

Commit: `feat: build static accessory catalog (UI-01)`.

### 12.7 `API-02` – HTTP-Hook und echte Produktdaten

Lege die folgenden neuen Dateien an und ersetze `Accessories.jsx` und `AccessoryItem.jsx`. Der Hook wird sowohl zum Laden der Produktliste als auch später im Checkout zum Senden der Bestellung verwendet; Aufbau und Funktionsweise von `useHttp` sind in Abschnitt 8.2 und 8.3 erklärt.

**Projektstruktur nach `API-02`:**

```text
frontend/src/
├── components/
│   ├── Accessories.jsx       (ersetzt)
│   ├── AccessoryItem.jsx     (ersetzt)
│   ├── Error.jsx             (neu)
│   ├── Header.jsx
│   └── UI/Button.jsx
├── hooks/
│   └── useHttp.js            (neu)
└── util/
    └── formatting.js         (neu)
```

**`frontend/src/hooks/useHttp.js` – vollständiger Inhalt**

```jsx
import { useCallback, useEffect, useRef, useState } from 'react';

async function sendHttpRequest(url, config, signal) {
  const response = await fetch(url, { ...config, signal });
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      responseData.message ||
        `Request fehlgeschlagen (HTTP ${response.status}).`
    );
  }

  return responseData;
}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(
    !config?.method || config.method === 'GET'
  );
  const [error, setError] = useState('');
  const controllerRef = useRef(null);

  const sendRequest = useCallback(
    async (body, controller = new AbortController()) => {
      controllerRef.current?.abort();
      controllerRef.current = controller;
      setIsLoading(true);
      setError('');

      const requestConfig = {
        ...config,
        ...(body !== undefined ? { body } : {}),
      };

      try {
        const responseData = await sendHttpRequest(
          url,
          requestConfig,
          controller.signal
        );

        if (controller.signal.aborted) {
          return null;
        }

        setData(responseData);
        return responseData;
      } catch (requestError) {
        if (!controller.signal.aborted && requestError.name !== 'AbortError') {
          setError(requestError.message || 'Unbekannter HTTP-Fehler.');
        }
        return null;
      } finally {
        if (controllerRef.current === controller) {
          controllerRef.current = null;
          if (!controller.signal.aborted) {
            setIsLoading(false);
          }
        }
      }
    },
    [url, config]
  );

  useEffect(() => {
    if (config?.method && config.method !== 'GET') {
      return undefined;
    }

    const controller = new AbortController();
    void sendRequest(undefined, controller);

    return () => {
      controller.abort();
      if (controllerRef.current === controller) {
        controllerRef.current = null;
      }
    };
  }, [config, sendRequest]);

  useEffect(
    () => () => {
      controllerRef.current?.abort();
      controllerRef.current = null;
    },
    []
  );

  const clearData = useCallback(() => {
    controllerRef.current?.abort();
    controllerRef.current = null;
    setData(initialData);
    setError('');
    setIsLoading(false);
  }, [initialData]);

  return { data, isLoading, error, sendRequest, clearData };
}
```

**Zusätzliche Theorie – Custom Hooks:** `useHttp` bündelt Fetching-, Lade- und Fehlerlogik für `Accessories` und später für `Checkout`. Die ausführliche Erklärung des Hooks, seiner Rückgabewerte und des `AbortController`-basierten Request-Lebenszyklus steht in Abschnitt 8.2 und 8.3, wo der Hook gemeinsam mit dem zweiten HTTP-Request eingeführt wird.

**`frontend/src/util/formatting.js` – vollständiger Inhalt**

```js
export const currencyFormatter = new Intl.NumberFormat('de-AT', {
  style: 'currency',
  currency: 'EUR',
});
```

**`frontend/src/components/Error.jsx` – vollständiger Inhalt**

```jsx
export default function Error({ title, message }) {
  return (
    <div className="error" role="alert">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
```

**`frontend/src/components/Accessories.jsx` – vollständiger Inhalt**

```jsx
import AccessoryItem from './AccessoryItem.jsx';
import useHttp from '../hooks/useHttp.js';
import Error from './Error.jsx';

const requestConfig = {};

export default function Accessories() {
  const {
    data: loadedAccessories,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/accessories', requestConfig, []);

  if (isLoading) {
    return <p className="center">Produkte werden geladen …</p>;
  }

  if (error) {
    return (
      <Error title="Produkte konnten nicht geladen werden" message={error} />
    );
  }

  if (loadedAccessories.length === 0) {
    return <p className="center">Aktuell sind keine Produkte verfügbar.</p>;
  }

  return (
    <section aria-labelledby="accessories-heading">
      <h2 id="accessories-heading" className="center">
        Produkte
      </h2>
      <ul id="accessories">
        {loadedAccessories.map((accessory) => (
          <AccessoryItem key={accessory.id} accessory={accessory} />
        ))}
      </ul>
    </section>
  );
}
```

**`frontend/src/components/AccessoryItem.jsx` – vollständiger Inhalt**

```jsx
import Button from './UI/Button.jsx';
import { currencyFormatter } from '../util/formatting.js';

export default function AccessoryItem({ accessory }) {
  const price = Number(accessory.price);

  if (!Number.isFinite(price)) {
    throw new Error(`Ungültiger Preis für ${accessory.name}: ${accessory.price}`);
  }

  return (
    <li className="accessory-item">
      <article>
        <img
          src={`http://localhost:3000/${accessory.image}`}
          alt={accessory.name}
        />
        <div className="accessory-item-content">
          <h3>{accessory.name}</h3>
          <p className="accessory-item-price">
            {currencyFormatter.format(price)}
          </p>
          <p className="accessory-item-description">{accessory.description}</p>
        </div>
        <p className="accessory-item-actions">
          <Button type="button" disabled>
            In den Warenkorb
          </Button>
        </p>
      </article>
    </li>
  );
}
```

**Hinweis zum Hook:** `requestConfig` muss außerhalb von `Accessories` definiert sein. Dadurch bekommt der Hook bei jedem Rendern nicht ein neues Konfigurationsobjekt, das den Effect erneut auslösen würde. `response.ok` muss geprüft werden, weil `fetch` bei HTTP-Fehlerstatus nicht automatisch eine Exception auslöst.

Beim initialen GET-Request erhält `isLoading` bereits den Wert `true`; deshalb setzt der Effect den State nicht synchron beim Start erneut. Bei späteren manuellen Requests (beispielsweise beim Absenden) setzt `sendRequest` den Lade- und Fehlerstatus vor dem Request.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 5 „Conditional Rendering“ sowie Kapitel 8 „`useEffect`“, „Abhängigkeiten eines Effects“ und „Einen laufenden Request aufräumen“. Custom Hooks und die Unterscheidung von HTTP-Fehlern werden hier zusätzlich erklärt.

Commit: `feat: load accessories from backend (API-02)`.

### 12.8 `CART-01` – Warenkorb und Mengenänderungen

Erstelle `src/store/CartContext.jsx` und `src/components/CartItem.jsx`. Ersetze `App.jsx`, `Header.jsx`, `AccessoryItem.jsx` und `Accessories.jsx` mit den Versionen unten. `Cart` ist in diesem Zwischenstand noch ein normaler Seitenabschnitt; der Dialog folgt im nächsten Issue.

**Projektstruktur nach `CART-01`:**

```text
frontend/src/
├── components/
│   ├── Accessories.jsx
│   ├── AccessoryItem.jsx
│   ├── Cart.jsx               (neu)
│   ├── CartItem.jsx           (neu)
│   ├── Error.jsx
│   ├── Header.jsx
│   └── UI/Button.jsx
├── hooks/useHttp.js
├── store/
│   └── CartContext.jsx        (neu)
└── util/formatting.js
```

**`frontend/src/store/CartContext.jsx` – vollständiger Inhalt**

```jsx
import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const existingItem = state.items.find(
      (item) => item.id === action.item.id
    );

    if (existingItem) {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    return {
      ...state,
      items: [...state.items, { ...action.item, quantity: 1 }],
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingItem = state.items.find((item) => item.id === action.id);
    if (!existingItem) return state;

    if (existingItem.quantity === 1) {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    }

    return {
      ...state,
      items: state.items.map((item) =>
        item.id === action.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    };
  }

  if (action.type === 'CLEAR_CART') {
    return { ...state, items: [] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const value = {
    items: cart.items,
    addItem: (item) => dispatchCartAction({ type: 'ADD_ITEM', item }),
    removeItem: (id) => dispatchCartAction({ type: 'REMOVE_ITEM', id }),
    clearCart: () => dispatchCartAction({ type: 'CLEAR_CART' }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error('useCart muss innerhalb von CartContextProvider laufen.');
  }
  return context;
}
```

**`frontend/src/App.jsx` – vollständiger Inhalt**

```jsx
import Header from './components/Header.jsx';
import Accessories from './components/Accessories.jsx';
import Cart from './components/Cart.jsx';
import { CartContextProvider } from './store/CartContext.jsx';

export default function App() {
  return (
    <CartContextProvider>
      <Header />
      <main>
        <Accessories />
        <Cart />
      </main>
    </CartContextProvider>
  );
}
```

**`frontend/src/components/Header.jsx` – vollständiger Inhalt**

```jsx
import { useCart } from '../store/CartContext.jsx';
import Button from './UI/Button.jsx';
import logoImg from '../assets/logo.png';

export default function Header() {
  const { items } = useCart();
  const totalCartItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Gaming Accessoires" />
        <h1>Gaming Accessoires</h1>
      </div>
      <nav aria-label="Hauptnavigation">
        <Button type="button" textOnly disabled>
          Warenkorb ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
```

**`frontend/src/components/AccessoryItem.jsx` – vollständiger Inhalt**

```jsx
import { useCart } from '../store/CartContext.jsx';
import { currencyFormatter } from '../util/formatting.js';
import Button from './UI/Button.jsx';

export default function AccessoryItem({ accessory }) {
  const { addItem } = useCart();
  const price = Number(accessory.price);

  if (!Number.isFinite(price)) {
    throw new Error(`Ungültiger Preis für ${accessory.name}: ${accessory.price}`);
  }

  return (
    <li className="accessory-item">
      <article>
        <img
          src={`http://localhost:3000/${accessory.image}`}
          alt={accessory.name}
        />
        <div className="accessory-item-content">
          <h3>{accessory.name}</h3>
          <p className="accessory-item-price">
            {currencyFormatter.format(price)}
          </p>
          <p className="accessory-item-description">{accessory.description}</p>
        </div>
        <p className="accessory-item-actions">
          <Button type="button" onClick={() => addItem(accessory)}>
            In den Warenkorb
          </Button>
        </p>
      </article>
    </li>
  );
}
```

**`frontend/src/components/CartItem.jsx` – vollständiger Inhalt**

```jsx
import { currencyFormatter } from '../util/formatting.js';
import Button from './UI/Button.jsx';

export default function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <li className="cart-item">
      <p>
        {item.name} – {item.quantity} ×{' '}
        {currencyFormatter.format(Number(item.price))}
      </p>
      <div className="cart-item-actions">
        <Button
          type="button"
          aria-label={`${item.name} Menge verringern`}
          onClick={onDecrease}
        >
          −
        </Button>
        <span aria-live="polite">{item.quantity}</span>
        <Button
          type="button"
          aria-label={`${item.name} Menge erhöhen`}
          onClick={onIncrease}
        >
          +
        </Button>
      </div>
    </li>
  );
}
```

**`frontend/src/components/Cart.jsx` – vollständiger Inhalt für diesen Zwischenstand**

```jsx
import { useCart } from '../store/CartContext.jsx';
import { currencyFormatter } from '../util/formatting.js';
import CartItem from './CartItem.jsx';

export default function Cart() {
  const { items, addItem, removeItem } = useCart();
  const cartTotal = items.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  return (
    <section className="cart" aria-labelledby="cart-heading">
      <h2 id="cart-heading">Warenkorb</h2>
      {items.length === 0 ? (
        <p>Dein Warenkorb ist leer.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={() => addItem(item)}
              onDecrease={() => removeItem(item.id)}
            />
          ))}
        </ul>
      )}
      <p className="cart-total">
        Summe: {currencyFormatter.format(cartTotal)}
      </p>
    </section>
  );
}
```

In `Accessories.jsx` ist jetzt die API-Datenquelle aktiv. Entferne dort gegebenenfalls noch vorhandene `sampleAccessories`-Daten vollständig. Der Provider liegt oberhalb von Header, Produktliste und Warenkorb, damit alle drei dieselben Warenkorbdaten lesen.

**Zusätzliche Theorie – Context und Reducer:** `CartContextProvider` stellt einen gemeinsamen Wert im Component-Baum bereit; `useCart()` liest ihn. Der Reducer erhält den bisherigen State und eine Action und gibt einen neuen State zurück. Er mutiert weder `state.items` noch einzelne Produkte. `items`, Stückzahl und Zwischensumme sind an den jeweils passenden Komponenten aus dem gemeinsamen State abgeleitet.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 5 „Props“, Kapitel 6 „State und Events“ und „Wo soll State gespeichert werden?“

Commit: `feat: manage cart items and quantities (CART-01)`.

### 12.9 `CART-02` – Warenkorb- und Checkout-Dialoge

Ergänze den Context für den aktuellen Dialog, ändere `Cart.jsx` vom Seitenabschnitt zum Modal und lege die Modal-Komponente sowie einen Checkout-Platzhalter an. `ORDER-01` ersetzt den Platzhalter durch das echte Formular.

**Projektstruktur nach `CART-02`:**

```text
frontend/src/
├── components/
│   ├── Cart.jsx               (ersetzt)
│   ├── Checkout.jsx           (Platzhalter, wird in ORDER-01 ersetzt)
│   └── UI/Modal.jsx           (neu)
├── store/
│   ├── CartContext.jsx
│   └── UserProgressContext.jsx (neu)
└── App.jsx                    (Provider und Dialoge ergänzt)
frontend/index.html            (Dialog-Port ergänzen)
```

**`frontend/src/store/UserProgressContext.jsx` – vollständiger Inhalt**

```jsx
import { createContext, useContext, useState } from 'react';

const UserProgressContext = createContext(null);

export function UserProgressContextProvider({ children }) {
  const [progress, setProgress] = useState(null);

  const value = {
    progress,
    showCart: () => setProgress('cart'),
    hideCart: () => setProgress(null),
    showCheckout: () => setProgress('checkout'),
    hideCheckout: () => setProgress(null),
  };

  return (
    <UserProgressContext.Provider value={value}>
      {children}
    </UserProgressContext.Provider>
  );
}

export function useUserProgress() {
  const context = useContext(UserProgressContext);
  if (context === null) {
    throw new Error(
      'useUserProgress muss innerhalb von UserProgressContextProvider laufen.'
    );
  }
  return context;
}
```

**`frontend/src/components/UI/Modal.jsx` – vollständiger Inhalt**

```jsx
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, open, onClose, className = '' }) {
  const dialog = useRef(null);

  useEffect(() => {
    const node = dialog.current;
    if (!node) return;

    if (open && !node.open) {
      node.showModal();
    } else if (!open && node.open) {
      node.close();
    }
  }, [open]);

  function handleCancel(event) {
    event.preventDefault();
    onClose?.();
  }

  const portalElement = document.getElementById('modal');
  if (!portalElement) {
    throw new Error('Das Dialog-Portal #modal fehlt in index.html.');
  }

  return createPortal(
    <dialog
      ref={dialog}
      className={`modal ${className}`.trim()}
      onCancel={handleCancel}
    >
      {children}
    </dialog>,
    portalElement
  );
}
```

**Zusätzliche Theorie – Portals und `<dialog>`:** `createPortal` rendert React-Inhalt in einen anderen DOM-Knoten, ohne seine Position im React-Component-Baum zu ändern. Das Dialogelement liegt dadurch außerhalb des normalen Seitenlayouts. `useRef` hält die DOM-Referenz; `useEffect` synchronisiert den React-Wert `open` mit den nativen Methoden `showModal()` und `close()`. Das `cancel`-Ereignis wird beim Escape-Tastendruck ausgelöst. `preventDefault()` verhindert das native Schließen, damit der React-State über `onClose` die einzige Quelle des Dialogzustands bleibt.

**Ändere `frontend/index.html` so, dass `#modal` vor `#root` existiert. Vollständiger Inhalt:**

```html
<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gaming Accessoires</title>
  </head>
  <body>
    <div id="modal"></div>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**`frontend/src/App.jsx` – vollständiger Inhalt**

```jsx
import Header from './components/Header.jsx';
import Accessories from './components/Accessories.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import { CartContextProvider } from './store/CartContext.jsx';
import { UserProgressContextProvider } from './store/UserProgressContext.jsx';

export default function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <main>
          <Accessories />
        </main>
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}
```

**`frontend/src/components/Header.jsx` – vollständiger Inhalt**

```jsx
import { useCart } from '../store/CartContext.jsx';
import { useUserProgress } from '../store/UserProgressContext.jsx';
import Button from './UI/Button.jsx';
import logoImg from '../assets/logo.png';

export default function Header() {
  const { items } = useCart();
  const { showCart } = useUserProgress();
  const totalCartItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Gaming Accessoires" />
        <h1>Gaming Accessoires</h1>
      </div>
      <nav aria-label="Hauptnavigation">
        <Button type="button" textOnly onClick={showCart}>
          Warenkorb ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
```

**`frontend/src/components/Cart.jsx` – vollständiger Inhalt**

```jsx
import { useCart } from '../store/CartContext.jsx';
import { useUserProgress } from '../store/UserProgressContext.jsx';
import { currencyFormatter } from '../util/formatting.js';
import Button from './UI/Button.jsx';
import CartItem from './CartItem.jsx';
import Modal from './UI/Modal.jsx';

export default function Cart() {
  const { items, addItem, removeItem } = useCart();
  const { progress, hideCart, showCheckout } = useUserProgress();
  const cartTotal = items.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );
  const isOpen = progress === 'cart';

  return (
    <Modal className="cart" open={isOpen} onClose={hideCart}>
      <h2>Warenkorb</h2>
      {items.length === 0 ? (
        <p>Dein Warenkorb ist leer.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={() => addItem(item)}
              onDecrease={() => removeItem(item.id)}
            />
          ))}
        </ul>
      )}
      <p className="cart-total">
        Summe: {currencyFormatter.format(cartTotal)}
      </p>
      <div className="modal-actions">
        <Button type="button" textOnly onClick={hideCart}>
          Weiter einkaufen
        </Button>
        {items.length > 0 && (
          <Button type="button" onClick={showCheckout}>
            Zur Kasse
          </Button>
        )}
      </div>
    </Modal>
  );
}
```

**`frontend/src/components/Checkout.jsx` – vorläufiger Platzhalter**

```jsx
import { useUserProgress } from '../store/UserProgressContext.jsx';
import Button from './UI/Button.jsx';
import Modal from './UI/Modal.jsx';

export default function Checkout() {
  const { progress, hideCheckout } = useUserProgress();

  return (
    <Modal
      open={progress === 'checkout'}
      onClose={hideCheckout}
      className="checkout"
    >
      <h2>Checkout</h2>
      <p>Das Bestellformular wird im nächsten Issue ergänzt.</p>
      <div className="modal-actions">
        <Button type="button" textOnly onClick={hideCheckout}>
          Schließen
        </Button>
      </div>
    </Modal>
  );
}
```

`CartContext.jsx` und `CartItem.jsx` behalten den Inhalt aus `CART-01`. Prüfe, dass der Warenkorb nur bei `progress === 'cart'` geöffnet ist. Beim Wechsel zu `checkout` schließt der Warenkorb und das Checkout-Modal öffnet sich.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 5 „Inhalte mit `children` übergeben“ und Kapitel 8 „`useEffect`“. Portals, Refs und native Dialogereignisse werden oben zusätzlich erläutert.

Commit: `feat: add cart and checkout dialogs (CART-02)`.

### 12.10 `ORDER-01` – Checkout-Formular und Bestellung

Lege `src/components/UI/Input.jsx` an und ersetze den Platzhalter in `src/components/Checkout.jsx`. Der Request verwendet den Hook aus `API-02`.

**Zusätzliche Theorie – `FormData`:** Ein HTML-Formular kann die Werte seiner benannten Eingabefelder selbst verwalten. `new FormData(form)` liest die aktuellen Werte aus; `Object.fromEntries(formData.entries())` wandelt sie in ein einfaches JavaScript-Objekt um. Dafür muss jedes Feld ein `name`-Attribut besitzen. Bei dieser Variante brauchst du nicht für jedes Eingabefeld einen eigenen React-State anzulegen. Die native Browserprüfung von `required` und `type="email"` ergänzt die serverseitige Validierung, ersetzt sie aber nicht.

**`frontend/src/components/UI/Input.jsx` – vollständiger Inhalt**

```jsx
export default function Input({ label, id, ...props }) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} required {...props} />
    </p>
  );
}
```

**`frontend/src/components/Checkout.jsx` – vollständiger Inhalt**

```jsx
import { useActionState } from 'react';

import Modal from './UI/Modal.jsx';
import Input from './UI/Input.jsx';
import Button from './UI/Button.jsx';
import Error from './Error.jsx';
import { useCart } from '../store/CartContext.jsx';
import { useUserProgress } from '../store/UserProgressContext.jsx';
import { currencyFormatter } from '../util/formatting.js';
import useHttp from '../hooks/useHttp.js';

const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

export default function Checkout() {
  const { items, clearCart } = useCart();
  const { progress, hideCheckout } = useUserProgress();
  const { data, error, sendRequest, clearData } = useHttp(
    'http://localhost:3000/orders',
    requestConfig
  );

  const cartTotal = items.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );
  const orderSucceeded = Boolean(data) && !error;

  async function checkoutAction(previousState, formData) {
    const customer = Object.fromEntries(formData.entries());
    const order = { customer, items };
    await sendRequest(JSON.stringify({ order }));
    return null;
  }

  const [, formAction, isSending] = useActionState(checkoutAction, null);

  function handleFinish() {
    clearCart();
    clearData();
    hideCheckout();
  }

  function handleClose() {
    if (orderSucceeded) {
      handleFinish();
    } else {
      hideCheckout();
    }
  }

  if (orderSucceeded) {
    return (
      <Modal
        open={progress === 'checkout'}
        onClose={handleFinish}
        className="checkout"
      >
        <h2>Bestellung erfolgreich</h2>
        <p>Vielen Dank für deine Bestellung.</p>
        <div className="modal-actions">
          <Button type="button" onClick={handleFinish}>
            Fertig
          </Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      open={progress === 'checkout'}
      onClose={handleClose}
      className="checkout"
    >
      <form action={formAction}>
        <h2>Zur Kasse</h2>
        <p>Gesamtbetrag: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Name" type="text" id="name" autoComplete="name" />
        <Input
          label="E-Mail-Adresse"
          type="email"
          id="email"
          autoComplete="email"
        />
        <Input
          label="Straße"
          type="text"
          id="street"
          autoComplete="street-address"
        />
        <div className="control-row">
          <Input
            label="Postleitzahl"
            type="text"
            id="postal-code"
            autoComplete="postal-code"
          />
          <Input
            label="Ort"
            type="text"
            id="city"
            autoComplete="address-level2"
          />
        </div>

        {error && (
          <Error title="Bestellung fehlgeschlagen" message={error} />
        )}

        <div className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Abbrechen
          </Button>
          <Button
            type="submit"
            disabled={isSending || items.length === 0}
          >
            {isSending ? 'Bestellung wird gesendet …' : 'Bestellung absenden'}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
```

Die Namen der Eingabefelder müssen exakt dem Backend entsprechen. Besonders `postal-code` enthält einen Bindestrich. Gesendet wird `JSON.stringify({ order: { customer, items } })`; die Warenkorbpositionen enthalten bereits ihre `quantity`. `formAction` übernimmt das Absenden über die native Form-Action aus Abschnitt 8.4; ein `onSubmit`-Handler mit `event.preventDefault()` ist nicht mehr nötig. `sendRequest` gibt `null` zurück, wenn ein Request fehlschlägt. Dann bleibt das Formular geöffnet, und die Fehlermeldung erscheint, ohne dass der Warenkorb geleert wird. Der Erfolg wird nicht über einen eigenen `isSubmitted`-State gemerkt, sondern direkt aus `data` und `error` des Hooks abgeleitet.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 7 „Formulare und Validierung“ sowie Kapitel 8 „Daten an die Mock-API senden“. `FormData`, HTTP-Statusprüfung und Wiederverwendung des Custom Hooks werden hier konkretisiert; Form-Actions und `useActionState` sind in Abschnitt 8.4 zusätzlich erklärt.

**Projektstruktur nach `ORDER-01`:**

```text
frontend/src/
├── components/
│   ├── Accessories.jsx
│   ├── AccessoryItem.jsx
│   ├── Cart.jsx
│   ├── CartItem.jsx
│   ├── Checkout.jsx
│   ├── Error.jsx
│   ├── Header.jsx
│   └── UI/
│       ├── Button.jsx
│       ├── Input.jsx
│       └── Modal.jsx
├── hooks/useHttp.js
├── store/
│   ├── CartContext.jsx
│   └── UserProgressContext.jsx
└── util/formatting.js
```

Commit: `feat: submit customer orders (ORDER-01)`.

### 12.11 `QA-01` – Testprotokoll und finaler Projektbaum

Lege `docs/test-report.md` an. Führe alle Prüffälle aus Kapitel 10 aus und trage das tatsächliche Ergebnis ein:

**`docs/test-report.md` – Vorlage**

```markdown
# Gaming-Accessoires-Webshop – Testprotokoll

| Nr. | Prüffall | Erwartetes Ergebnis | Ergebnis (Bestanden/Fehler) | Notiz |
| ---: | --- | --- | --- | --- |
| 1 | Produktliste bei laufendem Backend | Produkte erscheinen | | |
| 2 | Produktliste bei gestopptem Backend | Verständlicher Fehlerhinweis | | |
| 3 | Produktbilder und Preisformat | Passendes Bild, EUR-Format | | |
| 4 | Produkt wiederholt hinzufügen | Menge erhöht sich | | |
| 5 | Menge auf 1 verringern | Position wird entfernt | | |
| 6 | Warenkorb leer | Leerhinweis; kein Checkout | | |
| 7 | Checkout mit leeren Pflichtfeldern | Browser verhindert Submit | | |
| 8 | Gültige Bestellung absenden | Erfolgsbestätigung; Server speichert | | |
| 9 | Backend während Checkout stoppen | Fehler; Warenkorb bleibt erhalten | | |
| 10 | Dialog mit Escape schließen | Dialogzustand wird geschlossen | | |
| 11 | Tastatur und schmaler Viewport | Controls erreichbar; kein horizontales Scrollen | | |

## Automatische Prüfungen

- `npm run lint`: (Ergebnis eintragen)
- `npm run build`: (Ergebnis eintragen)

## Offene Fehler oder Einschränkungen

(Keine / Liste eintragen)
```

**Finale Projektstruktur (ohne `node_modules/` und Build-Ordner):**

```text
repository/
├── backend/                         (bereitgestellt, unverändert)
├── assets/
│   └── index.css                    (bereitgestelltes Stylesheet)
├── docs/
│   ├── api-contract.md
│   ├── react_theory.md              (bereitgestellt)
│   └── test-report.md
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── eslint.config.js
│   ├── vite.config.js
│   ├── public/
│   │   └── logo.png
│   └── src/
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       ├── assets/
│       │   └── logo.png
│       ├── components/
│       │   ├── Accessories.jsx
│       │   ├── AccessoryItem.jsx
│       │   ├── Cart.jsx
│       │   ├── CartItem.jsx
│       │   ├── Checkout.jsx
│       │   ├── Error.jsx
│       │   ├── Header.jsx
│       │   └── UI/
│       │       ├── Button.jsx
│       │       ├── Input.jsx
│       │       └── Modal.jsx
│       ├── hooks/
│       │   └── useHttp.js
│       ├── store/
│       │   ├── CartContext.jsx
│       │   └── UserProgressContext.jsx
│       └── util/
│           └── formatting.js
├── frontend-tutorial.md
└── Readme.md
```

Für den Abschluss führe die automatischen Prüfungen im Ordner `frontend/` aus:

```powershell
npm run lint
npm run build
```

Dokumentiere die Ergebnisse im Prüfprotokoll, committe und pushe es mit `QA-01`. Damit ist die Umsetzung abgeschlossen.

**Theorie-Verweis:** [react_theory.md](docs/react_theory.md), Kapitel 11 „ToDo v1: Gesamtauftrag“, besonders „Definition of Ready und Definition of Done“.
