
let Button = document.querySelector('button');
let mobileMenu = document.querySelector('.mobile_menu');
let body = document.querySelector('body');

    Button.addEventListener('click', function(){
    mobileMenu.classList.toggle('mobile_menu_active');
    Button.classList.toggle('button-close');
    body.classList.toggle('no-scroll');
})



let nav = document.querySelector('.nav');

    nav.addEventListener('click', function(){
    window.scrollTo(0, 800)
})

let cursor = document.querySelector('.cursor')
let start = document.querySelector('.start');

start.addEventListener('click', function(){
    cursor.value = '0'
    window.scrollTo(0, 0);
    
})

let one = document.querySelector('.one');

    one.addEventListener('click', function(){
    cursor.value = '1'
    window.scrollTo(0, 1000);
    
});


let two = document.querySelector('.two');

    two.addEventListener('click', function(){
    cursor.value = '2'
    window.scrollTo(0, 1850)
})


let three = document.querySelector('.three');
   
    three.addEventListener('click', function(){
    cursor.value = '3'
    window.scrollTo(0, 2750)
})




