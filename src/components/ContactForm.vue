<template>
  <section id="contact">
    <h1 id="contact-title">Contact Me!</h1>
    <div class="nes-container is-dark with-title m-4 p-3" id="contact-cont">
      <div class="row g-4">
        <div class="col-lg-6 col-md-12">
          <form action="https://formspree.io/f/mnqwedov" method="POST">
            <div class="row g-3" id="form-row">
              <div class="col-sm-6">
                <label for="firstname_field" class="visually-hidden">First Name</label>
                <input
                  type="text"
                  id="firstname_field"
                  class="nes-input"
                  placeholder="Firstname"
                  required
                  name="Firstname"
                />
              </div>
              <div class="col-sm-6">
                <label for="surname_field" class="visually-hidden">Surname</label>
                <input
                  type="text"
                  id="surname_field"
                  class="nes-input"
                  placeholder="Surname"
                  required
                  name="Surname"
                />
              </div>
            </div>
            <div class="nes-field mb-3">
              <label for="email_field" class="visually-hidden">Email</label>
              <input
                type="email"
                id="email_field"
                class="nes-input"
                placeholder="Your Email"
                required
                name="Email"
              />
            </div>

            <div class="mb-3">
              <label for="textarea_field" class="visually-hidden">Message</label>
              <textarea
                id="textarea_field"
                class="nes-textarea"
                placeholder="Your Message"
                required
                name="Message"
                rows="5"
              ></textarea>
            </div>

            <div class="d-grid">
              <button type="submit" class="nes-btn is-dark">Send Message</button>
            </div>
          </form>
        </div>
        <div class="col-lg-6 col-md-12"></div>
      </div>
      <div id="peach">
        <img
          id="princess"
          v-bind:src="'https://i.postimg.cc/FRBkcq7p/princess-peach-removebg-preview.png'"
        />
        <div id="bubble">
          <section class="message-list">
            <section class="message -left">
              <div class="nes-balloon from-left p-1">
                <p class="nes-text">CONTACT ME!</p>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.nes-text {
  color: rgba(91, 88, 88, 0.649);
}
div#bubble {
  position: absolute;
  left: 52%;
  bottom: 25%;
}
div#peach {
  padding-top: 1rem;
}

img#princess {
  width: 8rem;
  height: 8rem;
}
.nes-field.is-inline > label {
  flex-basis: 0;
  flex-grow: 1;
  margin: 0;
  margin-right: 0;
  text-align: right;
}
#form-row {
  margin-top: 10rem;
}
#contact-cont {
  background-image: url(https://i.postimg.cc/bNjYD3sh/tinywow-crop-3590095.jpg);
  background-position: center;
  background-size: cover;
  height: 40rem;
}
#contact-title {
  font-size: 4rem;
  font-family: var(--font-family-pixel);
  text-shadow: 0.125rem 0.125rem 0.125rem black;
  color: var(--secondary-color);
}
#contact {
  font-family: var(--font-family-pixel);
  min-height: 100vh;
  background-color: var(--background-color);
}
.nes-balloon {
  border-image-repeat: inherit;
}
.nes-input,
.nes-textarea {
  border-image-repeat: inherit;
}

@media only screen and (max-width: 48.125rem) {
  #contact-title {
    font-size: 3rem;
    margin-top: 1rem;
  }
  #contact-cont {
    height: 50rem;
  }

  div#peach {
    padding-top: 9.9rem;
  }
}
@media only screen and (max-width: 45.625rem) {
  div#peach {
    padding-top: 6.29rem;
  }
}
@media only screen and (max-width: 38.5rem) {
  #contact-title {
    font-size: 3rem;
    margin-top: 1rem;
  }
  #contact-cont {
    height: 55rem;
  }

  div#peach {
    padding-top: 10.9rem;
  }
}
</style>
