  var swiper = new Swiper(".mySwiper", {
     
       slidesPerView: 2,
      navigation: {
        nextEl: ".fleche-de-droite",
        prevEl: ".fleche-de-gauche",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
      autoplay: true,
     
    });



      var swiper2 = new Swiper(".myswiper2", {
      
       slidesPerView: 1,
      navigation: {
        nextEl: ".fleche-de-droite2",
        prevEl: ".fleche-de-gauche2",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
      autoplay: true
    });