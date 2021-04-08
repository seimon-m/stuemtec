<template>
    <div class="ui buttons big">
        <button
            class="button left"
            @click="leftClick"
            :class="[!isRight ? 'active' : '']"
        >
            {{nameLeft}}
        </button>
        <button
            class="button right"
            @click="rightClick"
            :class="[isRight ? 'active' : '']"
        >
            {{nameRight}}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        nameLeft: String,
        nameRight: String,
    },
    data() {
        return {
            isRight: false,
        };
    },
    methods: {
        rightClick() {
                this.isRight = true
                this.$emit('clicker', 'right')
        },
        leftClick() {
                this.isRight = false
                this.$emit('clicker', 'left')
        },
    },
};
</script>

<style scoped>
.button {
    padding: 10px 30px;
    border: none;
    
    color: rgb(36, 36, 36);
}
.left {
    border-radius: 5% 0% 0% 5%;
}
.right {
    border-radius: 0% 5% 5% 0%;
}

.active {
    background-color: rgb(16, 126, 6);
    color: white;
}
</style>
