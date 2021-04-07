<template>
  <div>
    <ButtonIcon @click="goToClassic()" id="forward">Back</ButtonIcon>
  </div>
  <title-component />
</template>

<script>
import ButtonIcon from "../components/ButtonIcon.vue";
import TitleComponent from "../components/TitleComponent.vue";

export default {
  name: "About",
  components: {
    ButtonIcon,
    TitleComponent,
  },
  methods: {
    goToClassic() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
