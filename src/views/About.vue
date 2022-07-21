<template>
  <Aboutcard />
  <skills />
  <resumeCard />
  <Footer />
</template>
<script>
import Aboutcard from "../components/Aboutcard.vue";
import skills from "../components/skills.vue";
import Footer from "../components/Footer.vue";
import resumeCard from "../components/resumeCard.vue";
import ResumeCard from "../components/resumeCard.vue";
export default {
  components: {
    Aboutcard,
    skills,
    resumeCard,
    Footer,
    ResumeCard,
  },
};
</script>
