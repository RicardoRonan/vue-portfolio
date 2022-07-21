<template>
  <section id="contact">
    <h1 id="contact-title">Contact Me!</h1>
    <div class="nes-container is-dark with-title m-4 p-3" id="contact-cont">
      <div class="row">
        <div class="col-md-6">
          <form action="https://formspree.io/f/mnqwedov" method="POST">
            <div class="row" id="form-row">
              <div class="col-md-6">
                <label for="dark_field" style="color: #fff"></label>
                <input
                  type="text"
                  id="dark_field"
                  class="nes-input"
                  placeholder="Firstname"
                  required
                  name="Firstname"
                />
              </div>
              <div class="col-md-6">
                <label for="dark_field" style="color: #fff"></label>
                <input
                  type="text"
                  id="dark_field"
                  class="nes-input"
                  placeholder="Surname"
                  required
                  name="Surname"
                />
              </div>
            </div>
            <div class="nes-field">
              <label for="name_field"></label>
              <input
                type="email"
                id="name_field"
                class="nes-input"
                placeholder="Your Email"
                required
                name="Email"
              />
            </div>

            <label for="textarea_field"></label>
            <textarea
              id="textarea_field"
              class="nes-textarea"
              placeholder="Your Message"
              required
              name="Message"
            ></textarea>

            <!-- your other form fields go here -->
            <button type="submit" class="nes-btn is-dark">Send</button>
          </form>
        </div>
        <div class="col-md-6"></div>
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
<style>
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
  font-family: pixel;
  text-shadow: 2px 2px 2px black;
  color: whitesmoke;
}
#contact {
  font-family: pixel;
  min-height: 100vh;
  background-color: black;
}

@media only screen and (max-width: 616px) {
  #contact-title {
    font-size: 3rem;
    margin-top: 1rem;
  }
  #contact-cont {
    height: 55rem;
  }

  div#peach {
    padding-top: 10.5rem;
  }
}
</style>
