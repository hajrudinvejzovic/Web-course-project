<?php
require 'vendor/autoload.php';

Flight::route('/',function(){
    require 'index.html';
});

Flight::start();
?>