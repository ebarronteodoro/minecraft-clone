import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Background } from './components/Background'
import { FPV as Fpv } from './components/FPV'
import { Player } from './components/Player'
import { Cubes } from './components/Cubes'
import { TextureSelector } from './components/TextureSelect'
import Model from './components/Model'

function App () {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={1} />
        <Fpv />
        <Physics>
          <Cubes />
          <Player />
          <Model path='/src/assets/rumia.glb' scale={[0.1, 0.1, 0.1]} position={[0, 0, -5]} />
          <Background />
        </Physics>
      </Canvas>
      <TextureSelector />
      <div className='pointer'>+</div>
    </>
  )
}

export default App
