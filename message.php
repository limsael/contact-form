<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];

if (!empty($email) && !empty($message)) {
  if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // if user entered email address is valid
    $receiver = "iamjohnparker2000@gmail.com";
    $subject = "From: $name <$email>"; // subject of the email it will look like from Limsael <limsael21@gmail.com>
    $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nWebsite: $website\n\nRegards,\n$name";
    $sender = "From: $email";

    if (mail($receiver, $subject, $body, $sender)) { // mail() is a inbuilt php function to send email
      echo "Your message has been sent";
    } else {
      echo "failed to send your message";
    }
  } else {
    echo 'Invalid email address';
  }
} else {
  echo "Email and message are required";
}
