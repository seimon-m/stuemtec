<template>
    <content-card>
      <img
        src="http://piu.ch/robox/img/robox65.gif"
        href="http://piu.ch/robox/img/robox65.gif"
      />
      <p class="img-description">Robox 1986 Marc Pilloud &amp; Laro Schatzer</p>
      <br />
      <p>
        Es gibt eine klare hierarchische Beziehung zwischen den
        Begrifflichkeiten:
      </p>
      <ul>
        <li>
          Tiefe neuronale Netze (Deep Neural Networks) sind Teil der Neuronalen
          Netze (Neural Networks)
        </li>
        <li>
          Neuronale Netze sind Teil des Maschinellen Lernens (Maschine Learning)
        </li>
        <li>
          Maschinelles Lernen ist Teil der Künstlichen Intelligenz (Artifical
          Intelligence)
        </li>
      </ul>
    </content-card>
</template>

<script>
import ContentCard from './ContentCard.vue';
export default {
  name: "Intro-Component",
  components: {
    ContentCard
  }
};
</script>

<style scoped>

</style>
