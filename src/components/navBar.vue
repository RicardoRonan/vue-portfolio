<template>
  <button id="menu-btn" class="btn btn-link" type="button" @click="toggleNav()">
    <i class="fa-solid fa-bars" id="bars"></i>
  </button>
  <nav class="nav-links">
    <div id="nav-link-container">
 <router-link class="items" @click="toggleNav()" to="/">
      <img
        id="fasp-img"
        v-bind:src="'https://i.postimg.cc/0jcQMVLp/pixilart-drawing-3.png'"
    /></router-link>

    <router-link class="items" @click="toggleNav()" to="/">Home</router-link>
    <a class="items" @click="scrollToAbout()" href="#About">About</a>
    <router-link class="items" @click="toggleNav()" to="/projects"
      >Projects</router-link
    >

    <router-link class="items" @click="toggleNav()" to="/testimonials"
      >Testimonials</router-link
    >

    <router-link class="items" @click="toggleNav()" to="/contact"
      >Contact</router-link
    >
    </div>
   

    <button
      id="close-btn"
      class="text-light btn btn-link"
      type="button"
      @click="toggleNav()"
    >
      <i class="fa-regular fa-circle-xmark" id="close"></i>
    </button>
  </nav>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleNav() {
      document.querySelector(".nav-links").classList.toggle("active");
    },
    scrollToAbout() {
      this.toggleNav(); // Close the nav menu
      // Navigate to home page first if not already there
      if (this.$route.path !== '/') {
        this.$router.push('/').then(() => {
          // Wait a bit for the page to load, then scroll
          setTimeout(() => {
            const aboutSection = document.getElementById('About');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        });
      } else {
        // Already on home page, just scroll
        const aboutSection = document.getElementById('About');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
  },
};
</script>
<style scoped>
#nav-link-container {
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem;
justify-content: center;
width: 100%;
}
#close {
  color: var(--text-color);
  transition: color var(--transition-duration) ease;
}
#close:hover {
  color: var(--primary-color);
}

#bars {
  color: var(--secondary-color);
  transition: color var(--transition-duration) ease;
}
#bars:hover {
  color: var(--primary-color);
}
#close-btn {
  font-size: 2rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  border: none;
  background: transparent;
  color: var(--secondary-color);
  cursor: pointer;
}
#menu-btn {
  color: grey;
  z-index: 90;
  font-size: 2rem;
  position: fixed;
  top: 2rem;
  right: 2rem;
  border: none;
  background: transparent;
  font-family: var(--font-family-pixel);
  cursor: pointer;
}
#fasp-img {
  width: 5rem;
  height: auto;
  transition: all ease-in-out 0.5s;
  color: grey;
}
#goat-img:hover {
  filter: contrast();
}
.items {
  padding: 0.5rem;
  font-size: 3rem;
  list-style-type: none;
  --bs-text-opacity: 1;
  color: grey;
  transition: all ease-in-out 0.5s;
  text-decoration: none;
}
.items:hover {
  color: var(--secondary-color);
}
.nav-links {
  z-index: 100;
  font-family: var(--font-family-pixel);
  position: fixed;
  top: -150%;
  left: 0;
  right: 0;
  height: 105vh;
  background-color: var(--background-color);
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  transition: top var(--transition-duration) linear;
}
.nav-links.active {
  top: 0;
}
@media only screen and (max-width: 37.5rem) {
  .items {
    font-size: 1.5rem;
  }
}
</style>
