<template>
  <div class="title">
    <h1>Digitale Zukünfte: Künstliche Intelligenz</h1>
    <p>
      Künstliche Intelligenz (Artifical Intelligence), Maschinelles Lernen
      (Maschine Learning), oder wie auch immer wir es nennen ist eines der
      gehypten Themen, welches Alpträume à la Terminator weckt oder sei es auch
      nur ein globaler Jobabbau. Bereits 30% der Rechenpower von Google wird für
      Maschine Learning verwendet und immer mehr Smartphones haben eine NPU
      eingebaut.
    </p>
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
  width: 50%;
  height: 100%;
  padding: 24px;
  margin: 24px 0 24px 0;
  background-color: white;
}

h1 {
  font-size: 1.5em;
}

p {
  font-size: 1em;
  line-height: 1em;
}
</style>
