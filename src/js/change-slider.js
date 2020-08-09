"use strict";
(function(){
//Этот модуль описывает взаимодействие с ползунком

var sliderRangeValue = document.querySelector('.slider-with-range__value'),
sliderLine = document.querySelector('.slider-with-range__line'),
sliderDotMin = document.querySelector('.slider-with-range__pin--min-value'),
sliderDotMax = document.querySelector('.slider-with-range__pin--max-value'),
sliderRange = document.querySelector('.slider-with-range__range'),
sliderLineWidth = sliderLine.offsetWidth,
minDistanceBetweenDots = 15,
maxSliderValue = 16420;

//Для первого хэндлера
sliderDotMin.addEventListener('mousedown', function(evt){
  evt.preventDefault();

var x = evt.clientX;


var onMouseMove = function(moveEvt) {
  moveEvt.preventDefault();

  var shiftX = x - moveEvt.clientX;
  x = moveEvt.clientX;


if(sliderDotMin.offsetLeft - shiftX < 0){
  sliderDotMin.style.left = 0;
  sliderRange.style.left = 0;
 
  sliderRange.style.right = sliderLineWidth - sliderDotMax.offsetLeft + 'px';

  sliderRangeValue.value = 0 + ' - ' + Math.round(String(sliderDotMax.offsetLeft*100/sliderLineWidth) * maxSliderValue / 100) + '₽';
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}

else if ( sliderDotMin.offsetLeft - shiftX >= sliderDotMax.offsetLeft - minDistanceBetweenDots){
  sliderDotMin.style.left = (sliderDotMax.offsetLeft - minDistanceBetweenDots) + 'px';
  sliderRange.style.left = (sliderDotMax.offsetLeft - minDistanceBetweenDots) + 'px';
  sliderRange.style.right = sliderLineWidth - sliderDotMax.offsetLeft + 'px';
  sliderRangeValue.value = Math.round(String(sliderDotMin.offsetLeft*100/sliderLineWidth) * maxSliderValue / 100) + '₽ - ' + Math.round(String(sliderDotMax.offsetLeft*100/sliderLineWidth) * maxSliderValue / 100) + '₽';
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

else {
  sliderDotMin.style.left = (sliderDotMin.offsetLeft - shiftX) + 'px';
  sliderRange.style.left = sliderDotMin.offsetLeft + 'px'; //Потому что значение sliderDotMin.offsetLeft уже поменялось
  sliderRange.style.right = sliderLineWidth - sliderDotMax.offsetLeft + 'px';
 
  sliderRangeValue.value = Math.round(String(sliderDotMin.offsetLeft*100/sliderLineWidth) * maxSliderValue / 100) + '₽ - ' + Math.round(String(sliderDotMax.offsetLeft*100/sliderLineWidth) * maxSliderValue / 100) + '₽';
}
};

var onMouseUp = function(upEvt) {
  upEvt.preventDefault();
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);

};
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);

});


//Для второго хэндлера
sliderDotMax.addEventListener('mousedown', function(evt){
  evt.preventDefault();

var x = evt.clientX;

var onMouseMove = function(moveEvt) {
  moveEvt.preventDefault();

  var shiftX = x - moveEvt.clientX;
  x = moveEvt.clientX;

if (sliderDotMax.offsetLeft - shiftX > sliderLineWidth) {
  sliderDotMax.style.left = sliderLineWidth + 'px';
  sliderRange.style.right = 0;
  sliderRange.style.left = sliderDotMin.offsetLeft + 'px';
  
  sliderRangeValue.value = Math.round(String(sliderDotMin.offsetLeft*100/sliderLineWidth) * maxSliderValue / 100) + '₽ - ' + maxSliderValue + '₽';
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}
else if(sliderDotMax.offsetLeft - shiftX <= sliderDotMin.offsetLeft + minDistanceBetweenDots){
  sliderDotMax.style.left = (sliderDotMin.offsetLeft + minDistanceBetweenDots) + 'px';
  sliderRange.style.left = sliderDotMin.offsetLeft + 'px';
  sliderRange.style.right = sliderLineWidth - sliderDotMax.offsetLeft + 'px';
  sliderRangeValue.value = Math.round(String(sliderDotMin.offsetLeft*100/sliderLineWidth) * maxSliderValue / 100) + '₽ - ' + Math.round(String(sliderDotMax.offsetLeft*100/sliderLineWidth) * maxSliderValue / 100) + '₽';
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}
else {
  sliderDotMax.style.left = (sliderDotMax.offsetLeft - shiftX) + 'px';
  sliderRange.style.left = sliderDotMin.offsetLeft + 'px';
  sliderRange.style.right = sliderLineWidth - sliderDotMax.offsetLeft + 'px';
  
  sliderRangeValue.value = Math.round(String(sliderDotMin.offsetLeft*100/sliderLineWidth) * maxSliderValue / 100) + '₽ - ' + Math.round(String(sliderDotMax.offsetLeft*100/sliderLineWidth) * maxSliderValue / 100) + '₽';
 
}
};

var onMouseUp = function(upEvt) {
  upEvt.preventDefault();
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);

};
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);

});

})();