<template>
    <div v-if="setFocus">
        Now you see me
        <ButtonIcon @click="setFocus = false" id="forward">Back</ButtonIcon>
        <div class="separator"/>
        <Btn :href="'https://greensock.com/get-started/'">GSAP</Btn>
    </div>
    <div v-else>
        <img alt="Vue logo" src="./assets/logo.png" />
        <Btn @click="setFocus = true">Focus</Btn>
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ButtonIcon from "./components/ButtonIcon.vue";
import Btn from "./components/Btn.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
        ButtonIcon,
        Btn
    },
    data() {
        return {
            setFocus: false,
        };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    
}
body {
  background-color: #E5E5E5;
}
.separator {
  margin: 20px;
}
</style>
