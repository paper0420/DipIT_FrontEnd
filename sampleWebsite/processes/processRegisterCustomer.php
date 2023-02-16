<?php
/***********************************************************
 * Author: Leonard Siu                                     *
 * Date created: 24 August 2021                            *
 ***********************************************************/
//connect to the database
include('processConnectDB.php');

//If register button has been clicked
if(isset($_POST['register']))
{
    //assigned all values entered in the registration form to variables
    /*Note: the text inside the $_POST['text'] are the values in name attribute
       of the registration form.*/
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $emailAddress = mysqli_real_escape_string($conn, $_POST['emailAddress']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $confirmPassword = mysqli_real_escape_string($conn, $_POST['confirmPassword']);
    $gender = mysqli_real_escape_string($conn, $_POST['gender']);
    $dateOfBirth = mysqli_real_escape_string($conn, $_POST['dateOfBirth']);
    if($dateOfBirth=='')
      $dateOfBirth = NULL;

    $sql = "INSERT INTO userSample (username
                                 ,emailAddress
                                 ,password
                                 ,gender
                                 ,dateOfBirth
                               )
                 VALUES('$username'
                       ,'$emailAddress'
                       ,md5('$password')
                       ,'$gender',"
                       .($dateOfBirth==NULL?"NULL":"'$dateOfBirth'").")";

   //echo $sql;
    //Note: md5('$password') encrypts the password
    $resultSet = mysqli_query($conn, $sql);

    header("location: ".$_SERVER['HTTP_REFERER']);
    exit;
}
?>
