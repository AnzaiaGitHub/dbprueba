<?php

    include_once('../configuration.php');

    require_once('../model/user_entity.php');

    require_once('../controller/user_dao.php');

    $alm = new User(); //cambie por User
    $model = new UserDao();
    
    if(isset($_REQUEST['action'])){
        switch($_REQUEST['action']){
            case 'insert':
                $alm-> __SET('Nombre', $_REQUEST['Nombre']);
                $alm-> __SET('Apellido', $_REQUEST['Apellido']);
                $alm-> __SET('Sexo', $_REQUEST['Sexo']);
                $alm-> __SET('FechaNacimiento', $_REQUEST['FechaNacimiento']);
                $alm-> __SET('Correo', $_REQUEST['Correo']);
                $alm-> __SET('Contraseña', $_REQUEST['Contraseña']);
                $alm-> __SET('Ingresos',1);
                $alm-> __SET('Correo', $_REQUEST['Correo']);
                $Results=$model->select($alm);
                if($Results!=null){
                    echo'<script type="text/javascript">
                        alert("El correo '.$alm->__GET('Correo').' ya existe");
                        window.location="http://localhost/web/links/registrarse.html";
                        </script>';
                    //header("location:  http://localhost/web/links/registrarse.html");
                        //window.location.href="../links/registrarse.html";
                }else{
                    $model->insert($alm);
                    echo'<script type="text/javascript">
                        alert("El correo '.$alm->Correo.' fue registrado exitosamente");
                        window.location="http://localhost/web/links/objetos.php?C='.$alm->Correo.'";
                    </script>
                    </body>
                    </html>';
                }
                //echo "<br/>select insert";
            break;

            case 'select':
                $alm-> __SET('Correo', $_REQUEST['Correo']);
                $alm-> __SET('Contraseña',$_REQUEST['Contraseña']);
                $Results=$model->select($alm);
                if($Results!=null){
                    if($_REQUEST['Contraseña']==$Results->Contraseña
                        and $_REQUEST['Correo']==$Results->Correo){
                        $model->update($alm);
                        echo'<script type="text/javascript">
                            alert("Bienvenido '.$Results->Correo.'");
                            window.location="http://localhost/web/links/objetos.php?C='.$Results->Correo.'";
                            </script>';
                        //header("location: http://localhost/phpmyadmin/sql.php?db=web&table=empleado&pos=0");
                    }else{
                        echo'<script type="text/javascript">
                            alert("La contraseña no coincide con el usuario");
                            window.location="http://localhost/web/index.html";
                            </script>';
                    }
                }else{
                    echo'<script type="text/javascript">
                        alert("El Correo '.$_REQUEST['Correo'].' no existe.");
                        window.location="http://localhost/web/index.html";
                        </script>';
                }
                //echo "<br/>select select";
            break;
        }
    }
?>