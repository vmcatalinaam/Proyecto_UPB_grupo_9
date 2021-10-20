<?php
//CONECTAMOS CON LA BASE DE DATOS
$connection = mysqli_connect("localhost", "root", "", "form") 
or die("Error en coneccion");
$consulta = "INSERT INTO form VALUES ('".$_POST["nombre"]."','".$_POST["edad"]."','".$_POST["contrasena"]."')";
$resultado=mysqli_query($connection,$consulta) or die ("error query");
mysqli_close($connection);
echo 'El registro ha sido completado, para el usuario:'.$_POST["nombre"];
header("Location:"inicio_sesion.html");//CON ESTO REDIRECCIONO EN PHP
?>
