<?php


$nombre = $_GET ['nombre'];
$email = $_GET ['email'];
$telefono = $_GET ['telefono'];
$mensaje = $_GET ['mensaje'];



//REMITENTE //

mail ('josephbrit@gmail.com', "Mensaje Web: $telefono", $mensaje);


?>
