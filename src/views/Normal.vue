<template>
    <div>
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
        />

        <div class="headerimage"></div>
        <div class="container__total">
            <div class="container__sidebar-main">
                <div class="container__sidebar">
                    <div class="container__logo">
                        <div class="logo"></div>
                    </div>
                    <div class="container_navlink">
                        <a href="#">Rowdyruffs</a>
                        <span class="material-icons md-18">expand_more</span>
                    </div>
                    <div class="container_navlink layer2">
                        <a href="#">DIGITECH.20</a>
                    </div>
                    <div class="container_navlink layer2">
                        <a href="#">SPARK.H20</a>
                    </div>
                    <div class="container_navlink layer3">
                        <a href="#">Intro</a>
                    </div>
                    <div class="container_navlink layer3">
                        <a href="#">Variablen</a>
                    </div>
                    <div class="container_navlink layer3">
                        <a href="#">Digitale Zukünfte</a>
                    </div>
                    <div class="container_navlink layer3">
                        <a href="#"
                            >Verzweigungen und <br />bedingte Anweisungen</a
                        >
                    </div>
                    <div class="container_navlink layer3">
                        <a href="#">Transformationen und <br />Funktionen</a>
                    </div>
                    <div class="container_navlink layer3">
                        <a href="#">Mapping and Noise</a>
                    </div>
                    <div class="container_navlink layer3">
                        <a href="#">A bit of math</a>
                    </div>
                    <div class="container_navlink layer3">
                        <a href="#">JSON Javascript <br />Object notation</a>
                    </div>
                    <div class="container_navlink layer3">
                        <a href="#">p5js Bibliotheken</a>
                    </div>
                    <div class="container_navlink layer3">
                        <a href="#">Einzelbesprechungen 1</a>
                    </div>
                    <div class="container_navlink layer3">
                        <a href="#">Einzelbesprechungen 2</a>
                    </div>
                    <div class="container_navlink layer3">
                        <a href="#">Einzelbesprechungen 3</a>
                    </div>
                    <div class="container_navlink layer3">
                        <a href="#">OMLU Umfrage</a>
                    </div>
                    <div class="container_navlink layer3">
                        <a href="#">Endpräsentation</a>
                    </div>
                    <div class="container_navlink layer2">
                        <a href="#">KICKPROG.H20</a>
                    </div>
                    <div class="container_navlink layer2">
                        <a href="#">MEN1.H20</a>
                    </div>
                    <div class="container_navlink">
                        <a href="#">Octis</a>
                    </div>
                    <div class="container_navlink">
                        <a href="#">Sedusas</a>
                    </div>
                    <div class="container_navlink">
                        <a href="#">Masterclass 2020</a>
                    </div>
                </div>
                <div class="container__main">
                    <div class="container__top">
                        <p class="string">
                            Sie befinden sich hier: exorciser.ch » Digital
                            Ideation » Rowdyruffs » KICKPROG.H20 » Loops
                        </p>
                        <div class="searchbar">
                            <span class="material-icons md-18">search</span>
                        </div>
                    </div>
                    <div class="container__switch">
                        <toggle-button
                            nameLeft="Normal"
                            nameRight="Fokus"
                            @clicker="goToFocus($event)"
                        />
                    </div>
                    <div class="container__content">
                        <div class="section">
                            <div class="container">
                                <p class="overline">Spark H.20</p>
                                <h1>
                                    Digitale Zukünfte: Künstliche Intelligenz
                                </h1>
                                <p>
                                    Künstliche Intelligenz (Artifical
                                    Intelligence), Maschinelles Lernen (Maschine
                                    Learning), oder wie auch immer wir es nennen
                                    ist eines der gehypten Themen, welches
                                    Alpträume à la Terminator weckt oder sei es
                                    auch nur ein globaler Jobabbau. Bereits 30%
                                    der Rechenpower von Google wird für Maschine
                                    Learning verwendet und immer mehr
                                    Smartphones haben eine NPU eingebaut.
                                </p>
                            </div>
                        </div>
                        <div class="section">
                            <div class="container">
                                <img
                                    src="http://piu.ch/robox/img/robox65.gif"
                                />
                                <p>
                                    Es gibt eine klare hierarchische Beziehung
                                    zwischen den Begrifflichkeiten: Tiefe
                                    neuronale Netze (Deep Neural Networks) sind
                                    Teil der Neuronalen Netze (Neural Networks)
                                    Neuronale Netze sind Teil des Maschinellen
                                    Lernens (Maschine Learning) Maschinelles
                                    Lernen ist Teil der Künstlichen Intelligenz
                                    (Artifical Intelligence)
                                </p>
                            </div>
                        </div>
                        <div class="section">
                            <div class="container">
                                <h2>Auftrag im Unterricht</h2>
                                <p>
                                    Wählt eine der drei aktuelle Autoren über
                                    KI<br /><br />Tim Urban<br />Jürgen
                                    Schmiedhuber<br />Arvind Narayanan<br />Max
                                    Tegmark<br />Tragt ein, welchen Autor ihr
                                    auswählt Liste
                                </p>
                                <div class="container__thema">
                                    <div class="container__titel_bearbeiten">
                                        <h3>Tim Urban</h3>
                                        <div class="button__bearbeiten">
                                            Bearbeiten
                                        </div>
                                    </div>
                                    <p>
                                        Lest folgenden Texte (Teil 1+2) (ca. 1
                                        Stunde)<br /><br />Artificial
                                        Intelligence Revolution (Teil I)<br />Artificial
                                        Intelligence Revolution (Teil II)<br />oder
                                        als Video:
                                        https://youtu.be/LUvNrm7yrJM?t=26m53s
                                        bis 1h05m
                                    </p>
                                </div>
                                <div class="container__thema">
                                    <div class="container__titel_bearbeiten">
                                        <h3>Jürgen Schmiedhuber</h3>
                                        <div class="button__bearbeiten">
                                            Bearbeiten
                                        </div>
                                    </div>
                                    <p>
                                        Oder schaut Euch die folgenden drei
                                        Videos von Jürgen Schmiedhuber:<br /><br />Entwicklung
                                        der KI aus Sicht von KI Forschern<br />https://www.youtube.com/watch?v=_0prjrDuPiU
                                        (19 min)<br />Was haben Neuronale Netze
                                        mit Datenkompression zu tun<br />https://youtu.be/h7F5sCLIbKQ?t=7m11s
                                        bis 13:26<br />Wie Neuronale Netze ein
                                        „Selbst-Gefühl“ entwickeln<br />https://www.youtube.com/watch?v=q4fFuZgOZn8
                                        (8 Min)
                                    </p>
                                </div>
                                <div class="container__thema">
                                    <div class="container__titel_bearbeiten">
                                        <h3>Arvind Narayanan</h3>
                                        <div class="button__bearbeiten">
                                            Bearbeiten
                                        </div>
                                    </div>
                                    <p>
                                        How to recognize AI snake oil?<br />https://www.cs.princeton.edu/~arvindn/talks/MIT-STS-AI-snakeoil.pdf
                                    </p>
                                </div>
                                <div class="container__thema">
                                    <div class="container__titel_bearbeiten">
                                        <h3>Max Tegmark</h3>
                                        <div class="button__bearbeiten">
                                            Bearbeiten
                                        </div>
                                    </div>
                                    <p>
                                        Text und Bilder weiter unten sowie
                                        folgende zwei Videos<br />https://www.youtube.com/watch?v=3Om9ssTm194
                                        (5 Min)<br />https://www.youtube.com/watch?v=1MqukDzhlqA&amp;t=592<br />https://www.youtube.com/watch?v=oYmKOgeoOz4
                                        (1 h)<br />https://www.youtube.com/watch?v=Gi8LUnhP5yU
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="section">
                            <div class="container">
                                <h2>
                                    1. Über AI Revolution auf Wait but Why von
                                    Tim Urban
                                </h2>
                                <p>
                                    https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html<br />https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-2.html<br /><br />Artificial
                                    Narrow Intelligence (ANI)<br />Sometimes
                                    referred to as Weak AI, Artificial Narrow
                                    Intelligence is AI that specializes in one
                                    area. There’s AI that can beat the world
                                    chess champion in chess, but that’s the only
                                    thing it does. Ask it to figure out a better
                                    way to store data on a hard drive, and it’ll
                                    look at you blankly.<br /><br />Artificial
                                    General Intelligence (AGI)<br />Sometimes
                                    referred to as Strong AI, or Human-Level AI,
                                    Artificial General Intelligence refers to a
                                    computer that is as smart as a human across
                                    the board—a machine that can perform any
                                    intellectual task that a human being can.
                                    Creating AGI is a much harder task than
                                    creating ANI, and we’re yet to do it.
                                    Professor Linda Gottfredson describes
                                    intelligence as “a very general mental
                                    capability that, among other things,
                                    involves the ability to reason, plan, solve
                                    problems, think abstractly, comprehend
                                    complex ideas, learn quickly, and learn from
                                    experience.” AGI would be able to do all of
                                    those things as easily as you can.<br /><br />Artificial
                                    Superintelligence (ASI)<br />Oxford
                                    philosopher and leading AI thinker Nick
                                    Bostrom defines superintelligence as “an
                                    intellect that is much smarter than the best
                                    human brains in practically every field,
                                    including scientific creativity, general
                                    wisdom and social skills.” Artificial
                                    Superintelligence ranges from a computer
                                    that’s just a little smarter than a human to
                                    one that’s trillions of times smarter—across
                                    the board. ASI is the reason the topic of AI
                                    is such a spicy meatball and why the words
                                    “immortality” and “extinction” will both
                                    appear in these posts multiple times.
                                </p>
                            </div>
                        </div>
                        <div class="section">
                            <div class="container">
                                <h2>2. Leben 3.0 von Max Tegmark</h2>
                                <p>
                                    Leben 3.0 von Max Tegmark ist eine
                                    top-aktuelle Zusammenfassung der Meinungen
                                    und Haltungen von aktuellen „Who is Who“ der
                                    KI Forschung und Unternehmer (von Larry
                                    Page, über Elon Musk, Bill Gates, etc.)
                                </p>
                                <div class="container__thema">
                                    <div class="container__titel_bearbeiten">
                                        <h3>Leben 1.0 - 3.0</h3>
                                        <div class="button__bearbeiten">
                                            Bearbeiten
                                        </div>
                                    </div>
                                    <p>
                                        Leben 1.0 - Biologische Stufe: Evolution
                                        bringt seine Hardware und Software
                                        hervor.<br />Leben 2.0 - Kulturelle
                                        Stufe: Evolution bringt seine Hardware
                                        hevor, gestaltet einen grossen Teil
                                        seiner Software selbst.<br />Leben 3.0 -
                                        Technologische Stufe: Evolution
                                        gestaltet seine Hardware und Software
                                        selbst.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="section">
                            <div>
                                <h2>3. Leben 3.0 von Max Tegmark</h2>
                            </div>
                            <p>
                                Wenn Tim Urban schreibt „In our world, smart
                                means a 130 IQ and stupid means an 85 IQ—we
                                don’t have a word for an IQ of 12,952.“ Dann ist
                                er gefangen im linearen Denken innerhalb des IQ,
                                innerhalb dessen was intelligentes Denken
                                bedeutet. Entwicklungtheorie bei Menschen zeigt,
                                dass eine neue Bewusstseinsstufe jeweils radikal
                                anders - neu ist. Wenn jemand auf Stufe formal
                                operatorischem Denken ist, dann kommt danach
                                nicht noch mehr - hyper formal operatorisches
                                Denken … sondern ein Quantensprung zu
                                „Schaulogik“1)2). Der Fehler in der selben
                                Kategorie weiter zu denken - ob linear oder
                                exponentiell geschieht auch vielen Forschern der
                                Erwachsenen Entwicklung. Rationales Denken auf
                                Stereoiden - hyper-rationales-denken ist oft
                                geiler Mindfuck aber nicht mehr, aber kein
                                Quantensprung in der Qualität des Denkens. Wie
                                sieht Künstliche Schaulogik aus? oder
                                Künstliche<br />Die meisten KI Diskussionen
                                gehen von einem materialistischen Weltbild aus,
                                das selbst bekannteste Neuro- und
                                Bewusstseinsforscher (z.B. Christof Koch) in
                                Frage stellen. Wie sähe die KI Diskussion aus
                                einer idealistischen Weltsicht aus oder aus
                                einer Integralen-Panpsychistischen Weltsicht
                                aus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import ToggleButton from "../components/ToggleButton.vue";

export default {
    name: "About",
    components: {
        ToggleButton,
    },
    methods: {
        eventHandler(value) {
            console.log(value);
        },

        goToFocus(message) {
            if (message === "right") {
                this.$router.push("/focus");
            }
        },
    },
};
</script>

<style scoped>
body {
    font-family: "Roboto", sans-serif;
    color: #000;
    font-size: 14px;
    line-height: 20px;
    padding: 0;
    margin: 0;
}

img {
    width: 100%;
}

h1 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 2.375rem;
    line-height: 44px;
    font-weight: 700;
}

h2 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 1.813rem;
    line-height: 36px;
    font-weight: 700;
}

h3 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 1.313rem;
    line-height: 30px;
    font-weight: 700;
}

p {
    margin-bottom: 10px;
    font-size: 1rem;
}

a {
    color: #000;
    text-decoration: none;
}

.headerimage {
    height: 333px;
    background-color: hsla(0, 0%, 68.67%, 1);
    background-image: url(https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80);
    background-position: 50% 50%;
    background-size: cover;
}

.container__total {
    display: flex;
    padding-bottom: 80px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f8f8f8;
}

.container__sidebar-main {
    position: relative;
    top: -70px;
    display: flex;
    width: 1216px;
    align-items: stretch;
    box-shadow: 0px 4px 7px rgba(169, 169, 169, 0.25);
}

.container__sidebar {
    position: relative;
    display: flex;
    width: 400px;
    padding-top: 125px;
    padding-right: 24px;
    padding-bottom: 125px;
    padding-left: 24px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: #fbfbfb;
}

.container__main {
    width: 100%;
    padding: 24px 68px;
    background-color: #fff;
}

.container_navlink {
    padding: 16px;
    border-bottom: 1px solid #d9d9d9;
    font-weight: 700;
    display: flex;
    flex-direction: row;
}

.container_navlink.layer2 {
    padding-left: 38px;
    font-weight: 400;
}

.container_navlink.layer3 {
    padding-left: 72px;
    font-weight: 300;
}

.container__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.string {
    color: #8d8d8d;
    font-size: 12px;
}

.searchbar {
    padding: 8px 16px;
    border: 1px solid #d9d9d9;
    background-color: #f8f8f8;
    min-width: 150px;
    display: flex;
    justify-content: flex-end;
}

.container__switch {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 16px 0px;
}

.switch {
    padding: 8px 16px;
    border: 1px solid #d9d9d9;
    border-radius: 100px;
    background-color: #f8f8f8;
}

.logo {
    position: absolute;
    top: -61px;
    z-index: 2;
    width: 130px;
    height: 130px;
    border-radius: 130px;
    background-color: #fff;
    background-image: url(https://pbs.twimg.com/profile_images/989078190307110912/7qd53cM6_400x400.jpg);
    background-position: 50% 50%;
    background-size: contain;
    border: 1px solid #d9d9d9;
}

.container__logo {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.section {
    width: 100%;
    margin-top: 48px;
    flex: 1;
}

.container__titel_bearbeiten {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container__thema {
    display: flex;
    padding-top: 32px;
    padding-bottom: 32px;
    flex-direction: column;
    border-bottom: 1px solid #b6b6b6;
}

.overline {
    text-transform: uppercase;
}

.button__bearbeiten {
    padding: 5px 30px;
    border-radius: 2px;
    background-color: #f8f8f8;
}

.material-icons.md-18 {
    font-size: 18px;
}
</style>
