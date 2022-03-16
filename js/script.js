
let Button = document.querySelector('button');
let mobileMenu = document.querySelector('.mobile_menu');
let body = document.querySelector('body');

    Button.addEventListener('click', function(){
    mobileMenu.classList.toggle('mobile_menu_active');
    Button.classList.toggle('button-close');
    body.classList.toggle('no-scroll');
})


$(".scale").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  })



