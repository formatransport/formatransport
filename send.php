<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $to = "info@formatransport.se";

    $name = htmlspecialchars($_POST["namn"]);
    $phone = htmlspecialchars($_POST["telefon"]);
    $email = htmlspecialchars($_POST["epost"]);
    $pickup = htmlspecialchars($_POST["upphamtning"]);
    $delivery = htmlspecialchars($_POST["leverans"]);
    $date = htmlspecialchars($_POST["datum"]);
    $message = htmlspecialchars($_POST["meddelande"]);

    $subject = "Ny offertförfrågan från $name";

    $body = "
    Namn: $name
    Telefon: $phone
    E-post: $email

    Upphämtning: $pickup
    Leverans: $delivery
    Datum: $date

    Meddelande:
    $message
    ";

    $headers = "From: info@formatransport.se";

    mail($to, $subject, $body, $headers);

    header("Location: tack.html");
    exit();
}
?>
