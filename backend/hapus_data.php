<?php


require_once('../connection.php');
$getJSON = file_get_contents('php://input');
$data = json_decode($getJSON);

$id = $data->id;

$query = "DELETE FROM mail where id=".$id;
$result = pg_query($query);

$row = pg_affected_rows($result);

$obj = new stdClass();
if($row > 0){
    $obj->status = "success";
}else{
    $obj->status = "Fail";
}

echo json_encode($obj)



?>