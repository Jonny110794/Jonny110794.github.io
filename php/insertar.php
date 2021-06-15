<?php
$destino = 'jonny.sanse@gmail.com';
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$apellidos = $_POST['apellidos'];
$mensaje = $_POST['mensaje'];
$contenido = 'Nombre:' . $nombre . '\nCorreo' . $correo . '\nApellidos' . $apellidos . '\nMensaje' . $mensaje;

mail($destino, 'Nombre', $contenido);
header('Location:https://jonny110794.github.io/#');

?>
