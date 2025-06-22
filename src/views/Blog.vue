<template>
  <section id="blog-page" class="min-vh-100">
    <div class="container-fluid">
      <div class="blog-header text-center mb-5">
        <h1 class="blog-title text-light mb-3">Blog</h1>
        <p class="blog-subtitle text-light mb-4">Latest posts and articles</p>
        <div class="header-divider"></div>
      </div>
      <div class="blog-list row g-4">
        <div v-for="blog in blogs" :key="blog.ID" class="col-md-6 col-lg-4">
          <div class="blog-card">
            <h3 v-html="blog.title"></h3>
            <p v-html="blog.excerpt"></p>
            <router-link :to="`/blog/${blog.ID}`" class="btn  btn-primary">Read More</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'Blog',
  setup() {
    const blogs = ref([]);

    onMounted(async () => {
      try {
        const response = await axios.get(
  'https://public-api.wordpress.com/rest/v1.1/sites/thedevricardo.wordpress.com/posts/?number=10'
);

        blogs.value = response.data.posts;
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    });

    return { blogs };
  }
};
</script>

<style scoped>
.blog-list { margin-top: 2rem; }
.blog-card {
  background: #222;
  color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}
.btn-primary { background: #dc143c; border: none; }
</style>
