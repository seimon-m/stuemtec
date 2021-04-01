<template>
    <div class="test">
        <h1>HALLOO VELLOOOOO</h1>
        <p>
            For a guide and recipes on how to configure / customize this
            project,<br />
            check out the
        </p>
    </div>
</template>

<script>
import { gsap } from "gsap";

export default {
    name: "TestComponent",
    mounted() {
        gsap.to(".test", { x: 500, duration: 3 });
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
    background-color: #42b983;
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
