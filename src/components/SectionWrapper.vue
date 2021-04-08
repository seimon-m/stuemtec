<template>
  <div class="wrapper">
    <section class="panel">
    <slot />
    </section>
  </div>
</template>

<script>
export default {
  name: "SectionWrapper",
};
</script>

<style scoped>
.wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.panel {
  scroll-snap-align: center;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
