<?php
//BBDD
include 'bbdd.php';

//DECLARACION DE VARIABLES
$ArrayPadre = array();
$DatosPreguntas = array();
$DatosRespuestas = array();


    //ARRAYS DE PREGUNTAS
    $id_p = array();
    $contenido_p = array();
    $name = array();
    $tipo = array();
    $categoria = array();
    //ARRAYS DE RESPUESTAS
    $id_r = array();
    $id_pregunta = array();
    $contenido_r = array();

//SQL
$sql1 = "SELECT * FROM preguntas";
$result1 = $conn->query($sql1);


//PREGUNTAS
if ($result1->num_rows > 0) {
  while($row = $result1->fetch_assoc()) {
    if($row["id"] == 1 || $row["id"] == 2){

    }
    else {
        //Obtencion de valores
        $contenido_p = $row["Contenido"];
        $id_p = $row["id"];
        $name = $row["id"];
        $tipo = $row["TipoPregunta"];
        $categoria = $row["id_categoria"];
        $img = $row["img"];
        //Asignacion de valores
        $DatosPreguntas["id_p"]=$id_p;
        $DatosPreguntas["pregunta"]=$contenido_p;
        $DatosPreguntas["img"]=$img;
        if($tipo == "3"){
          $DatosPreguntas["tipo"]="radio";
        }
        else if($tipo == "4"){
          $DatosPreguntas["tipo"]="text";
        }
        else if($tipo == "2"){
          $DatosPreguntas["tipo"]="checkbox";
        }
        else if($tipo == "1"){
          $DatosPreguntas["tipo"]="select";
        }

        $DatosPreguntas["name"]=$name;

        if($categoria == "1"){
          $DatosPreguntas["categoria"]="General";
        }
        else if($categoria == "2"){
          $DatosPreguntas["categoria"]="Energia";
        }
        else if($categoria == "3"){
          $DatosPreguntas["categoria"]="Transportes";
        }
        else if($categoria == "4"){
          $DatosPreguntas["categoria"]="Agua";
        }
        else if($categoria == "5"){
          $DatosPreguntas["categoria"]="Materiales";
        }



        $Respuesta = array();
        //ANIDADO
        $sql2 = "SELECT respuestas.id, respuestas.id_pregunta, respuestas.Contenido as 'textoRespuestas' FROM `respuestas` join preguntas on preguntas.id = respuestas.id_pregunta where id_pregunta = ".$row["id"]."";
    // echo "<br>";
    // echo $sql2;

        $result2 = $conn->query($sql2);
        //RESPUESTAS
        if ($result2->num_rows > 0) {
          while($row2 = $result2->fetch_assoc()) {
            //var_dump($row2);


            //if($row2["id"] == $row["id"]){
              //Obtencion de valores
              $id_r = $row2["id"];
              $id_pregunta = $row2["id_pregunta"];
              $contenido_r = $row2["textoRespuestas"];
              //Asignacion de valores al segundo array
              $DatosRespuestas["id"] = $id_r;
              $DatosRespuestas["value"] = $id_r;
              $DatosRespuestas["content"] = $contenido_r;

              // echo "<br><br><br><br>";
              // var_dump($DatosRespuestas);
              // echo "<br><br><br><br>";

              $Respuesta[] = $DatosRespuestas;

            //}

          }
          // echo "<br><br><br><br>";
          // var_dump($Respuesta);
          // echo "<br><br><br><br>";
          $DatosPreguntas["respuesta"] = $Respuesta;
          $ArrayPadre[] = $DatosPreguntas;
        } else {
        //echo "No hay resultados2";
        }




    }
  }
} else {
//echo "No hay resultados1";
}

//GENERACION DEL JSON
$jsn = json_encode($ArrayPadre, JSON_PRETTY_PRINT);
echo $jsn;
//echo "<pre>".$jsn."</pre>";






?>
