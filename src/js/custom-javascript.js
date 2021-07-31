// Add your custom JS here.


  $('.happy-client-section__image-button-item').on('click', function(){
    let dataImg = $(this).data('img');
    let dataContent = $(`.happy-client-section__text-block[data-content='${dataImg}']`);
    $('.happy-client-section__text-block').removeClass('active')
    dataContent.addClass('active');
    $('.happy-client-section__image-button-item').removeClass('active')
    $(this).addClass('active');
  })
  
  
  $('.newsletter-section__form-block').on('submit', function(event){
    event.preventDefault();
    $('.success-massage').addClass('active')
    setTimeout(function(){
      $('.success-massage').removeClass('active');
      $('.newsletter-section__form-block_input').val('');
    }, 4000);
    
  })

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
  });
 
