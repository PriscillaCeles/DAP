<?php
// if ($_SERVER["REQUEST_METHOD"] == "POST") {


$name= $_POST['nome'];
$email= $_POST['email'];
$telefone= $_POST['telefone'];
$animal= $_POST['animal'];
$system= $_POST['system'];
$producao= $_POST['producao'];
$mensagem= $_POST['mensagem'];


echo $name;
echo $email;
echo $telefone;
echo $animal;
echo $system;
echo $producao;
echo $mensagem;


$to = "pri.c.maciel@hotmail.com";
$subject = "Contato orçamento - DAP";
$message = "Name: ".$name. "<br/> E-mail: ".$email. "<br/>";
$header = "MIME-Version: 1.0\n";
$header .= "Content-type: text/html; charset=iso-8859-1\n";
$header .= "From: $email\n";

mail($to, $subject, $message, $header);
// }
?>