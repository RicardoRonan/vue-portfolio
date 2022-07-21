<template>
  <div class="nes-container is-dark with-title m-4 p-3">
    <h1 id="test-title">Heres what people had to say...</h1>
    <h3>click pixel art to see the actual person</h3>
    <div v-for="testimonial in testimonials" :key="testimonial.id">
      <section id="testimonials">
        <div class="card m-3 p-1 shadow bg-dark mx-auto">
          <div class="container">
            <div id="img-cont">
              <img
                id="test-img"
                class="img-fluid"
                v-bind:src="testimonial.pixelImg"
                @click="showModal(testimonial.id)"
              />
            </div>
          </div>
          <div id="name-cont" class="m-4 mx-auto">
            <div class="nes-badge is-icon">
              <span class="is-warning"
                ><i class="nes-icon star is-small"></i
              ></span>
              <h2 id="Name" class="is-primary">{{ testimonial.name }}</h2>
            </div>
          </div>
          <p>{{ testimonial.testimonial }}</p>
          <p>{{ testimonial.role }}</p>
        </div>
        <section>
          <dialog
            class="nes-dialog is-dark is-rounded"
            :id="'dialog-dark-rounded' + testimonial.id"
          >
            <form method="dialog">
              <p class="title">{{ testimonial.name }}</p>
              <img
                id="real-img"
                class="img-fluid"
                v-bind:src="testimonial.img"
              />
              <menu class="dialog-menu">
                <button class="nes-btn">Cancel</button>
                <button class="nes-btn is-primary">Confirm</button>
              </menu>
            </form>
          </dialog>
        </section>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      testimonials: [
        {
          id: 1,
          name: "Fatima Galant",
          pixelImg: "https://i.postimg.cc/F155LSvx/1658336859156.png",
          img: "https://i.postimg.cc/CMG5NXwh/Fatima-1-1.jpg",
          testimonial:
            " Ricardo is a hard-working, talented and authentic individual who always goes above and beyond to achieve the best results possible. His good vibes and positivity is contagious.",
          role: "Colleague",
        },
        {
          id: 2,
          name: "Ashton Abrahams",
          pixelImg: "https://i.postimg.cc/T1gtLGbW/1658339507305-1.png",
          img: "https://i.postimg.cc/yd8rWw6V/Ashton-4.jpg",
          testimonial:
            "Ricardo is a dedicated individual who never stops improving, he is a team player and a valuable asset to any team",
          role: "Colleague",
        },
        {
          id: 3,
          name: "Natheerah Abrahams",
          pixelImg: "https://i.postimg.cc/bw0SK1wc/1658338391828.png",
          img: "https://i.postimg.cc/FFkPYbgX/Natheerah-3-1.jpg",
          testimonial:
            "Ricardo Moses has a winning attitude and is always willin  g to learns new things. He is always willing to extend a helping hand to assist others.",
          role: "Colleague",
        },
        {
          id: 4,
          name: "Carla Amy Lawrence",
          pixelImg: "https://i.postimg.cc/d0H2xG5Q/1658339669009.png",
          img: "https://i.postimg.cc/q7SjMgFG/Carla.png",
          testimonial:
            " It has been a pleasure to have Ricardo Ronan Moses as my colleague. He is an outstanding web developer.His professionalism and effort can be seen in all projects he has worked on.I would highly recommend Ricardo as an addition to any team or company.",
          role: "Colleague",
        },
        {
          id: 5,
          name: "Jason Wandrag",
          pixelImg: "https://i.postimg.cc/Mp4R0zHX/1658339743203.png",
          img: "https://i.postimg.cc/5NbpthsD/Jason.jpg",
          testimonial:
            "Out of all the people I have engaged with, Ricardo is one of the most creative I have come across. He is very skilled in creating visual pieces, which will definitely push him to be a great frontend developer. ",
          role: "Lecturer",
        },
        {
          id: 6,
          name: "Najmah Japtha",
          pixelImg: "https://i.postimg.cc/W4Fzsr21/1658342993413.png",
          img: "https://i.postimg.cc/Y9G3ZgpH/IMG-20220720-WA0022.jpg",
          testimonial:
            " RICARDO is a well-adjusted young man with a positive attitude who always tried hard to do his best at his schoolwork. A glance through his high school record will reveal a learner who applied himself in an attempt to gain success in his studies. ",
          role: "Former Teacher",
        },
        {
          id: 7,
          name: "Aaliyah Jardien",
          pixelImg: "https://i.postimg.cc/m2nhJ8s5/1658343772237.png",
          img: "https://i.postimg.cc/HnMpPScC/IMG-20220720-WA0026.jpg",
          testimonial:
            "Ricardo thrives in creative environments & works well with others. He would be a great asset to any team.",
          role: "Junior Developer",
        },
        {
          id: 8,
          name: "Uzair Damonse",
          pixelImg: "https://i.postimg.cc/KvGswDNB/1658344828431.png",
          img: "https://i.postimg.cc/nh4XLLLt/IMG-20220720-211835.jpg",
          testimonial:
            "Ricardo is a person that improves the environment around him with his positivity and pure presence. His ability in both styling his application and the functionality is astronomically good and in my opinion, is one of the best when comes to mobile responsiveness. With all of this in mind, I truly believe he is an excellent candidate for a software development role.",
          role: "Colleague",
        },
      ],
    };
  },
  methods: {
    showModal(id) {
      console.log(id);
      document.getElementById("dialog-dark-rounded" + id).showModal();
    },
  },
};
</script>
<style scoped>
#real-img {
  height: 20rem;
}
#Name {
  font-size: 1.8rem;
}
.nes-badge.is-icon {
  width: 27.25em;
}
/* #badge {
  background-color: black;
} */
#test-title {
  color: whitesmoke;
}
.container {
  display: flex;
  justify-content: center;
}

#img-cont {
  border: ridge 1rem;
  border-radius: 50%;
  width: 19rem;
  height: 19rem;
  overflow: hidden;
}
#test-img {
  width: 14rem;
  height: auto;
  margin-left: 2rem;
}
#testimonials {
  min-height: fit-content;
  color: whitesmoke;
}
@media only screen and (max-width: 1200px) {
  #Name {
    font-size: 0.9rem;
  }
  .nes-badge.is-icon {
    width: 15.25em;
  }
  #img-cont {
    height: 16rem;
  }
  #test-img {
    margin-left: 0rem;
  }
}
</style>
