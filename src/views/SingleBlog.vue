<template>
  <section id="single-blog-page" class="min-vh-100">
    <div class="container-fluid">
      <div v-if="blog" class="single-blog">
        <h1 class="blog-title text-light mb-3" v-html="blog.title"></h1>
        <p class="blog-date text-light mb-4">{{ formatDate(blog.date) }}</p>
        <div class="blog-content text-light" v-html="blog.content"></div>
      </div>
      <div v-else class="text-light">Loading...</div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
  name: 'SingleBlog',
  setup() {
    const blog = ref(null);
    const route = useRoute();

    onMounted(async () => {
      try {
        const response = await axios.get(
          `https://public-api.wordpress.com/rest/v1.1/sites/thedevricardo.wordpress.com/posts/${route.params.id}`
        );
        blog.value = {
          title: response.data.title,
          content: response.data.content,
          date: response.data.date
        };
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    });

    const formatDate = (isoDate) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(isoDate).toLocaleDateString(undefined, options);
    };

    return { blog, formatDate };
  }
};
</script>

<style scoped>
.single-blog { background: #222; color: #fff; padding: 2rem; border-radius: 0.5rem; margin-top: 2rem; }
.blog-title { font-size: 2rem; }
.blog-date { font-size: 1rem; color: #aaa; }
.blog-content { margin-top: 2rem; }
</style>
