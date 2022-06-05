<?php

require_once 'vendor/autoload.php';

$app = new \slim\slim();

$app->get("pruebas", function() use($app){
     echo "hola mundo desde el infierno";

});
$app->get("probando", function() use($app){
     echo "hola mundo desde el infierno";

});

$app->run();
