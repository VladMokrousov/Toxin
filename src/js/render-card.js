export default (data) => {
  const placeToInsert = document.querySelector(".card-wrapper");
  const templateCard = `
  <section class="card--room">
    <h2 class="visually-hidden">Карточка номера</h2>
    <div class="card__wrapper--img">
      <a href="https://vladmokrousov.github.io/Toxin/dist/room-details.html">
        <img class="card__img" src=${data.img[0]} width="270" height="151" alt="Карточка номера" />
      </a>
      <div class="card__shadow-for-img card__shadow-for-img--left" ${data.withArrows == "yes" ? '' : `style="display: none;"`}></div>
      <div class="card__shadow-for-img card__shadow-for-img--right" ${data.withArrows == "yes" ? '' : `style="display: none;"`}></div>
      <div class="card__arrow-for-slider card__arrow-for-slider--prev" ${data.withArrows == "yes" ? '' : `style="display: none;"`}></div>
      <div class="card__arrow-for-slider card__arrow-for-slider--next" ${data.withArrows == "yes" ? '' : `style="display: none;"`}></div>
      <div class="card__wrapper--slider-dots">
        <span class="card__slider-dot card__slider-dot--active"></span>
        <span class="card__slider-dot"></span>
        <span class="card__slider-dot"></span>
        <span class="card__slider-dot"></span>
      </div>
    </div>
    <div class="card__wrapper--number-description">
      <div class="content-wrapper--flex-with-justify content-wrapper--20">
        <div class="just-wrapper">
          <span class="card__title--number">№ <b class="card__description--number card__title--number card__title--number-strong">${data.number} </b></span>
          <span class="card__title--room-type" ${data.isLux == "yes" ? '' : `style="display: none;"`}>Люкс</span>
        </div>
        <span class="card__description--price-per-day card__title--price-per-day"><b class="card__title--price-per-day-strong">${data.pricePerDay}₽ </b>в сутки </span>
      </div>
      <div class="card__wrapper--rate content-wrapper--flex-with-justify">
        <div class="rate-buttons">
          <form action="">
            <input class="visually-hidden rate-buttons__input rate-buttons__input--5" type="radio" id="star-5-${data.number}" name="star" ${data.starCount == 5 ? `checked="checked"` : ""} />
            <label class="rate-buttons__rate rate-buttons__rate--5" for="star-5-${data.number}"></label>
            <input class="visually-hidden rate-buttons__input rate-buttons__input--4" type="radio" id="star-4-${data.number}" name="star" ${data.starCount == 4 ? `checked="checked"` : ""} />
            <label class="rate-buttons__rate rate-buttons__rate--4" for="star-4-${data.number}"></label>
            <input class="visually-hidden rate-buttons__input rate-buttons__input--3" type="radio" id="star-3-${data.number}" name="star" ${data.starCount == 3 ? `checked="checked"` : ""} />
            <label class="rate-buttons__rate rate-buttons__rate--3" for="star-3-${data.number}"></label>
            <input class="visually-hidden rate-buttons__input rate-buttons__input--2" type="radio" id="star-2-${data.number}" name="star" ${data.starCount == 2 ? `checked="checked"` : ""} />
            <label class="rate-buttons__rate rate-buttons__rate--2" for="star-2-${data.number}"></label>
            <input class="visually-hidden rate-buttons__input rate-buttons__input--1" type="radio" id="star-1-${data.number}" name="star" ${data.starCount == 1 ? `checked="checked"` : ""} />
            <label class="rate-buttons__rate rate-buttons__rate--1" for="star-1-${data.number}"></label>
          </form>
        </div>
        <span class="card__description--reviews"><b class="card__description--reviews-strong">${data.reviewCount} </b>Отзывов</span>
      </div>
    </div>
  </section>
        `;

  placeToInsert.insertAdjacentHTML("beforeend", templateCard);

};