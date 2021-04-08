<template>
    <div class="button">
        <ButtonIcon @click="goToClassic()" id="forward">Back</ButtonIcon>
    </div>
    <div class="container">
        <section class="panel blue">
            <title-component />
        </section>

        <section class="panel orange">
            <intro-component />
        </section>

        <section class="panel red">
            <section-1-component />
        </section>

        <section class="panel blue yoyo">
            <exercises-component />
        </section>
    </div>
</template>

<script>
import ButtonIcon from "../components/ButtonIcon.vue";
import TitleComponent from "../components/TitleComponent.vue";
import IntroComponent from "../components/IntroComponent.vue";
import Section1Component from "../components/Section1Component.vue";
import ExercisesComponent from '../components/ExercisesComponent.vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: "Focus",
    components: {
        ButtonIcon,
        TitleComponent,
        IntroComponent,
        Section1Component,
        ExercisesComponent
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

    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
}

.panel {
    scroll-snap-align: start;
    height: 100vh;
}

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
