export default (onLoad, onError) => {
  const URL_FOR_LOAD =
    "https://vladmokrousov.github.io/dataForTrainingProject/toxin-for-slider.json";

  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  xhr.addEventListener("load", function () {
    if (xhr.status == 200) {
      onLoad(xhr.response);
    } else {
      onError("Статус ответа: " + xhr.status + " " + xhr.statusText);
    }
  });

  xhr.addEventListener("error", function () {
    onError("Произошла ошибка соединения");
  });
  xhr.addEventListener("timeout", function () {
    onError("Запрос не успел выполниться за " + xhr.timeout + "мс");
  });

  xhr.timeout = 10000;
  xhr.open("GET", URL_FOR_LOAD);
  xhr.send();
};
