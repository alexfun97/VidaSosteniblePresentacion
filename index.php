<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
     <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <title>Formulario WEB</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Baloo+Bhaina" rel="stylesheet">
    <script src="js/javascript.js"></script>
</head>
<body>
<script>
</script>
     <header>
        Mide tu huella ecológica personal
     </header>

     <div class="container">
        <form action="valuesForm.php" method="POST">
            <div class="bgheader">
                <p>¿De qué pais eres?</p>
                <div id="ccaaaaa">
                  <input type="text" placeholder="Pais" onfocusout="desplegable()" id="ccaa"/>
                </div>
                <select class="oculto" id="select">
                    <option name="" value="none">
                        -- Seleccione uno --
                    </option>
                    <?php
                    include 'data/desplegable.php';
                    ?>
                </select>
            </div>
<div class="menu">
    <div class="navbtn" onclick="GeneralOn()" id="generalbtn">
        General
    </div>
    <div class="navbtn" onclick="EnergiaOn()" id="energiabtn">
        Energia
    </div>
    <div class="navbtn" onclick="TransportesOn()" id="transportesbtn">
        Transportes
    </div>
    <div class="navbtn" onclick="AguaOn()" id="aguabtn">
        Agua
    </div>
    <div class="navbtn" onclick="MaterialesOn()" id="materialesbtn">
        Materiales
    </div>

    <input type="reset" class="resetbtn" onclick="ResetBtn()" value="Reiniciar Formulario"/>
    <input type="submit" class="resetbtn" value="Enviar"/>

</div>
            <div class="startform" id="Start">¡Elija una categoria y empiece el test! </div>
            <!--Bloque General-->
           <div class="GeneralOff" id="General">


           </div>

           <!--Bloque Energia-->
            <div class="EnergiaOff" id="Energia">


            </div>
            <!--Bloque Agua-->
             <div class="AguaOff" id="Agua">


             </div>
             <!--Bloque Transportes-->
              <div class="TransportesOff" id="Transportes">


              </div>
              <div class="MaterialesOff" id="Materiales">


              </div>
              <div class="blockSiguiente" id="padre">
              </div>
        </form>
     </div>
</body>
</html>
