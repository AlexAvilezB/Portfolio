<?php
$nombre = $_POST['name'];
$correo = $_POST['email'];
$mensaje = $_POST['message'];

$destino = "aleantonio656@gmail.com";
$asunto = "Correo enviado desde tu portafolio";

$carta = "De: $nombre \n";
$carta .= "Email: $correo \n";
$carta.= "Mensaje: $mensaje";

mail($destino, $asunto, $carta);

