
  
  const carousel = document.querySelector('.carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  
  let currentIndex = 0;
  
  function showSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
  }
  function handlePrevClick() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
  }
  function handleNextClick() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
  }
  prevBtn.addEventListener('click', handlePrevClick);
  nextBtn.addEventListener('click', handleNextClick);
