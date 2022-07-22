<template>
  <section id="About" class="m-4 p-3">
    <div class="card" id="about-card">
      <h1 id="about-title" class="text-light">About Me !</h1>
      <div class="row">
        <div class="col-md-6 text-center">
          <img
            class="img-fluid"
            id="mario"
            v-bind:src="'https://i.postimg.cc/bvSXm1GR/tinywow-remove-bg-3560831.png'"
          />
        </div>
        <div class="col-md-6 p-5 text-black shadow">
          <p class="about-text text-light">
            I am an open-minded, artistic young man. I am friendly, extroverted
            and I am very adventurous when given the chance. I am always ready
            to help and I can work in a team easily. I found a passion for
            technology from a young age , and my love for coding began when I
            saw my cousin coding a character for a game called M.U.G.E.N and I
            was intrigued by it.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style>
.about-text {
  word-break: break-all;
}
#mario {
  width: 15rem;
  height: 15rem;
  filter: drop-shadow(4px 4px 4px black);
}
#About {
  background-color: black;
  /* min-height: 100vh; */
}
#about-card {
  background-color: black;
  border: ridge 1rem;
}
#about-title {
  font-size: 4rem;
  font-family: pixel;
  text-shadow: 2px 2px 2px black;
}
@media only screen and (max-width: 600px) {
  #about-title {
    font-size: 1.8rem;
    word-break: keep-all;
  }
  .about-text {
    font-size: 0.8rem;
    word-break: keep-all;
  }
}
</style>
