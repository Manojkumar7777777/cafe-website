const menuopen = document.querySelector("#menu-open");
const menuclose = document.querySelector("#menu-close");
menuopen.addEventListener("click",() => {
    document.body.classList.toggle("show-mobile");
});
menuclose.addEventListener("click",() =>  menuopen.click());

const swiper = new Swiper('.slider-wrapper', {
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
      0:{
        slidesPerView: 1
      },
      768:{
        slidesPerView: 2
      },
      1024:{
        slidesPerView:3
      }
    }
  });

    