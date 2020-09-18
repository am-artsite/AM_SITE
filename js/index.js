// Плавная прокрутка между блоками

var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');

    $('a').parents().removeClass("current");

    $(this).parent().addClass("current");
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});

// Залипание меню навигации при прокрутке

$(document).ready(function() {

    var $window = $(window); // Основное окно
    var $target = $("#nav"); // Блок, который нужно фиксировать при прокрутке
    var $h = $target.offset().top; // Определяем координаты верха блока которого надо фиксировать
   
    $window.on('scroll', function() {   
      // Как далеко вниз прокрутили страницу
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;   
      // Если прокрутили скролл ниже макушки нужного блока, включаем ему фиксацию
      if (scrollTop > $h) {   
        $target.addClass("sheensay_fixed");   
      // Иначе возвращаем всё назад
      } else {   
        $target.removeClass("sheensay_fixed");
      }
    });
   
});

// Залипание затемнения с картинкой при прокрутке

$(document).ready(function() {

  var $window = $(window); // Основное окно
  var $target = $("#pic"); // Блок, который нужно фиксировать при прокрутке
 
  $window.on('scroll', function() {   
    $target.addClass("sheensay_fixed"); // Включаем фиксацию
  });

});

// Увеличение картинки по клику

var overlay = document.querySelector('.overlay');
var cross = document.querySelector('.cross');
var pics = document.querySelectorAll('.img_common');
var bigpicname = document.querySelector('.bigpicname');

for (var i = 0; i < pics.length; i++) {
  pics[i].onclick = function(e) {
    var style = getComputedStyle(e.target);   // Получаем строку со всеми css-свойствами кликнутой картинки
    var backFullImg = style.backgroundImage;  // Записываем в backFullImg свойство URL кликнутой картинки

    // Проверяем не в IE ли мы:
    if (backFullImg !== "") {
      bigpicname.style.background = backFullImg;
      bigpicname.style.backgroundRepeat = 'no-repeat';
      bigpicname.style.backgroundPosition = 'center';
      bigpicname.style.backgroundSize = 'contain';
   } else {
      backFullImg = e.target.currentStyle.backgroundImage;
      bigpicname.style.background = backFullImg;
      bigpicname.style.backgroundRepeat = 'no-repeat';
      bigpicname.style.backgroundPosition = 'center';
      bigpicname.style.backgroundSize = 'contain';
   }

    overlay.style.display = 'block';
    overlay.style.animation = 'showBlock1 0.3s';
  }

  function removeoverlay() {
    overlay.style.display = 'none';
  }
  
  cross.onclick = function() {
    overlay.style.animation = 'showBlock2 0.3s linear forwards';
    setTimeout(removeoverlay, 300); // Чтобы успела проиграть анимация угасания
  }
}

// Переход от визитки на info
var vizitka = document.querySelector('.vizitka');
vizitka.onclick = function() {
  window.location.href = "menupages/info.html";
};
