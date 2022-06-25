<?php
    header('Access-Control-Allow-Origin: *');
    include('../connection.php');
    $sql = "select * from mail";
    $result = pg_query($sql);
    $tod = pg_fetch_all($result);
    echo json_encode($tod);

?>