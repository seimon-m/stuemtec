<template>
  <div class="chunk">
    <div class="card">
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
    </div>
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
  align-items: center;

  position: static;
  background-color: #f8f8f8;
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

img {
  size: 100%;
  align-self: center;
}

p,
li {
  font-size: 1em;
  text-align: left;
}

.img-description {
  font-size: 0.75em;
}
</style>
