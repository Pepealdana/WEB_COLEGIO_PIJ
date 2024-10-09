<?php
if($_POST) {
    $to = "pepealdanagomez@hotmail.com"; // Tu correo
    $subject = "Nuevo mensaje de contacto";
    $message = "Nombre: " . $_POST['name'] . "\nCorreo: " . $_POST['email'] . "\nMensaje: " . $_POST['message'];
    $headers = "From: " . $_POST['email'];

    if(mail($to, $subject, $message, $headers)) {
        echo "Mensaje enviado exitosamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>
