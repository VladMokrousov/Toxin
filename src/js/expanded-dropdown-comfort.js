'use strict';
(function(){
//Этот модуль описывает логику добавления/удаления условий
var middlePartLeft = document.querySelector('.middle-part__left');
var inputField = middlePartLeft.querySelector('.input--expanded--open');
var nameItem = middlePartLeft.querySelectorAll('.expanded-part__name-item');
var countItem = middlePartLeft.querySelectorAll('.expanded-part__number-text');
var btnDecrease = middlePartLeft.querySelectorAll('.expanded-part__control-btn--decrease');
var btnIncrease  = middlePartLeft.querySelectorAll('.expanded-part__control-btn--increase');




//Написал то, что происходит по клику на inputField, чтобы быть независимым от количества item и не писать эту колбасу:  inputField.value = countItem[0].textContent + ' ' + nameItem[0].textContent + ", " + countItem[1].textContent + ' ' + nameItem[1].textContent + ", " + countItem[2].textContent + ' ' + nameItem[2].textContent;
inputField.addEventListener('click',function(){
  inputField.value = "";
  for(let i = 0; i < countItem.length; i++){
    if(i == countItem.length - 1){
      inputField.value = inputField.value + countItem[i].textContent + ' ' + nameItem[i].textContent;
    }
    else{
      inputField.value = inputField.value + countItem[i].textContent + ' ' + nameItem[i].textContent + ", ";
    }
    
  }
  
});

//Завожу такие переменные как changeItemOld для того, чтобы обновлять в инпуте только конкретный item, а не все 
for(let i = 0; i < btnIncrease.length; i++){
  btnIncrease[i].addEventListener('click', function(){
    if(btnDecrease[i].classList.contains('expanded-part__control-btn--disabled')){
      btnDecrease[i].classList.remove('expanded-part__control-btn--disabled');
    }
    var changeItemOld = countItem[i].textContent + " " + nameItem[i].textContent;
    
    countItem[i].textContent = Number(countItem[i].textContent) + 1;
    var changeItemNew = countItem[i].textContent + " " + nameItem[i].textContent;
    
    var str = inputField.value.replace(changeItemOld, changeItemNew);
    inputField.value = str;
  });
}
for(let i = 0; i < btnDecrease.length; i++){
  btnDecrease[i].addEventListener('click', function(){
   
    if(countItem[i].textContent == 0){

    }
    else{
      var changeItemOld = countItem[i].textContent + " " + nameItem[i].textContent;
      countItem[i].textContent = Number(countItem[i].textContent) - 1;
      var changeItemNew = countItem[i].textContent + " " + nameItem[i].textContent;
      var str = inputField.value.replace(changeItemOld, changeItemNew);
      inputField.value = str;
      if(countItem[i].textContent == 0){
      btnDecrease[i].classList.add('expanded-part__control-btn--disabled');
      }
      
    }
    
  });
}



})();