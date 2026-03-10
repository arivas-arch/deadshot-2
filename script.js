const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

// cámara
const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 5);
scene.add(light);

// suelo
const floorGeometry = new THREE.BoxGeometry(50,1,50);
const floorMaterial = new THREE.MeshStandardMaterial({color:0x228B22});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.position.y = -1;

scene.add(floor);

// cubo para probar
const cubeGeometry = new THREE.BoxGeometry(2,2,2);
const cubeMaterial = new THREE.MeshStandardMaterial({color:0xff0000});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

cube.position.y = 1;

scene.add(cube);

// posición cámara
camera.position.set(0,3,8);

// loop
function animate(){
requestAnimationFrame(animate);

cube.rotation.y += 0.01;

renderer.render(scene,camera);
}

animate();
