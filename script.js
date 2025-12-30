// 1. Import the entire three.js library
import * as THREE from 'three';

// 2. Scene: Think of this as the world or stage for your objects.
const scene = new THREE.Scene();

// 3. Camera 🎥: This is the viewer's eye.
// PerspectiveCamera(field of view, aspect ratio, near clipping, far clipping)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; // Move the camera back so we can see the object

// 4. Renderer: This "draws" or "renders" the scene onto the screen.
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Set size to full screen
document.body.appendChild(renderer.domElement); // Add the <canvas> element to our HTML

// 5. Create an Object (Mesh) 📦
// An object is made of two things: Geometry (the shape) and Material (the skin).

// Geometry: The shape of the object. Let's make a cube.
const geometry = new THREE.BoxGeometry(1, 1, 1); // width, height, depth

// Material: The appearance of the object. Let's make it green.
// MeshBasicMaterial doesn't require any lights to be visible.
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Mesh: The final object that combines the shape and its skin.
const cube = new THREE.Mesh(geometry, material);
scene.add(cube); // Add the cube to our world!

// 6. Animation Loop 🚀
// This function runs over and over (about 60 times per second) to create animation.
function animate() {
    requestAnimationFrame(animate); // Tell the browser we want to animate another frame

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the scene from the camera's point of view
    renderer.render(scene, camera);
}

// Start the animation loop!
animate();