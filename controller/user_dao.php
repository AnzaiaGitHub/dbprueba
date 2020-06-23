<?php
//insert, select, update, delete
require_once('../dao.php');


class UserDao extends DAO{
	//Metodo constructor de la clase user
	public function __CONSTRUCT(){
	//llamado al constructor de la clase DAO
	parent::__construct();
	}

	/*
	se debe ejecutar try/catch para detectar errores en tiempo de ejecución en todos los métodos.
	*/
	public function insert(User $data){
        

        $sqlC="Insert Into empleado (Correo, Nombre, Apellido, Sexo, FechaNacimiento, Contraseña,Ingresos)
        Values (?,?,?,?,?,?,?);"; //Mariana Paso Por aqui 

        try{
            $execution=$this->pdo->prepare($sqlC)->execute(
                array(
                    $data-> __GET('Correo'),
					$data-> __GET('Nombre'),
					$data-> __GET('Apellido'),
					$data-> __GET('Sexo'),
					$data-> __GET('FechaNacimiento'),
					$data-> __GET('Contraseña'),
					$data-> __GET('Ingresos')
                )
            );

        }catch(Exception $e){
			
            die($e->getMessage());
        }
        //echo " nickname: ".$data->GET('nickname')."- points: ".$data->GET('points'); impresion de datos
    }

	public function select(User $data){
        $coring= $data->Correo;
        $coning= $data->Contraseña;
		$sqlC="select Correo,Contraseña from empleado where Correo like '".$coring."';";
		try{
            $cont=$this->pdo->prepare($sqlC);
            $cont->execute();
            $Results=$cont->fetch(PDO::FETCH_OBJ);
            $nuevo= new User();
            
            //$nuevo->__SET('Contraseña',$Results->Contraseña);
            if($Results != null){
                $nuevo->__SET('Correo',$Results->Correo);
                $nuevo->__SET('Contraseña',$Results->Contraseña);
                return $nuevo;
            }else{
                
                return null;
            }

            //echo 'data selection: '.$cont;
        }catch(Exception $e){
            die($e->getMessage());
        }
	}

	public function update(User $data){
		$sqlC="update empleado set ingresos = ingresos+1 where Correo like (?);";
		try{
            $this->pdo->prepare($sqlC)->execute(
                array(
                    $data-> __GET('Correo')
                )
            );

        }catch(Exception $e){
            die($e->getMessage());
        }
	}
}