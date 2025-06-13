<template>
  <section id="home" class="min-vh-100 d-flex flex-column justify-content-center">
    <div class="container-fluid">
      <!-- Main Content Row -->
      <div class="row g-4 align-items-center min-vh-75">
        <!-- Text Content -->
        <div class="col-lg-6 col-md-12 order-2 order-lg-1">
          <div class="text-content">
            <h1 id="title" class="text-light mb-3">Hi, I'm Ricardo Moses</h1>
            <h2 id="sub-title" class="text-light mb-4">Full-Stack Developer & Automation Specialist</h2>
            <p class="lead text-light mb-4">
              Passionate about creating efficient and scalable solutions with expertise in fintech systems, automation, and modern web technologies.
            </p>
            <div class="cta-buttons">
              <router-link to="/projects" class="btn btn-primary btn-lg me-3 mb-2">
                View My Work
              </router-link>
              <router-link to="/contact" class="btn btn-outline-light btn-lg mb-2">
                Get In Touch
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- Image Content -->
        <div class="col-lg-6 col-md-12 order-1 order-lg-2">
          <div id="me-cont" class="d-flex justify-content-center">
            <img
              id="me"
              class="img-fluid"
              v-bind:src="'https://i.postimg.cc/52Xq5V3F/okay-okay-removebg-preview-1.png'"
              alt="Ricardo Moses - Developer Avatar"
            />
          </div>
        </div>
      </div>
      
      <!-- Loading Bar Section -->
      <div class="row">
        <div class="col-12">
          <div id="loading-bar-cont" class="d-flex justify-content-center mt-4">
            <div id="loading-card" class="loading-container">
              <div class="loading-label mb-2">
                <span class="text-light">Loading Portfolio...</span>
              </div>
              <div id="card" class="progress-card">
                <div id="bar" class="progress-bar"></div>
              </div>
              <div class="loading-percentage mt-2">
                <span id="percentage" class="text-light">0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Landing',
  mounted() {
    this.startLoadingAnimation();
  },
  methods: {
    startLoadingAnimation() {
      const progressBar = document.getElementById('bar');
      const percentage = document.getElementById('percentage');
      let progress = 0;
      
      const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        if (progressBar) {
          progressBar.style.width = progress + '%';
        }
        if (percentage) {
          percentage.textContent = Math.floor(progress) + '%';
        }
        
        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            const loadingContainer = document.getElementById('loading-card');
            if (loadingContainer) {
              loadingContainer.style.opacity = '0';
              loadingContainer.style.transform = 'translateY(-2rem)';
              setTimeout(() => {
                loadingContainer.style.display = 'none';
              }, 500);
            }
          }, 1000);
        }
      }, 200);
    }
  }
};
</script>

<style scoped>
/* Home Section */
#home {
  background: linear-gradient(135deg, var(--background-color) 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
  animation: fadeIn 1s ease-in-out;
}

#home::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23ffffff" opacity="0.02"/><circle cx="75" cy="75" r="1" fill="%23ffffff" opacity="0.02"/><circle cx="50" cy="10" r="1" fill="%23ffffff" opacity="0.02"/><circle cx="10" cy="90" r="1" fill="%23ffffff" opacity="0.02"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  pointer-events: none;
}

.min-vh-75 {
  min-height: 75vh;
}

/* Text Content */
.text-content {
  padding: 2rem 0;
  z-index: 2;
  position: relative;
}

#title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-family: var(--font-family-pixel);
  text-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.8);
  line-height: 1.2;
  animation: slideInLeft 1s ease-out 0.3s both;
}

#sub-title {
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-family: var(--font-family-pixel);
  text-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.8);
  color: var(--primary-color);
  line-height: 1.3;
  animation: slideInLeft 1s ease-out 0.5s both;
}

.lead {
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  opacity: 0.9;
  animation: slideInLeft 1s ease-out 0.7s both;
}

/* CTA Buttons */
.cta-buttons {
  animation: slideInLeft 1s ease-out 0.9s both;
}

.btn-primary {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  font-family: var(--font-family-pixel);
  font-size: 0.9rem;
  padding: 0.75rem 2rem;
  border-radius: 0;
  border-width: 0.125rem;
  transition: all var(--transition-duration) ease;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
}

.btn-primary:hover {
  background-color: transparent;
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateY(-0.125rem);
  box-shadow: 0 0.25rem 0.5rem rgba(220, 20, 60, 0.3);
}

.btn-outline-light {
  font-family: var(--font-family-pixel);
  font-size: 0.9rem;
  padding: 0.75rem 2rem;
  border-radius: 0;
  border-width: 0.125rem;
  transition: all var(--transition-duration) ease;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
}

.btn-outline-light:hover {
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
  color: var(--background-color);
  transform: translateY(-0.125rem);
  box-shadow: 0 0.25rem 0.5rem rgba(245, 245, 220, 0.3);
}

/* Character Image */
#me-cont {
  padding: 2rem 0;
  animation: slideInRight 1s ease-out 0.5s both;
}

#me {
  max-width: 100%;
  height: auto;
  width: clamp(18rem, 30vw, 22rem);
  filter: drop-shadow(0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5));
  animation: floating 4s ease-in-out infinite;
  transition: transform var(--transition-duration) ease;
}

#me:hover {
  transform: scale(1.05);
}

/* Floating Animation */
@keyframes floating {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1rem);
  }
}

/* Loading Bar */
.loading-container {
  width: 100%;
  max-width: 25rem;
  text-align: center;
  transition: all 0.5s ease;
  animation: slideInUp 1s ease-out 1.1s both;
}

.loading-label {
  font-family: var(--font-family-pixel);
  font-size: 0.9rem;
  color: var(--secondary-color);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}

.progress-card {
  background-color: rgba(255, 255, 255, 0.1);
  border: 0.125rem solid var(--primary-color);
  border-radius: 0;
  height: 2rem;
  overflow: hidden;
  position: relative;
  backdrop-filter: blur(0.5rem);
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), #ff6b9d);
  width: 0%;
  transition: width 0.3s ease;
  position: relative;
  overflow: hidden;
}

.progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}

.loading-percentage {
  font-family: var(--font-family-pixel);
  font-size: 0.8rem;
  color: var(--primary-color);
  font-weight: bold;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-3rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(3rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .text-content {
    text-align: center;
    padding: 1rem 0;
  }
  
  #title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  #sub-title {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
  
  .lead {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .btn-lg {
    font-size: 0.8rem;
    padding: 0.6rem 1.5rem;
  }
  
  .cta-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  
  .btn {
    width: 100%;
    max-width: 15rem;
  }
  
  #me {
    width: 18rem;
    margin-bottom: 2rem;
  }
  
  .loading-container {
    max-width: 20rem;
    margin: 0 1rem;
  }
}

@media (max-width: 576px) {
  #title {
    font-size: 1.8rem;
  }
  
  #sub-title {
    font-size: 1rem;
  }
  
  .lead {
    font-size: 0.9rem;
  }
  
  #me {
    width: 16rem;
  }
  
  .btn-lg {
    font-size: 0.7rem;
    padding: 0.5rem 1.2rem;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  #home {
    background: #000000;
  }
  
  .progress-card {
    border-color: #ffffff;
  }
  
  .progress-bar {
    background: #ffffff;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  #me {
    animation: none;
  }
}
</style>
