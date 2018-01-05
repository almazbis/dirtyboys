<?php

include('bots/connect.php');

$contact = $_REQUEST['formcontactmethod'];
$text = $_REQUEST['formmessage'];

if($text && $contact) {
    $tgText = "Контакт: $contact\n" .
        "Сообщение: " . $text;

    foreach($tgids as $tgid) {
        $lazy->sendMessage([
            'chat_id' => $tgid,
            'text' => $tgText,
            'parse_mode' => 'Markdown'
        ]);
    }
    echo 1;
}
else {
    echo 0;
}