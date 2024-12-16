
function navMenuGoDown (){
// Выбираем элементы
const mainElement = document.querySelector('header.header');
const nav2Element = document.querySelector('.nav2');

// Флаг для отслеживания состояния
let isNav2Active = false;

// Функция для проверки состояния блока main
function handleMainVisibility() {
	const bounding = mainElement.getBoundingClientRect();

	// Если блок main пропал из зоны видимости
	if (bounding.bottom < 6 && !isNav2Active) {
			nav2Element.classList.add('active'); // Добавляем класс для выезда
			isNav2Active = true; // Обновляем флаг
	} 
	// Если блок main снова появился
	else if (bounding.bottom >= 6 && isNav2Active) {
			nav2Element.classList.remove('active'); // Убираем класс
			isNav2Active = false; // Обновляем флаг
	}
}

// Отслеживаем скроллинг
window.addEventListener('scroll', handleMainVisibility);

// Проверяем состояние при загрузке страницы
handleMainVisibility();
}

function BurgerOnClick() {
  const burgers = document.querySelectorAll('.burger-button');
  const mobileNavMenu = document.querySelector('.mobile-nav-menu');
  const burgerButtons = document.querySelectorAll('.burger');

  burgers.forEach((burger) => {
    burger.addEventListener('click', function () {
      if (mobileNavMenu.classList.contains('active')) {
        mobileNavMenu.classList.remove('active');
        burgerButtons.forEach(btn => btn.classList.remove('active'));
        document.body.classList.remove('no-scroll'); // Увімкнути прокручування
      } else {
        mobileNavMenu.classList.add('active');
        burgerButtons.forEach(btn => btn.classList.add('active'));
        document.body.classList.add('no-scroll'); // Заблокувати прокручування
      }
    });
  });
}

function Burger2OnClick() {
  const burgers2 = document.querySelectorAll('.burger2-button');
  const mobileNavMenu = document.querySelector('.mobile-nav-menu');
  const burgerButtons2 = document.querySelectorAll('.burger');

  burgers2.forEach((burger2) => {
    burger2.addEventListener('click', function () {
      if (mobileNavMenu.classList.contains('active')) {
        mobileNavMenu.classList.remove('active');
        burgerButtons2.forEach(btn => btn.classList.remove('active'));
        document.body.classList.remove('no-scroll'); // Увімкнути прокручування
      } else {
        mobileNavMenu.classList.add('active');
        burgerButtons2.forEach(btn => btn.classList.add('active'));
        document.body.classList.add('no-scroll'); // Заблокувати прокручування
      }
    });
  });
}

navMenuGoDown()
BurgerOnClick()
Burger2OnClick()
