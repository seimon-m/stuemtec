<template>
  <section-wrapper>
    <div class="header">
      <h2>
        2. Leben 3.0 von Max Tegmark
      </h2>
    </div>
    <content-card>
      <p>
        <a href="https://www.amazon.de/dp/3550081456"
          >Leben 3.0 von Max Tegmark</a
        >
        ist eine top-aktuelle Zusammenfassung der Meinungen und Haltungen von
        aktuellen „Who is Who“ der KI Forschung und Unternehmer (von Larry Page,
        über Elon Musk, Bill Gates, etc.)
      </p>
      <h3>Leben 1.0 - 3.0</h3>
      <ul>
        <li>
          Leben 1.0 - Biologische Stufe: Evolution bringt seine Hardware und
          Software hervor.
        </li>
        <li>
          Leben 2.0 - Kulturelle Stufe: Evolution bringt seine Hardware hevor,
          gestaltet einen grossen Teil seiner Software selbst.
        </li>
        <li>
          Leben 3.0 - Technologische Stufe: Evolution gestaltet seine Hardware
          und Software selbst.
        </li>
      </ul>
      <img src="../assets/leben3-0.png" style="width:100%" />
    </content-card>
  </section-wrapper>
</template>

<script>
import ContentCard from "./ContentCard.vue";
import SectionWrapper from "./SectionWrapper.vue";

export default {
  name: "Section2Component",
  components: {
    ContentCard,
    SectionWrapper,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: static;
  width: 50%;
  max-width: 700px;
  height: 100%;
}
</style>
