import * as THREE from 'three';
import './style.css'

// Create a scene
const scene = new THREE.Scene()

// Create a sphere
const geometry = new THREE.SphereGeometry(3, 64, 64)
const material = new THREE.MeshStandardMaterial({
  color: '#00ff83',
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

// Create a light
const light = new THREE.PointLight(0xffffff, 70, 100, 1.7)
light.position.set(0, 10, 10)
scene.add(light)

// Create a camera
const camera = new THREE.PerspectiveCamera(45, sizes.width/ sizes.height, 0.1, 100)
camera.position.z = 20
scene.add(camera)

// Create a renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
  canvas,
})

// Set the renderer size
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// Resize
window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
})

// Animation
const loop = () => {
  // Update objects
  mesh.position.y += 0.01
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}
loop()
