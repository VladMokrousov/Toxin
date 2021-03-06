'use strict';
(function(){
//Этот модуль описывает логику добавления/удаления условий
var middlePartCenter = document.querySelector('.middle-part__center');
var inputField = middlePartCenter.querySelector('.input--expanded--open');
var nameItem = middlePartCenter.querySelectorAll('.expanded-part__name-item');
var countItem = middlePartCenter.querySelectorAll('.expanded-part__number-text');
var btnDecrease = middlePartCenter.querySelectorAll('.expanded-part__control-btn--decrease');
var btnIncrease  = middlePartCenter.querySelectorAll('.expanded-part__control-btn--increase');
var applyBtn = middlePartCenter.querySelector('.expanded-part__apply-btn');




//Написал то, что происходит по клику на inputField, чтобы быть независимым от количества item и не писать эту колбасу:  inputField.value = countItem[0].textContent + ' ' + nameItem[0].textContent + ", " + countItem[1].textContent + ' ' + nameItem[1].textContent + ", " + countItem[2].textContent + ' ' + nameItem[2].textContent;
inputField.addEventListener('click',function(){
 
  inputField.value = 0;
  for(let i = 0; i < countItem.length; i++){
    if(i == countItem.length - 1){
      inputField.value = Number(inputField.value) + Number(countItem[i].textContent) + ' ' + 'гостя';
    }
    else{
      inputField.value = Number(inputField.value) + Number(countItem[i].textContent);
    }
    
  }
  
});

//Завожу такие переменные как changeItemOld для того, чтобы обновлять в инпуте только конкретный item, а не все 
for(let i = 0; i < btnIncrease.length; i++){
  btnIncrease[i].addEventListener('click', function(){
    if(btnDecrease[i].classList.contains('expanded-part__control-btn--disabled')){
      btnDecrease[i].classList.remove('expanded-part__control-btn--disabled');
    }
    countItem[i].textContent = Number(countItem[i].textContent) + 1;
   
  });
}
for(let i = 0; i < btnDecrease.length; i++){
  btnDecrease[i].addEventListener('click', function(){
   
    if(countItem[i].textContent == 0){

    }
    else{
      countItem[i].textContent = Number(countItem[i].textContent) - 1;
     
      if(countItem[i].textContent == 0){
      btnDecrease[i].classList.add('expanded-part__control-btn--disabled');
      }
      
    }
    
  });
}

applyBtn.addEventListener('click',function(){
  inputField.value = 0;
  for(let i = 0; i < countItem.length; i++){
    if(i == countItem.length - 1){
      inputField.value = Number(inputField.value) + Number(countItem[i].textContent) + ' ' + 'гостя';
   
    }
    else{
      inputField.value = Number(inputField.value) + Number(countItem[i].textContent);
      
    }
    
  }
  
});

})();