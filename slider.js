  /*Slider*/
  $(document).ready(function(){
    $('.slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000, 
      prevArrow: false,
      nextArrow: false,
      responsive: [
        {
          breakpoint: 768, // Ancho de pantalla a partir del cual se aplicará el media query
          settings: {
            slidesToShow: 3 // Muestra 3 slides en pantallas de 768 píxeles o más
          }
        },
        {
            breakpoint: 420, // Ancho de pantalla a partir del cual se aplicará el media query
            settings: {
              slidesToShow: 2 // Muestra 3 slides en pantallas de 768 píxeles o más
            }
          }
      ]
    });
  });