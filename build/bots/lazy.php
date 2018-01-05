<?php

include('connect.php');
set_time_limit(5);

$data = json_decode(file_get_contents('php://input'));

if(isset($data->callback_query)) {
	$message = $data->callback_query->message;
	$inline_data = $data->callback_query->data;
}
else {
	$message = $data->message;
}

$first_name = $message->from->first_name;
$chat_id = $message->chat->id;

$text = urldecode(trim($message->text));
$expltext = explode(' ', $text);

$service = preg_replace('/^(\S)/', '$1', $expltext[0]);

$params = [];
if(count($expltext) > 1) {
	for($i = 1; $i < count($expltext); $i++) {
		array_push($params, trim($expltext[$i]));
	}
}

switch(strtolower($service)) {

	default: {
		if(preg_match('/дайид/ui', $text)) {
			$response = $chat_id;
		}
		break;
	}

}

if(isset($response)) {
	$lazy->sendMessage([
		'chat_id' => $chat_id,
		'text' => $response,
		'parse_mode' => 'Markdown'
	]);
}