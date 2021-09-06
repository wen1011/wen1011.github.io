<?php

//insert.php

$connect = new PDO('mysql:host=localhost;dbname=PetSitterWorkTime', 'root', '');

if(isset($_POST["title"]));
{
    
 $query = "
 INSERT INTO db_PetSitterWorkTime
 (title,price, start_event, end_event) 
 VALUES (:title,:price, :start_event, :end_event)
 ";
 $statement = $connect->prepare($query);
 $statement->execute(
  array(
   ':title'  => $_POST['title'],
   ':price'  => $_POST['price'],
   ':start_event' => $_POST['start'],
   ':end_event' => $_POST['end']
  )
 );
}


?>

