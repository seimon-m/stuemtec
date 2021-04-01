<template>
    <div>
        <button class="button">
            <div v-if="id" class="buttonIcon">
                <svg
                    id="forward"
                    fill="black"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M11.2928932,6.70710678 L12.7071068,5.29289322 L19.4142136,12 L12.7071068,18.7071068 L11.2928932,17.2928932 L16.5857864,12 L11.2928932,6.70710678 Z M6.29289322,6.70710678 L7.70710678,5.29289322 L14.4142136,12 L7.70710678,18.7071068 L6.29289322,17.2928932 L11.5857864,12 L6.29289322,6.70710678 Z"
                    ></path>
                </svg>
            </div>
            <div class="buttonText">
                <slot />
            </div>
        </button>
    </div>
</template>

<script>
export default {
    name: "ButtonIcon",
    data() {
        return {
            setFocus: false,
        };
    },
    props: {
        id: String,
    },
};
</script>

<style>
.button {
    height: 2rem;
    padding: 0;
    margin: 0;
    display: flex;
    border: #00ff93;
    background-color: white;
    border-radius: 0.25rem;
    transition: all 0.25s ease-in-out;
}
.button:focus {
    outline: none; 
    border: none;
}

.button:active {
    outline: none; 
    border: none;
}
.button:hover {
    background: #00FF93; 
    cursor:pointer;
}

.buttonText {
    margin: 0;
    margin-right: 0.6rem;
    padding: 0.5rem;
    font-size: 0.875rem;
}

.buttonIcon {
    padding: 4px;
    background-color: #00ff93;
    border-radius: 0.25rem 0 0 0.25rem;
    display: flex;
    align-items: center;
}
</style>
