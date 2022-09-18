<?php

if ( ! isset ( $_POST ['nombre']) ) {
    header("Location: index.html");
}

$nombre = $_POST ['nombre'];
$email = $_POST ['email'];
$telefono = $_POST ['telefono'];
$mensaje = $_POST ['mensaje'];



//REMITENTE //

$rta = mail ('josephbrit@gmail.com', "Mensaje Web: $telefono", $mensaje);
var_dump($rta);