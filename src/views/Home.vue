<template>
    <div>
        <Btn @click="goToFocus()">Focus</Btn>
        <iframe
            src="https://exorciser.ch/index"
            style="border:0px #ffffff none;"
            name="myiFrame"
            scrolling="no"
            frameborder="0"
            marginheight="0px"
            marginwidth="0px"
            height="1200px"
            width="1650px"
            allowfullscreen
        ></iframe>
    </div>
</template>

<script>
import Btn from "../components/Btn.vue";

export default {
    name: "About",
    components: {
        Btn,
    },
    methods: {
      goToFocus() {
        this.$router.push('/focus')
      }
    },
};
</script>

<style scoped></style>
