<template>
  <div id="home-page">
    <Landing />
    
    <!-- Content Sections -->
    <div class="content-sections">
      <Aboutcard />
      <skills />
      <Experience />
      <resumeCard />
    </div>
  </div>
</template>

<script>
import Landing from "../components/Landing.vue";
import Aboutcard from "../components/Aboutcard.vue";
import skills from "../components/skills.vue";
import Experience from "../components/Experience.vue";
import resumeCard from "../components/resumeCard.vue";

export default {
  name: 'Home',
  components: {
    Landing,
    Aboutcard,
    skills,
    Experience,
    resumeCard,
  },
  mounted() {
    // Smooth scroll behavior for the page
    document.documentElement.style.scrollBehavior = 'smooth';
  }
};
</script>

<style scoped>
#home-page {
  width: 100%;
  overflow-x: hidden;
}

.content-sections {
  position: relative;
  z-index: 1;
}

/* Ensure smooth transitions between sections */
.content-sections > * {
  scroll-margin-top: 2rem;
}

/* Add subtle fade-in animation for content sections */
.content-sections > *:nth-child(1) {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.content-sections > *:nth-child(2) {
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.content-sections > *:nth-child(3) {
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.content-sections > *:nth-child(4) {
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .content-sections > * {
    scroll-margin-top: 1rem;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .content-sections > * {
    animation: none !important;
  }
  
  #home-page {
    scroll-behavior: auto;
  }
}
</style>
