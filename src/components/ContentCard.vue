<template>
    <div class="card">
      <slot />
    </div>
</template>

<script>
export default {
  name: "ContentCard",
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: static;
  width: 50%;
  max-width: 700px;
  height: 100%;
  padding: 40px;
  margin: 24px 0 24px 0;

  background-color: white;
  box-shadow: 0px 4px 7px rgba(169, 169, 169, 0.25);
  border-radius: 8px;
}

</style>
