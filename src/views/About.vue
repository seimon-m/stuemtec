<template>
    <div v-if="setFocus">
        Now you see me
        <ButtonIcon @click="setFocus = false" id="forward">Back</ButtonIcon>
        <div class="separator" />
        <Btn :href="'https://greensock.com/get-started/'">GSAP</Btn>
    </div>
    <div v-else>
        <Btn @click="setFocus = true">Focus</Btn>
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
import ButtonIcon from "../components/ButtonIcon.vue";
import Btn from "../components/Btn.vue";

export default {
    name: "About",
    components: {
        ButtonIcon,
        Btn,
    },
    data() {
        return {
            setFocus: false,
        };
    },
};
</script>

<style scoped></style>
