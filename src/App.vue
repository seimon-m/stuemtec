<template>
    <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> 
    </div> -->
    <head>
        <link rel="preconnect" href="https://fonts.gstatic.com"> 
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    </head>
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
   font-size: 16px;
}

body {
    background-color: var(--grey2);
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--black);
}

h1{
    font-size: 3.125rem;
}

h2{
    font-size: 2.375rem;
}

h3{
    font-size: 1.438rem;
}

p{
    font-size: 1rem;
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

</style>
