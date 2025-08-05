<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["firstname"];
    $email = $_POST["email"];
    $phone = $_POST["phonenumber"];
    $subject = $_POST["subject"];

    $to = "info@americanpacifica.com"
";
    $message = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$subject";

    $headers = "From: $email";

    if (mail($to, "New Contact Form Submission", $message, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Something went wrong.";
    }
}
?>