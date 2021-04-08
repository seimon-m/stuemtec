<template>
  <section-wrapper>
    <h2>Auftrag im Unterricht</h2>
    <content-card>
      <p>Wählt eine der zwei aktuelle Autoren über KI</p>
      <ol>
        <li>
          <a href="">Tim Urban</a>
        </li>
        <li>
          <a href="">Max Tegmark</a>
        </li>
      </ol>
      <p>Tragt ein, welchen Autor ihr Ausgewählt habt</p>
    </content-card>
    <content-card>
      <h3>Tim Urban</h3>
      <p>Liest folgende Texte (Teil 1+2) (ca. 1 Stunde)</p>
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
    </content-card>
    <content-card>
      <h3>Max Tegmark</h3>
      <p>Text und Bilder weiter unten sowie folgende zwei Videos</p>
      <a href="https://www.youtube.com/watch?v=3Om9ssTm194"
        >https://www.youtube.com/watch?v=3Om9ssTm194</a
      >
      <a href="https://www.youtube.com/watch?v=1MqukDzhlqA&amp;t=592"
        >https://www.youtube.com/watch?v=1MqukDzhlqA&amp;t=592</a
      >
      <a href="https://www.youtube.com/watch?v=oYmKOgeoOz4"
        >https://www.youtube.com/watch?v=oYmKOgeoOz4</a
      >
      <a href="https://www.youtube.com/watch?v=Gi8LUnhP5yU"
        >https://www.youtube.com/watch?v=Gi8LUnhP5yU</a
      >
    </content-card> 
  </section-wrapper>
</template>

<script>
import ContentCard from "./ContentCard.vue";
import SectionWrapper from "./SectionWrapper.vue";

export default {
  name: "ExerciseComponent",
  components: { ContentCard, SectionWrapper },
};
</script>

<style scoped>

</style>
