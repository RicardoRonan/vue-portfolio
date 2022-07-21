<template>
  <div class="nes-container is-dark with-title m-4 p-3" id="resume-cont">
    <h1>Resume</h1>
    <div class="row">
      <div class="col-md-6">
        <div id="mush-cont">
          <img
            id="mush-img"
            class="img-fluid"
            v-bind:src="'https://i.postimg.cc/G28Tbjhf/tinywow-remove-bg-3559006.png'"
          />
        </div>
      </div>
      <div class="col-md-6 p-5">
        <div class="row">
          <div class="col-md-6 p-3">
            <div class="card">
              <i class="nes-icon is-large star"></i>
              <h3 class="text-muted fs-5 text-center">Info</h3>
              <p>
                <span class="text-muted">Profile:</span>Full stack developer
              </p>
              <p>
                <span class="text-muted">Email:</span>ricardoronanm@gmail.com
              </p>
            </div>
          </div>

          <div class="col-md-6 p-3">
            <div class="card">
              <i class="nes-icon trophy is-large"></i>
              <h3 class="text-muted fs-3 text-center">Matric</h3>
              <p class="fs-5 text-center">2017-2021</p>
              <p class="text-muted">Matriculated at AZ Berman Highschool.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 p-3">
            <div class="card">
              <i class="nes-icon coin is-large"></i>
              <h3 class="text-muted fs-3 text-center">Life-Choices</h3>
              <p class="fs-5 text-center">2022-Present</p>
              <p class="text-muted text-center">
                Currently studying Web Development at Life Choices Academy.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <img
                id="heart"
                class="img-fluid"
                v-bind:src="'https://i.postimg.cc/N0H8xXB2/heart.png'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
#heart {
  width: 15rem;
  height: 15rem;
  display: flex;
  align-content: center;
  justify-content: center;
  filter: drop-shadow(2px 2px 3px black);
}
#mush-img {
  padding-left: 1rem;
}
#resume-cont {
  min-height: 80vh;
}
</style>
