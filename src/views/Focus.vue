<template>
  <div class="button">
    <ButtonIcon @click="goToClassic()" id="forward">Back</ButtonIcon>
  </div>
  <div class="container">
    <title-component />

    <intro-component />

    <exercises-component />

    <section-1-component />

    <section-2-component />

    <section-3-component />
  </div>
</template>

<script>
import ButtonIcon from "../components/ButtonIcon.vue";
import TitleComponent from "../components/TitleComponent.vue";
import IntroComponent from "../components/IntroComponent.vue";
import ExercisesComponent from "../components/ExercisesComponent.vue";
import Section1Component from "../components/Section1Component.vue";
import Section2Component from "../components/Section2Component.vue";
import Section3Component from "../components/Section3Component.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import SectionWrapper from "../components/SectionWrapper.vue";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Focus",
  components: {
    ButtonIcon,
    TitleComponent,
    IntroComponent,
    Section1Component,
    ExercisesComponent,
    Section3Component,
    Section2Component,
    //SectionWrapper,
  },
  methods: {
    goToClassic() {
      this.$router.push("/");
    },
  },
  mounted() {
    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
    });
  },
};
</script>

<style scoped>
.container {
  overflow-y: scroll;
  height: 100vh;
  width: 100vw;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;

  /*display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
}

/* .panel {
  scroll-snap-align: center;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
} */

.red {
  /* background-color: #cf3535; */
}

.orange {
  /* background-color: #d38d3c; */
}

.blue {
  /* background-color: #2f20b3; */
}

.button {
  position: fixed;
}
</style>
