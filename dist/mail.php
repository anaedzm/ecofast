if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(
        !empty($_POST['nombre'])
        && !empty($_POST['email'])
        && !empty($_POST['mensaje'])
    ){
        $nombre = $_POST["nombre"];
        $email = $_POST["email"];
        $mensaje = $_POST["mensaje"];


        $to = "your@email.com";
        $subject = "New Contact Form Submission";
        $body = "Nombre: {$nombre}\nEmail: {$email}\nMensaje: {$mensaje}";
        $headers = "From: {$email}";


        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message.";
        }
    }
}