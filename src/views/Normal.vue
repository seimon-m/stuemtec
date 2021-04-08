<template>
<Btn @click="goToFocus()">Focus</Btn>
      <div class="headerimage"></div>
  <div class="container__total">
    <div class="container__sidebar-main">
      <div class="container__sidebar">
        <div class="container__navlink">
          <a href="#">Rowdyruffs</a>
        </div>
        <div class="container__navlink layer2">
          <a href="#">DIGITECH.20</a>
        </div>
        <div class="container__navlink layer2">
          <a href="#">SPARK.H20</a>
        </div>
        <div class="container__navlink layer3">
          <a href="#">Intro</a>
        </div>
        <div class="container__navlink layer3">
          <a href="#">Variablen</a>
        </div>
        <div class="container__navlink layer3">
          <a href="#">Digitale Zukünfte</a>
        </div>
        <div class="container__navlink layer3">
          <a href="#">Verzweigungen und <br>bedingte Anweisungen</a>
        </div>
        <div class="container__navlink layer3">
          <a href="#">Transformationen und <br>Funktionen</a>
        </div>
        <div class="container__navlink layer3">
          <a href="#">Mapping and Noise</a>
        </div>
        <div class="container__navlink layer3">
          <a href="#">A bit of math</a>
        </div>
        <div class="container__navlink layer3">
          <a href="#">JSON Javascript <br>Object notation</a>
        </div>
        <div class="container__navlink layer3">
          <a href="#">p5js Bibliotheken</a>
        </div>
        <div class="container__navlink layer3">
          <a href="#">Einzelbesprechungen 1</a>
        </div>
        <div class="container__navlink layer3">
          <a href="#">Einzelbesprechungen 2</a>
        </div>
        <div class="container__navlink layer3">
          <a href="#">Einzelbesprechungen 3</a>
        </div>
        <div class="container__navlink layer3">
          <a href="#">OMLU Umfrage</a>
        </div>
        <div class="container__navlink layer3">
          <a href="#">Endpräsentation</a>
        </div>
        <div class="container__navlink layer2">
          <a href="#">KICKPROG.H20</a>
        </div>
        <div class="container__navlink layer2">
          <a href="#">MEN1.H20</a>
        </div>
        <div class="container_navlink">
          <a href="#">Octis</a>
        </div>
        <div class="container_navlink">
          <a href="#">Sedusas</a>
        </div>
        <div class="container_navlink">
          <a href="#">Masterclass 2020</a>
        </div>
      </div>
      <div class="container__main"></div>
    </div>
  </div>
</template>

<script>
import Btn from "../components/Btn.vue";

export default {
    name: "About",
    components: {
        Btn,
    },
    methods: {
      goToFocus() {
        this.$router.push('/focus')
      }
    },
};
</script>


<style scoped>

a {
  color: #000;
  text-decoration: none;
}

.headerimage {
  height: 333px;
  background-color: #afafaf;
}

.container__total {

  display: flex;
  padding-bottom: 80px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f8f8f8;
}

.container__sidebar-main {
  display: flex;
  width: 1216px;
  align-items: stretch;
  box-shadow: 0 0 4px 7px hsla(0, 0%, 66.3%, 0.25);
}

.container__sidebar {
  display: flex;
  width: 360px;
  padding: 125px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fbfbfb;
}

.container__main {
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: #fff;
}

.container_navlink {
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid #d9d9d9;
}

.container_navlink.layer2 {
  padding-left: 38px;
}

.container_navlink.layer3 {
  padding-left: 80px;
}

</style>