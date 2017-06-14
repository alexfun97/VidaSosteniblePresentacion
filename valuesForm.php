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
        <form action="data/results.php" method="POST">
            <div class="bgheadervalues">
              <div class="FinalDiv">
                <?php
                include 'data/results.php';
                
                 ?>
              </div>
            </div>
      </div>
        </form>
     </div>
</body>
</html>
