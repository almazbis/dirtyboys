<?php

include('connect.php');
file_get_contents($lazy_api . 'setWebhook?url=https://indimedia.ru/bots/lazy.php');
echo 'ok';
