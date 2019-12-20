console.log('Hello webpack 4');
require('./sass/main.scss');

var movie= document.getElementById("movie");
var leftBtn= document.getElementById("left-button");
var rightBtn= document.getElementById("right-button");
var sliderInner= movie.querySelector(".inner");
var sliderImages= movie.querySelectorAll(".containers__slider");

var index = 0;
var sliderOffset = 0;
var max = sliderImages.length;
console.log(max);
var sliderWidth = movie.clientWidth;

/*sliderInner.style.width = `${sliderWidth * max}px`;*/
sliderInner.style.left= `${sliderOffset}px`;


function leftmovie(index){
    sliderOffset = index  * sliderWidth * -1;
    sliderInner.style.left=`${sliderOffset}px`;
    console.log(index);
}

leftBtn.addEventListener("click",function(e){
    index =  index - 1 < 0 ? max - 1 : index - 1;
    leftmovie(index);
})

rightBtn.addEventListener("click",function(e){
    index = index + 1 > max - 1? 0 : index + 1;
    leftmovie(index);
})

//menu hamburguesa

var boxEl = document.querySelector(".header__nav");
var body = document.getElementById("body");
var icon = document.querySelector(".header-icon")
console.log(boxEl);
function hamburguer(e){
    body.classList.toggle("header__hamburguer");
    boxEl.classList.toggle("header__hamburguer");
    console.log('Hola');
}



icon.addEventListener('click',hamburguer);









