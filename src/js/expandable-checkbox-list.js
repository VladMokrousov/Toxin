'use strict';
(function(){
//Этот модуль описывает логику разворачивания/сворачивания списков

var label = document.querySelectorAll('.label--expandable-checkbox-list');
var list = document.querySelectorAll('.checkbox-list--expandable');

for(let i = 0; i < label.length; i++){
  label[i].addEventListener('click', function(){
    if(label[i].classList.contains('label--expandable-checkbox-list-open')){
      label[i].classList.remove('label--expandable-checkbox-list-open');
      list[i].classList.remove('checkbox-list--open');
      label[i].classList.add('label--expandable-checkbox-list-close');
      list[i].classList.add('checkbox-list--close');
    }
    else{
      label[i].classList.remove('label--expandable-checkbox-list-close');
      list[i].classList.remove('checkbox-list--close');
      label[i].classList.add('label--expandable-checkbox-list-open');
      list[i].classList.add('checkbox-list--open');
    }
  });
}



})();