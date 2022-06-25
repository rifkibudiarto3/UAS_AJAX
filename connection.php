<?php
session_start();
$host = "ec2-3-222-74-92.compute-1.amazonaws.com";
$port = "5432";
$user = "orkphqxszznlyk"; 
$password = "142ad02e78c7a5d9b447319619c4506981e3ee7a4b577a19051ba6cbf95df347";
$db   = "d9amg3ahb77bf2";

$connection = pg_connect("host=$host port =$port dbname=$db user=$user password=$password");
// if($connection){
// echo 'Koneksi Berhasil';
// }
// else{
// echo 'Koneksi Gagal';
// }
?>