<template>
  <section id="blog-page" class="min-vh-100">
    <div class="container-fluid">
      <div class="blog-header text-center mb-5">
        <h1 class="blog-title text-light mb-3">Blog</h1>
        <p class="blog-subtitle text-light mb-4">
          Latest posts and articles
        </p>
        <div class="header-divider"></div>
      </div>
      <div class="blog-list row g-4">
        <div v-for="blog in blogs" :key="blog.id" class="col-md-6 col-lg-4">
          <div class="blog-card">
            <h3>{{ blog.title }}</h3>
            <p>{{ blog.summary }}</p>
            <router-link :to="`/blog/${blog.id}`" class="btn btn-primary">Read More</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { onMounted, ref } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export default {
  name: 'Blog',
  setup() {
    const blogs = ref([]);
    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      blogs.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });
    return { blogs };
  }
};
</script>
<style scoped>
.blog-list { margin-top: 2rem; }
.blog-card { background: #222; color: #fff; padding: 2rem; border-radius: 0.5rem; margin-bottom: 2rem; }
.btn-primary { background: #dc143c; border: none; }
</style> 