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
            width="100%"
            height="100%"
            frameborder="0"
            src="https://exorciser.ch/index"
        />
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
