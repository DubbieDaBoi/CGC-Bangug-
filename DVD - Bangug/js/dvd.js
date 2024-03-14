const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
const aspectRatio = 800 / 800;
const camera = new THREE.OrthographicCamera(-4 * aspectRatio, 4 * aspectRatio, 4, -4, 1, 1000);

renderer.setSize(800, 800);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;

const dvdGeometry = new THREE.PlaneGeometry(0.4, 0.3);
const dvdMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const dvd = new THREE.Mesh(dvdGeometry, dvdMaterial);
scene.add(dvd);

let xSpeed = 0.02;
let ySpeed = 0.015;
let bouncesLeft = Math.floor(Math.random() * 4) + 5; // Random number of bounces between 5 and 8

function animate() {
    requestAnimationFrame(animate);

    dvd.position.x += xSpeed;
    dvd.position.y += ySpeed;

    //Collisions with screen bounds
    if (dvd.position.x >= 3.8 * aspectRatio || dvd.position.x <= -3.8 * aspectRatio) {
        xSpeed *= -1;
        dvd.material.color.setRGB(Math.random(), Math.random(), Math.random());
        dvd.scale.x -= 0.05;
        dvd.scale.y -= 0.05;
        bouncesLeft--;
        console.log("Bounces Left: " + bouncesLeft);
    }
    if (dvd.position.y >= 3.8 || dvd.position.y <= -3.3) {
        ySpeed *= -1;
        dvd.material.color.setRGB(Math.random(), Math.random(), Math.random());
        dvd.scale.x -= 0.05;
        dvd.scale.y -= 0.05;
        bouncesLeft--;
        console.log("Bounces Left: " + bouncesLeft);
    }

    // Checks if object is too small to render
    if (dvd.scale.x <= 0.01 || dvd.scale.y <= 0.01) {
        console.log("Object Disappeared!");
        dvd.visible = false;
    }

    // Checks if bounces left or object is too small
    if (bouncesLeft <= 0) {
        console.log("Object Disappeared!");
        dvd.visible = false;
    }

    renderer.render(scene, camera); 
}

animate();