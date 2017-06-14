<?php
include 'bbdd.php';
$sqlD = "SELECT * FROM respuestas WHERE id_pregunta = 2";

$resultD = $conn->query($sqlD);
if ($resultD->num_rows > 0) {
    while($rowD = $resultD->fetch_assoc()) {
      echo "<option value='".$rowD["id"]."'>".$rowD["Contenido"]."</option>";
    }
  }




?>
