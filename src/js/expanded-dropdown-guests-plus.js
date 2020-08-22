/*Для кита

'use strict';
(function(){
//Этот модуль описывает логику добавления/удаления условий
var middlePartRight = document.querySelector('.middle-part__right');
var inputField = middlePartRight.querySelector('.input--expanded--open');
var nameItem = middlePartRight.querySelectorAll('.expanded-part__name-item');
var countItem = middlePartRight.querySelectorAll('.expanded-part__number-text');
var btnDecrease = middlePartRight.querySelectorAll('.expanded-part__control-btn--decrease');
var btnIncrease  = middlePartRight.querySelectorAll('.expanded-part__control-btn--increase');
var applyBtn = middlePartRight.querySelector('.expanded-part__apply-btn');
var cleanBtn = middlePartRight.querySelector('.expanded-part__clean-btn');




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
cleanBtn.addEventListener('click',function(){
  inputField.value = 'Нет гостей';
  for(let i = 0; i < countItem.length; i++){
   countItem[i].textContent = 0;
   btnDecrease[i].classList.add('expanded-part__control-btn--disabled');
  }
  
});

})();
*/



export default () => {

//Этот модуль описывает логику добавления/удаления условий
const label = document.querySelector('.label--with-dropdown-with-clean-btn');
const inputField = document.querySelector('.input--expanded-with-clean-btn');
const expandedPart = document.querySelector('.expanded-part--with-clean-btn');
const nameItem = document.querySelectorAll('.expanded-part__name-item--with-clean-btn');
const countItem = document.querySelectorAll('.expanded-part__number-text--with-clean-btn');
const btnDecrease = document.querySelectorAll('.expanded-part__control-btn--decrease-with-clean-btn');
const btnIncrease  = document.querySelectorAll('.expanded-part__control-btn--increase-with-clean-btn');
const applyBtn = document.querySelector('.expanded-part__apply-btn--with-clean-btn');
const cleanBtn = document.querySelector('.expanded-part__clean-btn--with-clean-btn');



//Написал то, что происходит по клику на inputField, чтобы быть независимым от количества item и не писать эту колбасу:  inputField.value = countItem[0].textContent + ' ' + nameItem[0].textContent + ", " + countItem[1].textContent + ' ' + nameItem[1].textContent + ", " + countItem[2].textContent + ' ' + nameItem[2].textContent;
inputField.addEventListener('click',function(){

  inputField.classList.add('input--hover-focus', 'input--expanded-open');
  label.classList.add('label--with-expanded');
  expandedPart.classList.remove('expanded-part--hidden');
 
  
  inputField.value = 0;
  for(let i = 0; i < countItem.length; i++){
    if(i == countItem.length - 1){
      if(Number(inputField.value) + Number(countItem[i].textContent) == 0){
        inputField.value = 'Нет гостей';
      }
      else{
        inputField.value = Number(inputField.value) + Number(countItem[i].textContent) + ' ' + 'гостя';
      }
      
    }
    else{
      inputField.value = Number(inputField.value) + Number(countItem[i].textContent);
    }
    
  }
  
});


for(let i = 0; i < btnIncrease.length; i++){
  btnIncrease[i].addEventListener('click', function(evt){
    evt.preventDefault();
    if(btnDecrease[i].classList.contains('expanded-part__control-btn--disabled')){
      btnDecrease[i].classList.remove('expanded-part__control-btn--disabled');
    }
    countItem[i].textContent = Number(countItem[i].textContent) + 1;
    if(inputField.value == 'Нет гостей'){
      inputField.value = `1 гость`;
    }
    else{
      inputField.value = `${Number((inputField.value).match(/\d/g).join('')) + 1} гостя`;
    }

   
  });
}
for(let i = 0; i < btnDecrease.length; i++){
  btnDecrease[i].addEventListener('click', function(evt){
    evt.preventDefault();
    if(countItem[i].textContent > 0){
      countItem[i].textContent = Number(countItem[i].textContent) - 1;
      inputField.value = `${Number((inputField.value).match(/\d/g).join('')) - 1} гостя`;
      if(countItem[i].textContent == 0){
        btnDecrease[i].classList.add('expanded-part__control-btn--disabled');
      }
    }
   
   
    
  });
}

applyBtn.addEventListener('click',function(evt){
  evt.preventDefault();

  inputField.classList.remove('input--hover-focus', 'input--expanded-open');
  label.classList.remove('label--with-expanded');
  expandedPart.classList.add('expanded-part--hidden');
  
});

cleanBtn.addEventListener('click',function(evt){
  evt.preventDefault();
  inputField.value = 'Нет гостей';
  for(let i = 0; i < countItem.length; i++){
   countItem[i].textContent = 0;
   btnDecrease[i].classList.add('expanded-part__control-btn--disabled');
  }
  
});
};

