<?php
    $conexion=mysqli_connect('localhost','root','','web');
    $sql="Select Nombre,Apellido,Correo,Ingresos from empleado";
    $Correo= $_GET['C'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CoolIce-Informes!</title>
    <link rel="stylesheet" href="ultima.css">
    <link rel="icon" href="../assets/imagenes/Gotita.png">
    <script type="text/javascript" src="../src/main.js"></script>
</head>
<body>
    <center>
        <div class="logo-container">
            <a href="objetos.php?C=<?php echo $Correo;?>"><img src="../assets/imagenes/Logo.png" alt="Avatar" class="avatar"></a>
        </div>
        <div style="font-weight: bold; color:white" class="Informes-container">
        
            <table style="width:100%; padding-bottom: 18px">
                <tr class="titulo" style="text-align: center;background-color:rgba(0,0,0,0.1);">
                    <td class="titulo"><h2>Nombre</h2></td>
                    <td class="titulo"><h2>Apellido</h2></td>
                    <td class="titulo"><h2>Correo</h2></td>
                    <td class="titulo"><h2>Ingresos</h2></td>
                </tr>
                <?php
                $result=mysqli_query($conexion,$sql);
                while($mostrar=mysqli_fetch_array($result)){
                    ?>
                <tr class="datos" style="text-align: center;">
                    <td class="datos" style="height: 25px"><?php echo $mostrar['Nombre'] ?></td>
                    <td class="datos" style="height: 25px"><?php echo $mostrar['Apellido'] ?></td>
                    <td class="datos" style="height: 25px"><?php echo $mostrar['Correo'] ?></td>
                    <td class="datos" style="height: 25px"><?php echo $mostrar['Ingresos'] ?></td>
                </tr>

                <?php } ?>

            </table>

        </div>
    </center>
</body>
</html>