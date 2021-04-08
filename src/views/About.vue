<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <toggle-button id="switch" labelEnableText="True" labelDisableText="False" v-on:change="eventHandler"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ToggleButton from '../components/ToggleButton.vue'

export default {
  name: 'About',
  components: {
    HelloWorld,
    ToggleButton
  },
  methods: {
        eventHandler(value) {
            console.log(value);
        }
    }
}
</script>