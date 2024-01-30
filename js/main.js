const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 10, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/// [THE MAIN CODES]
//"Waypoint"   Torus - Cube
const Torusgeometry = new THREE.TorusGeometry( 5,1,18,4 ); 
const Torusmaterial = new THREE.MeshBasicMaterial( { color: 0x00fff7} ); 
const torus = new THREE.Mesh( Torusgeometry, Torusmaterial ); 
scene.add( torus );

const cubegeometry = new THREE.BoxGeometry(3,3,3,3);
const cubematerial = new THREE.MeshBasicMaterial( { color: 0xffffff } ); 
const cube = new THREE.Mesh( cubegeometry, cubematerial );
scene.add( cube );
camera.position.z = 30;

//"Golden Ratio"  Sphere - Torus
const Spheregeometry = new THREE.SphereGeometry( 2, 32, 16 ); 
const Spherematerial = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
const sphere = new THREE.Mesh( Spheregeometry, Spherematerial ); scene.add( sphere );

const Torus1geometry = new THREE.TorusGeometry( 5,1,18,74 ); 
const Torus1material = new THREE.MeshBasicMaterial( { color: 0xffbb00} ); 
const torus1 = new THREE.Mesh( Torus1geometry, Torus1material ); 
scene.add( torus1 );

const Torus2geometry = new THREE.TorusGeometry( 5,1,18,74 ); 
const Torus2material = new THREE.MeshBasicMaterial( { color: 0xffbb00} ); 
const torus2 = new THREE.Mesh( Torus2geometry, Torus2material ); 
scene.add( torus2 );

//"Saturn"  Sphere - Ring  
const Sphere1geometry = new THREE.SphereGeometry( 2, 32, 16 ); 
const Sphere1material = new THREE.MeshBasicMaterial( { color: 0xFFD700 } ); 
const sphere1 = new THREE.Mesh( Sphere1geometry, Sphere1material ); scene.add( sphere1 );


const Ringgeometry = new THREE.RingGeometry( 3, 5, 32,100 ); 
const Ringmaterial = new THREE.MeshBasicMaterial( { color: 0xe8a807} ); 
const Ring = new THREE.Mesh( Ringgeometry, Ringmaterial ); 
scene.add( Ring );


//"Knot"  TorusKnot
const TorusKnotgeometry = new THREE.TorusKnotGeometry( 4, 1, 227, 20,5,15 ); 
const TorusKnotmaterial = new THREE.MeshBasicMaterial( { color: 0x77e815 } ); 
const TorusKnot = new THREE.Mesh( TorusKnotgeometry, TorusKnotmaterial ); 
scene.add( TorusKnot );

//"Extrude" Bevel Cube
const length = 12, width = 8;

const shape = new THREE.Shape();
shape.lineTo( 0, width );
shape.lineTo( length, width );
shape.lineTo( length, 0 );
shape.lineTo( 0, 0 );

const extrudeSettings = {//Settings
	steps: 1,
	depth: 1,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelOffset: -2,
	bevelSegments: 5
};

const Extrudegeometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
const Extrudematerial = new THREE.MeshBasicMaterial( { color: 0x522422 } );
const mesh = new THREE.Mesh( Extrudegeometry, Extrudematerial ) ;
scene.add( mesh );


///[MAIN CONFIGURATION]
function animate() {
	requestAnimationFrame( animate );
	//"Waypoint"
	cube.position.set(-28, 10, 0);
	torus.position.set(-28, 10, 0);

	torus.rotation.y += 0.01;
	cube.rotation.y += 0.01;

	//"Golden Ratio"
	sphere.position.set(-10, 10, 0);
	torus1.position.set(-10, 10, 0);
	torus2.position.set(-10, 10, 0);

	torus1.rotation.y += 1;
	torus1.rotation.x += 1;
	torus2.rotation.y -= 1;
	torus2.rotation.x -= 1;

	//"Saturn"
	sphere1.position.set(5, 10, 0);
	Ring.position.set(5, 10, 0);

	Ring.rotation.x += 0.005;
	Ring.rotation.y += 0.005;
	sphere1.rotation.x +=0.005;

	//"Knot"
	TorusKnot.position.set(20, 10, 0);
	TorusKnot.rotation.x +=0.005;

	//"Extrude" ~ Somewhat the rotation is funny and broken I guess
	mesh.position.set(-5, -10, 0);
	mesh.rotation.x +=0.005;

	renderer.render( scene, camera );
}

animate();