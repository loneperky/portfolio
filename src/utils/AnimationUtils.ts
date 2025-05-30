// Utility functions for animations
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
};

export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  if (href && href.startsWith('#')) {
    scrollToElement(href.substring(1));
  }
};

// Add animation classes to elements when they come into view
export const setupScrollAnimation = (): void => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
};