<template>
  <section id="projects" class="m-4 p-3">
    <h1 id="project-title">Here are some of my Projects</h1>
  </section>
  <div v-for="project in projects" :key="project.id"></div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "",
          liveLink: "",
          githubLink: "",
          img: "",
          desc: " ",
          language: "",
        },
      ],
    };
  },
};
</script>
<style>
#project-title {
  color: whitesmoke;
}
#projects {
  min-height: 100vh;
  background-color: black;
}
</style>
