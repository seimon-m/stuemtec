<template>
    <div class="button">
        <toggle-button
            nameLeft="Normal"
            nameRight="Fokus"
            startPosition="right"
            @clicker="goToNormal($event)"
        />
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
import TitleComponent from "../components/TitleComponent.vue";
import IntroComponent from "../components/IntroComponent.vue";
import ExercisesComponent from "../components/ExercisesComponent.vue";
import Section1Component from "../components/Section1Component.vue";
import Section2Component from "../components/Section2Component.vue";
import Section3Component from "../components/Section3Component.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ToggleButton from "../components/ToggleButton.vue";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: "Focus",
    components: {
        TitleComponent,
        IntroComponent,
        Section1Component,
        ExercisesComponent,
        Section3Component,
        Section2Component,
        ToggleButton,
    },
    methods: {
        goToNormal(message) {
            if (message === "left") {
                this.$router.push("/");
            }
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
}

.button {
    position: fixed;
}
</style>
