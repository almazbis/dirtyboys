<?php

ini_set('display_errors', 1);
ini_set('track_errors', 1);
ini_set('html_errors', 1);
error_reporting(E_ALL);

include('libs/Telegram.php');
include('libs/TelegramMethods.php');

$lazy_token = '331628561:AAFggYOozTpXJEoaD8g5XnaLrfaY4L1VkiY'; // Сюда токен от @BotFather
$lazy_api = 'https://api.telegram.org/bot' . $lazy_token . '/';
$lazy = new Telegram($lazy_token);

$tgids = [53540040, 204312036];
$emails = ['seibel.stan@ya.ru', 'vasa300p@mail.ru'];

// Запустите из браузера https://вашсайт/bots/init.php для инита бота