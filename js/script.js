
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


  let cursor = document.querySelector('.cursor');
  let one = document.querySelector('.one');

    one.addEventListener('click', function(){
    cursor.value = '1'
    })

 let two = document.querySelector('.two');

 two.addEventListener('click', function(){
     cursor.value = '2'
 })

 let three = document.querySelector('.three');

 three.addEventListener('click', function(){
     cursor.value = '3'
 })