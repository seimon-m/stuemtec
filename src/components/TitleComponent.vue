<template>
    <content-card>
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
    </content-card>
</template>

<script>
import ContentCard from './ContentCard.vue';

export default {
  name: "TitleComponent",
  components: {
    ContentCard,
  }
};
</script>

<style scoped>

</style>
