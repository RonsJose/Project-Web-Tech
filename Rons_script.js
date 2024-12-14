//Popup

function openPopUpLegends(){
    document.getElementById("PopUpLegends").style.display = "flex";
}

function closePopUpLegends(){
    document.getElementById("PopUpLegends").style.display = "none";
}

function openPopUpDungeons(){
    document.getElementById("PopUpDungeons").style.display = "flex";
}

function closePopUpDungeons(){
    document.getElementById("PopUpDungeons").style.display = "none";
}

function openPopUpJavaBedrock(){
    document.getElementById("PopUpJavaBedrock").style.display = "flex";
}

function closePopUpJavaBedrock(){
    document.getElementById("PopUpJavaBedrock").style.display = "none";
}

//Slideshow

const slideshow = document.querySelector('#Banner_slideshow');
const slides = document.querySelectorAll('#Banner_slideshow img');

var currentIndex = 0; 
const totalSlides = slides.length;


function updateSlide() {
  const offset = -currentIndex * 100; 
  Banner_slideshow.style.transform = `translateX(${offset}%)`;
}


function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; 
  updateSlide();
}

setInterval(nextSlide, 3000); 