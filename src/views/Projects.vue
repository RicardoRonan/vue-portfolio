<template>
  <section id="projects" class="m-4 p-3">
    <h1 id="project-title">Here are some of my Projects</h1>
    <div v-for="project in projects" :key="project.id">
      <div class="p-3 m-4 nes-container is-dark with-title">
        <h3>{{ project.title }}</h3>
        <div id="img-cont">
          <img id="project-img" class="img-fluid" v-bind:src="project.img" />
          <div class="row">
            <div class="col-md-6 p-4" id="icon-cont">
              <a v-bind:href="project.liveLink" target="_blank"
                ><i class="fa-solid fa-link" id="live-link"></i
              ></a>
            </div>
            <div class="col-md-6 p-4" id="icon-cont-1">
              <a v-bind:href="project.githubLink" target="_blank">
                <i class="fa-brands fa-github" id="github-link"></i
              ></a>
            </div>
          </div>
        </div>
        <p class="p-2">{{ project.language }}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "BMI calculator",
          liveLink: "https://check-your-bmi.netlify.app/",
          githubLink: "https://github.com/RicardoRonan/BMI-calculator",
          img: "https://i.postimg.cc/J4svKSky/BMI-calc.png",
          language: "HTML5,CSS3,Javascript,Bootstrap",
        },
        {
          id: 2,
          title: "To-Do list",
          liveLink: "https://app-of-the-to-do.netlify.app/",
          githubLink: "https://github.com/RicardoRonan/todo-app",
          img: "https://i.postimg.cc/0N0BbsL4/todo-list.png",
          language: "HTML5,CSS3,Javascript,Bootstrap",
        },
        {
          id: 3,
          title: "Temperature converter",
          liveLink: "https://converter-of-temp.netlify.app/",
          githubLink: "https://github.com/RicardoRonan/Temperature-converter",
          img: "https://i.postimg.cc/7ZDcDhRz/temp-converter.png",
          language: "HTML5,CSS3,Javascript,Bootstrap",
        },
        {
          id: 4,
          title: "Property Listing",
          liveLink: "https://listing-of-property.netlify.app/",
          githubLink: "https://github.com/RicardoRonan/Property-listing",
          img: "https://i.postimg.cc/Gp6xLSpf/Fye-prooperties.png",
          language: "HTML5,CSS3,Javascript,Bootstrap",
        },
        {
          id: 5,
          title: "Art Gallery (Collab project)",
          liveLink: "https://leschevresdigitalartgallery.netlify.app/",
          githubLink: "https://github.com/fatimagalant/Vue-Portfolio",
          img: "https://i.postimg.cc/BvP2VcCB/les-chevres.png",
          language: "HTML5,CSS3,Vue3,Javascript,Bootstrap",
        },
        {
          id: 6,
          title: "Resturant (Collab project)",
          liveLink: "https://fyefoodsrestuarant.netlify.app/",
          githubLink: "https://github.com/AbuBakrKhan24/Project_1",
          img: "https://i.postimg.cc/TPTXkCxZ/Restuarant.png",
          language: "HTML5,CSS3,Bootstrap",
        },
      ],
    };
  },
};
</script>
<style>
#icon-cont {
  display: flex;
  justify-content: flex-end;
}
#icon-cont-1 {
  display: flex;
}

#github-link {
  color: white;
  font-size: 3rem;
}
#live-link {
  color: #fefefe;
  font-size: 3rem;
}
#project-img {
  width: 100%;
  height: 40rem;
  filter: drop-shadow(5px 5px 10px black);
}
#project-title {
  color: whitesmoke;
}
#projects {
  min-height: 100vh;
  background-color: black;
}
</style>
