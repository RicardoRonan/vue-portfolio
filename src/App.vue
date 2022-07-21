<template>
  <router-view />
  <navBar />
  <footer></footer>
</template>

<script>
import navBar from "./components/navBar.vue";
export default {
  components: {
    navBar,
  },
};
</script>
<style>
@font-face {
  font-family: pixel;
  src: url(./assets/PressStart2P-Regular.ttf);
}
#app {
  font-family: pixel;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: hidden;
  background-color: black;
  user-select: none;
}
</style>
