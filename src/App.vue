<template>
    <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> 
    </div> -->
    <router-view />
</template>
<script>

export default {
    name: "App",
    components: {
    },
    data() {
        return {
            setFocus: false,
        };
    },
};
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
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
body {
    background-color: #e5e5e5;
}
.separator {
    margin: 20px;
}
</style>
