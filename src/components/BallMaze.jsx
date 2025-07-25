/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/models/ballMaze.gltf 
*/

import React from 'react'
import { MeshTransmissionMaterial, useGLTF, useTexture } from '@react-three/drei'

import * as THREE from "three"
import { useCustomization } from '../context/Customization'

const BallMaze = (props) => {

  const {material, mazeColor, glassColor} = useCustomization();
  
  const { nodes, materials } = useGLTF('./models/ballMaze.gltf')
  
  const PlasticTextureProps = useTexture({
    //map: './textures/maze/Plastic_004_basecolor.jpg',
    roughnessMap: './textures/maze/Plastic_004_roughness.jpg',
    aoMap: './textures/maze/Veins_001_ambientOcclusion.jpg',
  });

  const GlassTextureProps = useTexture({
    //color: './textures/glass/Plastic_001_COLOR.jpg',
    roughnessMap: './textures/glass/Plastic_001_ROUGH.jpg',
    aoMap: './textures/glass/Abstract_Organic_005_ambientOcclusion.jpg',
  });
  
  //PlasticTextureProps.map.repeat.set(3,3);
  PlasticTextureProps.roughnessMap.repeat.set(4,4);
  PlasticTextureProps.aoMap.repeat.set(4,4);

  //PlasticTextureProps.map.wrapS = PlasticTextureProps.map.wrapT = THREE.RepeateWrapping;
  PlasticTextureProps.roughnessMap.wrapS = PlasticTextureProps.roughnessMap.wrapT = THREE.RepeateWrapping;
  PlasticTextureProps.aoMap.wrapS = PlasticTextureProps.aoMap.wrapT = THREE.RepeateWrapping;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.maze.geometry}>
        <meshStandardMaterial {...(material === "Plastic"
          ? PlasticTextureProps 
          : GlassTextureProps)} 
          color={mazeColor.color}
        />
      </mesh>
      <mesh geometry={nodes.glass.geometry}>
        <MeshTransmissionMaterial
          roughness={.15}
          thickness={0.025}
          color={glassColor.color}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/ballMaze.gltf')

export default BallMaze;