"use strict";
(function () {
  //Модуль реализует функционал слайдера для карточек номеров отеля
  /*Думаю, что вариация с двойным циклом, один из которых foreach на cardSliderDot тоже сработала бы
  const cardSliderDot = [];
  for(let i = 0; i < cardsRoom.length; i++){
    cardSliderDot[i] = cardsRoom[i].querySelectorAll('.card__slider-dot');
  } */
  const cardsRoom = document.querySelectorAll('.card--room');
  const cardArrowsPrev = document.querySelector('.card__arrow-for-slider--prev');
  const cardArrowsNext = document.querySelector('.card__arrow-for-slider--next');
  const cardImgs = document.querySelectorAll('.card__img');
  const cardSliderDots = document.querySelectorAll('.card__slider-dot');
 


  var successHandler = function (cards) {
  
    let imgNum = [];
    for(let i=0; i<cardsRoom.length; i++){
      imgNum.push(0);
    }
   
   for(let i = 0; i < cardImgs.length; i++ ){
      cardImgs[i].setAttribute('src', cards[i].img[0]); 
    }

    cardsRoom.forEach(function(item, index, array){
      item.addEventListener('click', function(evt){
        if(evt.target==cardArrowsPrev){
          imgNum[index] = (imgNum[index] == 0) ? 0 : imgNum[index] - 1;
          console.log(imgNum[index]);
          cardImgs[index].setAttribute('src', cards[index].img[imgNum[index]]);
          let currentCardDots = cardsRoom[index].querySelectorAll('.card__slider-dot');
          currentCardDots.forEach(function (item, index, array) {
            item.classList.remove('card__slider-dot--active');
          });
          currentCardDots[imgNum[index]].classList.add('card__slider-dot--active');

        }
        if(evt.target==cardArrowsNext){
          imgNum[index] = (imgNum[index] == 3) ? 3 : imgNum[index] + 1;
          cardImgs[index].setAttribute('src', cards[index].img[imgNum[index]]);

          let currentCardDots = cardsRoom[index].querySelectorAll('.card__slider-dot');
          currentCardDots.forEach(function (item, index, array) {
            item.classList.remove('card__slider-dot--active');
          });
          currentCardDots[imgNum[index]].classList.add('card__slider-dot--active');

        }
      });
    });

    cardSliderDots.forEach(function(item, index, array) {
     
      item.addEventListener('click', function(){
       
        let cardIndex = Math.floor(index/4);
        let indexClickedDot = index - (4 * cardIndex);
        imgNum[cardIndex] = indexClickedDot;
        console.log(imgNum[cardIndex]);
        cardImgs[cardIndex].setAttribute('src', cards[cardIndex].img[indexClickedDot]);
      
        let currentCardDots = cardsRoom[cardIndex].querySelectorAll('.card__slider-dot');
        currentCardDots.forEach(function (item, index, array) {
          item.classList.remove('card__slider-dot--active');
        });
        currentCardDots[indexClickedDot].classList.add('card__slider-dot--active');
    
      });
    });
   
    
  
  };


  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = "z-index: 100; margin: 0 auto; text-align: center; background-color: red;";
    node.style.position = "absolute";
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };


  window.load(successHandler, errorHandler);


})();