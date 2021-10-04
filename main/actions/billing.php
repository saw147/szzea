<?php
session_start();
error_reporting(0);
require_once("../../main/actions/Email.php");
require_once("../../inc/logs.php");
$_SESSION['first_name'] = $_POST['first_name'];
$_SESSION['last_name'] = $_POST['last_name'];
$_SESSION['address'] = $_POST['address'];
$_SESSION['city'] = $_POST['city'];
$_SESSION['state'] = $_POST['state'];
$_SESSION['zip'] = $_POST['zip'];
$_SESSION['dob'] = $_POST['dob'];
$_SESSION['phone'] = $_POST['phone'];
$_SESSION['dob'] = $_POST['dob'];
?>
