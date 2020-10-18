export default () => {

  //Этот модуль описывает логику добавления/удаления условий
  const label = document.querySelector('.label--room-fasilities');
  const inputField = document.querySelector('.input--room-fasilities');
  const expandedPart = document.querySelector('.expanded-part--room-fasilities');
  const nameItem = document.querySelectorAll('.expanded-part__name-item--room-fasilities');
  const countItem = document.querySelectorAll('.expanded-part__number-text--room-fasilities');
  const btnDecrease = document.querySelectorAll('.expanded-part__control-btn--decrease--room-fasilities');
  const btnIncrease = document.querySelectorAll('.expanded-part__control-btn--increase--room-fasilities');
  const SHOWED_ITEM = 2;

  inputField.addEventListener('click', function () {

    if (expandedPart.classList.contains('expanded-part--hidden')) {
      inputField.classList.add('input--hover-focus');
      expandedPart.classList.remove('expanded-part--hidden');

      //Написал то, что происходит по клику на inputField, чтобы быть независимым от количества item и не писать эту колбасу:  inputField.value = countItem[0].textContent + ' ' + nameItem[0].textContent + ", " + countItem[1].textContent + ' ' + nameItem[1].textContent + ", " + countItem[2].textContent + ' ' + nameItem[2].textContent;
      inputField.value = "";
      for (let i = 0; i < SHOWED_ITEM; i++) {
        if (i == SHOWED_ITEM - 1) {
          inputField.value = `${inputField.value}${countItem[i].textContent} ${nameItem[i].textContent}...`;
        } else {
          inputField.value = `${inputField.value}${countItem[i].textContent} ${nameItem[i].textContent}, `;
        }

      }
    } else {
      inputField.classList.remove('input--hover-focus');
      expandedPart.classList.add('expanded-part--hidden');
    }
  });


  //Завожу такие переменные как changeItemOld для того, чтобы обновлять в инпуте только конкретный item, а не все 
  for (let i = 0; i < btnIncrease.length; i++) {

    const increaseCount = () => {
      if (btnDecrease[i].classList.contains('expanded-part__control-btn--disabled')) {
        btnDecrease[i].classList.remove('expanded-part__control-btn--disabled');
      }
      let changeItemOld = `${countItem[i].textContent} ${nameItem[i].textContent}`;
      countItem[i].textContent = Number(countItem[i].textContent) + 1;
      let changeItemNew = `${countItem[i].textContent} ${nameItem[i].textContent}`;
      let str = inputField.value.replace(changeItemOld, changeItemNew);
      inputField.value = str;

    }

    btnIncrease[i].addEventListener('click', increaseCount);
  }

  for (let i = 0; i < btnDecrease.length; i++) {
    const decreaseCount = () => {
      if (countItem[i].textContent != 0) {
        let changeItemOld = `${countItem[i].textContent} ${nameItem[i].textContent}`;
        countItem[i].textContent = Number(countItem[i].textContent) - 1;
        let changeItemNew = `${countItem[i].textContent} ${nameItem[i].textContent}`;
        let str = inputField.value.replace(changeItemOld, changeItemNew);
        inputField.value = str;
        if (countItem[i].textContent == 0) {
          btnDecrease[i].classList.add('expanded-part__control-btn--disabled');
        }
      }
    }
    btnDecrease[i].addEventListener('click', decreaseCount);
  }


};