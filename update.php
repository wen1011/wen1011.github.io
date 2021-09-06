<?php

//update.php

$connect = new PDO('mysql:host=localhost;dbname=PetSitterWorkTime', 'root', '');

if(isset($_POST["id"]))
{
 $query = "
 UPDATE db_PetSitterWorkTime 
 SET title=:title, price=:price, start_event=:start_event, end_event=:end_event 
 WHERE id=:id
 ";
 $statement = $connect->prepare($query);
 $statement->execute(
  array(
   ':title'  => $_POST['title'],
   ':price'  => $_POST['price'],
   ':start_event' => $_POST['start'],
   ':end_event' => $_POST['end'],
   ':id'   => $_POST['id']
  )
 );
}

?>