<template>
  <router-view />
  <navBar />
  <Footer />
</template>

<script>
import navBar from "./components/navBar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    navBar,
    Footer,
  },
};
</script>
<style>
::-webkit-scrollbar {
  display: none;
}
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
