document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.banner-container');
    const slides = document.querySelectorAll('.banner-slide');
    let currentIndex = 0;
  
    const nextButton = document.querySelector('.arrow.next');
    const prevButton = document.querySelector('.arrow.prev');
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
  
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
  });
  