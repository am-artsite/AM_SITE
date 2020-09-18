var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-200);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}

// Число -200 — это количество пикселей, 
// которое прокручивается вверх через каждые 0,02 секунды (число 20).