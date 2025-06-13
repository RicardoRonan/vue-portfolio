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
/* CSS Custom Properties for consistent theming */
:root {
  --primary-color: #dc143c; /* crimson */
  --secondary-color: #f5f5dc; /* whitesmoke */
  --background-color: #000000; /* black */
  --text-color: #ffffff; /* white */
  --shadow-color: rgba(0, 0, 0, 0.5);
  --border-radius: 0; /* pixel art style */
  --font-family-pixel: pixel;
  --transition-duration: 0.3s;
  --box-shadow-light: 0.125rem 0.125rem 0.25rem var(--shadow-color);
  --box-shadow-medium: 0.25rem 0.25rem 0.375rem var(--shadow-color);
  --box-shadow-heavy: 0.3125rem 0.3125rem 0.625rem var(--shadow-color);
}

/* Hide scrollbar for cleaner look */
::-webkit-scrollbar {
  display: none;
}

/* Font face declaration */
@font-face {
  font-family: pixel;
  src: url(./assets/PressStart2P-Regular.ttf);
  font-display: swap; /* Better performance */
}

/* Global app styles */
#app {
  scroll-behavior: smooth;
  font-family: var(--font-family-pixel);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: hidden;
  background-color: var(--background-color);
  user-select: none;
  line-height: 1.6; 
  padding: 2rem;;
}

/* Utility classes for consistent spacing */
.section-padding {
  padding: 2rem 1rem;
}

.container-spacing {
  margin: 1rem;
  padding: 1rem;
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
