// Scene setup
import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 2, 5); // Set camera position

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add floor
const floorTexture = new THREE.TextureLoader().load('Texture/Rug.jpg');
const floorMaterialWithTexture = new THREE.MeshPhongMaterial({ map: floorTexture });
const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterialWithTexture);
floorMesh.rotation.x = -Math.PI / 2;
scene.add(floorMesh);

// Define wall geometry
const wallGeometry = new THREE.BoxGeometry(10, 15, 0.2);

// Add walls
const wallTexture = new THREE.TextureLoader().load('Texture/Wall.jpg');
const wallMaterialWithTexture = new THREE.MeshPhongMaterial({ map: wallTexture });

// Assign materials with texture to the walls
const backWall = new THREE.Mesh(wallGeometry, wallMaterialWithTexture);
backWall.position.z = -5;
scene.add(backWall);

const leftWall = new THREE.Mesh(wallGeometry, wallMaterialWithTexture);
leftWall.position.x = -5;
leftWall.rotation.y = Math.PI / 2;
scene.add(leftWall);

const rightWall = new THREE.Mesh(wallGeometry, wallMaterialWithTexture);
rightWall.position.x = 5;
rightWall.rotation.y = -Math.PI / 2;
scene.add(rightWall);

const frontWall = new THREE.Mesh(wallGeometry, wallMaterialWithTexture);
frontWall.position.z = 5;
scene.add(frontWall);

// Add ceiling
const ceilingGeometry = new THREE.PlaneGeometry(10, 10);
const ceilingMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
ceiling.position.y = 7.5;
ceiling.rotation.x = Math.PI / 2;
scene.add(ceiling);

// Add a ceiling light (point light)
const light = new THREE.AmbientLight( 0xffffff); // soft white light
scene.add(light);

const lightFixtureGeometry = new THREE.SphereGeometry(0.2, 16, 16); 
const lightFixtureMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.5 });
const lightFixture = new THREE.Mesh(lightFixtureGeometry, lightFixtureMaterial);
lightFixture.position.set(0, 7, 0);
scene.add(lightFixture);

// Add a window
const windowGeometry = new THREE.PlaneGeometry(5, 4);
const windowMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const windowMesh = new THREE.Mesh(windowGeometry, windowMaterial);
windowMesh.position.set(0, 3, -4.5);
scene.add(windowMesh);

const Curtain1Geometry = new THREE.PlaneGeometry(1.5, 4);
const Curtain1Material = new THREE.MeshBasicMaterial({ color: 0x000000 });
const Curtain1 = new THREE.Mesh(Curtain1Geometry, Curtain1Material);
Curtain1.position.set(-3, 3, -4.4);
scene.add(Curtain1);

const Curtain2Geometry = new THREE.PlaneGeometry(1.5, 4);
const Curtain2Material = new THREE.MeshBasicMaterial({ color: 0x000000 });
const Curtain2 = new THREE.Mesh(Curtain2Geometry, Curtain2Material);
Curtain2.position.set(3, 3, -4.4);
scene.add(Curtain2);
//Office Table
const tableTexture = new THREE.TextureLoader().load('Texture/Wood.jpg');
const tableMaterialWithTexture = new THREE.MeshPhongMaterial({ map: tableTexture });
const tableGeometry = new THREE.BoxGeometry(5, 2.5, 2);
const tableMesh = new THREE.Mesh(tableGeometry, tableMaterialWithTexture);
tableMesh.position.set(0, 0.05, -2.2);
scene.add(tableMesh);

const table1Texture = new THREE.TextureLoader().load('Texture/Wood.jpg');
const table1MaterialWithTexture = new THREE.MeshPhongMaterial({ map: table1Texture });
const table1Geometry = new THREE.BoxGeometry(5.5, .1, 2.5);
const table1Mesh = new THREE.Mesh(table1Geometry, table1MaterialWithTexture);
table1Mesh.position.set(0, 1.3, -2.2);
scene.add(table1Mesh);

//Office Chair
const geometry = new THREE.CylinderGeometry( .5, .5, 2, 32 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x000000} ); 
const cylinder = new THREE.Mesh( geometry, material ); 
cylinder.position.set(0, 0, -4);
scene.add( cylinder );


// Lighting(Direct)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 0, -4); 
scene.add(directionalLight);
// Set up shadow properties for the walls
tableMesh.receiveShadow = true;
backWall.receiveShadow = true;
leftWall.receiveShadow = true;
rightWall.receiveShadow = true;
frontWall.receiveShadow = true;

// Add orbital camera control
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI / 2;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
