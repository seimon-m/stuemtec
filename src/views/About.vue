<template>
  <div class="home">
    <img alt="Focus logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to stuemtec | Focus"/>
    <toggle-button nameLeft="Normal" nameRight="Fokus" @clicker="logger($event)"/>
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
        },
        logger(m) {
          console.log("Click: " + m)
        }
    }
}
</script>