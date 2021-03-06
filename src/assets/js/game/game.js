var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var canvas = document.getElementById('canvas'); 
canvas.width  = canvas.clientWidth;
canvas.height = canvas.width * 9.0 / 16.0; //clientHeight;

var renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setViewport(0, 0, canvas.width, canvas.height);

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var render = function () {
  requestAnimationFrame( render );

  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;

  renderer.render(scene, camera);
};

window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize(){
  canvas.width  = canvas.clientWidth;
  canvas.height = canvas.width * 9.0 / 16.0; //canvas.clientHeight;
  renderer.setViewport(0, 0, canvas.width, canvas.height);

  //camera.aspect = window.innerWidth / window.innerHeight;
  //camera.updateProjectionMatrix();
}

render();
