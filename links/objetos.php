<?php
$Correo = $_GET['C'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Objetos</title>
    <link rel="stylesheet" href="objetos.css">
    <link rel="icon" href="../assets/imagenes/Gotita.png">
    <script type="text/javascript" src="../libs/three.js"></script>
    <script src="../libs/jquery-3.4.1.js"></script>
    <!-- Add all for GUI -->
    <script src="../libs/DAT.GUI.min.js"></script>
    <!--<script src="./libs/Stats.js"></script>-->
    <!-- Add to load Models -->
    <script src="../vendors/three.js-master/build/three.min.js"></script>
    <script src="../vendors/load/OBJLoader.js"></script>
    <script src="../vendors/load/MTLLoader.js"></script>

    <script src="../vendors/load/GLTFLoader.js"></script>
    <script src="../vendors/load/DRACOLoader.js"></script>
    <!-- <script src="./vendors/load/FBXLoader.js"></script>-->
    
    <!-- orbit controls -->
    <script type="text/javascript" src="../libs/OrbitControls.js"></script>
    <!-- main -->
    <script type="text/javascript" src="../src/main.js"></script>
</head>
<body onload="start()">
    <div class="topnav">
        <ul class="nav" style="width: 100%">
            <img style="width: 250px" src="../assets/imagenes/Logo.png" class="avatar">
        
            <li><a id="Bienvenido">Bienvenido <?php echo $Correo; ?></a>
                <ul>
                    <li><a id="Exit" href="../index.html" onclick="by()">Salir</a></li>
                </ul>
            </li>
            <li><a class="infos" href="ultima.php?C=<?php echo $Correo;?>"><h8>Informes de ingresos</h8></a></li>
        </ul>
    </div>
    <div class="row">
      <div class="column">
        <div class="Pasos">
            <button id="objeto" class="objeto" onclick="CargarModelo(1)">Paso 1</button>
            <button id="objeto" class="objeto" onclick="CargarModelo(2)">Paso 2</button>
            <button id="objeto" class="objeto" onclick="CargarModelo(3)">Paso 3</button>
            <button id="objeto" class="objeto" onclick="CargarModelo(4)">Paso 4</button>
            <button id="objeto" class="objeto" onclick="CargarModelo(5)">Paso 5</button>
        </div>
        <canvas id="myCanvas" width="720" height="450"></canvas>
      </div>
      
      <div class="column card-body">
        
        <h2>Instructions...</h2>
        <hr>
        <p id="SomeText" style="text-align: justify; padding: 25px; line-height: 24px; font-size: 20px; color: black">
            <div onclick="Focs()" id="Utiliza" style="color: black">Utiliza los botones a tu izquierda para seguir el paso a paso.</div>
        </p>
      </div>  
    </div>
</body>
</html>