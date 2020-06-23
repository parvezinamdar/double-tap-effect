const backgroundImage = document.getElementById('instagram-image');
const instaImage = document.querySelector('.insta-image');
const like = document.querySelector('.like');

let tapedTwice = false;
let heartOpen = false;

backgroundImage.addEventListener("click" , tapHandler);
backgroundImage.addEventListener("touchstart" , tapHandler);

function tapHandler(event) {
    if(!tapedTwice){
        tapedTwice = true;
        setTimeout(function(){tapedTwice = false;}, 300);
        return false;
    }
    event.preventDefault();
    if(!heartOpen) {
        instaImage.classList.add('open');
        like.classList.add('heart');
        heartOpen = true;
        setTimeout(function(){
            heartOpen = false;
            instaImage.classList.remove('open');
        }, 400);

    }
   
}


$(document).ready(function(){
    $(".like").click(function(){
        $(this).toggleClass("heart");
    })
});