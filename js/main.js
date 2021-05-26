document.addEventListener('click', function(e) {
    var map = document.querySelector('#map-wrap iframe')
    if(e.target.id === 'map-wrap') {
        map.style.pointerEvents = 'all'
    } else {
        map.style.pointerEvents = 'none'
    }
})

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.feedback__swipper__button-next',
      prevEl: '.feedback__swipper__button-prev',
    },
  
  });