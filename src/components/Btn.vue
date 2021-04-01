<template>
    <component :is="type" :href="href" class="button">
        <span class="buttonText">
            <slot />
        </span>
    </component>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            default: null,
        },
        to: {
            type: String,
            default: null,
        },
    },
    computed: {
        type() {
            if (this.href) {
                return "a";
            } else {
                return "button";
            }
        },
    },
};
</script>

<style scoped>
.button {
    width: 128px;
    height: 32px;

    background: #00ff93;
    border-radius: 2px;

    transition: all 0.25s ease-in-out;
}

.button:active {
    outline: none;
    border: none;
    font-weight: bold;
}
.button:hover {
    background: #8bfdce;
    cursor: pointer;
}

.buttonText {
    margin: auto;
    padding: 0.5rem;
    font-size: 0.875rem;
}
</style>
