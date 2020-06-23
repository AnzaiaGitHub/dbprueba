<?PHP
/*

*/
//cambie los atributos iguales a los del SQL
class User{ //cambie por User
	private $Correo;
	private $Nombre;
	private $Apellido;
	private $Sexo;
	private $FechaNacimiento;
	private $Contraseña;
	private $Ingresos;

	// get and set

	public function __GET($k){ return $this->$k; }
	public function __SET($k, $v){ return $this->$k = $v; }
}

?>