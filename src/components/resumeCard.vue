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
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          perferendis eveniet, illo ipsa quo quod iste aperiam? Deleniti itaque,
          voluptate esse fuga veniam rem in magni inventore, odit nulla
          voluptatibus vero optio dolores omnis consequatur suscipit. Sunt,
          nobis, libero qui ipsam voluptates minus perferendis molestias soluta
          nemo, nesciunt harum explicabo!
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
#mush-img {
  padding-left: 1rem;
}
#resume-cont {
  min-height: 80vh;
}
</style>
