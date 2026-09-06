import {
  AgXToneMapping,
  Color,
  OrthographicCamera,
  Scene,
  WebGPURenderer,
} from 'three/webgpu'
import { inspector } from './debug.js'
import { setupDemo } from './demos.js'
import { setupLight } from './effect/light.js'
import { createPlane } from './effect/plane.js'
import { setupTextures } from './effect/textures.js'

const MAX_PIXEL_RATIO = 2
const VIEW_HEIGHT = 4

const demo = setupDemo()
const debugEnabled = new URLSearchParams(location.search).get('debug') === '1'

const renderer = new WebGPURenderer({ antialias: true })
renderer.setPixelRatio(Math.min(devicePixelRatio, MAX_PIXEL_RATIO))
renderer.setSize(innerWidth, innerHeight)
renderer.toneMapping = AgXToneMapping

if (debugEnabled) {
  document.documentElement.dataset.debug = 'enabled'
  renderer.inspector = inspector
}

document.getElementById('app').append(renderer.domElement)
await renderer.init()

await setupTextures(demo)

const scene = new Scene()
scene.background = new Color('#000000')

const camera = new OrthographicCamera()
camera.position.set(0, 0, 5)

setupLight(scene, camera)

const plane = createPlane()
scene.add(plane)

document.documentElement.classList.add('render-ready')
const renderStatus = document.getElementById('render-status')
if (renderStatus) renderStatus.textContent = '互动光影已加载。移动指针可以移动光源。'

function onResize() {
  const aspect = innerWidth / innerHeight

  camera.top = VIEW_HEIGHT * 0.5
  camera.bottom = -camera.top
  camera.right = camera.top * aspect
  camera.left = -camera.right
  camera.updateProjectionMatrix()
  plane.scale.set(VIEW_HEIGHT * aspect, VIEW_HEIGHT, 1)
}

onResize()

addEventListener('resize', () => {
  renderer.setSize(innerWidth, innerHeight)
  onResize()
})

renderer.setAnimationLoop(() => renderer.render(scene, camera))
