<template>
  <section id="projects" class="m-4 p-3">
    <h1 id="project-title-1">Here are some of my Projects</h1>
    <div class="p-3 m-4 nes-container is-dark with-title">
      <div class="row">
        <div v-for="project in projects" :key="project.id" class="col-md-4">
          <div class="card bg-dark p-3 m-4 corners">
            <h3 id="project-title">{{ project.title }}</h3>
            <div id="img-cont">
              <img
                id="project-img"
                class="img-fluid"
                v-bind:src="project.img"
              />
              <div class="row">
                <div class="col-6 p-4" id="icon-cont">
                  <a v-bind:href="project.liveLink" target="_blank"
                    ><i class="fa-solid fa-link" id="live-link"></i
                  ></a>
                </div>
                <div class="col-6 p-4" id="icon-cont-1">
                  <a v-bind:href="project.githubLink" target="_blank">
                    <i class="fa-brands fa-github" id="github-link"></i
                  ></a>
                </div>
              </div>
            </div>
            <p id="project-language" class="p-2">{{ project.language }}</p>
          </div>
        </div>
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
          title: "Resturant",
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
.corners {
  font-family: pixel;
  letter-spacing: 0.02rem;
  background: transparent;
  border: 0.5rem solid currentColor;
  padding: 1.5rem 2rem;
  font-size: 2.2rem;
  color: #ffffff;
  position: relative;
  transition: color 0.3s;
  z-index: 1;
  border-radius: 0rem;
}
.corners:hover {
  color: crimson;
}
.corners:hover::before {
  width: 0;
}
.corners:hover::after {
  height: 0;
}
.corners:active {
  border-width: 0.25rem;
}
.corners::before,
.corners::after {
  content: "";
  position: absolute;
  background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
  z-index: -1;
  transition: all 0.3s;
}
.corners::before {
  width: calc(100% - 3rem);
  height: calc(101% + 1rem);
  top: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
}
.corners::after {
  height: calc(100% - 3rem);
  width: calc(101% + 1rem);
  left: -0.5rem;
  top: 50%;
  transform: translateY(-50%);
}

#project-language {
  font-size: 0.8rem;
}
#project-title {
  font-size: 1rem;
}
#icon-cont {
  display: flex;
  justify-content: flex-end;
}
#icon-cont-1 {
  display: flex;
}

#github-link {
  color: white;
  font-size: 2rem;
}
#github-link:hover {
  color: crimson;
}
#live-link {
  color: #fefefe;
  font-size: 2rem;
}
#live-link:hover {
  color: crimson;
}
#project-img {
  width: 100%;
  height: auto;
  filter: drop-shadow(5px 5px 10px black);
}
#project-title-1 {
  color: whitesmoke;
}
#projects {
  min-height: 100vh;
  background-color: black;
}
@media only screen and (max-width: 1200px) {
  #github-link {
    color: white;
    font-size: 1rem;
  }
  #live-link {
    color: #fefefe;
    font-size: 1rem;
  }
}
</style>
