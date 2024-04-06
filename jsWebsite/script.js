const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation(){
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-img")
    elemC.addEventListener("mouseenter",function(){
        fixed.style.display = "block"
    })

    elemC.addEventListener("mouseleave",function(){
        fixed.style.display = "none";
    })

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`
            image.style.position = "cover"
        }) 
    })
}

function SwiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
}

function fullscr(){
var menu = document.querySelector("nav h3")
var fullscr = document.querySelector("#full-scr")
var img = document.querySelector("nav img")

var flag = 0;
menu.addEventListener("click",function(){
    if(flag == 0){
        fullscr.style.top = 0 
        img.style.opacity = 0;
        flag = 1;
    }else{
        fullscr.style.top = "-100%" 
        img.style.opacity = 1;
        flag = 0;
    }
    
})
}

var loader = document.querySelector("#loader")

setTimeout(function(){
    loader.style.top = "-100%"
},4000)

fullscr()
SwiperAnimation()
page4Animation()
