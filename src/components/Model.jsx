import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model = ({ path, scale = [1, 1, 1], position = [0, 0, 0] }) => {
  const gltf = useLoader(GLTFLoader, path)
  return <primitive object={gltf.scene} scale={scale} position={position} />
}

export default Model
