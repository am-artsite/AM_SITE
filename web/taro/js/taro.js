var numberOfCards = 22; // Количество карт в колоде
var resultsArray = [0]; // Массив с номерами перетасованных карт

// Прячем все блоки c текстом
for(var i = 1 ; i <= numberOfCards ; i++) {
    var textBlockVisibility;
    var iToString = i.toString();
    var textBlockVisibility = '.text_block_visibility_' + iToString;
    gameOverHref = document.querySelector(textBlockVisibility);
    gameOverHref.style.display = 'none';
}

// Функция, создающая массив с номерами перетасованных карт
function shuffle() {
  for(var i = 0 ; i < numberOfCards ; i++) {
      var randomNumber22 = Math.floor(Math.random() * numberOfCards + 1);
      for(var j = 0 ; j <= i ; j++) {
          if (resultsArray[j] == randomNumber22) {
          randomNumber22 = Math.floor(Math.random() * numberOfCards + 1);
          j = 0;
          }
      }
      resultsArray.push(randomNumber22);
  }  
  resultsArray.shift();
}

shuffle();  // Запуская функцию, тасуем колоду
            // Переменная, связанная с кнопкой "Возьми карту!"
var takeCard = document.querySelector('.take_card');
            // Переменная с URL изображения карты. Вначале - "рубашка" карты
var picture = 'url("img/0.jpg")';
            // В класс .pic размещаем свойство backgroundImage
            // где фоном является изображение карты 
document.querySelector('.pic').style.backgroundImage = picture;
            // При нажатии на кнопку "Возьми карту!" запускаем функицю show()            
takeCard.addEventListener('click', show);
            // Переменная с именем класса, который управляет появлением текста            
var text_visibility = '.text_block_visibility_1';
            // Переменная управляющая свойством display none/block в этом классе
var text;
            // Переменная управляющая исчезновением кнопки "Взять карту!"
var gameOver;
            // Переменная управляющая повлением ссылки, начинающей все заново
var gameOverHref;

var k = -1; // Устанавливаем счетчик

// Функция, осуществляющая выдачу карт из перетасованной колоды
function show() {
  k++;                                  // Добавляем к счетчику карт единицу
  var number = resultsArray[k];         // Получаем номер новой карты из массива
  var numberText = number.toString();   // и превращаем его в строку

  text = document.querySelector(text_visibility); 
  text.style.display = 'none';          // Делаем предудущий текст невидимым
            // Формируем путь к соответвующему файлу изображения карты
  var picUr = 'url("img/' + numberText + '.jpg")';
            // Выводим изображение карты на экран
  document.querySelector('.pic').style.backgroundImage = picUr;
            // Формируем имя класса, управляющего появлением текста 
  text_visibility = '.text_block_visibility_' + numberText;
            // Делаем соответсвующий текст видимым
  text = document.querySelector(text_visibility);
  text.style.display = 'block';
            // Проверяем, не кончились ли карты
  if(k > numberOfCards - 2) {
    k = - 1;    // Начинаем считать заново
    shuffle();  // Тасуем колоду
    gameOver = document.querySelector('.bottom_position'); // Прячем кнопку
    gameOver.style.display = 'none';
    gameOverHref = document.querySelector('.game_over'); // Заменяем её на ссылку
    gameOverHref.style.display = 'block';
    }
}