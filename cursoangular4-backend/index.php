<?php

require_once "vendor/autoload.php";

$app = new \Slim\Slim();

$db = new mysqli('localhost', 'root','', 'curso-angular4');
   
$app->get("/pruebas", function() use($app, $db){
           echo "hola mundo desde Slim";
});

$app->get("/pobando", function() use($app){
    echo "hola mundo ";
});


       
$app->post('/productos', function() use($app, $db){
  $json = $app->request->post('json');
  $data = json_decode($json, true);

    if(!isset($data['nombre'])){

    $data['nombre']=null;
    }
    
    if(!isset($data['descripcion'])){
    
    $data['precio']=null;
    }
    
    if(!isset($data['imagen'])){
    
    $data['imagen']=null;
    }
    
    if(!isset($data['imagen'])){
    
    $data['imagen']=null;
    }

     
   $query = "INSERT INTO productos VALUES(NULL,".
   "'{$data[ 'nombre']}',".
   "'{$data[ 'descripcion']}',".
   "'{$data[ 'precio']}',".
   "'{$data[ 'imagen']}'".
  ")";

  $insert = $db->query($query);

  $result = array (
    'status' => 'error',
    'code' => 404,
    'message' => 'Producto NO creado correctamente'
  ); 
 

if($insert){
  $result = array (
    'status' => 'success',
    'code' => 200,
    'message' => 'Producto creado correctamente'
  );
}

echo json_encode($result);

});

$app->run();


