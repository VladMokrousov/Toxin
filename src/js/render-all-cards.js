import load from "./load.js";
import renderCard from "./render-card.js";
import slideCardImg from "./slider-for-rooms.js";

export default () => {

  const successHandler = (data) => {
    for (let i = 0; i < data.length; i++) {
      renderCard(data[i]);
    }
    slideCardImg(data);
  };

  const errorHandler = function (errorMessage) {

    const node = document.createElement('div');
    node.style = "z-index: 100; margin: 0 auto; text-align: center; background-color: red;";
    node.style.position = "absolute";
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  load(successHandler, errorHandler);

};