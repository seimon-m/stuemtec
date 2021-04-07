<template>
  <div class="chunk">
    <div class="card">
      <p class="description">SPARK H20</p>
      <h1>Digitale Zukünfte: Künstliche Intelligenz</h1>
      <p>
        Künstliche Intelligenz (Artifical Intelligence), Maschinelles Lernen
        (Maschine Learning), oder wie auch immer wir es nennen ist eines der
        gehypten Themen, welches Alpträume à la Terminator weckt oder sei es
        auch nur ein globaler Jobabbau. Bereits 30% der Rechenpower von Google
        wird für Maschine Learning verwendet und immer mehr Smartphones haben
        eine NPU eingebaut.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleComponent",
};
</script>

<style scoped>
.title {
  display: flex;
  flex-direction: column;
  align-items: center;

  position: static;
  /* background-color: #f8f8f8; */
  box-shadow: 0px 4px 7px rgba(169, 169, 169, 0.25);
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
  font-size: 1.5em;
  margin-top: 8px;
}

p {
  font-size: 1em;
  text-align: left;
}

.description {
  font-size: 0.75em;
  margin: 0;
}
</style>
