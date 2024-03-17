<?php
require 'vendor/autoload.php';

Flight::route('/',function(){
    require '/Bootstrap-theme/index.html';
});

Flight::start();
?>