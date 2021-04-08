<template>
    <div class="container">
        <button
            class="button left"
            @click="leftClick"
            :class="[!isRight ? 'active' : '']"
        >
            {{ nameLeft }}
        </button>
        <button
            class="button right"
            @click="rightClick"
            :class="[isRight ? 'active' : '']"
        >
            {{ nameRight }}
        </button>
        <div class="switch"></div>
        <div class="background"></div>
    </div>
</template>

<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export default {
    props: {
        nameLeft: {
            type: String,
            default: "left",
        },
        nameRight: {
            type: String,
            default: "right",
        },
        startPosition: {
            type: String,
            default: "left",
        },
    },
    data() {
        return {
            isRight: false,
        };
    },
    methods: {
        rightClick() {
            this.isRight = true;
            this.$emit("clicker", "right");
            gsap.to(".switch", { duration: 1, ease: "power2.out", x: 72 });
        },
        leftClick() {
            this.isRight = false;
            this.$emit("clicker", "left");
            gsap.to(".switch", { duration: 1, ease: "power2.out", x: 0 });
        },
    },
    mounted() {
        if (this.startPosition === "right") {
            gsap.to(".switch", { duration: 0, x: 72 });
        }
    },
};
</script>

<style scoped>
.container {
    position: relative;
    width: 150px;
    height: 40px;
    margin: 5px;
}
.button {
    position: absolute;
    width: 75px;
    height: 40px;
    left: 0px;
    top: 0px;
    border: none;
    color: #757575;
    background-color: rgba(0, 0, 0, 0);
    z-index: 3;
    outline: none;
}
.right {
    left: 75px;
}
.switch {
    position: absolute;
    width: 78px;
    height: 40px;
    left: 0px;
    background: #ffffff;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.2);
    border-radius: 47px;
    z-index: 2;
}
.background {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 150px;
    height: 40px;
    background-color: #e2e2e2;
    border-radius: 47px;
    z-index: 1;
}
.button.left {
    border-radius: 5% 0% 0% 5%;
}
.button.right {
    border-radius: 0% 5% 5% 0%;
}
.active {
    color: var(--black);
}
</style>
