import { useRef, useMemo, useEffect } from "react";
import {
  useCursor,
  useScroll,
  useFBX,
  Center,
  useFBO,
  useGLTF,
} from "@react-three/drei";
import { useFrame, extend, useThree, createPortal } from "@react-three/fiber";
import { PlaneGeometry } from "three/src/geometries/PlaneGeometry.js";
import useRefs from "react-use-refs";
import { Color } from "three/src/math/Color";
import SimulationMaterial from "./simulationMaterial";
import fragmentShader from "../shaders/fragmentShader";
import vertexShader from "../shaders/vertexShader";

import {
  RGBAFormat,
  FloatType,
  NearestFilter,
  AdditiveBlending,
} from "three/src/constants";
import { Scene } from "three/src/scenes/Scene";
import { OrthographicCamera } from "three/src/cameras/OrthographicCamera.js";
import { randInt, randFloat } from "three/src/math/MathUtils";
import { BufferAttribute } from "three/src/core/BufferAttribute";
import Loader from "../loader";

extend({ SimulationMaterial });

const FboParticles = ({ isMobile, size = 72 }) => {
  /**
   * models
   */
  //   text model
  const modelObj = useFBX(["man.fbx", "people.fbx"]);
  const { nodes } = useGLTF("font.gltf");
  //   humen model

  /**
   * Particles options
   */

  // This reference gives us direct access to our points
  const points = useRef();
  const simulationMaterialRef = useRef();

  // Create a camera and a scene for our FBO
  // Create a simple square geometry with custom uv and positions attributes
  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1);
  const positions = new Float32Array([
    -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0,
  ]);
  const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]);

  // Create our FBO render target
  const renderTarget = useFBO(size, size, {
    minFilter: NearestFilter,
    magFilter: NearestFilter,
    format: RGBAFormat,
    stencilBuffer: false,
    type: FloatType,
  });

  // Generate a "buffer" of vertex of size "size" with normalized coordinates
  const particlesPosition = useMemo(() => {
    const length = size * size;
    const particles = new Float32Array(length * 3);
    for (let i = 0; i < length; i++) {
      let i3 = i * 3;
      particles[i3 + 0] = (i % size) / size;
      particles[i3 + 1] = i / size / size;
    }
    return particles;
  }, [size]);

  const uniforms = useMemo(
    () => ({
      uPositions: {
        value: null,
      },
      uMobile: {
        value: 1,
      },
      uPixelRatio: {
        value: Math.min(window.devicePixelRatio, 2),
      },
      vColor: {
        value: 0,
      },
    }),
    []
  );

  //   FBO useFrame
  useFrame((state) => {
    const { gl, clock } = state;

    gl.setRenderTarget(renderTarget);
    gl.clear();
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    points.current.material.uniforms.uPositions.value = renderTarget.texture;
    simulationMaterialRef.current.uniforms.uTime.value = clock.elapsedTime;
  });

  const { viewport } = useThree();

  useEffect(() => {
    // simulation
    const leng = size * size * 4;
    const angle = new Float32Array(leng);

    for (let i = 0; i < leng; i++) {
      angle[i] = Math.random() * Math.PI;
    }

    // points
    const pointLen = size * size * 3;
    const scale = new Float32Array(pointLen);
    const color = new Color();
    const aColor = new Float32Array(pointLen * 3);
    var q = ["white", "white", 0x2675ad, 0x0b5394, 0x0b9490];

    for (let i = 0; i < pointLen; i++) {
      const i3 = i * 3;

      //   color
      color.set(q[randInt(0, 4)]);
      aColor[i3 + 0] = color.r;
      aColor[i3 + 1] = color.g;
      aColor[i3 + 2] = color.b;

      //   particles scale
      scale[i] = Math.random() * 40;
    }

    // simuation uniform
    simulationMaterialRef.current.uniforms.angle.value = angle;

    // points attributes
    points.current.geometry.setAttribute(
      "color",
      new BufferAttribute(aColor, 3)
    );
    points.current.geometry.setAttribute(
      "aScale",
      new BufferAttribute(scale, 1)
    );
  }, []);

  /**
   * mouse event
   */
  //  plane geo for mouse event
  const hoveredRef = useRef();
  const planeGeo = useMemo(() => {
    return new PlaneGeometry(viewport.width, viewport.height, 1, 1);
  }, []);

  /**
   * scroll
   */

  const scroll = useScroll();

  //   scroll animation

  return (
    <>
      <mesh
        position={[0, 0, 0]}
        onPointerOver={(e) => (
          e.stopPropagation(), (hoveredRef.current = true)
        )}
        onPointerOut={(e) => (hoveredRef.current = false)}
        visible={false}
        geometry={planeGeo}
      />
      {/* <Center> */}
      {/* Render off-screen our simulation material and square geometry */}
      {createPortal(
        <mesh>
          <simulationMaterial
            ref={simulationMaterialRef}
            args={[size, scroll, viewport, nodes, modelObj]}
          />
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-uv"
              count={uvs.length / 2}
              array={uvs}
              itemSize={2}
            />
          </bufferGeometry>
        </mesh>,
        scene
      )}

      <points
        ref={points}
        scale={[viewport.width / 18, viewport.width / 18, 1]}
      >
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <shaderMaterial
          blending={AdditiveBlending}
          depthWrite={false}
          //   transparent={true}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </points>
    </>
  );
};

export default FboParticles;

useGLTF.preload("font.gltf");
