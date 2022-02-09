<template>
  <div class="three-js-demo">
    <v-row justify="center" align="center" class="pt-16">
      <v-col cols="auto">
        <canvas id="three"></canvas>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
export default {
  mounted() {
    this.initThree()
  },
  methods: {
    initThree() {
      const scene = new THREE.Scene()
      scene.background = new THREE.Color('#eee')

      const canvas = document.querySelector('#three')
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
      //   renderer.shadowMap.enabled = true

      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      camera.position.z = 750
      camera.position.x = 20
      camera.position.y = 10

      const gltfLoader = new GLTFLoader()
      gltfLoader.load('/toon_cat/scene.gltf', (gltf) => {
        const model = gltf.scene

        model.traverse((o) => {
          const explosionTexture = new THREE.TextureLoader().load(
            '/toon_cat/textures/Mat_Gradient_baseColor.jpeg'
          )
          explosionTexture.flipY = false
          const material = new THREE.MeshBasicMaterial({
            map: explosionTexture,
          })
          o.material = material

          //   if (o.isMesh) {
          //     o.castShadow = true
          //     o.receiveShadow = true
          //   }
        })

        scene.add(model)
      })

      const hemLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
      hemLight.position.set(0, 48, 0)
      scene.add(hemLight)

      //   const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)

      //   dirLight.position.set(-10, 8, -5)

      //   dirLight.castShadow = true
      //   dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024)
      //   scene.add(dirLight)

      const floorGeometry = new THREE.PlaneGeometry(3000, 3000)
      const floorMaterial = new THREE.MeshPhongMaterial({
        color: 0x857ebb,
        shininess: 0,
      })

      const floor = new THREE.Mesh(floorGeometry, floorMaterial)
      floor.rotation.x = -0.5 * Math.PI
      floor.receiveShadow = true
      floor.position.y = -0.001
      scene.add(floor)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true

      function animate() {
        controls.update()
        renderer.render(scene, camera)
        requestAnimationFrame(animate)

        if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement
          camera.aspect = canvas.clientWidth / canvas.clientHeight
          camera.updateProjectionMatrix()
        }
      }
      animate()

      function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement
        const width = window.innerWidth
        const height = window.innerHeight
        const canvasPixelWidth = canvas.width / window.devicePixelRatio
        const canvasPixelHeight = canvas.height / window.devicePixelRatio

        const needResize =
          canvasPixelWidth !== width || canvasPixelHeight !== height
        if (needResize) {
          renderer.setSize(width, height, false)
        }
        return needResize
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#three {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
</style>