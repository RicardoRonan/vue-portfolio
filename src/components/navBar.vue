<template>
  <button id="menu-btn" type="button" @click="toggleNav()">
    <i class="fa-solid fa-bars" id="bars"></i>
  </button>
  <nav class="nav-links">
    <router-link class="items" @click="toggleNav()" to="/">
      <img
        id="fasp-img"
        v-bind:src="'https://i.postimg.cc/0jcQMVLp/pixilart-drawing-3.png'"
    /></router-link>

    <router-link class="items" @click="toggleNav()" to="/">Home</router-link>
    <router-link class="items" @click="toggleNav()" to="/about"
      >About</router-link
    >
    <router-link class="items" @click="toggleNav()" to="/projects"
      >Projects</router-link
    >

    <router-link class="items" @click="toggleNav()" to="/testimonials"
      >Testimonials</router-link
    >

    <router-link class="items" @click="toggleNav()" to="/contact"
      >Contact</router-link
    >

    <button
      id="close-btn"
      class="text-light"
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
  },
};
</script>
<style scoped>
#close {
  color: white;
}
#close:hover {
  color: crimson;
}

#bars {
  color: whitesmoke;
}
#bars:hover {
  color: crimson;
}
#close-btn {
  font-size: 2rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  border: none;
  background: transparent;
  color: whitesmoke;
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
  font-family: pixel;
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
  color: whitesmoke;
}
.nav-links {
  z-index: 100;
  font-family: pixel;

  position: fixed;
  top: -150%;
  left: 0;
  right: 0;
  height: 105vh;
  background-color: black;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  transition: top 0.3s linear;
}
.nav-links.active {
  top: 0;
}
@media only screen and (max-width: 600px) {
  /* #close-btn {
    margin-left: 21rem;
    margin-top: 2rem;
    font-size: 1rem;
  }
  #menu-btn {
    position: fixed;
    right: -2rem;
    font-size: 1rem;
  } */
  .items {
    font-size: 1.5rem;
  }
}
</style>
