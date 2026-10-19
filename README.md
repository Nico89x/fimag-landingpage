# FIMAG Landingpage – Gestaltungskonzept

Statische Demo einer responsiven Website für einen Malerbetrieb. Das Projekt ergänzt mein Automatisierungsportfolio um ein Beispiel für die Gestaltung einer Benutzeroberfläche.

## Umfang

- Leistungsübersicht und Vorher-/Nachher-Darstellung
- Responsive Navigation, FAQ und Kontaktformular
- HTML, CSS und JavaScript ohne Build-Schritt

## Lokal ansehen

Repository herunterladen und `index.html` im Browser öffnen. Alternativ aus dem Projektordner mit Python 3 einen lokalen Server starten:

```sh
python -m http.server 8080 --bind 127.0.0.1
```

Anschließend `http://127.0.0.1:8080` öffnen.

## Technische Einordnung

Das Formular erzeugt nach der Browservalidierung einen E-Mail-Entwurf über `mailto:`. Es besitzt kein Formular-Backend und keine n8n-Anbindung. Eine gültige Eingabe belegt keinen erfolgreichen Versand.

Die Seite enthält eine externe Google-Maps-Einbettung und speichert die Bestätigung des Vorschauhinweises in `localStorage`.

Bewertungen, Kennzahlen und Bildherkunft sind im Repository nicht durch Quellen belegt. Sie sollten als Demo-Inhalte betrachtet und vor einer geschäftlichen Verwendung geprüft oder ersetzt werden. Die enthaltenen Rechtstexte sind als Entwürfe gekennzeichnet.

## Weiter zum Automatisierungsportfolio

[Profil](https://github.com/Nico89x) · [n8n-Fallstudien und Tests](https://github.com/Nico89x/nico-joschke-automation-portfolio) · [Interaktive Grocery-Store-Demo](https://nico89x.github.io/ai-grocery-store-automation/#/simulation)
