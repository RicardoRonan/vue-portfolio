<template>
  <footer id="footer">
    <div id="container" class="p-4 m-3 text-light border-top">
      <div id="social-icons ">
        <a
          href="https://www.linkedin.com/in/ricardo-moses1/"
          class="icons"
          target="_blank"
          ><i class="fa-brands fa-linkedin p-2"></i>
        </a>
        <a href="https://github.com/RicardoRonan" class="icons" target="_blank">
          <i class="fa-brands fa-github p-2"></i
        ></a>
        <a href="https://codepen.io/ricardoronan" class="icons" target="_blank">
          <i class="fa-brands fa-codepen p-2"></i
        ></a>
      </div>
      <p class="text-light">
        <i class="fa-regular fa-copyright p-2"></i>Copyright.All rights
        reserved.2025
      </p>
    </div>
  </footer>
</template>
<style>
#footer {
  bottom: 0;
}

/* #container {
  border-top: 0.0625rem solid black;
  width: 90%;
} */
.icons {
  color: var(--secondary-color);
  transition: color var(--transition-duration) ease;
}
.icons:hover {
  color: var(--primary-color);
}
</style>
