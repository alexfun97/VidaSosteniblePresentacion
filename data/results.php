<?php
include 'bbdd.php';

//INYECCION DE USUARIO EN LA BBDD
$sql = "INSERT INTO `usuarios`() VALUES ()";
if ($conn->query($sql) === TRUE) {
    $last_id = $conn->insert_id;
    //echo "New record created successfully. Last inserted User ID is: " . $last_id."<br>";
} else {
    //echo "Error: " . $sql . "<br>" . $conn->error;
}



//insertar respuestas en bbdd
foreach ($_POST as $id_p => $id_r) {
  $sql2 = "INSERT INTO `respuestasusuario`(`Id_usuario`, `ID_Respuesta`) VALUES ($last_id, $id_r)";
  $conn->query($sql2);
  //echo "Pregunta: ".$id_p." , Respuesta: ".$id_r."<br>";
}



  //suma de valores sin media
  $sql3 = "SELECT SUM(respuestas.ValorHuella) AS 'resultado' FROM respuestasusuario JOIN usuarios ON usuarios.id=respuestasusuario.Id_usuario JOIN respuestas ON respuestasusuario.ID_Respuesta=respuestas.id WHERE respuestasusuario.Id_usuario='".$last_id."'";

  $result3 = $conn->query($sql3);
  if ($result3->num_rows > 0) {
      while($row = $result3->fetch_assoc()) {
        if($row["resultado"] <= 25){
          echo "<h1>VALOR HUELLA ECOLÓGICA</h1>";
          echo "<p>Sostenible, generalizable a largo plazo para toda la humanidad</p>";
          echo "<h3>1 Planeta!</h3>";

        }
        else if($row["resultado"] > 25 || $row["resultado"] <= 50){
          echo "<h1>VALOR HUELLA ECOLÓGICA</h1>";
          echo "<p>Insostenible, relativamente fácil de reducir</p>";
          echo "<h3>2 o 3 Planetas!</h3>";

        }
        else if($row["resultado"] > 50){
          echo "<h1>VALOR HUELLA ECOLÓGICA</h1>";
          echo "<p>Completamente insostenible, difícil (pero no imposible) de reducir. Sería un nivel de huella de los Estados Unidos u otro país muy rico y derrochón.</p>";
          echo "<h3>5 o mas Planetas!</h3>";

        }
      }
  }








?>
