<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $to = "pepealdanagomez@hotmail.com";
    $subject = "Mensaje desde el formulario de contacto";
    $message = "Nombre: " . $_POST['nombre'] . "\nCorreo: " . $_POST['correo'] . "\nMensaje: " . $_POST['mensaje'];
    $headers = "From: " . $_POST['correo'];

    if(mail($to, $subject, $message, $headers)){
        echo "Mensaje enviado con éxito";
    } else {
        echo "Error al enviar el mensaje";
    }
}
?>
