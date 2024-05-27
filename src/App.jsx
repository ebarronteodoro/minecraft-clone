import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Background } from './components/Background'
import { FPV as Fpv } from './components/FPV'
import { Player } from './components/Player'
import { Cubes } from './components/Cubes'
import { TextureSelector } from './components/TextureSelect'

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
          <Background />
        </Physics>
      </Canvas>
      <TextureSelector />
      <div className='pointer'>+</div>
    </>
  )
}

export default App
