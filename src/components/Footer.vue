<template>
  <footer id="footer" class="site-footer">
    <div class="footer-content">
      <!-- Footer Top Section -->
      <div class="footer-top">
        <div class="footer-brand">
          <div class="brand-logo">
          </div>
          <div class="brand-info">
            <h3 class="brand-name">Ricardo Moses</h3>
            <p class="brand-tagline">Full-Stack Developer & Automation Specialist</p>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-links">
          <h4 class="footer-section-title">Quick Links</h4>
          <div class="links-grid">
            <router-link to="/" class="footer-link">Home</router-link>
            <router-link to="/projects" class="footer-link">Projects</router-link>
            <router-link to="/experience" class="footer-link">Experience</router-link>
            <router-link to="/testimonials" class="footer-link">Testimonials</router-link>
            <router-link to="/contact" class="footer-link">Contact</router-link>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="footer-contact">
          <h4 class="footer-section-title">Get In Touch</h4>
          <div class="contact-info">
            <div class="contact-item">
              <i class="fa-solid fa-envelope"></i>
              <span>ricardoronan@gmail.com.com</span>
            </div>
            <div class="contact-item">
              <i class="fa-solid fa-location-dot"></i>
              <span>Cape Town, South Africa</span>
            </div>
            <div class="contact-item">
              <i class="fa-solid fa-phone"></i>
              <span>Available for freelance work</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom Section -->
      <div class="footer-bottom">
        <div class="footer-divider"></div>
        
        <div class="footer-bottom-content">
          <!-- Social Links -->
          <div class="social-links">
            <a
              href="https://www.linkedin.com/in/the-dev-ricardo/"
              class="social-link"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a 
              href="https://github.com/RicardoRonan" 
              class="social-link" 
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a 
              href="https://codepen.io/ricardoronan" 
              class="social-link" 
              target="_blank"
              rel="noopener noreferrer"
              title="CodePen"
            >
              <i class="fa-brands fa-codepen"></i>
            </a>
          </div>

          <!-- Copyright -->
          <div class="copyright">
            <p class="copyright-text">
              <i class="fa-regular fa-copyright"></i>
              {{ currentYear }} Ricardo Moses. All rights reserved.
            </p>
            <p class="made-with">
              Made with <i class="fa-solid fa-heart"></i> using Vue.js
            </p>
          </div>

          <!-- Back to Top -->
          <div class="back-to-top">
            <button @click="scrollToTop" class="scroll-top-btn" title="Back to top">
              <i class="fa-solid fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped>
/* Site Footer */
.site-footer {
  /* background: linear-gradient(135deg, var(--background-color) 0%, #0a0a0a 100%); */
  position: relative;
  overflow: hidden;
  margin-top: 4rem;
}

.site-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23ffffff" opacity="0.02"/><circle cx="75" cy="75" r="1" fill="%23ffffff" opacity="0.02"/><circle cx="50" cy="10" r="1" fill="%23ffffff" opacity="0.02"/><circle cx="10" cy="90" r="1" fill="%23ffffff" opacity="0.02"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  pointer-events: none;
}

.footer-content {
  position: relative;
  z-index: 2;
  margin: 0 auto;
  padding: 3rem 2rem 1rem;
}

/* Footer Top */
.footer-top {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

/* Footer Brand */
.footer-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.brand-logo {
  flex-shrink: 0;
}

.footer-logo {
  width: 4rem;
  height: 4rem;
  border: 0.125rem solid var(--primary-color);
  border-radius: 0;
  filter: drop-shadow(0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.5));
  transition: all var(--transition-duration) ease;
}

.footer-logo:hover {
  border-color: var(--secondary-color);
  transform: scale(1.1);
}

.brand-info {
  flex: 1;
}

.brand-name {
  font-family: var(--font-family-pixel);
  font-size: 1.2rem;
  color: var(--secondary-color);
  margin: 0 0 0.5rem 0;
  text-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.8);
}

.brand-tagline {
  font-family: var(--font-family-pixel);
  font-size: 0.7rem;
  color: var(--primary-color);
  margin: 0;
  line-height: 1.4;
}

/* Footer Links */
.footer-section-title {
  font-family: var(--font-family-pixel);
  font-size: 1rem;
  color: var(--secondary-color);
  margin: 0 0 1.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  text-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.8);
  text-align: left;
}

.links-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  font-family: var(--font-family-pixel);
  font-size: 0.8rem;
  color: var(--text-color);
  text-decoration: none;
  transition: all var(--transition-duration) ease;
  padding: 0.25rem 0;
  border-left: 0.125rem solid transparent;
  padding-left: 0.5rem;
}

.footer-link:hover {
  color: var(--primary-color);
  border-left-color: var(--primary-color);
  transform: translateX(0.25rem);
}

.footer-link.router-link-active {
  color: var(--secondary-color);
  border-left-color: var(--secondary-color);
}

/* Footer Contact */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-family-pixel);
  font-size: 0.8rem;
  color: var(--text-color);
}

.contact-item i {
  color: var(--primary-color);
  font-size: 1rem;
  min-width: 1.25rem;
}

/* Footer Bottom */
.footer-bottom {
  position: relative;
}

.footer-divider {
  width: 100%;
  height: 0.125rem;
  background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  margin-bottom: 2rem;
  position: relative;
}

.footer-divider::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 3s infinite;
}

.footer-bottom-content {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 2rem;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1rem;
  justify-self: start;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 0.125rem solid var(--secondary-color);
  border-radius: 0;
  color: var(--secondary-color);
  font-size: 1.2rem;
  text-decoration: none;
  transition: all var(--transition-duration) ease;
  backdrop-filter: blur(0.25rem);
}

.social-link:hover {
  background: var(--secondary-color);
  color: var(--background-color);
  transform: translateY(-0.25rem);
  box-shadow: 0 0.5rem 1rem rgba(245, 245, 220, 0.3);
}

/* Copyright */
.copyright {
  text-align: center;
  justify-self: center;
}

.copyright-text {
  font-family: var(--font-family-pixel);
  font-size: 0.7rem;
  color: var(--text-color);
  margin: 0 0 0.5rem 0;
  opacity: 0.8;
}

.copyright-text i {
  color: var(--primary-color);
  margin-right: 0.25rem;
}

.made-with {
  font-family: var(--font-family-pixel);
  font-size: 0.6rem;
  color: var(--primary-color);
  margin: 0;
}

.made-with i {
  color: #ff6b9d;
  animation: heartbeat 2s infinite;
}

/* Back to Top */
.back-to-top {
  justify-self: end;
}

.scroll-top-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(220, 20, 60, 0.2);
  border: 0.125rem solid var(--primary-color);
  border-radius: 0;
  color: var(--primary-color);
  font-size: 1rem;
  cursor: pointer;
  transition: all var(--transition-duration) ease;
  backdrop-filter: blur(0.25rem);
}

.scroll-top-btn:hover {
  background: var(--primary-color);
  color: var(--text-color);
  transform: translateY(-0.25rem);
  box-shadow: 0 0.5rem 1rem rgba(220, 20, 60, 0.3);
}

/* Animations */
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    padding: 2rem 1rem 1rem;
  }
  
  .footer-top {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .footer-brand {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-bottom-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }
  
  .social-links {
    justify-self: center;
  }
  
  .back-to-top {
    justify-self: center;
  }
  
  .links-grid {
    align-items: center;
  }
  
  .contact-info {
    align-items: center;
  }
}

@media (max-width: 576px) {
  .footer-content {
    padding: 1.5rem 0.75rem 1rem;
  }
  
  .footer-top {
    gap: 1.5rem;
  }
  
  .brand-name {
    font-size: 1rem;
  }
  
  .brand-tagline {
    font-size: 0.6rem;
  }
  
  .footer-section-title {
    font-size: 0.9rem;
  }
  
  .footer-link {
    font-size: 0.7rem;
  }
  
  .contact-item {
    font-size: 0.7rem;
  }
  
  .social-link {
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
  }
  
  .scroll-top-btn {
    width: 2rem;
    height: 2rem;
    font-size: 0.9rem;
  }
  
  .copyright-text {
    font-size: 0.6rem;
  }
  
  .made-with {
    font-size: 0.5rem;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .made-with i {
    animation: none;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .footer-logo {
    border-color: #ffffff;
  }
  
  .social-link {
    border-color: #ffffff;
    background: #000000;
  }
  
  .scroll-top-btn {
    border-color: #ffffff;
    background: #000000;
  }
}
</style>
