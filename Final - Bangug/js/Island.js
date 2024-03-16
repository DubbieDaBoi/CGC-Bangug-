import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';
import { GLTFLoader } from './GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
const renderer = new THREE.WebGLRenderer();
let Acid,AcidGeo;
particles();

scene.background = new THREE.Color(0xdbfeff);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 6, 20); // Adjust camera position
controls.update();

//Particle
function particles() {
    const points = [];
  
    for (let i = 0; i < 10000; i++) {
      let star = new THREE.Vector3(
        Math.random() * 6400 - 4000,
        Math.random() * 6400 - 4000,
        Math.random() * 6400 - 4000
      );
      points.push(star);
    }
  
    AcidGeo = new THREE.BufferGeometry().setFromPoints(points);
  
    let sprite = new THREE.TextureLoader().load("Asset/Texture/Acid.png");
    let AcidMaterial = new THREE.PointsMaterial({
      color: 352628,
      size: 4,
      map: sprite,
    });
  
    Acid = new THREE.Points(AcidGeo, AcidMaterial);
    scene.add(Acid);
    
  }


// Hemisphere light
const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 3); // Soft white light
scene.add(hemisphereLight);

// Spot light
const spotLight = new THREE.SpotLight(0x99fdff);
spotLight.position.set(0, 0, 15); // Adjust position as needed
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;
spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;
scene.add(spotLight);

// Grass
const grassColor = 0x228B22; // Green grass color
const cubeMaterial = new THREE.MeshBasicMaterial({ color: grassColor });
const cubeGeometry = new THREE.BoxGeometry(100, 3, 5.5);
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

const cube1 = new THREE.Mesh(new THREE.BoxGeometry(90, 3, 10), cubeMaterial);
scene.add(cube1);

const cube2 = new THREE.Mesh(new THREE.BoxGeometry(85, 3, 15), cubeMaterial);
scene.add(cube2);

const cube3 = new THREE.Mesh(new THREE.BoxGeometry(80, 3, 20), cubeMaterial);
scene.add(cube3);

const cube4 = new THREE.Mesh(new THREE.BoxGeometry(75, 3, 25), cubeMaterial);
scene.add(cube4);

const cube5 = new THREE.Mesh(new THREE.BoxGeometry(70, 3, 30), cubeMaterial);
scene.add(cube5);

const cube6 = new THREE.Mesh(new THREE.BoxGeometry(65, 3, 35), cubeMaterial);
scene.add(cube6);

const cube7 = new THREE.Mesh(new THREE.BoxGeometry(60, 3, 40), cubeMaterial);
scene.add(cube7);

const cube8 = new THREE.Mesh(new THREE.BoxGeometry(55, 3, 45), cubeMaterial);
scene.add(cube8);

const cube9 = new THREE.Mesh(new THREE.BoxGeometry(50, 3, 50), cubeMaterial);
scene.add(cube9);

const cube10 = new THREE.Mesh(new THREE.BoxGeometry(45, 3, 55), cubeMaterial);
scene.add(cube10);

const cube11 = new THREE.Mesh(new THREE.BoxGeometry(40, 3, 60), cubeMaterial);
scene.add(cube11);

const cube12 = new THREE.Mesh(new THREE.BoxGeometry(35, 3, 65), cubeMaterial);
scene.add(cube12);

const cube13 = new THREE.Mesh(new THREE.BoxGeometry(30, 3, 70), cubeMaterial);
scene.add(cube13);

const cube14 = new THREE.Mesh(new THREE.BoxGeometry(25, 3, 75), cubeMaterial);
scene.add(cube14);

const cube15 = new THREE.Mesh(new THREE.BoxGeometry(20, 3, 80), cubeMaterial);
scene.add(cube15);

const cube16 = new THREE.Mesh(new THREE.BoxGeometry(15, 3, 85), cubeMaterial);
scene.add(cube16);

const cube17 = new THREE.Mesh(new THREE.BoxGeometry(10, 3, 90), cubeMaterial);
scene.add(cube17);

const cube18 = new THREE.Mesh(new THREE.BoxGeometry(5, 3, 95), cubeMaterial);
scene.add(cube18);

//Dirt
const dirtColor = 0x8B4513; // Brown dirt color
const dirtMaterial = new THREE.MeshBasicMaterial({ color: dirtColor });
const dirtGeometry = new THREE.BoxGeometry(100, 3, 5.5);
const dirt = new THREE.Mesh(dirtGeometry, dirtMaterial);
dirt.position.set(0, -3, 0); 
scene.add(dirt);

const dirt21 = new THREE.Mesh(new THREE.BoxGeometry(90, 3, 10), dirtMaterial);
dirt21.position.set(0, -3, 0);
scene.add(dirt21);

const dirt22 = new THREE.Mesh(new THREE.BoxGeometry(85, 3, 15), dirtMaterial);
dirt22.position.set(0, -3, 0);
scene.add(dirt22);

const dirt23 = new THREE.Mesh(new THREE.BoxGeometry(80, 3, 20), dirtMaterial);
dirt23.position.set(0, -3, 0);
scene.add(dirt23);

const dirt24 = new THREE.Mesh(new THREE.BoxGeometry(75, 3, 25), dirtMaterial);
dirt24.position.set(0, -3, 0);
scene.add(dirt24);

const dirt25 = new THREE.Mesh(new THREE.BoxGeometry(70, 3, 30), dirtMaterial);
dirt25.position.set(0, -3, 0);
scene.add(dirt25);

const dirt26 = new THREE.Mesh(new THREE.BoxGeometry(65, 3, 35), dirtMaterial);
dirt26.position.set(0, -3, 0);
scene.add(dirt26);

const dirt27 = new THREE.Mesh(new THREE.BoxGeometry(60, 3, 40), dirtMaterial);
dirt27.position.set(0, -3, 0);
scene.add(dirt27);

const dirt28 = new THREE.Mesh(new THREE.BoxGeometry(55, 3, 45), dirtMaterial);
dirt28.position.set(0, -3, 0);
scene.add(dirt28);

const dirt29 = new THREE.Mesh(new THREE.BoxGeometry(50, 3, 50), dirtMaterial);
dirt29.position.set(0, -3, 0);
scene.add(dirt29);

const dirt30 = new THREE.Mesh(new THREE.BoxGeometry(45, 3, 55),dirtMaterial);
dirt30.position.set(0, -3, 0);
scene.add(dirt30);

const dirt31 = new THREE.Mesh(new THREE.BoxGeometry(40, 3, 60), dirtMaterial);
dirt31.position.set(0, -3, 0);
scene.add(dirt31);

const dirt32 = new THREE.Mesh(new THREE.BoxGeometry(35, 3, 65), dirtMaterial);
dirt32.position.set(0, -3, 0);
scene.add(dirt32);

const dirt33 = new THREE.Mesh(new THREE.BoxGeometry(30, 3, 70), dirtMaterial);
dirt33.position.set(0, -3, 0);
scene.add(dirt33);

const dirt34 = new THREE.Mesh(new THREE.BoxGeometry(25, 3, 75), dirtMaterial);
dirt34.position.set(0, -3, 0);
scene.add(dirt34);

const dirt35 = new THREE.Mesh(new THREE.BoxGeometry(20, 3, 80), dirtMaterial);
dirt35.position.set(0, -3, 0);
scene.add(dirt35);

const dirt36 = new THREE.Mesh(new THREE.BoxGeometry(15, 3, 85), dirtMaterial);
dirt36.position.set(0, -3, 0);
scene.add(dirt36);

const dirt37 = new THREE.Mesh(new THREE.BoxGeometry(10, 3, 90), dirtMaterial);
dirt37.position.set(0, -3, 0);
scene.add(dirt37);

const dirt38 = new THREE.Mesh(new THREE.BoxGeometry(5, 3, 95), dirtMaterial);
dirt38.position.set(0, -3, 0);
scene.add(dirt38);


//Water
const WaterColor = 0x00e1ff; // Watercolor
const WaterMaterial = new THREE.MeshBasicMaterial({ color: WaterColor });
const WaterGeometry = new THREE.BoxGeometry(500, 2, 500);
const Water = new THREE.Mesh(WaterGeometry, WaterMaterial);
Water.position.set(0, -3.5, 0);
scene.add(Water);

//3D House
const stageLoader = new GLTFLoader();

stageLoader.load( 'Asset/Model/House.gltf', function ( gltf )  {
    const character = gltf.scene;
    character.scale.set(1, 1, 1);
    character.position.set(0, 7.5, 0);

	scene.add( gltf.scene );

});

function animate() {
    requestAnimationFrame(animate);

    controls.update(); // Update controls within the animation loop

    // Adjust camera aspect ratio on window resize
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.render(scene, camera);
}

// Listen for window resize event
window.addEventListener('resize', () => {
    // Update renderer size on window resize
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Adjust camera aspect ratio on window resize
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

animate(); // Start the animation loop
