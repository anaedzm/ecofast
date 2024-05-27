<?php

	$to = "anaedzm@gmail.com";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $subject = "Contacto Ecofast";
	
	$headers = "From: $name\r\n";  
	$headers .= "X-Mailer: PHP5\n";
	$headers .= 'MIME-Version: 1.0' . "\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $fields = array();
    $fields{"nombre"} = "Nombre";
    $fields{"email"} = "Email";
    $fields{"mensaje"} = "Mensaje";

    $body = "Mensaje recibido:<br>\r\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n<br>",$b,$_REQUEST[$a],"<br>"); }

    $send = mail($to, $subject, $body, $headers);

?>
