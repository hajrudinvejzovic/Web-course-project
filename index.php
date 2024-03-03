<?php
require 'vendor/autoload.php';

Flight::route('/',function(){
    require 'welcome.html';
});

Flight::start();
?>