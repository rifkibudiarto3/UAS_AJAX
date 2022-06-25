<?php

require_once('../connection.php');

$getJSON = file_get_contents('php://input');
$data = json_decode($getJSON);

$query = "SELECT * FROM mail where id=".$data->id;
$result = pg_query($query);

$jsonResult = json_encode(pg_fetch_object($result));
echo $jsonResult;
?>