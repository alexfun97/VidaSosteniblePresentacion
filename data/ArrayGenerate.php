<?php
include 'bbdd.php';
$arrayPadre = array();
$idDatos = array();


$sql = "SELECT * FROM `preguntasextra`";
$result = $conn->query($sql);


//PREGUNTAS
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $idDatos["idPregunta"] = $row["idPregunta"];
    $idDatos["idRespuesta"] = $row["idRespuesta"];
    //array_push($array, $row["idPregunta"], $row["idRespuesta"]);
    $arrayPadre[] = $idDatos;

  }
}

// for ($i=0; $i < sizeof($array) ; $i++) {
//   echo $array[$i];
//   echo "<br>";
// }

$jsn = json_encode($arrayPadre, JSON_PRETTY_PRINT);
echo $jsn;
//echo "<pre>".$jsn."</pre>";



?>
