<?php
    
$stringaJSONPresaDalDB = file_get_contents('db.json');


header('Content-Type: application/json');


echo ($stringaJSONPresaDalDB);