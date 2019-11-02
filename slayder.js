var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);
var notRegister = 0;
function nextSlide() {
 slides[currentSlide].className = 'slide';
 currentSlide = (currentSlide+1)%slides.length;
 slides[currentSlide].className = 'slide showing';
}
if(notRegister<=0){
  alert("Вы первый посетитель")
}
else{
  console.log("#")
}
