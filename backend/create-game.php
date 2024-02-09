<?php
var_dump($_POST);


$stringaJSONPresaDalDB = file_get_contents('db.json');

$allGames = json_decode($stringaJSONPresaDalDB,true);

$newGame=[
    'name'=> $_POST['name'],
    'done'=> false,
];

$allGames[] = $newGame;

$allGamesWithJSON = json_encode($allGames);

file_put_contents('db.json', $allGamesWithJSON);
