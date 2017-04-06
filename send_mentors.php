<?php

$name = $_POST['name'];
$name = htmlspecialchars($name);
$name = urldecode($name);
$name = trim($name);

$email = $_POST['email'];
$email = htmlspecialchars($email);
$email = urldecode($email);
$email = trim($email);

$phone = $_POST['phone'];
$phone = htmlspecialchars($phone);
$phone = urldecode($phone);
$phone = trim($phone);


if (mail("hello@gagarin.dp.ua", "Заявка на ментора", "Имя: ".$name. "\nE-mail: ".$email "\nТелефон: ".$phone , "From: hello@gagarin.dp.ua \r\n"))
	{	echo "Сообщение отправлено, все хорошо!";  
		header("Location: ./send_cours.php");
	} else { 
		echo "при отправке сообщения возникли ошибки";
	}


?>
