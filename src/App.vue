<template>
    <head>
        <!-- Primary Meta Tags -->
        <title>stuemtec</title>
        <meta name="title" content="stuemtec" />
        <meta
            name="description"
            content="Experimental proof-of-concept for the Digital Ideation Studio Emerging Technologies. The idea is to build a special focus mode for an online learning wiki and add micro animation for an experimental UX."
        />

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stuemtec-focus.netlify.app/" />
        <meta property="og:title" content="stuemtec" />
        <meta
            property="og:description"
            content="Experimental proof-of-concept for the Digital Ideation Studio Emerging Technologies. The idea is to build a special focus mode for an online learning wiki and add micro animation for an experimental UX."
        />
        <meta property="og:image" content="" />

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image" />
        <meta
            property="twitter:url"
            content="https://stuemtec-focus.netlify.app/"
        />
        <meta property="twitter:title" content="stuemtec" />
        <meta
            property="twitter:description"
            content="Experimental proof-of-concept for the Digital Ideation Studio Emerging Technologies. The idea is to build a special focus mode for an online learning wiki and add micro animation for an experimental UX."
        />
        <meta property="twitter:image" content="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
        />
    </head>
    <router-view v-slot="{ Component }">
        <transition name="scale" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
</template>
<script>
export default {
    name: "App",
    components: {},
};
</script>
<style>
:root {
    --white: #ffffff;
    --black: #000000;
    --grey1: #fbfbfb;
    --grey2: #f8f8f8;
    --grey3: #d9d9d9;
    --grey4: #b6b6b6;

    --pink: #d742fb;
    font-size: 16px;
}

body {
    background-image: linear-gradient(
        to top,
        #f3e7e9 0%,
        #e3eeff 99%,
        #e3eeff 100%
    );
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--black);
    line-height: 1.6rem;
}

h1 {
    font-size: 3.125rem;
    line-height: 3.3rem;
}

h2 {
    font-size: 2.375rem;
    line-height: 2.375rem;
}

h3 {
    font-size: 1.438rem;
    line-height: 1.438rem;
}

p {
    font-size: 1rem;
}

a {
    color: #d742fb;
    text-decoration: none;
}

#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

.img-description {
    font-size: 0.75rem;
    line-height: 1;
}

.scale-enter-active,
.scale-leave-active {
    transition: all 0.3s 0.5s ease-in-out;
}

.scale-enter-from,
.scale-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
</style>
