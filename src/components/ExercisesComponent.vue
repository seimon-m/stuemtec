<template>
  <div class="chunk">
    <div class="intro">
      <h1>Auftrag im Unterricht</h1>
      <p>Wählt eine der drei aktuelle Autoren über KI</p>
      <ol>
        <li>
          <a href="">Tim Urban</a>
        </li>
        <li>
          <a href="">Jürgen Schmiedhuber</a>
        </li>
        <li>
          <a href="">Arvind Narayanan</a>
        </li>
        <li>
          <a href="">Max Tegmark</a>
        </li>
      </ol>
      <p>Tragt ein, welchen Autor ihr Ausgewählt habt</p>
    </div>
    <div class="card">
      <h2>Tim Urban</h2>
      <p>List folgende Texte (Teil 1+2) (ca. 1 Stunde)</p>
      <a
        href="https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html"
        >Artificial Intelligence Revolution (Teil I)</a
      >
      <a
        href="https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-2.html"
        >Artificial Intelligence Revolution (Teil II)</a
      >
      <p>
        oder als Video bis 1h05m:
        <a href="https://youtu.be/LUvNrm7yrJM?t=26m53s"
          >https://youtu.be/LUvNrm7yrJM?t=26m53s</a
        >
      </p>
    </div>
    <div class="card">
      <h2>Jürgen Schmiedhuber</h2>
      <p>Oder schaut Euch die folgenden drei Videos von Jürgen Schmiedhuber:</p>
      <p>Entwicklung der KI aus Sicht von KI Forschern</p>
      <a href="https://www.youtube.com/watch?v=_0prjrDuPiU">https://www.youtube.com/watch?v=_0prjrDuPiU</a>
      <p>Was haben Neuronale Netze mit Datenkompression zu tun</p>
      <a href="https://youtu.be/h7F5sCLIbKQ?t=7m11s">https://youtu.be/h7F5sCLIbKQ?t=7m11s</a>
      <p>Wie Neuronale Netze ein „Selbst-Gefühl“ entwickeln</p>
      <a href="https://youtu.be/h7F5sCLIbKQ?t=7m11s">https://youtu.be/h7F5sCLIbKQ?t=7m11s</a>

    </div>
  </div>
</template>

<script>
export default {
  name: "ExerciseComponent",
};
</script>

<style scoped>
.chunk {
  display: flex;
  flex-direction: column;
  align-items: center;

  position: static;
  background-color: #f8f8f8;
  box-shadow: 0px 4px 7px rgba(169, 169, 169, 0.25);
}

.intro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: static;
  width: 50%;
  height: 100%;
  margin: 24px 0 24px 0;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: static;
  width: 50%;
  height: 100%;
  padding: 24px;
  margin: 24px 0 24px 0;

  background-color: white;
  box-shadow: 0px 4px 7px rgba(169, 169, 169, 0.25);
  border-radius: 8px;
}

h1 {
  text-align: left;
  font-size: 1.5em;
  margin-top: 8px;
}

h2 {
  text-align: left;
}

p {
  font-size: 1em;
  text-align: left;
}

li {
  text-align: left;
}

a {
  text-align: left;
  text-decoration: none;
  color: #ff87ff;
}
</style>
