<?php
$servername = "localhost";
$username = "jenny";
$password = "jenny51022";
$dbname = "PetSitterWorkTime";

try{
    $db_host=new PDO(
        "mysql:host={$servername};dbname={$dbname};charset=utf8",
        $username, $password
    );
    // echo "資料庫連線成功<br>";
}catch (PDOException $e){
    echo "資料庫連線失敗<br>";
    echo "Error: ".$e->getMessage();
    exit;
}