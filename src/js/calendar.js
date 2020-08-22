"use strict";
(function(){

 
  const Russian = require("flatpickr/dist/l10n/ru.js").default.ru;
  const confirmDatePlugin = require("flatpickr/dist/plugins/confirmDate/confirmDate.js");
  const rangePlugin = require("flatpickr/dist/plugins/rangePlugin.js");
  const flatpickr = require("flatpickr");
  flatpickr.localize(Russian);

  /*
  const fp = flatpickr("#arrival--booking", {
    dateFormat: "d.m.Y",
    mode: "range",
    defaultDate: ["19.08.2019", "23.08.2019"],
    minDate: "01.07.2019",
    "enableTime": true,
    "plugins": [new confirmDatePlugin({}), new rangePlugin({ input: "#exit--booking"})],
   
  });
 */
  const fpInline = flatpickr("#invisible-input", {
    inline: true,
    dateFormat: "d.m.Y",
    mode: "range",
    defaultDate: ["19.08.2019", "23.08.2019"],
    minDate: "01.07.2019",
    "enableTime": true,
    "plugins": [new confirmDatePlugin({})],
   
  });
  
 
  const selectMonths = document.querySelectorAll('.flatpickr-monthDropdown-months');
  selectMonths.forEach(function(item, index, array) {
    item.setAttribute('disabled', 'disabled');
  });

  const inputYear = document.querySelectorAll('.cur-year');
  inputYear.forEach(function(item, index, array) {
    item.setAttribute('readonly', 'readonly');
  });
  
  const arrowUpInputYear = document.querySelectorAll('.arrowUp');
  arrowUpInputYear.forEach(function(item, index, array) {
    item.classList.add('visually-hidden');
  });
  
  const arrowDownInputYear = document.querySelectorAll('.arrowDown');
  arrowDownInputYear.forEach(function(item, index, array) {
    item.classList.add('visually-hidden');
  });
 

  const arrowWrapperPrevMonth = document.querySelectorAll('.flatpickr-prev-month'); //!
  const svgArrowPrevMonth = document.querySelectorAll('.flatpickr-prev-month svg');
  svgArrowPrevMonth.forEach(function(item, index, array) {
    item.style.display = "none";
  });
  
  const arrowForPrevMonth = document.createElement("span"); 
  arrowForPrevMonth.classList.add("arrow--right");
  arrowForPrevMonth.style.transform = "rotate(180deg)";
  arrowWrapperPrevMonth.forEach(function(item, index, array) {
    const arrowForPrevMonthCopy = arrowForPrevMonth.cloneNode(true);
    item.appendChild(arrowForPrevMonthCopy);
  });
  

  const arrowWrapperNextMonth = document.querySelectorAll('.flatpickr-next-month'); //!
  const svgArrowNextMonth = document.querySelectorAll('.flatpickr-next-month svg');
  svgArrowNextMonth.forEach(function(item, index, array) {
    item.style.display = "none";
  });
 
  const arrowForNextMonth = document.createElement("span"); 
  arrowForNextMonth.classList.add("arrow--right");
  arrowWrapperNextMonth.forEach(function(item, index, array) {
    const arrowForNextMonthCopy = arrowForNextMonth.cloneNode(true);
    item.appendChild(arrowForNextMonthCopy);
  });
  

  const btnForFlatpickr = `
  <div class = "content-wrapper--flex-with-justify" style="margin-top:20px;">
    <button class = "btn--string btn--string-opacity calendar__btn--clear">очистить</button>
    <button class = "btn--string calendar__btn--apply">применить</button>
  </div>`;

  const calendar = document.querySelectorAll('.flatpickr-calendar');
 
  calendar.forEach(function(item, index, array) {
    item.insertAdjacentHTML('beforeend', btnForFlatpickr);
   
  });
 

  const btnClear = document.querySelectorAll('.calendar__btn--clear'); 
  const onBtnClearClick = function(){
    fpInline.clear(); 
  };
  btnClear.forEach(function(item, index, array) {
    item.addEventListener('click', onBtnClearClick);
  });

  
  const btnApply = document.querySelectorAll('.calendar__btn--apply'); 
  const onBtnApplyClick = function(){
    fpInline.close(); 
  };
  btnApply.forEach(function(item, index, array) {
    item.addEventListener('click', onBtnApplyClick);
  });
  

  const flatpickrTime = document.querySelector('.flatpickr-time');
  flatpickrTime.classList.add('visually-hidden');
  const standartConfirmBtn = document.querySelector('.flatpickr-confirm');
  standartConfirmBtn.classList.add('visually-hidden');

  
})();

