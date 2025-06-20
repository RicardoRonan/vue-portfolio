<template>
  <section id="single-blog-page" class="min-vh-100">
    <div class="container-fluid">
      <div v-if="blog" class="single-blog">
        <h1 class="blog-title text-light mb-3">{{ blog.title }}</h1>
        <p class="blog-date text-light mb-4">{{ blog.date }}</p>
        <div class="blog-content text-light" v-html="blog.content"></div>
      </div>
      <div v-else class="text-light">Loading...</div>
    </div>
  </section>
</template>
<script>
import { onMounted, ref } from 'vue';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useRoute } from 'vue-router';

export default {
  name: 'SingleBlog',
  setup() {
    const blog = ref(null);
    const route = useRoute();
    onMounted(async () => {
      const docRef = doc(db, 'blogs', route.params.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        blog.value = docSnap.data();
      }
    });
    return { blog };
  }
};
</script>
<style scoped>
.single-blog { background: #222; color: #fff; padding: 2rem; border-radius: 0.5rem; margin-top: 2rem; }
.blog-title { font-size: 2rem; }
.blog-date { font-size: 1rem; color: #aaa; }
.blog-content { margin-top: 2rem; }
</style> 