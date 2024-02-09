<?php
var_dump($_POST);


$stringaJSONPresaDalDB = file_get_contents('db.json');

$allGames = json_decode($stringaJSONPresaDalDB,true);

unset($allGames[$_POST['index']]);
$fixIndex = array_values($allGames);

$allGamesWithJSON = json_encode($allGames);

file_put_contents('db.json', $allGamesWithJSON);

