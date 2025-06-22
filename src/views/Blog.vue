<template>
  <section id="blog-page" class="blog-landing-page">
    <!-- Hero Section -->
    <div class="blog-hero">
      <div class="hero-content">
        <div class="hero-icon">
          <i class="fa-solid fa-pen-nib"></i>
        </div>
        <h1 class="hero-title">Blog & Articles</h1>
        <p class="hero-subtitle">Insights, tutorials, and stories from a developer's journey.<br>Stay curious. Stay inspired.</p>
      </div>
    </div>

    <div class="container">
      <!-- Loading State -->
      <div v-if="loading" class="loading-container">
        <div class="loading-spinner"></div>
        <p class="loading-text">Loading blog posts...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error-container">
        <div class="error-icon">
          <i class="fa-solid fa-exclamation-triangle"></i>
        </div>
        <h2 class="error-title">Unable to load blog posts</h2>
        <p class="error-message">{{ error }}</p>
        <button @click="retryLoad" class="btn btn-primary">
          <i class="fa-solid fa-refresh"></i> Try Again
        </button>
      </div>

      <!-- Blog List -->
      <div v-else class="blog-list-grid">
        <div v-for="blog in blogs" :key="blog.ID" class="blog-card" tabindex="0">
          <div class="card-header">
            <h3 class="card-title" v-html="blog.title"></h3>
            <div class="card-meta">
              <span class="meta-item">
                <i class="fa-regular fa-calendar"></i>
                {{ formatDate(blog.date) }}
              </span>
              <span class="meta-item">
                <i class="fa-regular fa-clock"></i>
                {{ readingTime(blog.content) }} min read
              </span>
              <span class="meta-item" v-if="blog.tags && Object.keys(blog.tags).length">
                <i class="fa-solid fa-tag"></i>
                <span v-for="tag in Object.keys(blog.tags)" :key="tag" class="tag">{{ tag }}</span>
              </span>
            </div>
          </div>
          <div class="card-body">
            <p class="card-excerpt" v-html="truncateExcerpt(blog.excerpt)"></p>
          </div>
          <router-link :to="`/blog/${blog.ID}`" class="btn btn-primary card-btn" :aria-label="`Read more about ${blog.title}`">
            Read More <i class="fa-solid fa-arrow-right"></i>
          </router-link>
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
    const loading = ref(true);
    const error = ref(null);

    const fetchBlogs = async () => {
      loading.value = true;
      error.value = null;
      try {
        const response = await axios.get(
          'https://public-api.wordpress.com/rest/v1.1/sites/thedevricardo.wordpress.com/posts/?number=10'
        );
        blogs.value = response.data.posts;
      } catch (err) {
        error.value = 'Please check your connection or try again later.';
      } finally {
        loading.value = false;
      }
    };

    const retryLoad = () => {
      fetchBlogs();
    };

    const formatDate = (isoDate) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(isoDate).toLocaleDateString(undefined, options);
    };

    const readingTime = (content) => {
      if (!content) return 0;
      const wordsPerMinute = 200;
      const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
      return Math.ceil(wordCount / wordsPerMinute);
    };

    const truncateExcerpt = (excerpt) => {
      // Remove HTML tags and limit to 180 chars
      const text = excerpt.replace(/<[^>]*>/g, '');
      return text.length > 180 ? text.slice(0, 180) + '...' : text;
    };

    onMounted(() => {
      fetchBlogs();
    });

    return { blogs, loading, error, retryLoad, formatDate, readingTime, truncateExcerpt };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
.blog-landing-page {
  min-height: 100vh;
  background: var(--background-color);
  --readable-font: 'Lato', sans-serif;
}

.blog-hero {
  width: 100%;
  background: linear-gradient(90deg, #dc143c 0%, #000 100%);
  padding: 3rem 0 2rem 0;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.2);
}
.hero-content {
  max-width: 40rem;
  margin: 0 auto;
}
.hero-icon {
  font-size: 3rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}
.hero-title {
  font-family: var(--font-family-pixel);
  color: var(--text-color);
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
.hero-subtitle {
  font-family: var(--readable-font);
  color: var(--secondary-color);
  font-size: 1.1rem;
  margin-bottom: 0;
}

.container {
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  text-align: center;
}
.loading-spinner {
  width: 3rem;
  height: 3rem;
  border: 0.25rem solid var(--secondary-color);
  border-top: 0.25rem solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}
.loading-text {
  font-family: var(--font-family-pixel);
  color: var(--text-color);
  font-size: 1rem;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  text-align: center;
  padding: 2rem;
}
.error-icon {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}
.error-title {
  font-family: var(--font-family-pixel);
  color: var(--text-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.error-message {
  font-family: var(--readable-font);
  color: var(--secondary-color);
  font-size: 1rem;
  margin-bottom: 2rem;
  max-width: 30rem;
}

.blog-list-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}
.blog-card {
  background: rgba(255,255,255,0.02);
  border: var(--pixel-border);
  border-radius: 0;
  box-shadow: var(--neon-glow);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.2s, transform 0.2s;
  outline: none;
}
.blog-card:focus,
.blog-card:hover {
  box-shadow: 0 0 0 0.2rem var(--primary-color), var(--neon-glow);
  transform: translateY(-0.25rem) scale(1.02);
  border-color: var(--primary-color);
}
.card-header {
  margin-bottom: 1rem;
}
.card-title {
  font-family: var(--font-family-pixel);
  color: var(--text-color);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}
.card-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-family: var(--readable-font);
  color: var(--secondary-color);
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}
.meta-item {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
.tag {
  background: rgba(220, 20, 60, 0.2);
  color: var(--primary-color);
  padding: 0.1rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.8em;
  margin-left: 0.25rem;
}
.card-body {
  flex: 1;
}
.card-excerpt {
  font-family: var(--readable-font);
  color: var(--text-color);
  font-size: 1rem;
  margin-bottom: 1.5rem;
  min-height: 3.5rem;
}
.card-btn {
  align-self: flex-end;
  font-family: var(--font-family-pixel);
  font-size: 0.95rem;
  padding: 0.5rem 1.25rem;
  border-radius: 0;
  border: 0.125rem solid var(--primary-color);
  background: var(--primary-color);
  color: var(--text-color);
  transition: background 0.2s, color 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}
.card-btn:hover, .card-btn:focus {
  background: transparent;
  color: var(--primary-color);
  outline: none;
}

@media (max-width: 768px) {
  .blog-hero {
    padding: 2rem 0 1.5rem 0;
  }
  .hero-title {
    font-size: 2rem;
  }
  .blog-list-grid {
    gap: 1.25rem;
  }
  .blog-card {
    padding: 1.25rem 1rem 1rem 1rem;
  }
}
@media (max-width: 576px) {
  .blog-hero {
    padding: 1.5rem 0 1rem 0;
  }
  .hero-title {
    font-size: 1.3rem;
  }
  .container {
    padding: 0 0.5rem;
  }
  .blog-list-grid {
    grid-template-columns: 1fr;
  }
}
</style>
