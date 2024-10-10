<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "pepealdanagomez@hotmail.com";
    $subject = "Nuevo mensaje de contacto";
    $body = "Nombre: $name\nCorreo: $email\nMensaje:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje. Inténtalo más tarde.";
    }
}
?>
