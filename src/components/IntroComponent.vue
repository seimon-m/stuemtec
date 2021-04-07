<template>
  <div class="chunk">
    <img
      src="http://piu.ch/robox/img/robox65.gif"
      href="http://piu.ch/robox/img/robox65.gif"
    />
    <p class="img-description">Robox 1986 Marc Pilloud &amp; Laro Schatzer</p>
    <br />
    <p>
      Es gibt eine klare hierarchische Beziehung zwischen den Begrifflichkeiten:
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
  </div>
</template>

<script>
export default {
  name: "Intro-Component",
};
</script>

<style scoped>
.chunk {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
  margin: 24px 0 24px 0;
  background-color: white;
}

img {
  size: 100%;
}

p,
li {
  font-size: 1em;
  line-height: 1em;
  text-align: left;
}

.img-description {
  font-size: 0.75em;
}
</style>
