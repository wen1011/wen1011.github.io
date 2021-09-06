<?php

//load.php

$connect = new PDO('mysql:host=localhost;dbname=PetSitterWorkTime', 'root', '');

$data = array();

$query = "SELECT * FROM db_PetSitterWorkTime ORDER BY id";

$statement = $connect->prepare($query);

$statement->execute();

$result = $statement->fetchAll();

foreach($result as $row)
{
 $data[] = array(
  'id'   => $row["id"],
  'title'   => $row["title"],
  'price'   => $row["price"],
  'start'   => $row["start_event"],
  'end'   => $row["end_event"]
 );
}

echo json_encode($data);

?>
