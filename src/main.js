/*  Authors: 
Juan Pablo Orozco Peña - 50052
Julián Pedroza García - 49170
Date of creation: March - April / 2020

Last update: Wednesday, April 22. 2020 */

var scene    = null,
    camera = null,
    distance = 3,   //distancia entre el modelo y la camara
    rot=0.03,
    render   = null,
    screenwith = 720,
    screenheight = 450,
    lintensity=2.4,
    lintensity2=0.48,
    objeto3d=null,
    objeto3daux1=null,
    light = null,
    UserActivo,
    gltftrue=false;

function Focs(){
    document.getElementById('objeto').focus();
}

function by(){
    alert("Autores:\nJulián Pedroza \nJuan Pablo Orozco \nAndres Felipe Vélez");
}

function start() {
    window.addEventListener( 'resize', onWindowResize, false );
    initElements();
    //alert("Starto");
    animate();
}

function initElements() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xaaaaaa);
    camera = new THREE.PerspectiveCamera( 
         90,                                     // Ángulo "grabación" - De abajo -> Arriba 
         screenwith / screenheight, // Relación de aspecto 16:9
         0.01,                                    // Mas cerca (no renderiza) 
         400                                    // Mas lejos (no renderiza)
    );

    renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#myCanvas') });
    renderer.setSize( screenwith, screenheight);
    //document.body.appendChild( renderer.domElement );
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    camera.position.set( 0,0.56/* 0.56 recomended*/,2.77 );
    controls.update();
    var floorBoxGeometry = new THREE.PlaneGeometry( 10, 10);
    var floorBoxMaterial = new THREE.MeshBasicMaterial( { color: 0x000000, transparent: true, opacity:0.6 } );
    var floor = new THREE.Mesh( floorBoxGeometry, floorBoxMaterial );
    floor.position.y=-0.1;
    floor.rotation.x=(-Math.PI/2);
    scene.add(floor);
  
    createLight();
}

function createLight() {
    // Create a directional light
    light = new THREE.DirectionalLight(0xffffff, lintensity, 1000);
    // move the light back and up a bit
    light.position.set( 2, 2, 0 );
    // remember to add the light to the scene
    scene.add( light );

    light2 = new THREE.SpotLight(0xffffff, lintensity2, 1000);
    light.position.set( 0, 12, 2 );
    scene.add(light2);
}

function CargarModelo(modelois){
    document.getElementById("Utiliza").style.display='none';
    switch(modelois){
        case 1:
            if(!gltftrue)
                scene.remove(objeto3d);
            else{
                if(objeto3daux1!=null){
                    scene.remove(objeto3daux1.scene);
                    objeto3daux1=null;
                }
                scene.remove(objeto3d.scene);
                gltftrue=false;
            }
            document.getElementById("SomeText").innerHTML="Es obligación del colaborador el "+
"seguimiento estricto de las Normas de Bioseguridad a fin de garantizar un trabajo seguro.<br/>"+
"Incluso, y en mayor proporción, es competencia del empleador garantizar que el ambiente de trabajo"+
" cumpla con los requisitos mínimos de bioseguridad, así como socializar y velar el cumplimiento de estas normas.";
            loadGLTF('../models/Atomizer/',
                '../models/Atomizer/scene.gltf',
                0.8, 0.2, -6.5, -10);
            gltftrue=true;
        break;
        case 2:
            if(!gltftrue)
                scene.remove(objeto3d);
            else{
                if(objeto3daux1!=null){
                    scene.remove(objeto3daux1.scene);
                    objeto3daux1=null;
                }
                scene.remove(objeto3d.scene);
                gltftrue=false;
            }
            document.getElementById("SomeText").innerHTML="Nunca olvides que el tratamiento de agua es"+
            " muy importante para el ser humano, por ende requiere la mayor parte de la atención en el mundo.";
            loadGLTF('../models/bottle/',
                '../models/bottle/scene.gltf',
                1.8, 0, -0.11, 0);
            gltftrue=true;
         break;
         case 3:
            if(!gltftrue)
                scene.remove(objeto3d);
            else{
                if(objeto3daux1!=null){
                    scene.remove(objeto3daux1.scene);
                    objeto3daux1=null;
                }
                scene.remove(objeto3d.scene);
                gltftrue=false;
            }
            document.getElementById("SomeText").innerHTML="<li>Mantener el lugar de trabajo en óptimas condiciones de higiene y ventilación.</li><br/>"+
"<li>Evitar fumar, beber y comer en el lugar de trabajo.</li><br/>"+
"<li>Emplear mandil, protección respiratoria, guantes y protectores oculares al realizar tareas que puedan generar salpicaduras.</li>";
            loadGLTF('../models/Boots/',
                '../models/Boots/scene.gltf',
                0.004, -0.5, -0.3, -1.5);
            loadGLTF2('../models/Boots/',
                '../models/Boots/scene.gltf',
                0.004, 0.5, -0.3, -1.5);
            gltftrue=true;
         break;
         case 4:
            if(!gltftrue)
                scene.remove(objeto3d);
            else{
                if(objeto3daux1!=null){
                    scene.remove(objeto3daux1.scene);
                    objeto3daux1=null;
                }
                scene.remove(objeto3d.scene);
                gltftrue=false;
            }
            document.getElementById("SomeText").innerHTML=
"<li>No guardar sustancias químicas en el refrigerador de alimentos, pueden ser ingeridas por equivocación y causar daños graves en el organismo.</li><br/>"+
"<li>Usar guantes al manipular sustancias químicas o desechos de cualquier tipo.</li><br/>"+
"<li>Lavarse las manos con frecuencia para evitar la transmisión de infecciones y enfermedades.</li>";
            loadGLTF('../models/obj3/',
                '../models/obj3/scene.gltf',
                0.6, -2, 0, 1.7);
            gltftrue=true;
         break;
         case 5:
            if(!gltftrue)
                scene.remove(objeto3d);
            else{
                if(objeto3daux1!=null){
                    scene.remove(objeto3daux1.scene);
                    objeto3daux1=null;
                }
                scene.remove(objeto3d.scene);
                gltftrue=false;
            }
            document.getElementById("SomeText").innerHTML="Las organizaciones deben proveer a los trabajadores"+
            " de equipos de seguridad para el tratamiento de materiales potencialmente contaminados.<br/>También"+
            " deben dotarlos con material para desinfectar los instrumentos utilizados e incluso el lugar de"+
            " trabajo que estuvo expuesto a los agentes contaminantes.";
            loadOBJ_MTL('../models/Personaje/',
                'MAsk.mtl',
                'MAsk.obj',
                0.15, -0.2, 0, 0.6);
         break;
    }
}

function animate() { 
    requestAnimationFrame(animate);
    renderer.render( scene, camera );
    if(camera.position.y>3)
    camera.position.y=3;
    if(camera.position.y<-3)
    camera.position.y=-3;
    // if(gltftrue){
    //     objeto3d.scene.rotation.y+=rot;
    // }else{
    //     objeto3d.rotation.y+=rot;
    // }
    // camera.position.z   =(Math.cos(camera.rotation.y)*distance);
    // camera.position.x   =(Math.sin(camera.rotation.y)*distance);
    controls.update();
}

function onWindowResize() {
  // .... Tra .... Code
  camera.aspect = screenwith/screenheight;
  camera.updateProjectionMatrix();
  renderer.setSize(screenwith,screenheight);
}

// TO LOAD (OBJ WITH MTL)

function loadOBJ_MTL(generalPath, pathMTL,pathOBJ, Scale,addX,addY,addZ) {
    console.log("Trying load the object");
    var mtlLoader = new THREE.MTLLoader();
        mtlLoader.setTexturePath(generalPath);
        mtlLoader.setPath(generalPath);
        mtlLoader.load(pathMTL, function (materials) {
            materials.preload();
            var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath(generalPath);
                objLoader.load(pathOBJ, function (object) {
                    object.scale.set(Scale,Scale,Scale);
                    object.scale.set(Scale,Scale,Scale);
                    object.position.z = addZ;
                    object.position.y = addY;
                    object.position.x = addX;
                    if(pathOBJ=='MAsk.obj')
                        object.rotation.y=Math.PI;
                    objeto3d=object;
                    scene.add(objeto3d);
                });
    });
}

function loadGLTF(generalPath, pathGLTF,Scale,addX,addY,addZ) {
    // Instantiate a loader
    var loader = new THREE.GLTFLoader();

    // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    var dracoLoader = new THREE.DRACOLoader();
        dracoLoader.setDecoderPath(generalPath);
        loader.setDRACOLoader(dracoLoader);

    // Load a glTF resource
    loader.load(
    // resource URL
    pathGLTF,
    // called when the resource is loaded
    function ( gltf ) {

        objeto3d=gltf;
        scene.add( objeto3d.scene );
            objeto3d.animations; // Array<THREE.AnimationClip>
            objeto3d.scene;   // THREE.Scene
            objeto3d.scenes;  // Array<THREE.Scene>
            objeto3d.cameras; // Array<THREE.Camera>
            objeto3d.asset;   // Object
            objeto3d.scene.scale.set(Scale,Scale,Scale); // scale here
            objeto3d.scene.position.set(addX,addY,addZ);
            if(pathGLTF=='../models/Boots/scene.gltf'){
                objeto3d.scene.rotation.y = (2*Math.PI);                
            }else{
                objeto3d.scene.rotation.y = -(Math.PI / 2);
            }
        },

        // called while loading is progressing
        function ( xhr ) {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
        function ( error ) {
            console.log( 'An error happened' );
        }
    );
}
function loadGLTF2(generalPath, pathGLTF,Scale,addX,addY,addZ) {
    // Instantiate a loader
    var loader = new THREE.GLTFLoader();

    // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    var dracoLoader = new THREE.DRACOLoader();
        dracoLoader.setDecoderPath(generalPath);
        loader.setDRACOLoader(dracoLoader);

    // Load a glTF resource
    loader.load(
    // resource URL
    pathGLTF,
    // called when the resource is loaded
    function ( gltf ) {

        objeto3daux1=gltf;
        scene.add( objeto3daux1.scene );
            objeto3daux1.animations; // Array<THREE.AnimationClip>
            objeto3daux1.scene;   // THREE.Scene
            objeto3daux1.scenes;  // Array<THREE.Scene>
            objeto3daux1.cameras; // Array<THREE.Camera>
            objeto3daux1.asset;   // Object
            objeto3daux1.scene.scale.set(Scale,Scale,Scale); // scale here
            objeto3daux1.scene.position.set(addX,addY,addZ);
            if(pathGLTF=='../models/Boots/scene.gltf'){
                objeto3daux1.scene.rotation.y = (2*Math.PI);                
            }else{
                objeto3daux1.scene.rotation.y = -(Math.PI / 2);
            }
        },

        // called while loading is progressing
        function ( xhr ) {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
        function ( error ) {
            console.log( 'An error happened' );
        }
    );
}