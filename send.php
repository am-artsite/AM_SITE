<?php
$message = $_POST['message'];
$message = htmlspecialchars($message);
$message = urldecode($message);
$message = trim($message);

echo $message;

mail("to_am@rambler.ru", "Сообщение с сайта", "Нам пишут, что ".$message ,"From: info@manuylovich.ru \r\n");

// Вместо example@mail.ru должен быть email адрес на который нужно отправить письмо,
// а вместо example2@mail.ru должен быть существующий email данного сайта. 

if (mail("to_am@rambler.ru", "Сообщение с сайта", "Нам пишут, что ".$message ,"From: info@manuylovich.ru \r\n"))
 {     echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>