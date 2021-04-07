<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ContentCard",
}
</script>

<style scoped>
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