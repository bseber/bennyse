---
layout: post
date: 2020-11-27
meta:
  title: bennyse ᐧ blog
pageTitle: Webseiten bauen - 90er Edition
---

"Was du als Frontend Developer wissen musst." - Serverless, GraphQL, React, Vue, Svelte, Angular, Typescript,
PostCSS, React Native, Stencil, Server Side Rendering, Client Side Rendering, Client site hydration, Progressive Web App,
Cache Busting, ... Früher war das noch einfacher. Da hatten wir nur HTML und CSS. Und kommen damit bis heute zurecht.

<!-- more -->

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Nah, same as 2011 (and before)<br><br>1. HTML<br>2. CSS<br>3. JavaScript<br>4. ARIA<br>5. Accessibility <a href="https://t.co/OE1MySr7tL">https://t.co/OE1MySr7tL</a></p>&mdash; Adam Silver (@adambsilver) <a href="https://twitter.com/adambsilver/status/1330783287099404291?ref_src=twsrc%5Etfw">November 23, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Die 90er waren großartig. Deutschland wurde zum dritten Mal Fußball Weltmeister. Der Manga Naruto erblickte das Licht der Welt.
ICQ hat mich regelmäßig mit "Oh Oh" erfreut und Platformen wie MySpace waren noch weit entfernt. MySpace? Ach ja... Facebook
gab es auch noch nicht. Weshalb ich das gut finde? Es gab halt nichts, daher hat man was eigenes erschaffen. Mit Facebook und Co
hätte ich wohl nie angefangen Webseiten zu bauen. Aber genug alter Erinnerungen. Wie ging das denn nun früher mit den Webseiten?

## Komponenten

In der Schule habe ich die grundlegenden HTML Elemente kennenlernen dürfen. `<h1>`, `<h2>`, `<h3>` und so weiter sind Überschriften.
Mit `<p>` definierst du einen Absatz. Mit `<b>` kannst du Wörter fett gedruckt darstellen, mit `<i>` machst
du sie kursiv und mit `<u>` unterstreichst du sie. So oder so ähnlich war wohl die erste Stunde.

Meine allererste Webseite sah in etwa so aus:

```html
<h3>Meine Webseite</h3>

<p>
  Hallo, willkommen auf meiner Webseite.</br>
  Mein Name ist Benny und meine Hobbies sind Fußball spielen.
</p>
```

<section class="bg-white p-2 text-black mb-4" style="font-family: Times New Roman;">
  <!-- <div class="m-4"> -->
    <h3 style="font-size: 1.17em; font-weight: bold;">Meine Webseite</h3>
    <p style="margin: 1em 0;">
      Hallo, willkommen auf meiner Webseite.<br />
      Mein Name ist <b>Benny</b> und meine Hobbies sind Fußball spielen.
    </p>
  <!-- </div> -->
</section>

Das `<h1>` Element war mir zu groß, daher habe ich einfach das `<h3>` Element verwendet
für die Überschrift. Das `<br />` Element ist ein Zeilenumbruch ohne den großen Abstand.

Das Thema der zweiten Stunde war dann Styling und Layout. Mit `<font>` kannst du die Schriftgröße, die Farbe und sogar die Schriftart verändern.
Mit `<center>` wird Text zentriert und `<marquee>` zaubert dir eine Laufschrift auf den Bildschirm. Nicht zu vergessen
das gute `<blink>` Element das Text blinkend darstellt. Ganz wichtig damit du im Tagebuch auf neue Kapitel hinweisen kannst!
Es gibt übrigens eine native JavaScript Funktion dafür: [`String.prototype.blink()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/blink). Ebenso für `bold`, `italic` usw.

```html
<center>
  <font color="orange" family="Comic Sans" size="24px">
    <marquee>Hallo, Willkommen auf meiner Homepage</marquee>
  </font>
</center>
```

Wer mit den teilweise als veraltet markierten (deprecated) Elementen hantieren durfte wird bestimmt gerade ein Schmunzeln
Gesicht haben. Gern geschehen :-) Wer damit nicht groß geworden ist, sondern mit React, jsx und
Co, wird hier mit Sicherheit etwas wiedererkennen. Komponenten!

## Layout

Nachdem wir Text jetzt bunt und groß und klein machen können, fehlt noch etwas Layout. Oben die Navigation,
links etwas Inhalt, z. B. meine Hobbies, und rechts einen Chat. Ja! Die coolen Leute hatten einen Chat
auf ihrer Homepage! UND ein Gästebuch.

Navigation oben, kein Problem. Einfach einen Paragraph `<p>` mit `<a>` Elementen definieren die zu
anderen Seiten verweisen. Um noch mehr Abstand nach unten zu haben definieren wir noch zwei oder drei Paragraphen.

```html
<p>
  <a href="index.htm">Startseite</a>
  <a href="hobbies.htm">Meine Hobbies</a>
  <a href="gaestebuch.htm">Gästebuch</a>
</p>
<p></p>
<p></p>
```

Wenn nicht so viel Abstand gewünscht ist, können auch ein oder mehrere `<br/>` Elemente
verwendet werden. Das nimmt etwa die Hälfte des `<p>` ein in der Höhe.

Von Accessibility oder strukturiertem Inhalt und HTML Semantik habe ich damals nichts gewusst.
Siehe auch die Entscheidung ein `<h3>` für die Überschrift zu nehmen, weil der Text mit `<h1>`
zu groß ist 🙈

Ansonsten hätte eine Sache anders ausgesehen: Der Abstand zwischen Navigation oben und Inhalt
darunter wurde mit Paragraphen gelöst. Heißt Screenreader lesen diese Paraphen vor. Obwohl sie
ja eigentlich kein Inhalt sind, sondern missbraucht werden für Layout Zwecke. Wie fügt
man den Abstand nun korrekt hinzu? HTML Elemente können mit einem `style` Attribut visuell
verändert werden. Mehr Abstand nach unten wird z. B. mit `<p style="margin-bottom: 30x">`
herbeigezaubert.

Etwas spannender wird es jetzt den Inhalt der Seite links zu platzieren und rechts daneben
den Chat. Naja, spannend, wir haben ja nur eine Möglichkeit: die Tabelle `<table>`.

```html
<table>
  <tr>
    <td>
      <!-- hier den Inhalt einfügen -->
    </td>
    <td>
      <!-- und hier der Chat -->
    </td>
  </tr>
</table>
```

Tabellen Layouts werden heute übrigens immer noch benötigt. Ja, kein Scherz 🙄
HTML E-Mails müssen weiterhin mit Tabellen Layouts gebaut werden. Wer auch immer
HTML E-Mails haben will.

Ansonsten wird heute das CSS [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
und/oder [grid](https://css-tricks.com/snippets/css/complete-guide-grid/) Layout verwendet.
Das funktioniert dann auch responsive. Also das Layout kann angepasst werden an
kleine und große Bildschirme.

## Ein Hauch von Single Page

Nachdem das Layout steht müssen wir die HTML Datei nur noch mehrmals kopieren.
Rechtsklick kopieren, Rechtsklick einfügen, Rechtsklick einfügen
und schon ist das Template drei mal da. Wunderbar schnell und einfach.

Nun überall den `<!-- hier den Inhalt einfügen -->` Abschnitt entsprechend ergänzen
und fertig ist die Homepage.

```bash
index.html
hobbies.html
gaestebuch.html
```

Naja... bei einer kleinen drei Seiten Homepage geht das in der Tat noch mit dem kopieren.
Bei der Webseite meines Sportvereins war das keine Option mehr.
Da zeigte sich auch mein Softwareentwickler Gen. Ich war faul und hatte
keinerlei Lust jedesmal in allen Dateien die Navigation anzufassen,
sobald eine neue Seite hinzukam.

Auf jeden Fall habe ich damals dann meine erste Single Page Application gebaut 👆
Das bedeutet grob, dass sich Teile des Inhalts ohne kompletten Seitenreload ändern.
Und das komplett ohne JavaScript. Nein?! Doch! Und zwar mit... Trommelwirbel... `<iframe>` Elementen.

Wir können bei `<a>` Elementen sagen, "öffne den Link bitte innerhalb meiner Seite, und zwar im iframe".
Dazu muss wird am `<a>` Element das Attribut `target` definiert mit dem `name` des `iframe`.
Fertig ist die "Single Page Application".

```html
<p style="margin-bottom: 30px">
  <!-- Klick ändert das src Attribut des iframes -->
  <a href="startseite.htm" target="inhalt">Startseite</a>
  <a href="hobbies.htm" target="inhalt">Meine Hobbies</a>
  <a href="gaestebuch.htm" target="inhalt">Gästebuch</a>
</p>

<table>
  <tr>
    <td>
      <iframe src="startseite.htm" name="inhalt"></iframe>
    </td>
    <td>
      <!-- und hier der Chat -->
    </td>
  </tr>
</table>
```

## Kenne die Grundlagen

Das war's dann auch schon mehr oder weniger. Damals wie heute reicht es vollkommen
aus die [grundlegenden HTML Elemente](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) zu kennen.
Nun gut... heute sind die Erwartungen an Webseiten etwas höher als damals. Doch auch hier
reicht es als nächstes in CSS einzusteigen. [CSS-Tricks](https://css-tricks.com) ist dafür
eine sehr gut Quelle. Wer sich denkt "ich möchte aber auch fancy Animationen haben" dem sei gesagt:
Da kommt man mit CSS mittlerweile seeeeehr weit (siehe z. B. [keyframe-animation](https://css-tricks.com/snippets/css/keyframe-animation-syntax/))

Kennt man sich mit CSS aus und ist sich sicher etwas nicht mehr lösen zu können mit CSS
dann kommt JavaScript mit ins Spiel. Der Chat zum Beispiel. Der wurde als `<script>` integriert
und hat dann Dinge getan die ich damals nicht verstanden habe.

Was ich mir selbst noch aneignen muss sind Accessibility und die
[ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) Regeln. Dieses Thema
ist in meinem beruflichen Alltag leider nie mit oben auf der must-have Liste.
