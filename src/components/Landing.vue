<template>
  <section id="home" class="p-3 m-4">
    <div id="me-cont">
      <img
        id="me"
        v-bind:src="'https://i.postimg.cc/52Xq5V3F/okay-okay-removebg-preview-1.png'"
      />
    </div>
    <div class="title-container">
      <h1 id="title" class="text-light">Hi,Im Ricardo Moses</h1>
    </div>
    <div class="sub-title-container">
      <h2 id="sub-title" class="text-light">Striving web developer</h2>
    </div>
  </section>
</template>
<style>
#home {
  animation: loading 5s ease-in-out;
}
@keyframes loading {
  0% {
    opacity: 0%;
  }
  /* 25% {
    opacity: 25%;
  }
  50% {
    opacity: 60%;
  } */
  100% {
    opacity: 100%;
  }
}
</style>
