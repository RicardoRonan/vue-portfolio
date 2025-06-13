<template>
  <section id="About" class="m-4 p-3">
    <div class="card" id="about-card">
      <h1 id="about-title" class="text-light">About Me !</h1>
      <div class="row g-4 align-items-center">
        <div class="col-lg-6 col-md-12 d-flex justify-content-center">
          <img
            class="img-fluid"
            id="mario"
            v-bind:src="'https://i.postimg.cc/bvSXm1GR/tinywow-remove-bg-3560831.png'"
          />
        </div>
        <div class="col-lg-6 col-md-12 p-4">
          <p class="about-text text-light">
            Dedicated Full-Stack Developer with hands-on experience in fintech systems, automation, and scalable web apps. Proven track record of building secure payment integrations, automating business workflows using n8n, and collaborating on full lifecycle development projects. Passionate about digital financial transformation and continuous learning.
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
  filter: drop-shadow(0.25rem 0.25rem 0.25rem black);
}
#About {
  background-color: var(--background-color);
  /* min-height: 100vh; */
}
#about-card {
  background-color: var(--background-color);
  border: ridge 1rem;
}
#about-title {
  font-size: 4rem;
  font-family: var(--font-family-pixel);
  text-shadow: 0.125rem 0.125rem 0.125rem black;
}
@media only screen and (max-width: 37.5rem) {
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
