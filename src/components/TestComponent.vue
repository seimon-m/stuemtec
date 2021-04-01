<template>
    <div class="test">
        <h1>HALLOO VELLOOOOO</h1>
        <h3>Tech stack</h3>
        <p>Framework: vue.js (Version 3) <a>https://v3.vuejs.org/guide/introduction.html</a></p>
        <p>Animation Library: GSAP <a>https://greensock.com/get-started/</a></p>
        <p>Contiuous Deployment: Netlify <a>https://stuemtec-focus.netlify.app/</a></p>
    </div>
</template>

<script>
import { gsap } from "gsap";

export default {
    name: "TestComponent",
    mounted() {
        gsap.to(".test", { y: -300 , duration: 3, ease: "bounce" });
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
    background-color: rgb(225, 229, 241);
    border-radius: 20px;
    padding: 20px;
}

h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
