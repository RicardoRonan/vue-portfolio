<template>
  <Landing />
  <div id="loading-bar-cont">
    <div id="card" class="card m-2 mx-auto">
      <div id="bar"></div>
    </div>
  </div>
</template>
<script>
import Landing from "../components/Landing.vue";
export default {
  components: {
    Landing,
  },
  // data() {
  //   return {};
  // },
};
</script>
<style>
@font-face {
  font-family: pixel;
  src: url(../assets/PressStart2P-Regular.ttf);
}
#loading {
  min-height: 5vh;
  width: 90%;
  display: contents;
}
.container {
  width: 100%;
}

#me {
  width: 22rem;
  height: 20rem;
  position: absolute;
  right: 40%;
  animation: floating 4s ease-in-out infinite;
  filter: drop-shadow(4px 4px 4px grey);
}
div#me-cont {
  display: flex;
  justify-content: center;
  width: 100%;
}

@keyframes floating {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-16px);
  }
  100% {
    transform: translateY(0);
  }
}

#home {
  background-color: black;
  min-height: 90vh;
}

@keyframes card {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

#card {
  height: 5rem;
  width: 90%;
  border: none;
  /* position: absolute;
  right: 1.5%; */
  border: 1rem ridge;
  bottom: 5rem;
}
#bar {
  width: 100%;
  animation: card 3s;
  height: 5rem;
  float: left;
  background-color: crimson;
  display: block;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.title-container {
  margin-top: 20rem;
}
h1#title {
  font-size: 4rem;
  font-family: pixel;
  text-shadow: 2px 2px 2px grey;
}
h2#sub-title {
  font-size: 3rem;
  font-family: pixel;
  text-shadow: 2px 2px 2px grey;
}
@media only screen and (max-width: 600px) {
  h1#title {
    font-size: 2rem;
    font-family: pixel;
  }
  h2#sub-title {
    font-size: 1rem;
    font-family: pixel;
  }
  #me {
    width: 20rem;
    height: 19rem;
    position: absolute;
    right: 12.5%;
  }
  /* #card {
    bottom: -1rem;
    height: 5rem;
    width: 21rem;
    border: none;
    position: absolute;
    right: 1.5%;
    border: 1rem ridge;
  } */
}
</style>
