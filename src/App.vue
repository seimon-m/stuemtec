<template>
    <div v-if="setFocus">
        Now you see me
        <button @click="setFocus = false">Back</button>
    </div>
    <div v-else>
        <img alt="Vue logo" src="./assets/logo.png" />
        <button @click="setFocus = true">Focus</button>
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
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
</style>
