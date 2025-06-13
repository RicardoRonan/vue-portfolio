<template>
  <section id="projects" class="m-2 p-3">
    <h1 id="project-title-1">Here are some of my Projects</h1>
    <div class="p-3 m-4 nes-container is-dark with-title">
      <div class="row g-4">
        <div v-for="project in projects" :key="project.id" class="col-xl-4 col-lg-6 col-md-6">
          <div class="card bg-dark p-3 corners h-100">
            <h3 id="project-title">{{ project.title }}</h3>
            <div id="img-cont">
              <img
                id="project-img"
                class="img-fluid"
                v-bind:src="project.img"
              />
              <div class="row g-2">
                <div class="col-6 d-flex justify-content-end align-items-center p-4" id="icon-cont">
                  <a v-bind:href="project.liveLink" target="_blank" class="text-decoration-none"
                    ><i class="fa-solid fa-link" id="live-link"></i
                  ></a>
                </div>
                <div class="col-6 d-flex justify-content-start align-items-center p-4" id="icon-cont-1">
                  <a v-bind:href="project.githubLink" target="_blank" class="text-decoration-none">
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
          title: "Vue.js Portfolio",
          liveLink: "https://vue-portfolio-c077e.web.app/",
          githubLink: "https://github.com/RicardoRonan/vue-portfolio",
          img: "https://i.postimg.cc/J4svKSky/BMI-calc.png",
          language: "Vue.js, CSS3, JavaScript, Firebase",
        },
        {
          id: 2,
          title: "BMI Calculator",
          liveLink: "https://check-your-bmi.netlify.app/",
          githubLink: "https://github.com/RicardoRonan/BMI-calculator",
          img: "https://i.postimg.cc/J4svKSky/BMI-calc.png",
          language: "HTML5, CSS3, JavaScript, Bootstrap",
        },
        {
          id: 3,
          title: "Task Management App",
          liveLink: "https://app-of-the-to-do.netlify.app/",
          githubLink: "https://github.com/RicardoRonan/todo-app",
          img: "https://i.postimg.cc/0N0BbsL4/todo-list.png",
          language: "HTML5, CSS3, JavaScript, Bootstrap",
        },
        {
          id: 4,
          title: "Temperature Converter",
          liveLink: "https://converter-of-temp.netlify.app/",
          githubLink: "https://github.com/RicardoRonan/Temperature-converter",
          img: "https://i.postimg.cc/7ZDcDhRz/temp-converter.png",
          language: "HTML5, CSS3, JavaScript, Bootstrap",
        },
        {
          id: 5,
          title: "Property Listing Platform",
          liveLink: "https://listing-of-property.netlify.app/",
          githubLink: "https://github.com/RicardoRonan/Property-listing",
          img: "https://i.postimg.cc/Gp6xLSpf/Fye-prooperties.png",
          language: "HTML5, CSS3, JavaScript, Bootstrap",
        },
        {
          id: 6,
          title: "Digital Art Gallery",
          liveLink: "https://leschevresdigitalartgallery.netlify.app/",
          githubLink: "https://github.com/fatimagalant/Vue-Portfolio",
          img: "https://i.postimg.cc/BvP2VcCB/les-chevres.png",
          language: "Vue.js, CSS3, JavaScript, Bootstrap",
        },
      ],
    };
  },
};
</script>
<style>
.corners {
  font-family: var(--font-family-pixel);
  letter-spacing: 0.02rem;
  background: transparent;
  border: 0.5rem solid currentColor;
  padding: 1.5rem 2rem;
  font-size: 2.2rem;
  color: var(--text-color);
  position: relative;
  transition: color var(--transition-duration);
  z-index: 1;
  border-radius: var(--border-radius);
}
.corners:hover {
  color: var(--primary-color);
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
  color: var(--text-color);
  font-size: 2rem;
  transition: color var(--transition-duration) ease;
}
#github-link:hover {
  color: var(--primary-color);
}
#live-link {
  color: var(--secondary-color);
  font-size: 2rem;
  transition: color var(--transition-duration) ease;
}
#live-link:hover {
  color: var(--primary-color);
}
#project-img {
  width: 100%;
  height: auto;
  filter: drop-shadow(0.3125rem 0.3125rem 0.625rem black);
}
#project-title-1 {
  color: var(--secondary-color);
}
#projects {
  min-height: 100vh;
  background-color: var(--background-color);
}
@media only screen and (max-width: 75rem) {
  #github-link {
    color: var(--text-color);
    font-size: 1rem;
  }
  #live-link {
    color: var(--secondary-color);
    font-size: 1rem;
  }
  #project-title {
    font-size: 0.7rem;
  }
}
</style>
