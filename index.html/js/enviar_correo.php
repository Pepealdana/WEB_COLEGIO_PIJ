<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $mensaje = $_POST['mensaje'];

    // Correo al que se enviarán los mensajes
    $destinatario = "pepealdanagomez@hotmail.com";
    $asunto = "Mensaje desde la web";
    $cuerpo = "Nombre: $nombre\nCorreo: $correo\nMensaje:\n$mensaje";

    // Enviar correo
    if (mail($destinatario, $asunto, $cuerpo)) {
        echo "Mensaje enviado";
    } else {
        echo "Error al enviar el mensaje";
    }
}
?>
