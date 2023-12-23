function toggleAccordion(element) {
  var item = element.closest('.steps__item');
  var description = item.querySelector('.steps__description-wrapper');
  var icon = element.querySelector('.steps__status-icon');
  
  // Переключение класса is-open для элемента item
  item.classList.toggle('is-open');
  
  // Переключение отображения описания
  if (item.classList.contains('is-open')) {
    description.style.maxHeight = description.scrollHeight + "px";
    // Добавляем класс is-active, если аккордеон открывается
    element.classList.add('is-active');
  } else {
    description.style.maxHeight = null;
    // Убираем класс is-active, если аккордеон закрывается
    element.classList.remove('is-active');
  }
  
  // Переключение иконки
  if (icon) {
    icon.classList.toggle('is-active');
  }
}

var mySwiper = new Swiper('.mySwiper', {
  // Параметры слайдера
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true, // Включение бесконечной прокрутки
  pagination: {
    type: 'bullets',
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      // Просто кастомный вид для дотсов без номеров
      return '<span class="' + className + '"></span>';
    }
  },
  // Отключение стандартных стрелок
  navigation: false,
  keyboard: {
    enabled: true,
  },
  // Включение управления мышью
  simulateTouch: true,
  // Управление свайпом на сенсорных устройствах
  touchRatio: 1,
});








