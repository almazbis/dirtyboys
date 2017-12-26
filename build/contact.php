<?php

// Blank message to start with so we can append to it.
$message = '';

// Check that name & email aren't empty.
if( empty($_POST['formcontactmethod']) ){
    die('notfilled');
}

$formcontactmethod = $_POST['formcontactmethod'];
$formmessage = $_POST['formmessage'];

$message .= "<html><body>";
$message .= "<b>Способ связи:</b> " . $formcontactmethod . "<br />";
$message .= "<b>Сообщение:</b> " . $formmessage;
$message .= "</body></html>";

$to = 'mail@indimedia.ru';

$subject = 'Заявка с формы на сайте';

$from = 'Форма на сайте';

$fromEmail = 'contactform@indimedia.ru';

$header = 'MIME-Version: 1.0' . "\r\n";  
$header .= 'Content-type: text/html; charset=utf-8' . "\r\n";  

$header .= "From:" . $fromEmail . "\r\n" .  
       "Reply-To: order \r\n" .  
       "X-Mailer: PHP/" . phpversion(); 


// Try sending the email
if( !mail($to, $subject, $message, $header) ){
    die('fail');
} else {
    die('success');
}