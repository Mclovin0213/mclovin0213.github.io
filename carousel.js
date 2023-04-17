document.addEventListener('DOMContentLoaded', () => {
    const leftButton = document.querySelector('.left_button button');
    const rightButton = document.querySelector('.right_button button');
    const carousel = document.querySelector('.carousel');
  
    const filmCards = [
      {
        title: 'The Super Mario Bros. Movie',
        image: './images/mario_large.avif',
        desc: "An action-packed, heartwarming adventure that brings an iconic video game world to life as two brothers overcome challenges and discover the power of family, friendship, and love.",
        ref: '/review_mario.html'

      },
      {
        title: 'John Wick: Chapter 4',
        image: './images/john_wick4_large.jpeg',
        desc: "A relentless, adrenaline-fueled journey of vengeance and redemption as the legendary hitman defies all odds, forging unlikely alliances and battling powerful enemies to reclaim his freedom.",
        ref: '/review_john_wick4.html'

      },
      {
        title: 'Babylon',
        image: './images/babylon_large.jpeg',
        desc: "A captivating journey through the golden age of Hollywood, where ambition, passion, and heartbreak intertwine as diverse characters navigate the glamour, scandal, and tumultuous transitions of the evolving film industry.",
        ref: '/review_babylon.html'
      },
    ];
  
    let currentCardIndex = 0;
  
    function updateCarousel() {
        const carouselItem = carousel.querySelector('.large_review_card');
      
        const titleLink = carouselItem.querySelector('.large_rating_container a');
        const descLink = carouselItem.querySelector('.large_card_quote p');
        const imageLink = carouselItem.querySelector('.large_film_image a');
      
        titleLink.querySelector('p').textContent = filmCards[currentCardIndex].title;
        titleLink.href = filmCards[currentCardIndex].ref;

        descLink.textContent = filmCards[currentCardIndex].desc;
        
        const imageElement = carouselItem.querySelector('.large_film_image img');
        imageElement.src = filmCards[currentCardIndex].image;
        imageElement.alt = filmCards[currentCardIndex].title;
      
        imageLink.href = filmCards[currentCardIndex].ref;
      }
  
      let carouselInterval;

      function autoChangeCarousel() {
        currentCardIndex++;
        if (currentCardIndex >= filmCards.length) {
          currentCardIndex = 0;
        }
        updateCarousel();
      }

      function resetCarouselInterval() {
        clearInterval(carouselInterval);
        carouselInterval = setInterval(autoChangeCarousel, 15000);
      }
      
      leftButton.addEventListener('click', () => {
        currentCardIndex--;
        if (currentCardIndex < 0) {
          currentCardIndex = filmCards.length - 1;
        }
        updateCarousel();
        resetCarouselInterval();
      });
      
      rightButton.addEventListener('click', () => {
        currentCardIndex++;
        if (currentCardIndex >= filmCards.length) {
          currentCardIndex = 0;
        }
        updateCarousel();
        resetCarouselInterval();
      });
      
      carouselInterval = setInterval(autoChangeCarousel, 15000);
      
  });
  