export default (cards) => {

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

  let imgNum = [];
  for (let i = 0; i < cardsRoom.length; i++) {
    imgNum.push(0);
  }

  cardsRoom.forEach(function (item, index, array) {
    item.addEventListener('click', function (evt) {
      if (evt.target == cardArrowsPrev) {
        imgNum[index] = (imgNum[index] == 0) ? 0 : imgNum[index] - 1;
      } else if (evt.target == cardArrowsNext) {
        imgNum[index] = (imgNum[index] == 3) ? 3 : imgNum[index] + 1;
      }

      cardImgs[index].setAttribute('src', cards[index].img[imgNum[index]]);
      let currentCardDots = cardsRoom[index].querySelectorAll('.card__slider-dot');
      currentCardDots.forEach(function (item, index, array) {
        item.classList.remove('card__slider-dot--active');
      });
      currentCardDots[imgNum[index]].classList.add('card__slider-dot--active');

    });
  });

  cardSliderDots.forEach(function (item, index, array) {

    item.addEventListener('click', function () {

      let cardIndex = Math.floor(index / 4);
      let indexClickedDot = index - (4 * cardIndex);
      imgNum[cardIndex] = indexClickedDot;

      cardImgs[cardIndex].setAttribute('src', cards[cardIndex].img[indexClickedDot]);

      let currentCardDots = cardsRoom[cardIndex].querySelectorAll('.card__slider-dot');
      currentCardDots.forEach(function (item, index, array) {
        item.classList.remove('card__slider-dot--active');
      });
      currentCardDots[indexClickedDot].classList.add('card__slider-dot--active');

    });
  });

}
