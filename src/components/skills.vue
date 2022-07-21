<template>
  <section id="skills" class="m-4 p-3">
    <h2 id="skills-heading" class="text-light">Skills</h2>
    <div class="container-fluid p-3 m-3" id="skills-cont">
      <div class="row">
        <div class="col-md-3">
          <div class="card" id="skill-card">
            <i class="fa-brands fa-html5" id="html5"></i>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" id="skill-card">
            <i class="fa-brands fa-js" id="javascript"></i>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" id="skill-card">
            <i class="fa-brands fa-css3-alt" id="css3"></i>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" id="skill-card">
            <i class="fa-brands fa-vuejs" id="vue3"></i>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="card" id="skill-card">
            <i class="fa-solid fa-database" id="sql"></i>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" id="skill-card">
            <i class="fa-brands fa-bootstrap" id="bootstrap"></i>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" id="skill-card">
            <i class="fa-brands fa-github" id="github"></i>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" id="skill-card">
            <i class="fa-brands fa-node" id="node"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style>
#html5 {
  padding: 4.5rem;
  color: black;
  font-size: 5rem;
}
#node {
  padding: 4.5rem;
  color: black;
  font-size: 5rem;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: transparent !important;
  background-clip: border-box;
  border: none;
  border-radius: 0;
}
#vue3 {
  padding: 4.5rem;
  color: black;
  font-size: 5rem;
}
#sql {
  padding: 4.5rem;
  color: black;
  font-size: 5rem;
}
#bootstrap {
  padding: 4.5rem;
  color: black;
  font-size: 5rem;
}
#github {
  padding: 4.5rem;
  color: black;
  font-size: 5rem;
}
#css3 {
  padding: 4.5rem;
  color: black;
  font-size: 5rem;
}
#javascript {
  padding: 4.5rem;
  color: black;
  font-size: 5rem;
}
#skill-card {
  height: 15rem;
  background-position: center;
  background-size: cover;
  background-image: url(https://i.postimg.cc/cLBKJhVk/tinywow-remove-bg-3566840.png);
}
#skills-cont {
  background-image: url(https://i.postimg.cc/5N5yPj7h/background-brick.png);
  height: fit-content;
  width: auto;
  background-attachment: fixed;
  background-position: center;
  background-repeat: none;
  background-size: cover;
}
#skills-heading {
  font-family: pixel;
}
</style>
