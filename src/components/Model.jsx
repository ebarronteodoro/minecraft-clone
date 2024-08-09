import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model = ({ scale = [1, 1, 1], position = [0, 0, 0] }) => {
  const gltf = useLoader(GLTFLoader, 'src/images/rumia.glb')
  return <primitive object={gltf.scene} scale={scale} position={position} />
}

export default Model
