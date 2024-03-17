// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 2, 5); // Set camera position
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add floor
const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xfff9db, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Add walls
const wallGeometry = new THREE.BoxGeometry(10, 15, 0.2);
const wallMaterial = new THREE.MeshPhongMaterial({ color: 0xffe14a });

const backWall = new THREE.Mesh(wallGeometry, wallMaterial);
backWall.position.z = -5;
scene.add(backWall);

const leftWall = new THREE.Mesh(wallGeometry, wallMaterial);
leftWall.position.x = -5;
leftWall.rotation.y = Math.PI / 2;
scene.add(leftWall);

const rightWall = new THREE.Mesh(wallGeometry, wallMaterial);
rightWall.position.x = 5;
rightWall.rotation.y = -Math.PI / 2;
scene.add(rightWall);

const frontWall = new THREE.Mesh(wallGeometry, wallMaterial);
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
scene.add( light );

//light
const lightFixtureGeometry = new THREE.SphereGeometry(0.2, 16, 16); 
const lightFixtureMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.5 });
const lightFixture = new THREE.Mesh(lightFixtureGeometry, lightFixtureMaterial);
lightFixture.position.set(0, 7, 0);
scene.add(lightFixture);

// Add a window
const windowGeometry = new THREE.PlaneGeometry(5, 3);
const windowMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffc8 });
const windowMesh = new THREE.Mesh(windowGeometry, windowMaterial);
windowMesh.position.set(0, 3, -4);
scene.add(windowMesh);




// Add a table
const tableGeometry = new THREE.BoxGeometry(1.5, 0.1, 2.5);
const tableMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
const table = new THREE.Mesh(tableGeometry, tableMaterial);
table.position.set(-4, 1.5, -3);
scene.add(table);

const Stick1Geometry = new THREE.BoxGeometry(1, 4, 2.5);
const Stick1 = new THREE.Mesh(Stick1Geometry, tableMaterial);
Stick1.position.set(-4, -0.5, -3);
scene.add(Stick1);




//Computer
const lampstickGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 32);
const lampstickMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
const lampstick = new THREE.Mesh(lampstickGeometry, lampstickMaterial);
lampstick.position.set(-4, 1.5, -3);
scene.add(lampstick);

const ComputerGeometry = new THREE.BoxGeometry(0.5, 1, 1.5);
const ComputerMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
const Computer = new THREE.Mesh(ComputerGeometry, ComputerMaterial);
Computer.position.set(-4, 2.5, -3);
scene.add(Computer);

//Chair
const ChairGeometry = new THREE.BoxGeometry(1.5, 1, 1.5);
const ChairMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff});
const Chair = new THREE.Mesh(ChairGeometry, ChairMaterial);
Chair.position.set(-2, .5, -3);
scene.add(Chair);

const HandleGeometry = new THREE.BoxGeometry(1, 4, 1.5);
const HandleMaterial = new THREE.MeshPhongMaterial({ color: 0x454545 });
const Handle = new THREE.Mesh(HandleGeometry, HandleMaterial);
Handle.position.set(-1.5, -0.5, -3);
scene.add(Handle);


const ScreenGeometry = new THREE.BoxGeometry(0.2, .5, 1.2);
const ScreenMaterial = new THREE.MeshPhongMaterial({ color: 0x00ffc8 });
const Screen = new THREE.Mesh(ScreenGeometry, ScreenMaterial);
Screen.position.set(-3.8, 2.5, -3);
scene.add(Screen);




//Bed
const BedGeometry = new THREE.BoxGeometry(2, 1, 3);
const BedMaterial = new THREE.MeshPhongMaterial({ color: 0x363636 });
const Bed = new THREE.Mesh(BedGeometry, BedMaterial);
Bed.position.set(4, 0.5, -3);
scene.add(Bed);

//Sheet
const SheetGeometry = new THREE.BoxGeometry(1.8, 1.1, 2);
const SheetMaterial = new THREE.MeshPhongMaterial({ color: 0xfa0202 });
const Sheet = new THREE.Mesh(SheetGeometry, SheetMaterial);
Sheet.position.set(4, 0.5, -2.6);
scene.add(Sheet);

//Pillow
const PillowGeometry = new THREE.BoxGeometry(1.8, 1.1, .5);
const PillowMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
const Pillow = new THREE.Mesh(PillowGeometry,PillowMaterial);
Pillow.position.set(4, 0.5, -4);
scene.add(Pillow);
// Lighting



// Set up shadow properties for the walls
backWall.receiveShadow = true;
leftWall.receiveShadow = true;
rightWall.receiveShadow = true;
frontWall.receiveShadow = true;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();