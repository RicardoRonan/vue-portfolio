<template>
  <Aboutcard />
  <skills />
  <resumeCard />
</template>
<script>
import Aboutcard from "../components/Aboutcard.vue";
import skills from "../components/skills.vue";
import resumeCard from "../components/resumeCard.vue";

export default {
  components: {
    Aboutcard,
    skills,
    resumeCard,
  },
};
</script>
