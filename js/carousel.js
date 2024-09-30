document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carouselRodas');
    const items = document.querySelectorAll('.coliseu, .helianto, .marginow, .soulPixta');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
  
    let currentIndex = 0;
  
    function updateCarousel() {
      const width = items[0].clientWidth;
      carousel.style.transform = `translateX(-${currentIndex * width}px)`;
    }
  
    nextButton.addEventListener('click', () => {
      if (currentIndex < items.length - 3) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    // Atualiza o tamanho do carrossel ao redimensionar a janela
    window.addEventListener('resize', updateCarousel);
  });
  