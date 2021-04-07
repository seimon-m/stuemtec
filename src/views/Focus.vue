<template>
    <div>
        Now you see me
        <ButtonIcon @click="goToClassic()" id="forward">Back</ButtonIcon>
    </div>
</template>

<script>
import ButtonIcon from "../components/ButtonIcon.vue";

export default {
    name: "About",
    components: {
        ButtonIcon,
    },
    methods: {
        goToClassic() {
            this.$router.push("/");
        },
    },
};
</script>

<style scoped></style>
