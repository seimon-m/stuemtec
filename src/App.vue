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
    components: {},
};
</script>
<style>
:root{
   --white: #ffffff;
   --black: #000000; 
   --grey1: #fbfbfb;
   --grey2: #f8f8f8;
   --grey3: #d9d9d9;
   --grey4: #b6b6b6;
   --pink: #D742FB; 

}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--black);
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
body {
    background-color: #e5e5e5;
}
</style>
