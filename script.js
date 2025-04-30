const playButton = document.querySelector("#play-button")

const videoPopup = document.querySelector("#video-popup")

const restaurantVideo = document.querySelector("#restaurantVideo")


// adding a event listener on play button
playButton.addEventListener('click', ()=>{
    videoPopup.style.display = 'flex';
    restaurantVideo.play();
})

// close video when outside clicked
videoPopup.addEventListener('click', ()=>{
    restaurantVideo.pause();
    restaurantVideo.currentTime = 0;
    videoPopup.style.display= 'none'
})

const navbar = document.querySelector(".navbar");

window.addEventListener('scroll', function(){
    if(this.window.scrollY >50){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})