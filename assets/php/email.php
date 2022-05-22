<?php

if(isset($_POST[email]) && !empty($_POST[email])){

$nome = addcslashes($_POST[name]);
$telefone = addcslashes($_POST[telefone]);
$email = addcslashes($_POST[email]);
$mensagem = addcslashes($_POST[mensagem]);

$to = "contato@abstratoproducoes.com.br";
$subject = "Contato - Site Abstrato";
$body = "Nome: ".$nome."\r\n".
        "Email: ".$email."\r\n".
        "Telefone: ".$telefone."\r\n".
        "Mensagem: ".$mensagem;
$header = "From: contato@abstratoproducoes.com.br"."\r\n".
            "Reply-To:".$email."\r\n".
            "X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)){

    echo("Email enviado com sucesso!");
}else{
    echo("O email não pode ser enviado. Tente novamente mais tarde.");
}

}

?>