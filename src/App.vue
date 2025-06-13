<template>
  <router-view />
  <navBar />
  <Footer />
</template>

<script>
import navBar from "./components/navBar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    navBar,
    Footer
  },
};
</script>
<style>
/* CSS Custom Properties for consistent theming */
:root {
  --primary-color: #dc143c; /* crimson */
  --secondary-color: #f5f5dc; /* whitesmoke */
  --accent-color: #00ffff; /* cyan for modern touch */
  --background-color: #000000; /* black */
  --surface-color: #1a1a1a; /* dark surface */
  --text-color: #ffffff; /* white */
  --text-muted: #b0b0b0; /* muted text */
  --shadow-color: rgba(0, 0, 0, 0.5);
  --border-radius: 0; /* pixel art style */
  --border-radius-modern: 8px; /* modern elements */
  --font-family-pixel: pixel;
  --font-family-modern: 'Inter', 'Segoe UI', system-ui, sans-serif;
  --transition-duration: 0.3s;
  --transition-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --box-shadow-light: 0.125rem 0.125rem 0.25rem var(--shadow-color);
  --box-shadow-medium: 0.25rem 0.25rem 0.375rem var(--shadow-color);
  --box-shadow-heavy: 0.3125rem 0.3125rem 0.625rem var(--shadow-color);
  --box-shadow-modern: 0 4px 20px rgba(0, 0, 0, 0.15);
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
  --gradient-primary: linear-gradient(135deg, var(--primary-color), #ff6b9d);
  --gradient-accent: linear-gradient(135deg, var(--accent-color), #0099cc);
}

/* Modern scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--surface-color);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ff1744;
}

/* Font face declarations */
@font-face {
  font-family: pixel;
  src: url(./assets/PressStart2P-Regular.ttf);
  font-display: swap;
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* Global app styles with modern enhancements */
#app {
  scroll-behavior: smooth;
  font-family: var(--font-family-pixel);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: hidden;
  background: var(--background-color);
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(220, 20, 60, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(0, 255, 255, 0.05) 0%, transparent 50%);
  user-select: none;
  line-height: 1.6;
  padding: 0;
  min-height: 100vh;
  position: relative;
}

/* Modern glass morphism effect */
.glass-effect {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
}

/* Modern card component */
.modern-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius-modern);
  box-shadow: var(--box-shadow-modern);
  transition: all var(--transition-duration) var(--transition-smooth);
}

.modern-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
}

/* Utility classes for consistent spacing */
.section-padding {
  padding: 4rem 2rem;
}

.container-spacing {
  margin: 2rem auto;
  padding: 2rem;
  max-width: 1200px;
}

/* Modern typography scale */
.text-display {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
}

.text-heading {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 600;
  line-height: 1.2;
}

.text-subheading {
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  font-weight: 500;
  line-height: 1.3;
}

.text-body {
  font-family: var(--font-family-modern);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-muted);
}

/* Modern button styles */
.btn-modern {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-family: var(--font-family-modern);
  font-weight: 500;
  text-decoration: none;
  border-radius: var(--border-radius-modern);
  transition: all var(--transition-duration) var(--transition-smooth);
  cursor: pointer;
  border: none;
  position: relative;
  overflow: hidden;
}

.btn-modern::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-modern:hover::before {
  left: 100%;
}

.btn-primary-modern {
  background: var(--gradient-primary);
  color: white;
  box-shadow: 0 4px 15px rgba(220, 20, 60, 0.3);
}

.btn-primary-modern:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(220, 20, 60, 0.4);
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  #app {
    scroll-behavior: auto;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  :root {
    --primary-color: #ff0000;
    --secondary-color: #ffffff;
    --background-color: #000000;
    --text-color: #ffffff;
    --glass-bg: rgba(255, 255, 255, 0.1);
  }
}

/* Dark mode support (system preference) */
@media (prefers-color-scheme: dark) {
  :root {
    --surface-color: #1e1e1e;
    --text-muted: #a0a0a0;
  }
}

/* Focus styles for better accessibility */
*:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

/* Loading states */
.loading-skeleton {
  background: linear-gradient(90deg, var(--surface-color) 25%, rgba(255, 255, 255, 0.1) 50%, var(--surface-color) 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Modern spacing system */
.space-xs { margin: 0.25rem; }
.space-sm { margin: 0.5rem; }
.space-md { margin: 1rem; }
.space-lg { margin: 1.5rem; }
.space-xl { margin: 2rem; }
.space-2xl { margin: 3rem; }

/* Responsive container */
.container-fluid-modern {
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 576px) {
  .container-fluid-modern {
    max-width: 540px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 768px) {
  .container-fluid-modern {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container-fluid-modern {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container-fluid-modern {
    max-width: 1140px;
  }
}
</style>
