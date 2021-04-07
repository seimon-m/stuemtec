<template>
    <div class="button">
        <ButtonIcon @click="goToClassic()" id="forward">Back</ButtonIcon>
    </div>
    <div class="container">
        <section class="panel blue">
            <title-component />
        </section>

        <section class="panel orange">
            <title-component />
        </section>

        <section class="panel red">
            <title-component />
        </section>

        <section class="panel blue yoyo">
            <title-component />
        </section>
    </div>

    
</template>

<script>
import ButtonIcon from "../components/ButtonIcon.vue";
import TitleComponent from "../components/TitleComponent.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    mounted() {
        ScrollTrigger.defaults({
            toggleActions: "restart pause resume pause",
            duration: 2,
        });

        gsap.to(".orange p", {
            scrollTrigger: ".orange",
            duration: 2,
            rotation: 360,
        });

        gsap.to(".red", {
            scrollTrigger: {
                trigger: ".red",
                toggleActions: "restart pause reverse pause",
            },
            duration: 1,
            ease: "none",
        });

        gsap.to(".yoyo p", {
            scrollTrigger: ".yoyo",
            scale: 2,
            repeat: -1,
            yoyo: true,
            ease: "power2",
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

.panel {
    scroll-snap-align: start;
    height: 100vh;
}

.red {
    background-color: #cf3535;
    background-image: none;
}

.orange {
    background-color: #d38d3c;
}

.blue {
    background-color: #2f20b3;
}

.panel p {
    font-size: 32px;
}

.button {
    position: fixed;
}
</style>
